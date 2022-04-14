import { Route } from './types/Route';
import { UserIcon, TemplateIcon } from '@heroicons/react/outline';

export const defaultRoutes: Route[] = [
	{
		default: true,
		key: 'list',
		label: 'List',
		href: '/portal/list',
		Icon: (props) => <UserIcon {...props} />,
	},
	{
		default: true,
		key: 'account',
		label: 'Account',
		href: '/portal/account',
		Icon: (props) => <UserIcon {...props} />,
	},
];

export const routes = {
	default: defaultRoutes,
};
