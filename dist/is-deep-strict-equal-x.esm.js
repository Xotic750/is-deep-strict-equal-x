function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
import { MapConstructor, SetConstructor } from 'collections-x';
import isArrayBufferEqual from 'arraybuffer-equal';
import isDataView from 'is-data-view-x';
import attempt from 'attempt-x';
var _ref = [],
    concat = _ref.concat,
    push = _ref.push;
/* eslint-disable-next-line no-void */

var UNDEFINED = void 0;
var EMPTY_STRING = '';
var $innerDeepEqual;

var getBigInt48 = function getBigInt48() {
  if (typeof BigInt === 'function') {
    var res = attempt(function attemptee() {
      /* eslint-disable-next-line babel/new-cap,no-undef,compat/compat */
      return BigInt(48);
    });

    if (res.threw === false) {
      return res.value;
    }
  }

  return UNDEFINED;
};

var bigInt48 = getBigInt48();
var hasBigInt = isBigIntObject(bigInt48);
var BigIntValueOf = hasBigInt ? bigInt48.valueOf : UNDEFINED;
var BooleanValueOf = true.valueOf;
var DateGetTime = new Date().getTime;
var NumberValueOf = 0 .valueOf;
var StringValueOf = EMPTY_STRING.valueOf;
/* eslint-disable-next-line compat/compat */

var SymbolValueOf = hasSymbolSupport ? Symbol(EMPTY_STRING).valueOf : UNDEFINED;

var testArrayBuffer = function testArrayBuffer() {
  if (typeof ArrayBuffer === 'function') {
    var res = attempt(function attemptee() {
      /* eslint-disable-next-line compat/compat */
      return isAnyArrayBuffer(new ArrayBuffer(4));
    });

    if (res.threw === false) {
      return res.value;
    }
  }

  return false;
};

var hasArrayBuffer = testArrayBuffer();
/* eslint-disable-next-line compat/compat */

var hasIsView = hasArrayBuffer && typeof ArrayBuffer.isView === 'function';
var isArrayBufferView = hasIsView ? ArrayBuffer.isView
/* eslint-disable-line compat/compat */
: function isArrayBufferView(value) {
  return whichTypedArray(value) !== false || isDataView(value);
};

var isFloat32Array = function isFloat32Array(value) {
  // noinspection JSIncompatibleTypesComparison
  return whichTypedArray(value) === 'Float32Array';
};

var isFloat64Array = function isFloat64Array(value) {
  // noinspection JSIncompatibleTypesComparison
  return whichTypedArray(value) === 'Float64Array';
}; // const ALL_PROPERTIES = 0;
// const ONLY_WRITABLE = 1;


var ONLY_ENUMERABLE = 2; // const ONLY_CONFIGURABLE = 4;
// const SKIP_STRINGS = 8;

var SKIP_SYMBOLS = 16;

var getOwnNonIndexProperties = function getOwnNonIndexProperties(value, filter) {
  // noinspection JSBitwiseOperatorUsage
  var names = filter & ONLY_ENUMERABLE
  /* eslint-disable-line no-bitwise */
  ? objectKeys(value) : getOwnPropertyNames(value); // noinspection JSBitwiseOperatorUsage

  var symbols = filter & SKIP_SYMBOLS
  /* eslint-disable-line no-bitwise */
  ? [] : getOwnPropertySymbols(value);
  return arrayFilter(concat.call([], names, symbols), function predicate(key) {
    return !isIndex(key);
  });
};

var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3; // Check if they have the same source and flags

var areSimilarRegExps = function areSimilarRegExps(a, b) {
  return a.source === b.source && a.flags === b.flags;
};

var areSimilarFloatArrays = function areSimilarFloatArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }

  for (var offset = 0; offset < a.byteLength; offset += 1) {
    if (a[offset] !== b[offset]) {
      return false;
    }
  }

  return true;
};

var areSimilarTypedArrays = function areSimilarTypedArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  /* eslint-disable-next-line compat/compat */


  return isArrayBufferEqual(a.buffer, new Uint8Array(b.buffer, b.byteOffset, b.byteLength).buffer);
};

var areEqualArrayBuffers = function areEqualArrayBuffers(buf1, buf2) {
  /* eslint-disable-next-line compat/compat */
  return buf1.byteLength === buf2.byteLength && isArrayBufferEqual(new Uint8Array(buf1).buffer, new Uint8Array(buf2).buffer);
};

var setHasEqualElement = function setHasEqualElement(args) {
  var _args = _slicedToArray(args, 4),
      set = _args[0],
      val1 = _args[1],
      strict = _args[2],
      memo = _args[3]; // Go looking.


  var setIter = set.values();
  var next = setIter.next();

  while (!next.done) {
    var val2 = next.value;

    if ($innerDeepEqual([val1, val2, strict, memo])) {
      // Remove the matching element to make sure we do not check that again.
      set.delete(val2);
      return true;
    }

    next = setIter.next();
  }

  return false;
};

var getEnumerables = function getEnumerables(val, keys) {
  return arrayFilter(keys, function predicate(k) {
    return propertyIsEnumerable(val, k);
  });
}; // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').


var findLooseMatchingPrimitives = function findLooseMatchingPrimitives(prim) {
  var $prim = prim;

  switch (_typeof($prim)) {
    case 'undefined':
      return null;

    case 'object':
      // Only pass in null as object!
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

var setMightHaveLoosePrim = function setMightHaveLoosePrim(args) {
  var _args2 = _slicedToArray(args, 3),
      a = _args2[0],
      b = _args2[1],
      prim = _args2[2];

  var altValue = findLooseMatchingPrimitives(prim);

  if (altValue != null) {
    return altValue;
  }

  return b.has(altValue) && !a.has(altValue);
};

var mapMightHaveLoosePrim = function mapMightHaveLoosePrim(args) {
  var _args3 = _slicedToArray(args, 5),
      a = _args3[0],
      b = _args3[1],
      prim = _args3[2],
      item = _args3[3],
      memo = _args3[4];

  var altValue = findLooseMatchingPrimitives(prim);

  if (altValue != null) {
    return altValue;
  }

  var curB = b.get(altValue);

  if (typeof curB === 'undefined' && !b.has(altValue) || !$innerDeepEqual([item, curB, false, memo])) {
    return false;
  }

  return !a.has(altValue) && $innerDeepEqual([item, curB, false, memo]);
};

var setEquiv = function setEquiv(args) {
  var _args4 = _slicedToArray(args, 4),
      a = _args4[0],
      b = _args4[1],
      strict = _args4[2],
      memo = _args4[3]; // This is a lazily initiated Set of entries which have to be compared pairwise.

  /** @type {Set} */


  var set = null;
  var setIterA = a.values();
  var nextA = setIterA.next();

  while (!nextA.done) {
    var val = nextA.value; // Note: Checking for the objects first improves the performance for object
    // heavy sets but it is a minor slow down for primitives. As they are fast
    // to check this improves the worst case scenario instead.

    if (_typeof(val) === 'object' && val !== null) {
      if (set === null) {
        set = new SetConstructor();
      } // If the specified value doesn't exist in the second set its an not null
      // object (or non strict only: a not matching primitive) we'll need to go
      // hunting for something that's deep-(strict-)equal to it. To make this
      // O(n log n) complexity we have to copy these values in a new set first.


      set.add(val);
    } else if (!b.has(val)) {
      if (strict) {
        return false;
      } // Fast path to detect missing string, symbol, undefined and null values.


      if (!setMightHaveLoosePrim([a, b, val])) {
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
    var setIterB = b.values();
    var nextB = setIterB.next();

    while (!nextB.done) {
      var _val = nextB.value; // We have to check if a primitive value is already
      // matching and only if it's not, go hunting for it.

      if (_typeof(_val) === 'object' && _val !== null) {
        if (!setHasEqualElement([set, _val, strict, memo])) {
          return false;
        }
      } else if (!strict && !a.has(_val) && !setHasEqualElement([set, _val, strict, memo])) {
        return false;
      }

      nextB = setIterB.next();
    }

    return set.size === 0;
  }

  return true;
};

var mapHasEqualEntry = function mapHasEqualEntry(args) {
  var _args5 = _slicedToArray(args, 6),
      set = _args5[0],
      map = _args5[1],
      key1 = _args5[2],
      item1 = _args5[3],
      strict = _args5[4],
      memo = _args5[5]; // To be able to handle cases like:
  //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
  // ... we need to consider *all* matching keys, not just the first we find.


  var setIter = set.values();
  var next = setIter.next();

  while (!next.done) {
    var key2 = next.value;

    if ($innerDeepEqual([key1, key2, strict, memo]) && $innerDeepEqual([item1, map.get(key2), strict, memo])) {
      set.delete(key2);
      return true;
    }

    next = setIter.next();
  }

  return false;
};

var mapEquiv = function mapEquiv(args) {
  var _args6 = _slicedToArray(args, 4),
      a = _args6[0],
      b = _args6[1],
      strict = _args6[2],
      memo = _args6[3];
  /** @type {Set} */


  var set = null;
  var setIterA = a.entries();
  var nextA = setIterA.next();

  while (!nextA.done) {
    var _nextA$value = _slicedToArray(nextA.value, 2),
        key = _nextA$value[0],
        item1 = _nextA$value[1];

    if (_typeof(key) === 'object' && key !== null) {
      if (set === null) {
        set = new SetConstructor();
      }

      set.add(key);
    } else {
      // By directly retrieving the value we prevent another b.has(key) check in
      // almost all possible cases.
      var item2 = b.get(key);

      if (typeof item2 === 'undefined' && !b.has(key) || !$innerDeepEqual([item1, item2, strict, memo])) {
        if (strict) {
          return false;
        } // Fast path to detect missing string, symbol, undefined and null
        // keys.


        if (!mapMightHaveLoosePrim([a, b, key, item1, memo])) {
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
    var setIterB = b.entries();
    var nextB = setIterB.next();

    while (!nextB.done) {
      var _nextB$value = _slicedToArray(nextB.value, 2),
          key = _nextB$value[0],
          item = _nextB$value[1];

      if (_typeof(key) === 'object' && key !== null) {
        if (!mapHasEqualEntry([set, a, key, item, strict, memo])) {
          return false;
        }
      } else if (!strict && (!a.has(key) || !$innerDeepEqual([a.get(key), item, false, memo])) && !mapHasEqualEntry([set, a, key, item, false, memo])) {
        return false;
      }

      nextB = setIterB.next();
    }

    return set.size === 0;
  }

  return true;
};

var isEqualBoxedPrimitive = function isEqualBoxedPrimitive(val1, val2) {
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

var objEquiv = function objEquiv(args) {
  var _args7 = _slicedToArray(args, 6),
      a = _args7[0],
      b = _args7[1],
      strict = _args7[2],
      keys = _args7[3],
      memos = _args7[4],
      iterationType = _args7[5]; // Sets and maps don't have their entries accessible via normal object
  // properties.


  var i = 0;

  if (iterationType === kIsSet) {
    if (!setEquiv([a, b, strict, memos])) {
      return false;
    }
  } else if (iterationType === kIsMap) {
    if (!mapEquiv([a, b, strict, memos])) {
      return false;
    }
  } else if (iterationType === kIsArray) {
    for (; i < a.length; i += 1) {
      if (hasOwnProperty(a, i)) {
        if (!hasOwnProperty(b, i) || !$innerDeepEqual([a[i], b[i], strict, memos])) {
          return false;
        }
      } else if (hasOwnProperty(b, i)) {
        return false;
      } else {
        // Array is sparse.
        var keysA = objectKeys(a);

        for (; i < keysA.length; i += 1) {
          var key = keysA[i];

          if (!hasOwnProperty(b, key) || !$innerDeepEqual([a[key], b[key], strict, memos])) {
            return false;
          }
        }

        return keysA.length === objectKeys(b).length;
      }
    }
  } // The pair must have equivalent values for every corresponding key.
  // Possibly expensive deep test:


  for (i = 0; i < keys.length; i += 1) {
    var _key = keys[i];

    if (!$innerDeepEqual([a[_key], b[_key], strict, memos])) {
      return false;
    }
  }

  return true;
};

var keyCheck = function keyCheck(args) {
  var _args8 = _slicedToArray(args, 6),
      val1 = _args8[0],
      val2 = _args8[1],
      strict = _args8[2],
      memos = _args8[3],
      iterationType = _args8[4],
      aKeys = _args8[5];

  var $memos = memos;
  var $aKeys = aKeys; // For all remaining Object pairs, including Array, objects and Maps,
  // equivalence is determined by having:
  // a) The same number of owned enumerable properties
  // b) The same set of keys/indexes (although not necessarily the same order)
  // c) Equivalent values for every corresponding key/index
  // d) For Sets and Maps, equal contents
  // Note: this accounts for both named and indexed properties on Arrays.

  if (args.length === 5) {
    $aKeys = objectKeys(val1);
    var bKeys = objectKeys(val2); // The pair must have the same number of owned properties.

    if ($aKeys.length !== bKeys.length) {
      return false;
    }
  } // Cheap key test


  var i = 0;

  for (; i < $aKeys.length; i += 1) {
    if (!hasOwnProperty(val2, $aKeys[i])) {
      return false;
    }
  }

  if (strict && args.length === 5) {
    var symbolKeysA = getOwnPropertySymbols(val1);

    if (symbolKeysA.length !== 0) {
      var count = 0;

      for (i = 0; i < symbolKeysA.length; i += 1) {
        var key = symbolKeysA[i];

        if (propertyIsEnumerable(val1, key)) {
          if (!propertyIsEnumerable(val2, key)) {
            return false;
          }

          push.call($aKeys, key);
          count += 1;
        } else if (propertyIsEnumerable(val2, key)) {
          return false;
        }
      }

      var symbolKeysB = getOwnPropertySymbols(val2);

      if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
        return false;
      }
    } else {
      var _symbolKeysB = getOwnPropertySymbols(val2);

      if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
        return false;
      }
    }
  }

  if ($aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
    return true;
  } // Use $memos to handle cycles.


  if (typeof $memos === 'undefined') {
    $memos = {
      val1: new MapConstructor(),
      val2: new MapConstructor(),
      position: 0
    };
  } else {
    // We prevent up to two map.has(x) calls by directly retrieving the value
    // and checking for undefined. The map can only contain numbers, so it is
    // safe to check for undefined only.
    var val2MemoA = $memos.val1.get(val1);

    if (typeof val2MemoA !== 'undefined') {
      var val2MemoB = $memos.val2.get(val2);

      if (typeof val2MemoB !== 'undefined') {
        return val2MemoA === val2MemoB;
      }
    }

    $memos.position += 1;
  }

  $memos.val1.set(val1, $memos.position);
  $memos.val2.set(val2, $memos.position);
  var areEq = objEquiv([val1, val2, strict, $aKeys, $memos, iterationType]);
  $memos.val1.delete(val1);
  $memos.val2.delete(val2);
  return areEq;
}; // Notes: Type tags are historical [[Class]] properties that can be set by
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


$innerDeepEqual = function innerDeepEqual(args) {
  var _args9 = _slicedToArray(args, 4),
      val1 = _args9[0],
      val2 = _args9[1],
      strict = _args9[2],
      memos = _args9[3]; // All identical values are equivalent, as determined by ===.


  if (val1 === val2) {
    if (val1 !== 0) {
      return true;
    }

    return strict ? objectIs(val1, val2) : true;
  } // Check more closely if val1 and val2 are equal.


  if (strict) {
    if (_typeof(val1) !== 'object') {
      return typeof val1 === 'number' && numberIsNaN(val1) && numberIsNaN(val2);
    }

    if (_typeof(val2) !== 'object' || val1 === null || val2 === null) {
      return false;
    }

    if (getPrototypeOf(val1) !== getPrototypeOf(val2)) {
      return false;
    }
  } else {
    if (val1 === null || _typeof(val1) !== 'object') {
      if (val2 === null || _typeof(val2) !== 'object') {
        // noinspection EqualityComparisonWithCoercionJS
        return val1 == val2;
        /* eslint-disable-line eqeqeq */
      }

      return false;
    }

    if (val2 === null || _typeof(val2) !== 'object') {
      return false;
    }
  }

  var val1Tag = objectToString(val1);
  var val2Tag = objectToString(val2);

  if (val1Tag !== val2Tag) {
    return false;
  }

  if (isArray(val1)) {
    // Check for sparse arrays and general fast path
    if (val1.length !== val2.length) {
      return false;
    }
    /* eslint-disable-next-line no-bitwise */


    var filter = strict ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;
    var keys1 = getOwnNonIndexProperties(val1, filter);
    var keys2 = getOwnNonIndexProperties(val2, filter);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keyCheck([val1, val2, strict, memos, kIsArray, keys1]);
  }

  if (val1Tag === '[object Object]') {
    return keyCheck([val1, val2, strict, memos, kNoIterator]);
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
    } // Buffer.compare returns true, so val1.length === val2.length. If they both
    // only contain numeric keys, we don't need to exam further than checking
    // the symbols.

    /* eslint-disable-next-line no-bitwise */


    var _filter = strict ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;

    var _keys = getOwnNonIndexProperties(val1, _filter);

    var _keys2 = getOwnNonIndexProperties(val2, _filter);

    if (_keys.length !== _keys2.length) {
      return false;
    }

    return keyCheck([val1, val2, strict, memos, kNoIterator, _keys]);
  } else if (isSet(val1)) {
    if (!isSet(val2) || val1.size !== val2.size) {
      return false;
    }

    return keyCheck([val1, val2, strict, memos, kIsSet]);
  } else if (isMap(val1)) {
    if (!isMap(val2) || val1.size !== val2.size) {
      return false;
    }

    return keyCheck([val1, val2, strict, memos, kIsMap]);
  } else if (isAnyArrayBuffer(val1)) {
    if (!areEqualArrayBuffers(val1, val2)) {
      return false;
    }
  } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
    return false;
  }

  return keyCheck([val1, val2, strict, memos, kNoIterator]);
}; // noinspection JSUnusedGlobalSymbols


export function isDeepEqual(val1, val2) {
  return $innerDeepEqual([val1, val2, kLoose]);
}
export function isDeepStrictEqual(val1, val2) {
  return $innerDeepEqual([val1, val2, kStrict]);
}

//# sourceMappingURL=is-deep-strict-equal-x.esm.js.map