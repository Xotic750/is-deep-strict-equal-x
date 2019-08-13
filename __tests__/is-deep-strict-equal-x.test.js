import isBigIntObject from 'is-bigint';
import {isDeepStrictEqual} from 'src/is-deep-strict-equal-x';

const bigInt48 = (function getBigInt48() {
  if (typeof BigInt === 'function') {
    try {
      /* eslint-disable-next-line babel/new-cap,no-undef */
      return BigInt(48);
    } catch (ignore) {
      // empty
    }
  }

  return void 0;
})();

const hasBigInt = isBigIntObject(bigInt48);
const itBigInt = hasBigInt ? it : xit;

class MyDate extends Date {
  constructor(...args) {
    super(...args);
    this[0] = '1';
  }
}

class MyRegExp extends RegExp {
  constructor(...args) {
    super(...args);
    this[0] = '1';
  }
}

describe('isDeepStrictEqual', function() {
  function utilIsDeepStrict(a, b) {
    expect(isDeepStrictEqual(a, b)).toBe(true);
    expect(isDeepStrictEqual(b, a)).toBe(true);
  }

  function notUtilIsDeepStrict(a, b) {
    expect(isDeepStrictEqual(a, b)).toBe(false);
    expect(isDeepStrictEqual(b, a)).toBe(false);
  }

  it('buffer', function() {
    expect.assertions(3);
    const arr = new Uint8Array([120, 121, 122, 10]);
    const buf = Buffer.from(arr);
    // They have different [[Prototype]]
    expect(isDeepStrictEqual(arr, buf)).toBe(false);

    const buf2 = Buffer.from(arr);
    buf2.prop = 1;

    expect(isDeepStrictEqual(buf2, buf)).toBe(false);

    const arr2 = new Uint8Array([120, 121, 122, 10]);
    arr2.prop = 5;
    expect(isDeepStrictEqual(arr, arr2)).toBe(false);
  });

  it('date', function() {
    expect.assertions(2);
    const date = new Date('2016');

    const date2 = new MyDate('2016');

    // deepStrictEqual checks own properties
    expect(isDeepStrictEqual(date, date2)).toBe(false);
    expect(isDeepStrictEqual(date2, date)).toBe(false);
  });

  it('regex', function() {
    expect.assertions(1);
    const re1 = new RegExp('test');
    const re2 = new MyRegExp('test');

    // deepStrictEqual checks all properties
    expect(isDeepStrictEqual(re1, re2)).toBe(false);
  });

  it('deepStrictEqual should throw for these cases', function() {
    expect.assertions(182);
    // For these cases, deepStrictEqual should throw.
    const similar = new Set([
      {0: '1'}, // Object
      {0: 1}, // Object
      Object('1'), // Object
      ['1'], // Array
      [1], // Array
      new MyDate('2016'), // Date with this[0] = '1'
      new MyRegExp('test'), // RegExp with this[0] = '1'
      new Int8Array([1]), // Int8Array
      new Uint8Array([1]), // Uint8Array
      new Int16Array([1]), // Int16Array
      new Uint16Array([1]), // Uint16Array
      new Int32Array([1]), // Int32Array
      new Uint32Array([1]), // Uint32Array
      Buffer.from([1]), // Buffer
    ]);

    similar.forEach((a) => {
      similar.forEach((b) => {
        if (a !== b) {
          expect(isDeepStrictEqual(a, b)).toBe(false);
        }
      });
    });
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('es6 Maps and Sets', function() {
    expect.assertions(96);
    // es6 Maps and Sets
    utilIsDeepStrict(new Set(), new Set());
    utilIsDeepStrict(new Map(), new Map());

    utilIsDeepStrict(new Set([1, 2, 3]), new Set([1, 2, 3]));
    notUtilIsDeepStrict(new Set([1, 2, 3]), new Set([1, 2, 3, 4]));
    notUtilIsDeepStrict(new Set([1, 2, 3, 4]), new Set([1, 2, 3]));
    utilIsDeepStrict(new Set(['1', '2', '3']), new Set(['1', '2', '3']));
    utilIsDeepStrict(new Set([[1, 2], [3, 4]]), new Set([[3, 4], [1, 2]]));

    {
      const a = [1, 2];
      const b = [3, 4];
      const c = [1, 2];
      const d = [3, 4];

      utilIsDeepStrict({a, b, s: new Set([a, b])}, {a: c, b: d, s: new Set([d, c])});
    }

    utilIsDeepStrict(new Map([[1, 1], [2, 2]]), new Map([[1, 1], [2, 2]]));
    utilIsDeepStrict(new Map([[1, 1], [2, 2]]), new Map([[2, 2], [1, 1]]));
    notUtilIsDeepStrict(new Map([[1, 1], [2, 2]]), new Map([[1, 2], [2, 1]]));
    notUtilIsDeepStrict(new Map([[[1], 1], [{}, 2]]), new Map([[[1], 2], [{}, 1]]));

    notUtilIsDeepStrict(new Set([1]), [1]);
    notUtilIsDeepStrict(new Set(), []);
    notUtilIsDeepStrict(new Set(), {});

    notUtilIsDeepStrict(new Map([['a', 1]]), {a: 1});
    notUtilIsDeepStrict(new Map(), []);
    notUtilIsDeepStrict(new Map(), {});

    notUtilIsDeepStrict(new Set(['1']), new Set([1]));

    notUtilIsDeepStrict(new Map([['1', 'a']]), new Map([[1, 'a']]));
    notUtilIsDeepStrict(new Map([['a', '1']]), new Map([['a', 1]]));
    notUtilIsDeepStrict(new Map([['a', '1']]), new Map([['a', 2]]));

    utilIsDeepStrict(new Set([{}]), new Set([{}]));

    // Ref: https://github.com/nodejs/node/issues/13347
    notUtilIsDeepStrict(new Set([{a: 1}, {a: 1}]), new Set([{a: 1}, {a: 2}]));
    notUtilIsDeepStrict(new Set([{a: 1}, {a: 1}, {a: 2}]), new Set([{a: 1}, {a: 2}, {a: 2}]));
    notUtilIsDeepStrict(new Map([[{x: 1}, 5], [{x: 1}, 5]]), new Map([[{x: 1}, 5], [{x: 2}, 5]]));

    notUtilIsDeepStrict(new Set([3, '3']), new Set([3, 4]));
    notUtilIsDeepStrict(new Map([[3, 0], ['3', 0]]), new Map([[3, 0], [4, 0]]));

    notUtilIsDeepStrict(new Set([{a: 1}, {a: 1}, {a: 2}]), new Set([{a: 1}, {a: 2}, {a: 2}]));

    // Mixed primitive and object keys
    utilIsDeepStrict(new Map([[1, 'a'], [{}, 'a']]), new Map([[1, 'a'], [{}, 'a']]));
    utilIsDeepStrict(new Set([1, 'a', [{}, 'a']]), new Set([1, 'a', [{}, 'a']]));

    // This is an awful case, where a map contains multiple equivalent keys:
    notUtilIsDeepStrict(new Map([[1, 'a'], ['1', 'b']]), new Map([['1', 'a'], [true, 'b']]));
    notUtilIsDeepStrict(new Set(['a']), new Set(['b']));
    utilIsDeepStrict(new Map([[{}, 'a'], [{}, 'b']]), new Map([[{}, 'b'], [{}, 'a']]));
    notUtilIsDeepStrict(new Map([[true, 'a'], ['1', 'b'], [1, 'a']]), new Map([['1', 'a'], [1, 'b'], [true, 'a']]));
    notUtilIsDeepStrict(new Map([[true, 'a'], ['1', 'b'], [1, 'c']]), new Map([['1', 'a'], [1, 'b'], [true, 'a']]));

    // Similar object keys
    notUtilIsDeepStrict(new Set([{}, {}]), new Set([{}, 1]));
    notUtilIsDeepStrict(new Set([[{}, 1], [{}, 1]]), new Set([[{}, 1], [1, 1]]));
    notUtilIsDeepStrict(new Map([[{}, 1], [{}, 1]]), new Map([[{}, 1], [1, 1]]));
    notUtilIsDeepStrict(new Map([[{}, 1], [true, 1]]), new Map([[{}, 1], [1, 1]]));

    // Similar primitive key / values
    notUtilIsDeepStrict(new Set([1, true, false]), new Set(['1', 0, '0']));
    notUtilIsDeepStrict(new Map([[1, 5], [true, 5], [false, 5]]), new Map([['1', 5], [0, 5], ['0', 5]]));

    // Undefined value in Map
    utilIsDeepStrict(new Map([[1, undefined]]), new Map([[1, undefined]]));
    notUtilIsDeepStrict(new Map([[1, null]]), new Map([['1', undefined]]));
    notUtilIsDeepStrict(new Map([[1, undefined]]), new Map([[2, undefined]]));

    // null as key
    utilIsDeepStrict(new Map([[null, 3]]), new Map([[null, 3]]));
    notUtilIsDeepStrict(new Map([[null, undefined]]), new Map([[undefined, null]]));
    notUtilIsDeepStrict(new Set([null]), new Set([undefined]));
  });

  /* eslint-disable-next-line jest/expect-expect */
  it("issue GH-6416. Make sure circular refs don't throw", function() {
    expect.assertions(4);
    // GH-6416. Make sure circular refs don't throw.
    const b = {};
    b.b = b;
    const c = {};
    c.b = c;

    utilIsDeepStrict(b, c);

    const d = {};
    d.a = 1;
    d.b = d;
    const e = {};
    e.a = 1;
    e.b = {};

    notUtilIsDeepStrict(d, e);
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('issue GH-14441. Circular structures should be consistent', function() {
    expect.assertions(4);
    // GH-14441. Circular structures should be consistent
    {
      const a = {};
      const b = {};
      a.a = a;
      b.a = {};
      b.a.a = a;
      utilIsDeepStrict(a, b);
    }

    {
      const a = new Set();
      const b = new Set();
      const c = new Set();
      a.add(a);
      b.add(b);
      c.add(a);
      utilIsDeepStrict(b, c);
    }
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('issue GH-7178. Ensure reflexivity of deepEqual with `arguments` objects', function() {
    expect.assertions(2);
    // GH-7178. Ensure reflexivity of deepEqual with `arguments` objects.
    {
      const args = (function() {
        return arguments;
      })();
      notUtilIsDeepStrict([], args);
    }
  });

  it('more checking that arguments objects are handled correctly', function() {
    expect.assertions(27);
    // More checking that arguments objects are handled correctly
    {
      const returnArguments = function() {
        return arguments;
      };

      const someArgs = returnArguments('a');
      const sameArgs = returnArguments('a');
      const diffArgs = returnArguments('b');

      notUtilIsDeepStrict(someArgs, ['a']);
      notUtilIsDeepStrict(someArgs, {'0': 'a'});
      notUtilIsDeepStrict(someArgs, diffArgs);
      utilIsDeepStrict(someArgs, sameArgs);
    }

    {
      const values = [123, Infinity, 0, null, undefined, false, true, {}, [], () => {}];
      utilIsDeepStrict(new Set(values), new Set(values));
      utilIsDeepStrict(new Set(values), new Set(values.reverse()));

      const mapValues = values.map((v) => [v, {a: 5}]);
      utilIsDeepStrict(new Map(mapValues), new Map(mapValues));
      utilIsDeepStrict(new Map(mapValues), new Map(mapValues.reverse()));
    }

    {
      const s1 = new Set();
      const s2 = new Set();
      s1.add(1);
      s1.add(2);
      s2.add(2);
      s2.add(1);
      utilIsDeepStrict(s1, s2);
    }

    {
      const m1 = new Map();
      const m2 = new Map();
      const obj = {a: 5, b: 6};
      m1.set(1, obj);
      m1.set(2, 'hi');
      m1.set(3, [1, 2, 3]);

      m2.set(2, 'hi'); // different order
      m2.set(1, obj);
      m2.set(3, [1, 2, 3]); // Deep equal, but not reference equal.

      utilIsDeepStrict(m1, m2);
    }

    {
      const m1 = new Map();
      const m2 = new Map();

      // m1 contains itself.
      m1.set(1, m1);
      m2.set(1, new Map());

      notUtilIsDeepStrict(m1, m2);
    }

    {
      const map1 = new Map([[1, 1]]);
      const map2 = new Map([[1, '1']]);
      expect(isDeepStrictEqual(map1, map2)).toBe(false);
    }

    {
      // Two equivalent sets / maps with different key/values applied shouldn't be
      // the same. This is a terrible idea to do in practice, but deepEqual should
      // still check for it.
      const s1 = new Set();
      const s2 = new Set();
      s1.x = 5;
      notUtilIsDeepStrict(s1, s2);

      const m1 = new Map();
      const m2 = new Map();
      m1.x = 5;
      notUtilIsDeepStrict(m1, m2);
    }
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('circular references.', function() {
    expect.assertions(6);
    // Circular references.
    const s1 = new Set();
    s1.add(s1);
    const s2 = new Set();
    s2.add(s2);
    utilIsDeepStrict(s1, s2);

    const m1 = new Map();
    m1.set(2, m1);
    const m2 = new Map();
    m2.set(2, m2);
    utilIsDeepStrict(m1, m2);

    const m3 = new Map();
    m3.set(m3, 2);
    const m4 = new Map();
    m4.set(m4, 2);
    utilIsDeepStrict(m3, m4);
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('handle sparse arrays', function() {
    expect.assertions(4);
    // Handle sparse arrays
    // noinspection JSConsecutiveCommasInArrayLiteral
    utilIsDeepStrict([1, , , 3], [1, , , 3]); /* eslint-disable-line no-sparse-arrays */
    // noinspection JSConsecutiveCommasInArrayLiteral
    notUtilIsDeepStrict([1, , , 3], [1, , , 3, , ,]); /* eslint-disable-line no-sparse-arrays */
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('handle different error messages', function() {
    expect.assertions(6);
    // Handle different error messages
    const err1 = new Error('foo1');
    const err2 = new Error('foo2');
    const err3 = new TypeError('foo1');
    notUtilIsDeepStrict(err1, err2);
    notUtilIsDeepStrict(err1, err3);
    notUtilIsDeepStrict(err1, {});
  });

  it('handle NaN', function() {
    expect.assertions(3);
    // Handle NaN
    expect(isDeepStrictEqual(NaN, NaN)).toBe(true);
    expect(isDeepStrictEqual({a: NaN}, {a: NaN})).toBe(true);
    expect(isDeepStrictEqual([1, 2, NaN, 4], [1, 2, NaN, 4])).toBe(true);
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('handle boxed primitives', function() {
    expect.assertions(30);
    // Handle boxed primitives

    const boxedString = Object('test');
    /* eslint-disable-next-line symbol-description */
    const boxedSymbol = Object(Symbol());
    notUtilIsDeepStrict(Object(true), Object(false));
    notUtilIsDeepStrict(Object(true), Object(1));
    notUtilIsDeepStrict(Object(2), Object(1));
    /* eslint-disable-next-line symbol-description */
    notUtilIsDeepStrict(boxedSymbol, Object(Symbol()));
    notUtilIsDeepStrict(boxedSymbol, {});
    utilIsDeepStrict(boxedSymbol, boxedSymbol);
    utilIsDeepStrict(Object(true), Object(true));
    utilIsDeepStrict(Object(2), Object(2));
    utilIsDeepStrict(boxedString, Object('test'));
    boxedString.slow = true;
    notUtilIsDeepStrict(boxedString, Object('test'));
    boxedSymbol.slow = true;
    notUtilIsDeepStrict(boxedSymbol, {});

    const booleanish = Object(true);
    Object.defineProperty(booleanish, Symbol.toStringTag, {value: 'String'});
    Object.setPrototypeOf(booleanish, String.prototype);
    notUtilIsDeepStrict(booleanish, Object('true'));

    const numberish = Object(42);
    Object.defineProperty(numberish, Symbol.toStringTag, {value: 'String'});
    Object.setPrototypeOf(numberish, String.prototype);
    notUtilIsDeepStrict(numberish, Object('42'));

    const stringish = Object('0');
    Object.defineProperty(stringish, Symbol.toStringTag, {value: 'Number'});
    notUtilIsDeepStrict(stringish, Object(0));

    /* eslint-disable-next-line no-new-object */
    const symbolish = new Object(Symbol('fhqwhgads'));
    Object.defineProperty(symbolish, Symbol.toStringTag, {value: 'String'});
    Object.setPrototypeOf(symbolish, String.prototype);
    notUtilIsDeepStrict(symbolish, Object('fhqwhgads'));
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('minus zero', function() {
    expect.assertions(4);
    // Minus zero
    notUtilIsDeepStrict(0, -0);
    utilIsDeepStrict(-0, -0);
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('handle symbols (enumerable only)', function() {
    expect.assertions(14);
    // Handle symbols (enumerable only)
    /* eslint-disable-next-line symbol-description */
    const symbol1 = Symbol();
    const obj1 = {[symbol1]: 1};
    const obj2 = {[symbol1]: 1};
    /* eslint-disable-next-line symbol-description */
    const obj3 = {[Symbol()]: 1};
    const obj4 = {};
    // Add a non enumerable symbol as well. It is going to be ignored!
    /* eslint-disable-next-line symbol-description */
    Object.defineProperty(obj2, Symbol(), {value: 1});
    Object.defineProperty(obj4, symbol1, {value: 1});
    notUtilIsDeepStrict(obj1, obj3);
    utilIsDeepStrict(obj1, obj2);
    notUtilIsDeepStrict(obj1, obj4);
    // TypedArrays have a fast path. Test for this as well.
    const a = new Uint8Array(4);
    const b = new Uint8Array(4);
    a[symbol1] = true;
    b[symbol1] = false;
    notUtilIsDeepStrict(a, b);
    b[symbol1] = true;
    utilIsDeepStrict(a, b);
    // The same as TypedArrays is valid for boxed primitives
    const boxedStringA = Object('test');
    const boxedStringB = Object('test');
    boxedStringA[symbol1] = true;
    notUtilIsDeepStrict(boxedStringA, boxedStringB);
    boxedStringA[symbol1] = true;
    utilIsDeepStrict(a, b);
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('array buffer', function() {
    expect.assertions(8);
    utilIsDeepStrict(new ArrayBuffer(4), new ArrayBuffer(4));
    notUtilIsDeepStrict(new ArrayBuffer(4), new ArrayBuffer(8));
    notUtilIsDeepStrict(new ArrayBuffer(4), new DataView(new ArrayBuffer(4)));
    notUtilIsDeepStrict(new ArrayBuffer(4), new Int8Array(4));
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('data view', function() {
    expect.assertions(6);
    utilIsDeepStrict(new DataView(new ArrayBuffer(4)), new DataView(new ArrayBuffer(4)));
    notUtilIsDeepStrict(new DataView(new ArrayBuffer(4)), new DataView(new ArrayBuffer(8)));
    notUtilIsDeepStrict(new DataView(new ArrayBuffer(4)), new Int8Array(4));
  });

  describe('typed arrays', function() {
    it('an Int8Array', function() {
      expect.assertions(6);

      // Int8Array
      {
        const a = new Int8Array(4);
        const b = new Int8Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        const a = new Int8Array(4);
        const b = new Int8Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }

      {
        const a = new Int8Array(4);
        const b = [];
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });

    it('an Uint8Array', function() {
      expect.assertions(6);
      // Uint8Array
      {
        const a = new Uint8Array(4);
        const b = new Uint8Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        const a = new Uint8Array(4);
        const b = new Uint8Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }

      {
        const a = new Uint8Array(4);
        const b = [];
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });

    it('an Uint8ClampedArray', function() {
      expect.assertions(6);
      // Uint8ClampedArray
      {
        const a = new Uint8ClampedArray(4);
        const b = new Uint8ClampedArray(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        const a = new Uint8ClampedArray(4);
        const b = new Uint8ClampedArray(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }

      {
        const a = new Uint8ClampedArray(4);
        const b = [];
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });

    it('an Int16Array', function() {
      expect.assertions(6);
      // Int16Array
      {
        const a = new Int16Array(4);
        const b = new Int16Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        const a = new Int16Array(4);
        const b = new Int16Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }

      {
        const a = new Int16Array(4);
        const b = [];
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });

    it('an Uint16Array', function() {
      expect.assertions(6);
      // Uint16Array
      {
        const a = new Uint16Array(4);
        const b = new Uint16Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        const a = new Uint16Array(4);
        const b = new Uint16Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }

      {
        const a = new Uint16Array(4);
        const b = [];
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });

    it('an Int32Array', function() {
      expect.assertions(6);
      // Int32Array
      {
        const a = new Int32Array(4);
        const b = new Int32Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        const a = new Int32Array(4);
        const b = new Int32Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }

      {
        const a = new Int32Array(4);
        const b = [];
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });

    it('an Uint32Array', function() {
      expect.assertions(6);
      // Uint32Array
      {
        const a = new Uint32Array(4);
        const b = new Uint32Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        const a = new Uint32Array(4);
        const b = new Uint32Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }

      {
        const a = new Uint32Array(4);
        const b = [];
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });

    it('an Float32Array', function() {
      expect.assertions(6);
      // Float32Array
      {
        const a = new Float32Array(4);
        const b = new Float32Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        const a = new Float32Array(4);
        const b = new Float32Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }

      {
        const a = new Float32Array(4);
        const b = [];
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });

    it('an Float64Array', function() {
      expect.assertions(6);
      // Float64Array
      {
        const a = new Float64Array(4);
        const b = new Float64Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        const a = new Float64Array(4);
        const b = new Float64Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }

      {
        const a = new Float64Array(4);
        const b = [];
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });
  });

  describe('bigint', function() {
    itBigInt('bigint', function() {
      expect.assertions(6);
      /* eslint-disable-next-line babel/new-cap,no-undef */
      utilIsDeepStrict(Object(BigInt(1)), Object(BigInt(1)));
      /* eslint-disable-next-line babel/new-cap,no-undef */
      notUtilIsDeepStrict(Object(BigInt(1)), Object(BigInt(2)));

      /* eslint-disable-next-line babel/new-cap,no-undef,no-new-object */
      const bigintish = new Object(BigInt(42));
      Object.defineProperty(bigintish, Symbol.toStringTag, {value: 'String'});
      Object.setPrototypeOf(bigintish, String.prototype);
      notUtilIsDeepStrict(bigintish, Object('42'));
    });

    itBigInt('an BigInt64Array', function() {
      expect.assertions(4);
      // BigInt64Array
      {
        /* eslint-disable-next-line no-undef */
        const a = new BigInt64Array(4);
        /* eslint-disable-next-line no-undef */
        const b = new BigInt64Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        /* eslint-disable-next-line no-undef */
        const a = new BigInt64Array(4);
        /* eslint-disable-next-line no-undef */
        const b = new BigInt64Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });

    itBigInt('an BigUint64Array', function() {
      expect.assertions(4);
      // BigUint64Array
      {
        /* eslint-disable-next-line no-undef */
        const a = new BigUint64Array(4);
        /* eslint-disable-next-line no-undef */
        const b = new BigUint64Array(4);
        expect(isDeepStrictEqual(a, b)).toBe(true);
        expect(isDeepStrictEqual(b, a)).toBe(true);
      }

      {
        /* eslint-disable-next-line no-undef */
        const a = new BigUint64Array(4);
        /* eslint-disable-next-line no-undef */
        const b = new BigUint64Array(8);
        expect(isDeepStrictEqual(a, b)).toBe(false);
        expect(isDeepStrictEqual(b, a)).toBe(false);
      }
    });
  });
});
