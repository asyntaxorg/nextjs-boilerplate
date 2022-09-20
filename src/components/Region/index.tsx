import type {
	ChildrenType,
	ClassNameType,
	ObjectType,
	RefType,
} from '@types';
import React, { forwardRef, useMemo } from 'react';
import _isArray from 'lodash/isArray';
import _isNil from 'lodash/isNil';
import { createRegion } from '@helpers';
import Element from '../Element';

type Props = {
	children?: ChildrenType;
	className?: ClassNameType;
	hidden?: boolean;
	name: string;
	ref?: RefType;
	reference: ChildrenType;
	style?: ObjectType;
	tag?: string;
};

const render = ({
	children,
	className,
	index,
	hidden,
	name,
	ref,
	region,
	style,
	tag,
}: {
	children?: ChildrenType,
	className?: ClassNameType,
	index?: number,
	hidden?: boolean,
	name: string,
	ref?: RefType,
	region: any,
	style?: ObjectType,
	tag?: string,
}) => (
	<Element
		className={[
			className,
			region?.className,
		]}
		hidden={_isNil(region) || hidden || region?.hidden}
		ref={ref}
		style={style}
		tag={tag || region?.tag}
		{...(
			!_isNil(index)
				? { key: `${name}-${index}` }
				: {}
		)}
	>
		{children}
		{region?.children}
	</Element>
);

const namespace = 'Region';

const Region: React.FC<Props> = forwardRef(({
	children,
	className,
	hidden,
	name,
	reference,
	style,
	tag,
}, ref?: RefType) => {
	const region = useMemo(() => createRegion(reference, name), [name, reference]);

	if (_isArray(region) && region.length) {
		return (
			<React.Fragment>
				{
					region.map((sub, index) => render({
						children,
						className,
						hidden,
						index,
						name,
						ref,
						region: sub,
						style,
						tag,
					}))
				}
			</React.Fragment>
		);
	}

	return render({
		children,
		className,
		hidden,
		name,
		ref,
		region,
		style,
		tag,
	});
});

Region.displayName = namespace;

export default Region;
