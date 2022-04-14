import SidebarLayout from '@layout/SidebarLayout';
import { routes } from '@utils/routes';
import type { AuthPage } from '@utils/types/next-page';
import type { NextPageContext } from 'next';

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function withAuth(Component: AuthPage): AuthPage {
	const withAuth: AuthPage = (props: any) => {
		return <Component {...props} />;
	};

	withAuth.getLayout = (page) => {
		return <SidebarLayout routes={routes.default}>{page}</SidebarLayout>;
	};

	withAuth.getInitialProps = async ({ req, res }: NextPageContext) => {
		await sleep(200);
		// fetch user

		const isAuth = true;

		if (!isAuth) {
			res?.writeHead(500, { location: '/login' });
			res?.end();
		}

		const user = {
			username: 'Hello Me!',
		};

		return {
			user,
		};
	};

	return withAuth;
}

export default withAuth;
