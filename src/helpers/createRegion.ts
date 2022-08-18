import _isNil from 'lodash/isNil';
import flattenDeep from './flattenDeep';

const createRegion = (children: any, name: string) => {
	if (_isNil(name) || _isNil(children)) {
		return [];
	}

	// FLATTEN ALL ROOT AND NESTED OBJECTS
	const newChildren = flattenDeep(children);

	const child = newChildren.filter((x: Record<string, any>) => x?.type === name);

	if (!child) {
		return [];
	}

	const childProps = child.map((x: Record<string, any>) => x?.props);

	if (!childProps.length) {
		return [];
	}

	return childProps;
};

export default createRegion;
