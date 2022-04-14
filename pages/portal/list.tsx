import React from 'react';
import Table from '@components/table';
import withAuth from '@components/withAuth';
import data2 from 'mock.json';
import { getAge } from '@utils/helpers/getAge';
import { useApi } from '@utils/hooks/useApi';
import { AuthPage } from '@utils/types/next-page';

const List: AuthPage = ({ user }) => {
	const [data, setData] = React.useState(data2);

	const { data: items } = useApi<{
		total: number;
		entry: {
			fullUrl: string;
			resource: {
				id: string;
				name?: {
					family: string;
					given?: string[];
					use?: string;
				}[];
				gender?: string;
				birthDate?: string;
			};
		}[];
	}>(
		'https://try.smilecdr.com/baseR4?_getpages=9951b960-d296-42a8-92ec-02cdb44d0a2e&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=searchset'
	);

	console.log(user);

	return (
		<Table
			data={data}
			title="My Patients"
			headers={{
				dob: 'Date Of Birth',
			}}
			renderFields={{
				name: {
					label: 'Full Name',
					render: ({ fname, lname }) =>
						`${fname.toString()} ${lname.toString()}`,
				},
				age: {
					label: 'Age',
					render: ({ dob }) => getAge(dob as string),
				},
			}}
			paginated
			totalCount={data.length}
			onSearch={(value) => {
				const fields: (keyof typeof data[0])[] = ['fname', 'lname'];

				setData(
					data2.filter((item) => {
						const condition = fields.some((field) =>
							item[field]
								.toString()
								.toLowerCase()
								.includes(value.toLowerCase())
						);

						return condition;
					})
				);
			}}
			expandable
			renderContent={({ email }) => <>{email}</>}
			TableEmptyComponent={
				<div className="font-medium text-lg">No Patients Found</div>
			}
		/>
	);
};

export default withAuth(List);
