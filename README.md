<a
  href="https://travis-ci.org/Xotic750/is-deep-strict-equal-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-deep-strict-equal-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-deep-strict-equal-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-deep-strict-equal-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-deep-strict-equal-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-deep-strict-equal-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-deep-strict-equal-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-deep-strict-equal-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-deep-strict-equal-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-deep-strict-equal-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-deep-strict-equal-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-deep-strict-equal-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-deep-strict-equal-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-deep-strict-equal-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_deep-equal-x"></a>

## is-deep-strict-equal-x

node's isDeepStrictEqual algorithm.

- [is-deep-strictequal-x](#module_is-deep-strictequal-x)
  - [`.isDeepStrictEqual`](#module_is-deep-strictequal-x.isDeepStrictEqual) ⇒ <code>boolean</code>
  - [`.isDeepEqual`](#module_is-deep-strictequal-x.isDeepEqual) ⇒ <code>boolean</code>

<a name="module_is-deep-strictequal-x.isDeepStrictEqual"></a>

### `is-deep-strict-equal-x.isDeepStrictEqual` ⇒ <code>boolean</code>

Tests for deep equality between the actual and expected parameters. "Deep" equality means
that the enumerable "own" properties of child objects are recursively evaluated also by
the following rules.

#Comparison details
Primitive values are compared using the SameValue Comparison, used by Object.is().
Type tags of objects should be the same.
[[Prototype]] of objects are compared using the Strict Equality Comparison.
Only enumerable "own" properties are considered.
Error names and messages are always compared, even if these are not enumerable properties.
Enumerable own Symbol properties are compared as well.
Object wrappers are compared both as objects and unwrapped values.
Object properties are compared unordered.
Map keys and Set items are compared unordered.
Recursion stops when both sides differ or both sides encounter a circular reference.
WeakMap and WeakSet comparison does not rely on their values. See below for further details.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - `true` if `val1` and `val2` are deemed equal,
otherwise `false`.  
**See**: https://nodejs.org/dist/latest-v10.x/docs/api/util.html#util_util_isdeepstrictequal_val1_val2

| Param | Type            | Description               |
| ----- | --------------- | ------------------------- |
| val1  | <code>\*</code> | First comparison object.  |
| val2  | <code>\*</code> | Second comparison object. |

**Example**

```js
import {isDeepStrictEqual} from 'is-deep-strict-equal-x';

// This fails because 1 !== '1'.
isDeepStrictEqual({a: 1}, {a: '1'}); // false

// The following objects don't have own properties
const date = new Date();
const object = {};
const fakeDate = {};
isDeepStrictEqual(fakeDate, Date.prototype);

// Different [[Prototype]]:
isDeepStrictEqual(object, fakeDate); // false

// Different type tags:
isDeepStrictEqual(date, fakeDate); // false

isDeepStrictEqual(NaN, NaN); // true

// Different unwrapped numbers:
isDeepStrictEqual(Object(1), Object(2)); // false

isDeepStrictEqual(Object('foo'), Object('foo')); // true

isDeepStrictEqual(-0, -0); // true

// Different zeros using the SameValue Comparison:
isDeepStrictEqual(0, -0); // false

const symbol1 = Symbol();
const symbol2 = Symbol();
isDeepStrictEqual({[symbol1]: 1}, {[symbol1]: 1}); // true
isDeepStrictEqual({[symbol1]: 1}, {[symbol2]: 1}); // false

const weakMap1 = new WeakMap();
const weakMap2 = new WeakMap([[{}, {}]]);
const weakMap3 = new WeakMap();
weakMap3.unequal = true;

isDeepStrictEqual(weakMap1, weakMap2); // true

// Fails because weakMap3 has a property that weakMap1 does not contain:
isDeepStrictEqual(weakMap1, weakMap3); // false
```

<a name="module_is-deep-strictequal-x.isDeepEqual"></a>

### `is-deep-strict-equal-x.isDeepEqual` ⇒ <code>boolean</code>

#Deprecated - Use isDeepStrictEqual instead!

**Kind**: Exported function  
**Returns**: <code>boolean</code> - `true` if `val1` and `val2` are deemed equal,
otherwise `false`.  

| Param | Type            | Description               |
| ----- | --------------- | ------------------------- |
| val1  | <code>\*</code> | First comparison object.  |
| val2  | <code>\*</code> | Second comparison object. |

**Example**

```js
import {isDeepEqual} from 'is-deep-strict-equal-x';

isDeepEqual(Error('a'), Error('b')); // true

isDeepEqual(4, '4'); // => true

isDeepEqual({a: 4, b: '1'}, {b: '1', a: 4}); // => true

isDeepEqual(new Date(), new Date(2000, 3, 14)); // => false

isDeepEqual(4, '4', true); // => false
```
