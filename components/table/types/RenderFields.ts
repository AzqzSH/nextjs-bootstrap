export interface RenderFields<T> {
	[x: string]: {
		label?: string;
		render: (data: T) => React.ReactNode;
	};
}
