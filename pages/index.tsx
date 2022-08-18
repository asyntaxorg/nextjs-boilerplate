import { APP } from '@constants';
import Head from 'next/head';
import type { NextPage } from 'next';
import React from 'react';
import View from '@views/Home';

const Home: NextPage = () => (
	<React.Fragment>
		<Head>
			<title>{APP.NAME}</title>
			<meta content="This is a boilerplate on top of Next.js framework." name="description" />
		</Head>
		<View />
	</React.Fragment>
);

export default Home;
