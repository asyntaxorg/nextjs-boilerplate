/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	ChildrenType,
	ClassNameType,
	RefType,
} from '@types';
import {
	Element,
	Region,
} from '@components';
import { HTML_TAGS } from '@constants/components';
import React from 'react';
import stylesheet from './stylesheet.module.scss';

type Props = {
	children: ChildrenType;
	className?: ClassNameType;
	hidden?: boolean;
	ref?: RefType;
}

type ComponentProps = {
	classNames?: {
		aside?: ClassNameType;
		background?: ClassNameType;
		banner?: ClassNameType;
		basket?: ClassNameType;
		drawer?: ClassNameType;
		featured?: ClassNameType;
		footer?: ClassNameType;
		header?: ClassNameType;
		main?: ClassNameType;
		notification?: ClassNameType;
		root?: ClassNameType;
	};
}

type SubComponents = {
	Aside?: React.FC<Props>;
	Background?: React.FC<Props>;
	Banner?: React.FC<Props>;
	Basket?: React.FC<Props>;
	Drawer?: React.FC<Props>;
	Featured?: React.FC<Props>;
	Footer?: React.FC<Props>;
	Header?: React.FC<Props>;
	Main?: React.FC<Props>;
	Notification?: React.FC<Props>;
};

const REGIONS: Record<string, string> = {
	ASIDE: 'Aside',
	BACKGROUND: 'Background',
	BANNER: 'Banner',
	BASKET: 'Basket',
	DRAWER: 'Drawer',
	FEATURED: 'Featured',
	FOOTER: 'Footer',
	HEADER: 'Header',
	MAIN: 'Main',
	NOTIFICATION: 'Notification',
};

const Default: React.FC<Props & ComponentProps> & SubComponents = ({
	children,
	className,
	classNames,
}): any => (
	<Element
		className={[
			stylesheet.root
		]}
	>
		{/* REGION: HEADER */}
		<Region
			className={[stylesheet.header, stylesheet.column]}
			name={REGIONS.HEADER}
			reference={children}
			tag={HTML_TAGS.HEADER}
		/>
		<div className={stylesheet.row}>
			{/* REGION: ASIDE */}
			<Region
				className={[stylesheet.aside, stylesheet.column]}
				name={REGIONS.ASIDE}
				reference={children}
				tag={HTML_TAGS.ASIDE}
			/>
			{/* REGION: MAIN */}
			<Region
				className={[stylesheet.main, stylesheet.column]}
				name={REGIONS.MAIN}
				reference={children}
				tag={HTML_TAGS.MAIN}
			/>
		</div>
		{/* REGION: FOOTER */}
		<Region
			className={[stylesheet.footer, stylesheet.column]}
			name={REGIONS.FOOTER}
			reference={children}
			tag={HTML_TAGS.FOOTER}
		/>
	</Element>
);

Object.values(REGIONS).forEach((x) => {
	Default[x] = x;
});

export default Default;
