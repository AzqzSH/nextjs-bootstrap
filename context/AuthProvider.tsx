import axios from 'axios';
import React from 'react';

interface AuthProviderProps {}

type UserType =
	| {
			role: 'Doctor' | 'Pharmacy';
			[x: string]: any;
	  }
	| undefined;

interface AuthContextType {
	user: UserType;

	loading: boolean;
	error: any;
}

export const AuthContext = React.createContext<AuthContextType>({
	user: undefined,
	loading: false,
	error: undefined,
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = React.useState<UserType>(undefined);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(undefined);

	const fetchUser = async () => {
		setLoading(true);

		try {
			const res = await axios('https://randomuser.me/api');

			if (!res.data) throw new Error();

			setUser({
				role: 'Pharmacy',
				...(res.data as any).results[0],
			});
		} catch (error: any) {
			setError(error);
			setUser(undefined);
		}

		setLoading(false);
	};

	React.useEffect(() => {
		fetchUser();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				error,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
