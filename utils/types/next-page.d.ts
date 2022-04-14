import { NextPage } from 'next';
import React, { ReactElement, ReactNode } from 'react';
import { User } from './User';

type NextPageWithLayout<T> = NextPage<T> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AuthPage = NextPageWithLayout<{
	user: User;
}>;
