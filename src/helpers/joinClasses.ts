import type { ClassNameType, NestedArrayType } from '@types';
import { MULTIPLE_WHITESPACE } from '@constants/regex';

const joinClasses = <T = ClassNameType>(...className: NestedArrayType<T>): string => className.flat()
	.join(' ')
	.replace(MULTIPLE_WHITESPACE, ' ')
	.trim();

export default joinClasses;
