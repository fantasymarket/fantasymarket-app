import UserStore from "api/user"
import TransportLayer from 'api/transport';
import { AsyncTrunk } from 'mobx-sync';
import { observable, reaction, toJS, when } from "mobx";
import UserTransport, { mockCreate, sampleUser } from "api/transport/__mocks__/user";

jest.mock('api/transport/user');


export const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyMzkwMjJ9.4Adcj3UFYzPUVaVF43FmMab6RlaQD8A9V8wFzzht-KQ'

describe("the user store works", () => {
	let cleanup = []

	const createUserStore = () => {
		const cfg = observable.map({
			hydrated: false,
		});

		const transportLayer = new TransportLayer({ cfg })
		const userStore = new UserStore({ transportLayer, cfg, stores: {} });

		cleanup.push(userStore.cleanup)
		return userStore
	}

	const hydrateStore = (store, setHydrated = true) => new AsyncTrunk(store, {
		storage: localStorage,
		delay: 0,
		storageKey: "user",
	}).init().then(() => { if (setHydrated) store.hydrated = true })


	beforeAll(() => {
		process.browser = true;
	})

	beforeEach(() => {
		jest.clearAllMocks()
		localStorage.clear()
	})

	afterAll(() => {
		cleanup.forEach(f => f())
	})

	it("should save to localstorage", async () => {
		expect.assertions(2);
		const store = createUserStore()

		expect(store.hydrated).toEqual(false)
		await hydrateStore(store, false)

		expect(JSON.parse(localStorage.__STORE__["user"])).toMatchObject({
			firstLoad: true,
			authenticated: false,
		})
	})

	it("should create a new user on the first load", async () => {
		const store = createUserStore()
		expect(store.firstLoad).toEqual(true)
		expect(store.hydrated).toEqual(false)

		await hydrateStore(store)
		expect(store.hydrated).toEqual(true)

		await when(() => !store.firstLoad)
		expect(store).toMatchObject({
			firstLoad: false,
			authenticated: true,
			user: sampleUser,
		});
		expect(store.req.user.create).toHaveBeenCalled()

	}, 2000)

	it("should logout the user when he calls logout", async () => {
		const store = createUserStore()
		await hydrateStore(store)
		await when(() => store.authenticated)

		store.logout()
		await when(() => !store.authenticated)

		expect(store.authenticated).toBe(false)
		expect(store.token).toBe("")
		expect(store.pastUsernames).toEqual([sampleUser.username])

	})

	it("should logout the user when the token is expired", async () => {
		const store = createUserStore()
		await hydrateStore(store)
		await when(() => store.authenticated)

		store.token = expiredToken;

		await when(() => !store.authenticated)
		expect(store.authenticated).toBe(false)
	})
})
