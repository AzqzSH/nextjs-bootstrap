import React from 'react';

interface PaginatedData {
	paginated: true;
	rowsPerPage: number;
	totalCount: number;
}

interface SimpleData {
	paginated?: false;
	rowsPerPage?: number;
	totalCount?: number;
}

type Options = PaginatedData | SimpleData;

export function useTable<T>(data: T[], options: Options) {
	const [page, setPage] = React.useState(0);

	const useData = React.useMemo(() => {
		if (!options.paginated) return data;

		const { rowsPerPage } = options;

		return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
	}, [data, page, options.totalCount, options.rowsPerPage]);

	const emptyRows = React.useMemo(() => {
		if (!options.paginated) return 0;

		const { rowsPerPage, totalCount } = options;

		return page > 0
			? Math.max(0, (1 + page) * rowsPerPage - totalCount)
			: 0;
	}, [page, options]);

	const onNext = (callback?: () => void) => {
		if (!options.paginated) return;

		const { rowsPerPage, totalCount } = options;

		if (page < Math.floor(totalCount / rowsPerPage)) {
			setPage((curr) => curr + 1);
			callback && callback();
		}
	};

	const onBack = (callback?: () => void) => {
		if (!options.paginated) return;

		if (page > 0) {
			setPage((curr) => curr - 1);
			callback && callback();
		}
	};

	return {
		page,
		useData,
		emptyRows,
		onNext,
		onBack,
		reset: () => setPage(0),
	};
}
