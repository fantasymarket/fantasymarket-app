import React from 'react';

import { Modal, ModalActions } from '@components/modal';
import Button from '@components/ui/button';

export default {
	component: Modal,
	title: 'Modal Component',
	decorators: [],
};

export const withModal = () => (
	<Modal>
		<h1>Modal Test</h1>
	</Modal>
);

export const withActions = () => (
	<Modal>
		<h1>Modal Test</h1>
		<br />
		<br />
		<ModalActions>
			<Button>Test</Button>
			<Button primary>Test2</Button>
		</ModalActions>
	</Modal>
);
