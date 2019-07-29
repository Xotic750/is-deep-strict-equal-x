import hasOwnProperty from 'has-own-property-x';
import propertyIsEnumerable from 'property-is-enumerable-x';
import objectToString from 'to-string-tag-x';
import isDate from 'is-date-object';
import isMap from 'is-map-x';
import isRegExp from 'is-regexp-x';
import isSet from 'is-set-x';
import isNumberObject from 'is-number-object';
import isStringObject from 'is-string';
import isBooleanObject from 'is-boolean-object';
import isSymbolObject from 'is-symbol';
import isAnyArrayBuffer from 'is-array-buffer-x';
import isError from 'is-error-x';
import isBoxedPrimitive from 'is-boxed-primitive';
import isBigIntObject from 'is-bigint';
import whichTypedArray from 'which-typed-array';
import hasSymbolSupport from 'has-symbol-support-x';
import objectIs from 'same-value-x';
import objectKeys from 'object-keys-x';
import numberIsNaN from 'is-nan-x';
import getPrototypeOf from 'get-prototype-of-x';
import isArray from 'is-array-x';
import getOwnPropertySymbols from 'get-own-property-symbols-x';
import getOwnPropertyNames from 'get-own-property-names-x';
import arrayFilter from 'array-filter-x';
import isIndex from 'is-index-x';
import {MapConstructor, SetConstructor} from 'collections-x';
import isArrayBufferEqual from 'arraybuffer-equal';
import isDataView from 'is-data-view-x';
import slice from 'array-slice-x';

/* eslint-disable-next-line no-void */
const UNDEFINED = void 0;
const EMPTY_STRING = '';
let $innerDeepEqual;

const bigInt48 = (function getBigInt48() {
  if (typeof BigInt === 'function') {
    try {
      /* eslint-disable-next-line babel/new-cap,no-undef,compat/compat */
      return BigInt(48);
    } catch (ignore) {
      // empty
    }
  }

  return UNDEFINED;
})();

const hasBigInt = isBigIntObject(bigInt48);
const BigIntValueOf = hasBigInt ? bigInt48.valueOf : UNDEFINED;
const BooleanValueOf = true.valueOf;
const DateGetTime = new Date().getTime;
const NumberValueOf = (0).valueOf;
const StringValueOf = EMPTY_STRING.valueOf;
/* eslint-disable-next-line compat/compat */
const SymbolValueOf = hasSymbolSupport ? Symbol(EMPTY_STRING).valueOf : UNDEFINED;
const hasArrayBuffer =
  typeof ArrayBuffer === 'function' &&
  (function testArrayBuffer() {
    try {
      /* eslint-disable-next-line compat/compat */
      return isAnyArrayBuffer(new ArrayBuffer(4));
    } catch (ignore) {
      return false;
    }
  })();

/* eslint-disable-next-line compat/compat */
const hasIsView = hasArrayBuffer && typeof ArrayBuffer.isView === 'function';
const isArrayBufferView = hasIsView
  ? ArrayBuffer.isView /* eslint-disable-line compat/compat */
  : function isArrayBufferView(value) {
      return whichTypedArray(value) !== false || isDataView(value);
    };

const isFloat32Array = function isFloat32Array(value) {
  // noinspection JSIncompatibleTypesComparison
  return whichTypedArray(value) === 'Float32Array';
};

const isFloat64Array = function isFloat64Array(value) {
  // noinspection JSIncompatibleTypesComparison
  return whichTypedArray(value) === 'Float64Array';
};

// const ALL_PROPERTIES = 0;
// const ONLY_WRITABLE = 1;
const ONLY_ENUMERABLE = 2;
// const ONLY_CONFIGURABLE = 4;
// const SKIP_STRINGS = 8;
const SKIP_SYMBOLS = 16;

const getOwnNonIndexProperties = function getOwnNonIndexProperties(value, filter) {
  // noinspection JSBitwiseOperatorUsage
  const names = filter & ONLY_ENUMERABLE /* eslint-disable-line no-bitwise */ ? objectKeys(value) : getOwnPropertyNames(value);
  // noinspection JSBitwiseOperatorUsage
  const symbols = filter & SKIP_SYMBOLS /* eslint-disable-line no-bitwise */ ? [] : getOwnPropertySymbols(value);

  return arrayFilter([...names, ...symbols], (key) => !isIndex(key));
};

const kStrict = true;
const kLoose = false;

const kNoIterator = 0;
const kIsArray = 1;
const kIsSet = 2;
const kIsMap = 3;

// Check if they have the same source and flags
const areSimilarRegExps = function areSimilarRegExps(a, b) {
  return a.source === b.source && a.flags === b.flags;
};

const areSimilarFloatArrays = function areSimilarFloatArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }

  for (let offset = 0; offset < a.byteLength; offset += 1) {
    if (a[offset] !== b[offset]) {
      return false;
    }
  }

  return true;
};

const areSimilarTypedArrays = function areSimilarTypedArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }

  /* eslint-disable-next-line compat/compat */
  return isArrayBufferEqual(a.buffer, new Uint8Array(b.buffer, b.byteOffset, b.byteLength).buffer);
};

const areEqualArrayBuffers = function areEqualArrayBuffers(buf1, buf2) {
  /* eslint-disable-next-line compat/compat */
  return buf1.byteLength === buf2.byteLength && isArrayBufferEqual(new Uint8Array(buf1).buffer, new Uint8Array(buf2).buffer);
};

const setHasEqualElement = function setHasEqualElement(set, val1, strict, memo) {
  // Go looking.
  const setIter = set.values();
  let next = setIter.next();
  while (!next.done) {
    const val2 = next.value;

    if ($innerDeepEqual(val1, val2, strict, memo)) {
      // Remove the matching element to make sure we do not check that again.
      set.delete(val2);

      return true;
    }

    next = setIter.next();
  }

  return false;
};

const getEnumerables = function getEnumerables(val, keys) {
  return arrayFilter(keys, (k) => propertyIsEnumerable(val, k));
};

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
const findLooseMatchingPrimitives = function findLooseMatchingPrimitives(prim) {
  let $prim = prim;
  switch (typeof $prim) {
    case 'undefined':
      return null;

    case 'object': // Only pass in null as object!
      return UNDEFINED;

    case 'symbol':
      return false;

    case 'string':
      $prim = +$prim;
    // Loose equal entries exist only if the string is possible to convert to
    // a regular number and not NaN.
    // Fall through
    case 'number':
      if (numberIsNaN($prim)) {
        return false;
      }

      break;

    default:
  }

  return true;
};

const setMightHaveLoosePrim = function setMightHaveLoosePrim() {
  /* eslint-disable-next-line prefer-rest-params */
  const [a, b, prim] = slice(arguments);
  const altValue = findLooseMatchingPrimitives(prim);

  if (altValue != null) {
    return altValue;
  }

  return b.has(altValue) && !a.has(altValue);
};

const mapMightHaveLoosePrim = function mapMightHaveLoosePrim() {
  /* eslint-disable-next-line prefer-rest-params */
  const [a, b, prim, item, memo] = slice(arguments);
  const altValue = findLooseMatchingPrimitives(prim);

  if (altValue != null) {
    return altValue;
  }

  const curB = b.get(altValue);

  if ((typeof curB === 'undefined' && !b.has(altValue)) || !$innerDeepEqual(item, curB, false, memo)) {
    return false;
  }

  return !a.has(altValue) && $innerDeepEqual(item, curB, false, memo);
};

function setEquiv(a, b, strict, memo) {
  // This is a lazily initiated Set of entries which have to be compared
  // pairwise.
  /** @type {Set} */
  let set = null;
  const setIterA = a.values();
  let nextA = setIterA.next();
  while (!nextA.done) {
    const val = nextA.value;

    // Note: Checking for the objects first improves the performance for object
    // heavy sets but it is a minor slow down for primitives. As they are fast
    // to check this improves the worst case scenario instead.
    if (typeof val === 'object' && val !== null) {
      if (set === null) {
        set = new SetConstructor();
      }

      // If the specified value doesn't exist in the second set its an not null
      // object (or non strict only: a not matching primitive) we'll need to go
      // hunting for something that's deep-(strict-)equal to it. To make this
      // O(n log n) complexity we have to copy these values in a new set first.
      set.add(val);
    } else if (!b.has(val)) {
      if (strict) {
        return false;
      }

      // Fast path to detect missing string, symbol, undefined and null values.
      if (!setMightHaveLoosePrim(a, b, val)) {
        return false;
      }

      if (set === null) {
        set = new SetConstructor();
      }

      set.add(val);
    }

    nextA = setIterA.next();
  }

  if (set !== null) {
    const setIterB = b.values();
    let nextB = setIterB.next();
    while (!nextB.done) {
      const val = nextB.value;

      // We have to check if a primitive value is already
      // matching and only if it's not, go hunting for it.
      if (typeof val === 'object' && val !== null) {
        if (!setHasEqualElement(set, val, strict, memo)) {
          return false;
        }
      } else if (!strict && !a.has(val) && !setHasEqualElement(set, val, strict, memo)) {
        return false;
      }

      nextB = setIterB.next();
    }

    return set.size === 0;
  }

  return true;
}

const mapHasEqualEntry = function mapHasEqualEntry() {
  /* eslint-disable-next-line prefer-rest-params */
  const [set, map, key1, item1, strict, memo] = slice(arguments);
  // To be able to handle cases like:
  //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
  // ... we need to consider *all* matching keys, not just the first we find.
  const setIter = set.values();
  let next = setIter.next();
  while (!next.done) {
    const key2 = next.value;

    if ($innerDeepEqual(key1, key2, strict, memo) && $innerDeepEqual(item1, map.get(key2), strict, memo)) {
      set.delete(key2);

      return true;
    }

    next = setIter.next();
  }

  return false;
};

const mapEquiv = function mapEquiv() {
  /* eslint-disable-next-line prefer-rest-params */
  const [a, b, strict, memo] = slice(arguments);
  /** @type {Set} */
  let set = null;

  const setIterA = a.entries();
  let nextA = setIterA.next();
  while (!nextA.done) {
    const [key, item1] = nextA.value;

    if (typeof key === 'object' && key !== null) {
      if (set === null) {
        set = new SetConstructor();
      }

      set.add(key);
    } else {
      // By directly retrieving the value we prevent another b.has(key) check in
      // almost all possible cases.
      const item2 = b.get(key);

      if ((typeof item2 === 'undefined' && !b.has(key)) || !$innerDeepEqual(item1, item2, strict, memo)) {
        if (strict) {
          return false;
        }

        // Fast path to detect missing string, symbol, undefined and null
        // keys.
        if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) {
          return false;
        }

        if (set === null) {
          set = new SetConstructor();
        }

        set.add(key);
      }
    }

    nextA = setIterA.next();
  }

  if (set !== null) {
    const setIterB = b.entries();
    let nextB = setIterB.next();
    while (!nextB.done) {
      const [key, item] = nextB.value;

      if (typeof key === 'object' && key !== null) {
        if (!mapHasEqualEntry(set, a, key, item, strict, memo)) {
          return false;
        }
      } else if (
        !strict &&
        (!a.has(key) || !$innerDeepEqual(a.get(key), item, false, memo)) &&
        !mapHasEqualEntry(set, a, key, item, false, memo)
      ) {
        return false;
      }

      nextB = setIterB.next();
    }

    return set.size === 0;
  }

  return true;
};

const isEqualBoxedPrimitive = function isEqualBoxedPrimitive(val1, val2) {
  if (isNumberObject(val1)) {
    return isNumberObject(val2) && objectIs(NumberValueOf.call(val1), NumberValueOf.call(val2));
  }

  if (isStringObject(val1)) {
    return isStringObject(val2) && StringValueOf.call(val1) === StringValueOf.call(val2);
  }

  if (isBooleanObject(val1)) {
    return isBooleanObject(val2) && BooleanValueOf.call(val1) === BooleanValueOf.call(val2);
  }

  if (isBigIntObject(val1)) {
    return isBigIntObject(val2) && BigIntValueOf.call(val1) === BigIntValueOf.call(val2);
  }

  return isSymbolObject(val2) && SymbolValueOf.call(val1) === SymbolValueOf.call(val2);
};

const objEquiv = function objEquiv() {
  /* eslint-disable-next-line prefer-rest-params */
  const [a, b, strict, keys, memos, iterationType] = slice(arguments);
  // Sets and maps don't have their entries accessible via normal object
  // properties.
  let i = 0;

  if (iterationType === kIsSet) {
    if (!setEquiv(a, b, strict, memos)) {
      return false;
    }
  } else if (iterationType === kIsMap) {
    if (!mapEquiv(a, b, strict, memos)) {
      return false;
    }
  } else if (iterationType === kIsArray) {
    for (; i < a.length; i += 1) {
      if (hasOwnProperty(a, i)) {
        if (!hasOwnProperty(b, i) || !$innerDeepEqual(a[i], b[i], strict, memos)) {
          return false;
        }
      } else if (hasOwnProperty(b, i)) {
        return false;
      } else {
        // Array is sparse.
        const keysA = objectKeys(a);
        for (; i < keysA.length; i += 1) {
          const key = keysA[i];

          if (!hasOwnProperty(b, key) || !$innerDeepEqual(a[key], b[key], strict, memos)) {
            return false;
          }
        }

        return keysA.length === objectKeys(b).length;
      }
    }
  }

  // The pair must have equivalent values for every corresponding key.
  // Possibly expensive deep test:
  for (i = 0; i < keys.length; i += 1) {
    const key = keys[i];

    if (!$innerDeepEqual(a[key], b[key], strict, memos)) {
      return false;
    }
  }

  return true;
};

const keyCheck = function keyCheck() {
  /* eslint-disable-next-line prefer-rest-params */
  const [val1, val2, strict, memos, iterationType, aKeys] = slice(arguments);
  let $memos = memos;
  let $aKeys = aKeys;

  // For all remaining Object pairs, including Array, objects and Maps,
  // equivalence is determined by having:
  // a) The same number of owned enumerable properties
  // b) The same set of keys/indexes (although not necessarily the same order)
  // c) Equivalent values for every corresponding key/index
  // d) For Sets and Maps, equal contents
  // Note: this accounts for both named and indexed properties on Arrays.
  if (arguments.length === 5) {
    $aKeys = objectKeys(val1);
    const bKeys = objectKeys(val2);

    // The pair must have the same number of owned properties.
    if ($aKeys.length !== bKeys.length) {
      return false;
    }
  }

  // Cheap key test
  let i = 0;
  for (; i < $aKeys.length; i += 1) {
    if (!hasOwnProperty(val2, $aKeys[i])) {
      return false;
    }
  }

  if (strict && arguments.length === 5) {
    const symbolKeysA = getOwnPropertySymbols(val1);

    if (symbolKeysA.length !== 0) {
      let count = 0;
      for (i = 0; i < symbolKeysA.length; i += 1) {
        const key = symbolKeysA[i];

        if (propertyIsEnumerable(val1, key)) {
          if (!propertyIsEnumerable(val2, key)) {
            return false;
          }

          $aKeys.push(key);
          count += 1;
        } else if (propertyIsEnumerable(val2, key)) {
          return false;
        }
      }

      const symbolKeysB = getOwnPropertySymbols(val2);

      if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
        return false;
      }
    } else {
      const symbolKeysB = getOwnPropertySymbols(val2);

      if (symbolKeysB.length !== 0 && getEnumerables(val2, symbolKeysB).length !== 0) {
        return false;
      }
    }
  }

  if (
    $aKeys.length === 0 &&
    (iterationType === kNoIterator || (iterationType === kIsArray && val1.length === 0) || val1.size === 0)
  ) {
    return true;
  }

  // Use $memos to handle cycles.
  if (typeof $memos === 'undefined') {
    $memos = {
      val1: new MapConstructor(),
      val2: new MapConstructor(),
      position: 0,
    };
  } else {
    // We prevent up to two map.has(x) calls by directly retrieving the value
    // and checking for undefined. The map can only contain numbers, so it is
    // safe to check for undefined only.
    const val2MemoA = $memos.val1.get(val1);

    if (typeof val2MemoA !== 'undefined') {
      const val2MemoB = $memos.val2.get(val2);

      if (typeof val2MemoB !== 'undefined') {
        return val2MemoA === val2MemoB;
      }
    }

    $memos.position += 1;
  }

  $memos.val1.set(val1, $memos.position);
  $memos.val2.set(val2, $memos.position);

  const areEq = objEquiv(val1, val2, strict, $aKeys, $memos, iterationType);

  $memos.val1.delete(val1);
  $memos.val2.delete(val2);

  return areEq;
};

// Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.

$innerDeepEqual = function innerDeepEqual() {
  /* eslint-disable-next-line prefer-rest-params */
  const [val1, val2, strict, memos] = slice(arguments);

  // All identical values are equivalent, as determined by ===.
  if (val1 === val2) {
    if (val1 !== 0) {
      return true;
    }

    return strict ? objectIs(val1, val2) : true;
  }

  // Check more closely if val1 and val2 are equal.
  if (strict) {
    if (typeof val1 !== 'object') {
      return typeof val1 === 'number' && numberIsNaN(val1) && numberIsNaN(val2);
    }

    if (typeof val2 !== 'object' || val1 === null || val2 === null) {
      return false;
    }

    if (getPrototypeOf(val1) !== getPrototypeOf(val2)) {
      return false;
    }
  } else {
    if (val1 === null || typeof val1 !== 'object') {
      if (val2 === null || typeof val2 !== 'object') {
        // noinspection EqualityComparisonWithCoercionJS
        return val1 == val2; /* eslint-disable-line eqeqeq */
      }

      return false;
    }

    if (val2 === null || typeof val2 !== 'object') {
      return false;
    }
  }

  const val1Tag = objectToString(val1);
  const val2Tag = objectToString(val2);

  if (val1Tag !== val2Tag) {
    return false;
  }

  if (isArray(val1)) {
    // Check for sparse arrays and general fast path
    if (val1.length !== val2.length) {
      return false;
    }

    /* eslint-disable-next-line no-bitwise */
    const filter = strict ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;
    const keys1 = getOwnNonIndexProperties(val1, filter);
    const keys2 = getOwnNonIndexProperties(val2, filter);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
  }

  if (val1Tag === '[object Object]') {
    return keyCheck(val1, val2, strict, memos, kNoIterator);
  }

  if (isDate(val1)) {
    if (DateGetTime.call(val1) !== DateGetTime.call(val2)) {
      return false;
    }
  } else if (isRegExp(val1)) {
    if (!areSimilarRegExps(val1, val2)) {
      return false;
    }
  } else if (isError(val1)) {
    // Do not compare the stack as it might differ even though the error itself
    // is otherwise identical.
    if (val1.message !== val2.message || val1.name !== val2.name) {
      return false;
    }
  } else if (isArrayBufferView(val1)) {
    if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
      if (!areSimilarFloatArrays(val1, val2)) {
        return false;
      }
    } else if (!areSimilarTypedArrays(val1, val2)) {
      return false;
    }

    // Buffer.compare returns true, so val1.length === val2.length. If they both
    // only contain numeric keys, we don't need to exam further than checking
    // the symbols.
    /* eslint-disable-next-line no-bitwise */
    const filter = strict ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;
    const keys1 = getOwnNonIndexProperties(val1, filter);
    const keys2 = getOwnNonIndexProperties(val2, filter);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kNoIterator, keys1);
  } else if (isSet(val1)) {
    if (!isSet(val2) || val1.size !== val2.size) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kIsSet);
  } else if (isMap(val1)) {
    if (!isMap(val2) || val1.size !== val2.size) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kIsMap);
  } else if (isAnyArrayBuffer(val1)) {
    if (!areEqualArrayBuffers(val1, val2)) {
      return false;
    }
  } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
    return false;
  }

  return keyCheck(val1, val2, strict, memos, kNoIterator);
};

// noinspection JSUnusedGlobalSymbols
export function isDeepEqual(val1, val2) {
  return $innerDeepEqual(val1, val2, kLoose);
}

export function isDeepStrictEqual(val1, val2) {
  return $innerDeepEqual(val1, val2, kStrict);
}
