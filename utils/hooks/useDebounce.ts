import { debounce } from 'lodash';
import React from 'react';

export const useDebounce = (callback: any, delay: number) => {
	const callbackRef = React.useRef();

	callbackRef.current = callback;

	return React.useCallback(
		debounce((...args) => (callbackRef.current as any)(...args), delay),
		[]
	);
};
