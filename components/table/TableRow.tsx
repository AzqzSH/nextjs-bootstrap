import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React from 'react';
import AnimateHeight from 'react-animate-height';
import { RowProps } from './types';

export default function TableRow<T>({
	columns,
	isExpanded,
	onClick,
	expandable,
	renderContent,
	key,
}: RowProps<T>) {
	return (
		<React.Fragment key={key}>
			<tr
				onClick={
					onClick && expandable
						? () => {
								onClick(columns);
						  }
						: () => {}
				}
				className={`bg-${
					key % 2 === 0 ? 'gray-50' : 'white'
				} transition-all ease-in duration-400 ${
					expandable && onClick
						? 'hover:bg-gray-200 cursor-pointer active:bg-gray-300'
						: ''
				} ${isExpanded ? 'shadow-none' : 'shadow-none z-50'}`}
			>
				{Object.keys(columns).map((columnKey) => (
					<td className="px-4 py-3 whitespace-nowrap" key={columnKey}>
						<div className="text-sm text-left font-medium text-gray-900">
							{columns[columnKey as keyof T]}
						</div>
					</td>
				))}

				<td className=" py-2 whitespace-nowrap text-right text-sm font-medium">
					{expandable && (
						<div className="text-green-400 text-right items-end flex justify-end">
							{isExpanded ? (
								<ChevronUpIcon className="w-6 h-6" />
							) : (
								<ChevronDownIcon className="w-6 h-6" />
							)}
						</div>
					)}
				</td>
			</tr>

			<tr className={` h-auto w-full bg-gray-100`}>
				<td colSpan={Object.keys(columns).length + 1}>
					<AnimateHeight
						height={isExpanded ? 'auto' : 0}
						duration={400}
					>
						{renderContent}
					</AnimateHeight>
				</td>
			</tr>
		</React.Fragment>
	);
}
