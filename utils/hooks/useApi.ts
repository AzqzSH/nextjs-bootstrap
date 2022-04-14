import useSWR from 'swr';

interface ApiResponse<T> {
	data: T | null;
	loading: boolean;
	error: any;
	refetch: () => void;
	[x: string]: any;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useApi<Type>(
	url: string,
	intitialState?: Type
): ApiResponse<Type> {
	const { data, error, isValidating, mutate } = useSWR<Type, any>(
		[url],
		fetcher
	);

	if (intitialState && isValidating) {
		return {
			data: intitialState,
			loading: true,
			error,
			refetch: () => {},
		};
	}

	return {
		data: data as Type,
		loading: isValidating,
		error,
		refetch: () => mutate(),
	};
}
