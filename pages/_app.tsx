import '@styles/index.scss';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
	<div className="root">
		<Component {...pageProps} />
	</div>
);

export default App;
