import _isArray from 'lodash/isArray';
import _isBoolean from 'lodash/isBoolean';
import _isNil from 'lodash/isNil';

const flattenDeep = (param) => {
	// RETURN EMPTY ARRAY IF NO PARAM
	if (!param || _isNil(param)) {
		return [];
	}

	let arr = param;

	// IF PARAM IS NOT AN ARRAY
	if (!_isArray(arr)) {
		arr = [arr];
	}

	// IF NO ITEM IN ARRAY
	if (!arr?.length) {
		return [];
	}

	return arr.reduce((accumulator: Array<any>, current: any) => {
		if (!_isNil(current) && _isArray(current) && current?.length) {
			// KEY/VALUE PAIR
			// CHECK NESTED ARRAYS ONLY
			const [key, value] = current;

			if (!_isNil(key) && !_isNil(value) && _isBoolean(value)) {
				// IF VALUE IS TRUE
				if (value) {
					return accumulator.concat(key);
				}
				// IF VALUE IS FALSE
				return accumulator.concat([]);
			}
			return accumulator.concat(flattenDeep(current));
		}
		return accumulator.concat(current);
	}, []);
};

export default flattenDeep;
