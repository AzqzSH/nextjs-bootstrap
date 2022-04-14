import { RenderFields } from './RenderFields';

type PartialRecord<K extends keyof any, T> = {
	[P in K]?: T;
};

//Begin Table

//#region Table
type TableHeaders<T> = PartialRecord<keyof T, string>;

interface BaseTableProps<T> {
	data: T[];
	headers?: TableHeaders<T>;
	title?: string;
	renderFields?: RenderFields<T>;
	onSearch?: (value: string) => void;
	TableEmptyComponent?: React.ReactNode;
	TableLoadingComponent?: React.ComponentType;
	isLoading?: boolean;
}

interface PaginatedTable {
	paginated: true;
	rowsPerPage?: number;
	totalCount: number;
}

interface NonPaginatedTable {
	paginated?: false;
	rowsPerPage?: never;
	totalCount?: never;
}

interface ExpandableTable<T> {
	expandable: true;
	renderContent: (item: T, isVisible: boolean) => React.ReactChild;
}

interface NonExpandableTable {
	expandable?: false;
	renderContent?: never;
}

type PaginatedTableProps = PaginatedTable | NonPaginatedTable;
type ExpandableTableProps<T> = ExpandableTable<T> | NonExpandableTable;

export type TableProps<T> = PaginatedTableProps &
	ExpandableTableProps<T> &
	BaseTableProps<T>;
//#endregion

// End Table

// <----------------------------------> //

//Begin Pagination

//#region Pagination
export interface PaginationProps {
	page: number;
	rowsPerPage: number;
	totalCount: number;
	onNext: () => void;
	onBack: () => void;
}
//#endregion

//End Pagination

// <----------------------------------> //

//Begin Row

//#region Row
interface BaseRowProps<T> {
	columns: T;
	key: number;
}

interface ExpandableRow<T> extends BaseRowProps<T> {
	expandable: true;
	isExpanded?: boolean;
	renderContent: React.ReactNode;
	onClick?: (item: T) => void;
}

interface NonExpandableRow<T> extends BaseRowProps<T> {
	expandable?: false;
	isExpanded?: never;
	renderContent?: never;
	onClick?: never;
}

type RowProps<T> = ExpandableRow<T> | NonExpandableRow<T>;
//#endregion

//End Row
