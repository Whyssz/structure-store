import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type TypeOut = {
	ref: any;
	isShow: boolean;
	setIsShow: Dispatch<SetStateAction<boolean>>;
};

/* 
	Personal Hook
	Hide element when click outside
*/
export const useOutside = (initialIsVisible: boolean): TypeOut => {
	const [isShow, setIsShow] = useState(initialIsVisible);
	const ref = useRef<HTMLElement>(null);

	const handleClickOutside = (event: MouseEvent | TouchEvent) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
	return { ref, isShow, setIsShow };
};

// const {ref, isShow, setIsShow} = useOutside(false)
