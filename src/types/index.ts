import {
	COLORS,
	GRID_VALUES,
	HTML_INPUT_TYPES,
	SIZES,
} from '@constants/components';
import React, {
	MouseEventHandler,
	ReactNode,
	Ref,
	RefObject,
} from 'react';

export type NestedArrayType<T> = Array<T> | Array<NestedArrayType<T>>;

export type ClassNameType = string;

export type ClickEventType = MouseEventHandler<HTMLButtonElement> | (() => void);

export type ChangeEventType = React.ChangeEvent<HTMLInputElement> | (() => void);

export type ScrollEventType = React.UIEvent<HTMLDivElement> | ((event?: any) => void);

export type ChildrenType = JSX.Element | ReactNode;

export type NodeType = ReactNode;

export type AdornmentsType = {
	start?: ChildrenType[];
	end?: ChildrenType[];
};

const GRID_VALUES_ARR = Object.values(GRID_VALUES);
export type GridValueType = typeof GRID_VALUES_ARR[number];

const SIZES_ARRAY = Object.values(SIZES);
export type SizeType = typeof SIZES_ARRAY[number];

export type HTMLTagType = keyof JSX.IntrinsicElements;

const HTML_INPUT_TYPES_ARRAY = Object.values(HTML_INPUT_TYPES);
export type HTMLInputType = typeof HTML_INPUT_TYPES_ARRAY[number];

const COLORS_ARRAY = Object.values(COLORS);
export type ColorType = typeof COLORS_ARRAY[number];

export type ObjectType<T = string> = {
	[key: string]: T;
};

export type RefType = Ref<any> | RefObject<any> | any | ObjectType;

export type StyleType = Record<string, number | string>;
