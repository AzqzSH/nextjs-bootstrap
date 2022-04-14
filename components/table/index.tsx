import React from 'react';
import Pagination from './Pagination';
import { useDebounce } from '../../utils/hooks/useDebounce';
import TableRow from './TableRow';
import { useTable } from '../../utils/hooks/useTable';
import { TableProps } from './types';

function objectKeys(obj: {}) {
	return Object.keys(obj).map((key) => key);
}

export default function Table<T>({
	data,
	headers,
	title,
	paginated,
	totalCount,
	rowsPerPage = 10,
	onSearch,
	expandable,
	renderContent,
	TableEmptyComponent,
	TableLoadingComponent,
	isLoading,
	renderFields,
}: TableProps<T>) {
	const [expandedRow, setExpandedRow] = React.useState<
		number | undefined | null
	>(null);

	const { page, onNext, onBack, emptyRows, useData, reset } = useTable(data, {
		paginated: paginated ? true : false,
		totalCount: totalCount ? totalCount : 10,
		rowsPerPage,
	});

	const getRowData = React.useCallback(
		(row: T) => {
			let cols: any = {};

			if (renderFields) {
				objectKeys(renderFields).forEach((renderField) => {
					cols[renderField] = renderFields[renderField].render(row);
				});
			}

			headers &&
				Object.keys(headers).map((header) => {
					cols[header as keyof T] = row[header as keyof T];
				});

			return cols as T;
		},
		[data, renderContent]
	);

	const renderHeaders = React.useMemo(() => {
		let _headers: string[] = [];

		if (renderFields) {
			objectKeys(renderFields).map((newField) => {
				_headers.push(
					renderFields[newField].label || newField.toUpperCase()
				);
			});
		}

		headers &&
			objectKeys(headers).forEach((header) =>
				_headers.push(headers[header as keyof typeof headers] as string)
			);

		return _headers.map((header) => (
			<th
				key={header}
				scope="col"
				className="px-3 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider"
			>
				{header}
			</th>
		));
	}, []);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleSearch(e.target.value);
	};

	const handleSearch = useDebounce((value: string) => {
		if (onSearch) {
			setExpandedRow(null);
			onSearch(value);
			reset();
		}
	}, 200);

	return (
		<>
			<div className="w-full bg-white font-bold text-xl flex flex-col  border-b border-gray-200  ">
				<span className="w-full border-b px-6 py-2 border-gray-200">
					{title}
				</span>
				{onSearch && (
					<span className="mx-2  my-2">
						<input
							className="border bg-white lg:w-64 w-full border-gray-300 h-8 px-3 rounded-xl text-sm focus:outline-none focus:border-gray-400 "
							type="search"
							name="search"
							placeholder="Search By Name..."
							onChange={handleSearchChange}
						/>
					</span>
				)}
			</div>
			<table className="w-full divide-y-4 divide-gray-100 table-auto">
				<thead className="bg-white  ">
					<tr>
						{renderHeaders}

						<th
							scope="col"
							className="py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
						/>
					</tr>
				</thead>
				<tbody className="bg-white  divide-gray-100 w-full ">
					{useData.map((row, key) =>
						expandable ? (
							<TableRow
								columns={getRowData(row)}
								key={key}
								isExpanded={expandedRow === key}
								expandable={true}
								renderContent={
									renderContent &&
									(renderContent(
										row,
										expandedRow === key
									) as React.ReactNode)
								}
								onClick={() => {
									if (expandedRow === key)
										setExpandedRow(null);
									else {
										setExpandedRow(key);
									}
								}}
							/>
						) : (
							<TableRow columns={getRowData(row)} key={key} />
						)
					)}
				</tbody>

				{emptyRows > 0 && (
					<div
						style={{
							height: 48 * emptyRows,
							backgroundColor: 'transparent',
						}}
					/>
				)}
			</table>

			{TableLoadingComponent && isLoading && (
				<div className="w-full flex justify-center h-32 items-center bg-white my-1 mb-3">
					{TableLoadingComponent}
				</div>
			)}
			{totalCount === 0 && !isLoading && (
				<div className="w-full flex justify-center h-32 items-center bg-white my-1 mb-3">
					{TableEmptyComponent}
				</div>
			)}

			{paginated && typeof totalCount === 'number' ? (
				<Pagination
					page={page}
					totalCount={totalCount}
					rowsPerPage={rowsPerPage}
					onNext={() => onNext(() => setExpandedRow(null))}
					onBack={() => onBack(() => setExpandedRow(null))}
				/>
			) : (
				<></>
			)}
		</>
	);
}
