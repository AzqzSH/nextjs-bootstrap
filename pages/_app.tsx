import type { AppProps } from 'next/app';
import '../styles.css';
import AuthProvider from '../context/AuthProvider';
import { NextPageWithLayout } from '@utils/types/next-page';
import { MantineProvider } from '@mantine/core';

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout<any>;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return getLayout(
		<MantineProvider>
			<AuthProvider>
				<Component {...pageProps} />{' '}
			</AuthProvider>
		</MantineProvider>
	);
}
export default MyApp;
