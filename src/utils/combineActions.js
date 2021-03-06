import invariant from 'invariant';
import isFunction from 'redux-actions/src/utils/isFunction';
import isSymbol from 'redux-actions/src/utils/isSymbol';
import isEmpty from 'redux-actions/src/utils/isEmpty';
import toString from 'redux-actions/src/utils/toString';
import isString from 'redux-actions/src/utils/isString';
import { ACTION_TYPE_DELIMITER } from 'redux-actions/src/constants';

import isPlainObject from 'redux-actions/src/utils/isPlainObject'

function isValidActionType(type) {
  return isString(type) || isFunction(type) || isSymbol(type) || isPlainObject(type);
}

function isValidActionTypes(types) {
  if (isEmpty(types)) {
    return false;
  }
  return types.every(isValidActionType);
}

export default function combineActions(...actionsTypes) {
  invariant(
    isValidActionTypes(actionsTypes),
    'Expected action types to be strings, symbols, or action creators'
  );
  const combinedActionType = actionsTypes
    .map(toString)
    .join(ACTION_TYPE_DELIMITER);
  return { toString: () => combinedActionType };
}
