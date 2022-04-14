import React from 'react';
import { ContentProps } from './types';

const Content = <T extends {}>({
	data,
	title,
	subtitle,
	loading,
	renderFields,
	actionComponent,
	...props
}: ContentProps<T>) => {
	const renderField = React.useCallback(
		(field: keyof typeof renderFields) => {
			if (!renderFields) return '';

			return renderFields[field].render(data);
		},
		[renderFields, data]
	);

	return (
		<div
			className={`mx-0 bg-white transition-all ease-in duration-150 mb-4 ${props.className}`}
		>
			<div className="px-4 py-5 sm:px-6 flex justify-between">
				<div>
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						{title}
					</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">
						{subtitle}
					</p>
				</div>
				{actionComponent}
			</div>
			<div className="border-t border-gray-200">
				{loading ? (
					<div className="rounded-md p-4 max-w-3xl w-full ">
						<div className="animate-pulse flex space-x-4">
							<div className="flex-1 space-y-4 py-1">
								<div className="h-6 bg-gray-300 rounded w-full"></div>
								<div className="h-6 bg-gray-300 rounded w-full"></div>
								<div className="h-6 bg-gray-300 rounded w-full"></div>
								<div className="h-6 bg-gray-300 rounded w-full"></div>
								<div className="h-6 bg-gray-300 rounded w-full"></div>
								<div className="h-6 bg-gray-300 rounded w-full"></div>
							</div>
						</div>
					</div>
				) : (
					<dl>
						{Object.keys(renderFields).map((field, idx) => (
							<div
								key={idx}
								className={`bg-${
									idx % 2 === 0 ? 'gray-50' : 'white'
								} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
							>
								<dt className="text-sm font-medium text-gray-500">
									{renderFields[
										field as keyof typeof renderFields
									].label || field.toUpperCase()}
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									{renderField(field)}
								</dd>
							</div>
						))}
					</dl>
				)}
			</div>
		</div>
	);
};

export default Content;
