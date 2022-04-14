import axios from 'axios';
import React from 'react';

export const useApiLazy = <T>(url: string) => {
	const [data, setData] = React.useState<T>({} as T);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState<any>(undefined);

	const loadData = async () => {
		setLoading(true);
		try {
			const res = await axios(url);

			setData(res.data as T);

			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	return { data, loading, error, loadData };
};
