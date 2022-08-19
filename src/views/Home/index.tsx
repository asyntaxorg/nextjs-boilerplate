/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ChildrenType } from '@types';
import React from 'react';
import Template from '@templates/Default';

type Props = {
	children?: ChildrenType;
};

const Home: React.FC<Props> = ({
	children,
}): JSX.Element => {
	const text = 'Home View';

	return (
		<Template>
			<Template.Header>
				Header Region
			</Template.Header>
			<Template.Aside>
				Aside Region
			</Template.Aside>
			<Template.Main>
				Main Region
			</Template.Main>
			<Template.Footer>
				Footer Region
			</Template.Footer>
		</Template>
	);
};

export default Home;
