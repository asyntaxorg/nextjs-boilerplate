import type { ClassNameType, NestedArrayType } from '@types';
import { flattenDeep } from '@helpers';
import { MULTIPLE_WHITESPACE } from '@constants/regex';

const joinClasses = <T = ClassNameType>(...className: NestedArrayType<T>): string => flattenDeep(className)
	.join(' ')
	.replace(MULTIPLE_WHITESPACE, ' ')
	.trim();

export default joinClasses;
