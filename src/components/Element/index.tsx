import type { ChildrenType, ClassNameType, RefType } from '@types';
import React, {
	createElement,
	forwardRef
} from 'react';
import { joinClasses } from '@helpers';
import stylesheet from './style.module.scss';

type Props = {
	children: ChildrenType;
	className?: ClassNameType;
	displayName?: string;
	hidden?: boolean;
	invisible?: boolean;
	loading?: boolean;
	tag?: keyof JSX.IntrinsicElements;
	type?: string;
} & React.ComponentPropsWithoutRef<any>;

const Element = forwardRef<RefType, Props>(({
	children,
	className,
	hidden,
	invisible,
	loading,
	tag,
	type,
	...other
}, ref?: RefType): JSX.Element => {
	if (hidden) {
		return null;
	}

	const props = {
		className: joinClasses([
			invisible && stylesheet.invisible,
			loading && stylesheet.loading,
			stylesheet.root,
			...Array.isArray(className) ? className : [className]
		]),
		ref,
		type,
		...other,
	};

	if (tag === 'img' || tag === 'input') {
		return createElement(tag, props);
	}

	return createElement(
		tag,
		props,
		children,
	);
});

Element.defaultProps = {
	tag: 'div',
};

Element.displayName = 'Element';

export default Element;
