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
		<div>
			{text}
			{children}
			<Template>
				<Template.Header>
					Header Region
				</Template.Header>
				<Template.Main>
					Main Region
				</Template.Main>
				<Template.Footer>
					Footer Region
				</Template.Footer>
			</Template>
		</div>
	);
};

export default Home;
