import React from 'react';

interface RouteProps {
	key: string;
	label: string;
	Icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

type DefaultRoute = {
	default: true;
	href: string;
	subRoutes?: never;
};

type NestedRoute = {
	default?: false;
	href?: never;
	subRoutes: Route[];
};

type RouteOptions = DefaultRoute | NestedRoute;

export type Route = RouteProps & RouteOptions;
