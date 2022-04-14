import { RenderFields } from '../../table/types/RenderFields';

export interface ContentProps<T>
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	title?: string;
	subtitle?: string;
	data: T;
	loading?: boolean;
	renderFields: RenderFields<T>;
	actionComponent?: React.ReactNode;
}
