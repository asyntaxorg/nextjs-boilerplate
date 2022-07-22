import Head from 'next/head';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => (
	<React.Fragment>
		<Head>
			<title>Next.JS Boilerplate</title>
			<meta content="This is a boilerplate on top of Next.js framework." name="description" />
		</Head>
		<div>
			Next.js Boilerplate
		</div>
	</React.Fragment>
);

export default Home;
