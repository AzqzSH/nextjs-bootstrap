import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { ActionIcon } from '@mantine/core';
import React, { useMemo } from 'react';
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
	onBack,
	onNext,
	page,
	rowsPerPage,
	totalCount,
}) => {
	const isFirst = useMemo(() => {
		if (page === 0) return true;
		else return false;
	}, [page, rowsPerPage, totalCount]);

	const isLast = useMemo(() => {
		if (page * rowsPerPage + rowsPerPage >= totalCount) return true;
		else return false;
	}, [page, totalCount, rowsPerPage]);

	const getCurrentShowings = useMemo(() => {
		if (totalCount === 0) {
			return '0-0 of 0';
		} else if (page * rowsPerPage + rowsPerPage < totalCount) {
			return `${page * rowsPerPage + 1}-${
				page * rowsPerPage + rowsPerPage
			} of ${totalCount}`;
		} else {
			return `${page * rowsPerPage + 1}-${totalCount} of ${totalCount}`;
		}
	}, [page, totalCount, rowsPerPage]);

	return (
		<div className="w-full py-4 my-2 bg-white flex flex-row justify-end items-center gap-8">
			<span className="font-medium ">{getCurrentShowings}</span>
			<div className="w-32 flex flex-row gap-4">
				<ActionIcon onClick={() => onBack()} disabled={isFirst}>
					<ChevronLeftIcon className="w-8 h-8" />
				</ActionIcon>
				<ActionIcon onClick={() => onNext()} disabled={isLast}>
					<ChevronRightIcon className="w-8 h-8 " />
				</ActionIcon>
			</div>
		</div>
	);
};

export default Pagination;
