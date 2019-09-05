/*!
{
  "copywrite": "Copyright (c) 2015-2017",
  "date": "2019-09-05T20:42:51.208Z",
  "describe": "",
  "description": "node's isDeepStrictEqual algorithm.",
  "file": "is-deep-strict-equal-x.js",
  "hash": "f67dbd644bd5412273cf",
  "license": "MIT",
  "version": "1.1.2"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["isDeepStrictEqualX"] = factory();
	else
		root["isDeepStrictEqualX"] = factory();
})((function () {
  'use strict';

  var ObjectCtr = {}.constructor;
  var objectPrototype = ObjectCtr.prototype;
  var defineProperty = ObjectCtr.defineProperty;
  var $globalThis;
  var getGlobalFallback = function() {
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    return void 0;
  };

  var returnThis = function() {
    return this;
  };

  try {
    if (defineProperty) {
      defineProperty(objectPrototype, '$$globalThis$$', {
        get: returnThis,
        configurable: true
      });
    } else {
      objectPrototype.__defineGetter__('$$globalThis$$', returnThis);
    }

    $globalThis = typeof $$globalThis$$ === 'undefined' ? getGlobalFallback() : $$globalThis$$;

    delete objectPrototype.$$globalThis$$;

    return $globalThis;
  } catch (error) {
    return getGlobalFallback();
  }
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(14)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var boolToStr = Boolean.prototype.toString;

var tryBooleanObject = function tryBooleanObject(value) {
	try {
		boolToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryBooleanObject(value) : toStr.call(value) === boolClass;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof BigInt === 'function') {
	var bigIntValueOf = BigInt.prototype.valueOf;
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') { // eslint-disable-line valid-typeof
			return true;
		}

		return tryBigInt(value);
	};
} else {
	module.exports = function isBigInt(value) {
		return  false && false;
	};
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__(10);
var bind = __webpack_require__(16);

var toStr = bind.call(Function.call, Object.prototype.toString);
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var typedArrays = [
	'Float32Array',
	'Float64Array',
	'Int8Array',
	'Int16Array',
	'Int32Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Uint16Array',
	'Uint32Array',
	'BigInt64Array',
	'BigUint64Array'
];

var slice = bind.call(Function.call, String.prototype.slice);
var toStrTags = {};
var gOPD = Object.getOwnPropertyDescriptor;
if (hasToStringTag && gOPD && Object.getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof global[typedArray] === 'function') {
			var arr = new global[typedArray]();
			if (!(Symbol.toStringTag in arr)) {
				throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
			}
			var proto = Object.getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = Object.getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __webpack_require__(18);

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag) { return slice(toStr(value), 8, -1); }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function arraybufferEqual (buf1, buf2) {
  if (buf1 === buf2) {
    return true;
  }

  if (buf1.byteLength !== buf2.byteLength) {
    return false;
  }

  var view1 = new DataView(buf1);
  var view2 = new DataView(buf2);

  var i = buf1.byteLength;
  while (i--) {
    if (view1.getUint8(i) !== view2.getUint8(i)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isString = __webpack_require__(0);
var isNumber = __webpack_require__(5);
var isBoolean = __webpack_require__(2);
var isSymbol = __webpack_require__(1);
var isBigInt = __webpack_require__(3);

module.exports = function isBoxedPrimitive(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}

	return isString(value) || isNumber(value) || isBoolean(value) || isSymbol(value) || isBigInt(value);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(11);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(19);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(15);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(17);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__(10);

var toStr = Object.prototype.toString;
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var typedArrays = [
	'Float32Array',
	'Float64Array',
	'Int8Array',
	'Int16Array',
	'Int32Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Uint16Array',
	'Uint32Array',
	'BigInt64Array',
	'BigUint64Array'
];

var slice = String.prototype.slice;
var toStrTags = {};
var gOPD = Object.getOwnPropertyDescriptor;
if (hasToStringTag && gOPD && Object.getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof global[typedArray] === 'function') {
			var arr = new global[typedArray]();
			if (!(Symbol.toStringTag in arr)) {
				throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
			}
			var proto = Object.getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = Object.getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) { return typedArrays.indexOf(slice.call(toStr.call(value), 8, -1)) > -1; }
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(11); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
var isNil = function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
};

/* harmony default export */ var is_nil_x_esm = (isNil);


// CONCATENATED MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

var require_object_coercible_x_esm_requireObjectCoercible = function requireObjectCoercible(value) {
  if (is_nil_x_esm(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
};

/* harmony default export */ var require_object_coercible_x_esm = (require_object_coercible_x_esm_requireObjectCoercible);


// CONCATENATED MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

var to_object_x_esm_toObject = function toObject(value) {
  return castObject(require_object_coercible_x_esm(value));
};

/* harmony default export */ var to_object_x_esm = (to_object_x_esm_toObject);


// CONCATENATED MODULE: ./node_modules/is-primitive-x/dist/is-primitive-x.esm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Returns true if the value is a primitive.
 *
 * @param {*} [val] - The value to test.
 * @returns {boolean} True if a primitive, otherwise false..
 */
var isPrimitive = function isPrimitive(val) {
  return _typeof(val) === 'object' ? val === null : typeof val !== 'function';
};

/* harmony default export */ var is_primitive_x_esm = (isPrimitive);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(0);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var has_boxed_string_x_esm_string = 'a';
var boxedString = {}.constructor(has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === has_boxed_string_x_esm_string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// CONCATENATED MODULE: ./node_modules/noop-x/dist/noop-x.esm.js
/**
 * This method returns undefined.
 *
 * @returns {undefined} Always undefined.
 */
var noop = function noop() {};
/* eslint-disable-line lodash/prefer-noop */


/* harmony default export */ var noop_x_esm = (noop);


// CONCATENATED MODULE: ./node_modules/has-working-bind-x/dist/has-working-bind-x.esm.js

var has_working_bind_x_esm_bind = noop_x_esm.bind;

var has_working_bind_x_esm_test1 = function test1() {
  var a1 = null;
  var a2 = null;
  var context = null;
  var testThis = [];

  var test1Fn = function test1Fn(arg1, arg2) {
    /* eslint-disable-next-line babel/no-invalid-this */
    context = this;
    a1 = arg1;
    a2 = arg2;
    /* eslint-disable-next-line prefer-rest-params */

    return arguments;
  };

  try {
    var boundFn = has_working_bind_x_esm_bind.apply(test1Fn, [testThis, 1]);
    var args = boundFn(2);
    return boundFn.length === 1 && args.length === 2 && a1 === 1 && a2 === 2 && context === testThis;
  } catch (e) {
    return false;
  }
};

var has_working_bind_x_esm_test2 = function test2() {
  var a1 = null;
  var a2 = null;
  var context = null;
  var oracle = [1, 2, 3];

  var Ctr = function Ctr(arg1, arg2) {
    a1 = arg1;
    a2 = arg2;
    context = this;
    return oracle;
  };

  try {
    var BoundFn = has_working_bind_x_esm_bind.apply(Ctr, [null]);
    var returned = new BoundFn(1, 2);
    return BoundFn.length === Ctr.length && returned === oracle && a1 === 1 && a2 === 2 && context !== oracle;
  } catch (e) {
    return false;
  }
};
/**
 * Indicates if the engine has a working bind function.
 *
 * @type {boolean}
 */


var isWorking = typeof has_working_bind_x_esm_bind === 'function' && has_working_bind_x_esm_test1() && has_working_bind_x_esm_test2();
/* harmony default export */ var has_working_bind_x_esm = (isWorking);


// CONCATENATED MODULE: ./node_modules/util-pusher-x/dist/util-pusher-x.esm.js




var EMPTY_STRING = '';
var split = EMPTY_STRING.split;
var util_pusher_x_esm_max = Math.max;
var util_pusher_x_esm_bind = is_primitive_x_esm.bind,
    util_pusher_x_esm_call = is_primitive_x_esm.call;
var stringSplit = function stringSplit(string, pattern) {
  // noinspection JSUnresolvedFunction
  return split.call(string, pattern);
};
var $split = has_working_bind_x_esm ? util_pusher_x_esm_bind.call(util_pusher_x_esm_call, split) : stringSplit;
var util_pusher_x_esm_getIterable = function getIterable(arrayLike) {
  // noinspection JSUnresolvedFunction
  return is_string_default()(arrayLike) ? $split(arrayLike, EMPTY_STRING) : arrayLike;
}; // eslint-disable jsdoc/no-undefined-types
// noinspection JSCommentMatchesSignature

/**
 * This pushes or concatenates into a new or existing array.
 *
 * @param {Array} arrayLike - The source.
 * @param {number} [from=0] - The from source index.
 * @param {Array} [target=[]] - The target array.
 * @returns {*} The target array.
 */
// eslint-enable jsdoc/no-undefined-types

var util_pusher_x_esm_pusher = function pusher(arrayLike, from) {
  /* eslint-disable-next-line prefer-rest-params */
  var target = arguments.length > 2 ? arguments[2] : [];

  if (typeof arrayLike !== 'string' && is_primitive_x_esm(arrayLike)) {
    return target;
  }

  var iterable = has_boxed_string_x_esm ? arrayLike : util_pusher_x_esm_getIterable(arrayLike);
  var length = iterable.length;

  for (var i = util_pusher_x_esm_max(0, from) || 0; i < length; i += 1) {
    target[target.length] = arrayLike[i];
  }

  return target;
};

/* harmony default export */ var util_pusher_x_esm = (util_pusher_x_esm_pusher);


// CONCATENATED MODULE: ./node_modules/simple-bind-x/dist/simple-bind-x.esm.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var nativeBind = util_pusher_x_esm.bind,
    simple_bind_x_esm_call = util_pusher_x_esm.call;
var ERROR_MESSAGE = 'bind called on incompatible ';
var simple_bind_x_esm_object = {};
var ObjectCtr = simple_bind_x_esm_object.constructor;
var toStringTag = simple_bind_x_esm_object.toString;
var funcType = '[object Function]';
var ZERO = 0;
var argsOffset = 2;

var getMax = function getMax(a, b) {
  return a >= b ? a : b;
};

var simple_bind_x_esm_assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && toStringTag.apply(value) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + value);
  }
};

var boundFns = [function zero(binder) {
  return function boundFn() {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments));
  };
}, function one(binder, boundLength) {
  return function boundFn(a) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a]));
  };
}, function two(binder, boundLength) {
  return function boundFn(a, b) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b]));
  };
}, function three(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c]));
  };
}, function four(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d]));
  };
}, function five(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e]));
  };
}, function six(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e, f) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e, f]));
  };
}, function seven(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e, f, g) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e, f, g]));
  };
}, function eight(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e, f, g, h) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e, f, g, h]));
  };
}];

var getBoundFn = function getBoundFn(args) {
  var _args = _slicedToArray(args, 3),
      binder = _args[0],
      target = _args[1],
      bindArgs = _args[2];

  var boundLength = getMax(ZERO, target.length - getMax(ZERO, bindArgs.length - argsOffset));
  var fn = boundFns[boundLength];
  var boundFn = fn ? fn(binder, boundLength) : boundFns[ZERO](binder);

  if (target.prototype) {
    /* eslint-disable-next-line lodash/prefer-noop */
    var Empty = function Empty() {};

    Empty.prototype = target.prototype;
    boundFn.prototype = new Empty();
    Empty.prototype = null;
  }

  return boundFn;
};

var simple_bind_x_esm_getResult = function getResult(target, boundArgs) {
  /* eslint-disable-next-line babel/no-invalid-this */
  var result = target.apply(this, boundArgs);
  /* eslint-disable-next-line babel/no-invalid-this,babel/new-cap */

  return ObjectCtr(result) === result ? result : this;
};

var implementation = function bind(target, thisArg) {
  simple_bind_x_esm_assertIsFunction(target);
  /* eslint-disable-next-line prefer-rest-params */

  var bindArgs = arguments;
  var bound;

  var binder = function binder() {
    /* eslint-disable-next-line prefer-rest-params */
    var boundArgs = util_pusher_x_esm(arguments, ZERO, util_pusher_x_esm(bindArgs, argsOffset));
    /* eslint-disable-next-line babel/no-invalid-this */

    return this instanceof bound ? simple_bind_x_esm_getResult.apply(this, [target, boundArgs]) : target.apply(thisArg, boundArgs);
  };

  bound = getBoundFn([binder, target, bindArgs]);
  return bound;
};
/**
 * The bind() method creates a new function that, when called, has its this
 * keyword set to the provided value, with a given sequence of arguments
 * preceding any provided when the new function is called.
 *
 * @function bind
 * @param {Function} target - The target function.
 * @param {*} [thisArg] - The value to be passed as the this parameter to the target
 *  function when the bound function is called. The value is ignored if the
 *  bound function is constructed using the new operator.
 * @param {...*} [args] - Arguments to prepend to arguments provided to the bound
 *  function when invoking the target function.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The bound function.
 */

var $bind = has_working_bind_x_esm ? simple_bind_x_esm_call.bind(nativeBind) : implementation;
/* harmony default export */ var simple_bind_x_esm = ($bind);


// CONCATENATED MODULE: ./node_modules/simple-call-x/dist/simple-call-x.esm.js


var $TypeError = TypeError;
var nativeApply = simple_bind_x_esm.apply,
    nativeCall = simple_bind_x_esm.call;
var $apply = simple_bind_x_esm(nativeCall, nativeApply);
var simple_call_x_esm_toStringTag = simple_bind_x_esm(nativeApply, {}.toString);
var simple_call_x_esm_ERROR_MESSAGE = ' is not a function';
var simple_call_x_esm_funcType = '[object Function]';

var simple_call_x_esm_assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && simple_call_x_esm_toStringTag(value) !== simple_call_x_esm_funcType) {
    throw new $TypeError(value + simple_call_x_esm_ERROR_MESSAGE);
  }

  return value;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The abstract operation Call is used to call the [[Call]] internal method of a function object.
 *
 * @function call
 * @param {Function} F - The target function.
 * @param {*} [V] - The context.
 * @param {Array} [args] - Argument to call the function with.
 * @throws {TypeError} If target is not a function.
 * @returns {*} The the result of invoking the function.
 * @see https://www.ecma-international.org/ecma-262/6.0/#sec-call
 */
// eslint-enable jsdoc/check-param-names


var simple_call_x_esm_call = function call(F, V) {
  /* eslint-disable-next-line prefer-rest-params */
  return $apply(simple_call_x_esm_assertIsFunction(F), V, util_pusher_x_esm(arguments[2]));
};

/* harmony default export */ var simple_call_x_esm = (simple_call_x_esm_call);


// CONCATENATED MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js

 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @function attempt
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
// eslint-disable jsdoc/check-param-names

var attempt_x_esm_attempt = function attempt(fn) {
  try {
    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      value: simple_call_x_esm(fn, this, util_pusher_x_esm(arguments, 1))
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};

/* harmony default export */ var attempt_x_esm = (attempt_x_esm_attempt);


// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(1);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm_this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = attempt_x_esm(function () {
  _newArrowCheck(this, has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_esm = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(4);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// CONCATENATED MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
var toBoolean = function toBoolean(value) {
  return !!value;
};

/* harmony default export */ var to_boolean_x_esm = (toBoolean);


// CONCATENATED MODULE: ./node_modules/simple-methodize-x/dist/simple-methodize-x.esm.js


var simple_methodize_x_esm_toStringTag = {}.toString;
var simple_methodize_x_esm_ERROR_MESSAGE = 'methodize called on incompatible ';
var simple_methodize_x_esm_funcType = '[object Function]';

var simple_methodize_x_esm_assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && simple_call_x_esm(simple_methodize_x_esm_toStringTag, value) !== simple_methodize_x_esm_funcType) {
    throw new TypeError(simple_methodize_x_esm_ERROR_MESSAGE + value);
  }

  return value;
};
/**
 * Methodize a prototype method. Compliant to 8 arguments.
 *
 * @param {Function} prototypeMethod - The prototype method to methodize.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The static method.
 */


var simple_methodize_x_esm_methodize = function methodize(prototypeMethod) {
  simple_methodize_x_esm_assertIsFunction(prototypeMethod);
  return function methodized() {
    /* eslint-disable-next-line prefer-rest-params */
    return simple_call_x_esm(prototypeMethod, arguments[0], util_pusher_x_esm(arguments, 1));
  };
};

/* harmony default export */ var simple_methodize_x_esm = (simple_methodize_x_esm_methodize);


// CONCATENATED MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js

var methodizedToString = simple_methodize_x_esm({}.toString);
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

var to_string_tag_x_esm_toStringTag = function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return methodizedToString(value);
};

/* harmony default export */ var to_string_tag_x_esm = (to_string_tag_x_esm_toStringTag);


// CONCATENATED MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_esm = (has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js

var to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

var to_string_x_esm_ToString = function ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_string_x_esm_ERROR_MESSAGE);
  }

  return castString(value);
};

/* harmony default export */ var to_string_x_esm = (to_string_x_esm_ToString);


// CONCATENATED MODULE: ./node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

var require_coercible_to_string_x_esm_requireCoercibleToString = function requireCoercibleToString(value) {
  return to_string_x_esm(require_object_coercible_x_esm(value));
};

/* harmony default export */ var require_coercible_to_string_x_esm = (require_coercible_to_string_x_esm_requireCoercibleToString);


// CONCATENATED MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var white_space_x_esm_length = list.length;

for (var white_space_x_esm_i = 0; white_space_x_esm_i < white_space_x_esm_length; white_space_x_esm_i += 1) {
  if (list[white_space_x_esm_i].es2016) {
    stringES2016 += list[white_space_x_esm_i].string;
  }

  if (list[white_space_x_esm_i].es2018) {
    stringES2018 += list[white_space_x_esm_i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ var white_space_x_esm = (string2018);
var string2016 = stringES2016;


// CONCATENATED MODULE: ./node_modules/trim-left-x/dist/trim-left-x.esm.js



var trim_left_x_esm_EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft = new RegExpCtr("^[".concat(white_space_x_esm, "]+"));
var methodizedReplace = simple_methodize_x_esm(trim_left_x_esm_EMPTY_STRING.replace);
/**
 * This method removes whitespace from the start of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

var trim_left_x_esm_trimStart = function trimStart(string) {
  return methodizedReplace(require_coercible_to_string_x_esm(string), reLeft, trim_left_x_esm_EMPTY_STRING);
};

/* harmony default export */ var trim_left_x_esm = (trim_left_x_esm_trimStart);


// CONCATENATED MODULE: ./node_modules/trim-right-x/dist/trim-right-x.esm.js



var trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_esm_RegExpCtr = /none/.constructor;
var reRight = new trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+$"));
var trim_right_x_esm_methodizedReplace = simple_methodize_x_esm(trim_right_x_esm_EMPTY_STRING.replace);
/**
 * This method removes whitespace from the end of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

var trim_right_x_esm_trimEnd = function trimEnd(string) {
  return trim_right_x_esm_methodizedReplace(require_coercible_to_string_x_esm(string), reRight, trim_right_x_esm_EMPTY_STRING);
};

/* harmony default export */ var trim_right_x_esm = (trim_right_x_esm_trimEnd);


// CONCATENATED MODULE: ./node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the start and end of a string.
 * (ES2019).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

var trim_x_esm_trim = function trim(string) {
  return trim_left_x_esm(trim_right_x_esm(string));
};

/* harmony default export */ var trim_x_esm = (trim_x_esm_trim);


// CONCATENATED MODULE: ./node_modules/normalize-space-x/dist/normalize-space-x.esm.js



var SPACE = ' ';
var normalize_space_x_esm_RegExpCtr = /none/.constructor;
var reNormalize = new normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+"), 'g');
var normalize_space_x_esm_methodizedReplace = simple_methodize_x_esm(SPACE.replace);
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2019).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

var normalize_space_x_esm_normalizeSpace = function normalizeSpace(string) {
  return normalize_space_x_esm_methodizedReplace(trim_x_esm(string), reNormalize, SPACE);
};

/* harmony default export */ var normalize_space_x_esm = (normalize_space_x_esm_normalizeSpace);


// CONCATENATED MODULE: ./node_modules/replace-comments-x/dist/replace-comments-x.esm.js



var replace_comments_x_esm_EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_esm_methodizedReplace = simple_methodize_x_esm(replace_comments_x_esm_EMPTY_STRING.replace);
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

var replace_comments_x_esm_replaceComments = function replaceComments(string, replacement) {
  return replace_comments_x_esm_methodizedReplace(require_coercible_to_string_x_esm(string), STRIP_COMMENTS, arguments.length > 1 ? to_string_x_esm(replacement) : replace_comments_x_esm_EMPTY_STRING);
};

/* harmony default export */ var replace_comments_x_esm = (replace_comments_x_esm_replaceComments);


// CONCATENATED MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js








var FunctionCtr = attempt_x_esm.constructor;
var is_function_x_esm_SPACE = ' ';
var methodizedFunctionToString = simple_methodize_x_esm(attempt_x_esm.toString);
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var methodizedTest = simple_methodize_x_esm(ctrRx.test);
var hasNativeClass = attempt_x_esm(function attemptee() {
  /* eslint-disable-next-line babel/new-cap */
  return FunctionCtr('"use strict"; return class My {};')();
}).threw === false;

var is_function_x_esm_testClassString = function testClassString(value) {
  return methodizedTest(ctrRx, normalize_space_x_esm(replace_comments_x_esm(methodizedFunctionToString(value), is_function_x_esm_SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt_x_esm(is_function_x_esm_testClassString, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_esm(function attemptee() {
    return methodizedFunctionToString(value);
  }).threw === false;
};

var is_function_x_esm_compareTags = function compareTags(value) {
  var strTag = to_string_tag_x_esm(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_esm_isFunction = function isFunction(value, allowClass) {
  if (is_primitive_x_esm(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm) {
    return tryFuncToString(value, to_boolean_x_esm(allowClass));
  }

  if (hasNativeClass && to_boolean_x_esm(allowClass) === false && isES6ClassFn(value)) {
    return false;
  }

  return is_function_x_esm_compareTags(value);
};

/* harmony default export */ var is_function_x_esm = (is_function_x_esm_isFunction);


// CONCATENATED MODULE: ./node_modules/to-primitive-x/dist/to-primitive-x.esm.js








var to_primitive_x_esm_ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void to_primitive_x_esm_ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
var StringCtr = STRING.constructor;
var NumberCtr = to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x_esm && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var assertHint = function assertHint(hint) {
  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  return hint;
};
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_ordinaryToPrimitive = function ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_esm(ordinary);
  assertHint(hint);
  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;

  for (var i = to_primitive_x_esm_ZERO; i < orderLength; i += ONE) {
    var method = ordinary[methodNames[i]];

    if (is_function_x_esm(method)) {
      var result = simple_call_x_esm(method, ordinary);

      if (is_primitive_x_esm(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var to_primitive_x_esm_getMethod = function getMethod(object, property) {
  var func = object[property];

  if (is_nil_x_esm(func) === false) {
    if (is_function_x_esm(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_esm) {
    if (symToPrimitive) {
      return to_primitive_x_esm_getMethod(value, symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};

var to_primitive_x_esm_evalExotic = function evalExotic(obj) {
  var exoticToPrim = obj.exoticToPrim,
      input = obj.input,
      hint = obj.hint;
  var result = simple_call_x_esm(exoticToPrim, input, [hint]);

  if (is_primitive_x_esm(result)) {
    return result;
  }

  throw new TypeError('unable to convert exotic object to primitive');
};

var to_primitive_x_esm_evalPrimitive = function evalPrimitive(input, hint) {
  var newHint = hint === DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? STRING : hint;
  return to_primitive_x_esm_ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {Function} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


var to_primitive_x_esm_toPrimitive = function toPrimitive(input, preferredType) {
  if (is_primitive_x_esm(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = to_primitive_x_esm_getExoticToPrim(input);
  return typeof exoticToPrim === 'undefined' ? to_primitive_x_esm_evalPrimitive(input, hint) : to_primitive_x_esm_evalExotic({
    exoticToPrim: exoticToPrim,
    input: input,
    hint: hint
  });
};

/* harmony default export */ var to_primitive_x_esm = (to_primitive_x_esm_toPrimitive);


// CONCATENATED MODULE: ./node_modules/to-property-key-x/dist/to-property-key-x.esm.js
function to_property_key_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { to_property_key_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { to_property_key_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return to_property_key_x_esm_typeof(obj); }




/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|symbol} The converted argument.
 */

var to_property_key_x_esm_toPropertyKey = function toPropertyKey(argument) {
  var key = to_primitive_x_esm(argument, String);
  return has_symbol_support_x_esm && to_property_key_x_esm_typeof(key) === 'symbol' ? key : to_string_x_esm(key);
};

/* harmony default export */ var to_property_key_x_esm = (to_property_key_x_esm_toPropertyKey);


// CONCATENATED MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js



var hop = simple_methodize_x_esm({}.hasOwnProperty);
/**
 * The `hasOwnProperty` method returns a boolean indicating whether
 * the `object` has the specified `property`. Does not attempt to fix known
 * issues in older browsers, but does ES6ify the method.
 *
 * @param {!object} object - The object to test.
 * @throws {TypeError} If object is null or undefined.
 * @param {string|number|symbol} property - The name or Symbol of the property to test.
 * @returns {boolean} `true` if the property is set on `object`, else `false`.
 */

var has_own_property_x_esm_hasOwnProperty = function hasOwnProperty(object, property) {
  return hop(to_object_x_esm(object), to_property_key_x_esm(property));
};

/* harmony default export */ var has_own_property_x_esm = (has_own_property_x_esm_hasOwnProperty);


// CONCATENATED MODULE: ./node_modules/property-is-enumerable-x/dist/property-is-enumerable-x.esm.js



var propIsEnumerable = simple_methodize_x_esm({}.propertyIsEnumerable);
/**
 * This method returns a Boolean indicating whether the specified property is
 * enumerable. Does not attempt to fix bugs in IE<9 or old Opera, otherwise it
 * does ES6ify the method.
 *
 * @param {!object} object - The object on which to test the property.
 * @param {string|symbol} property - The name of the property to test.
 * @throws {TypeError} If target is null or undefined.
 * @returns {boolean} A Boolean indicating whether the specified property is
 *  enumerable.
 */

var property_is_enumerable_x_esm_propertyIsEnumerable = function propertyIsEnumerable(object, property) {
  return propIsEnumerable(to_object_x_esm(object), to_property_key_x_esm(property));
};

/* harmony default export */ var property_is_enumerable_x_esm = (property_is_enumerable_x_esm_propertyIsEnumerable);


// CONCATENATED MODULE: ./node_modules/is-object-like-x/dist/is-object-like-x.esm.js


/**
 * Checks if `value` is object-like. A value is object-like if it's not a
 * primitive and not a function.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */

var is_object_like_x_esm_isObjectLike = function isObjectLike(value) {
  return is_primitive_x_esm(value) === false && is_function_x_esm(value, true) === false;
};

/* harmony default export */ var is_object_like_x_esm = (is_object_like_x_esm_isObjectLike);


// CONCATENATED MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
var is_nan_x_esm_isNaN = function isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
};

/* harmony default export */ var is_nan_x_esm = (is_nan_x_esm_isNaN);


// CONCATENATED MODULE: ./node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
var constantInfinity = 1 / 0;
/* harmony default export */ var infinity_x_esm = (constantInfinity);


// CONCATENATED MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

var is_finite_x_esm_isFinite = function isFinite(number) {
  return typeof number === 'number' && is_nan_x_esm(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
};

/* harmony default export */ var is_finite_x_esm = (is_finite_x_esm_isFinite);


// CONCATENATED MODULE: ./node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
var constantNAN = 0 / 0;
/* harmony default export */ var nan_x_esm = (constantNAN);


// CONCATENATED MODULE: ./node_modules/parse-int-x/dist/parse-int-x.esm.js




var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor;
var BAD_CHAR = "\u180E";
var methodizedCharAt = simple_methodize_x_esm(BAD_CHAR.charAt);
var hexRegex = /^[-+]?0[xX]/;
var parse_int_x_esm_methodizedTest = simple_methodize_x_esm(hexRegex.test);
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2019).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

var parse_int_x_esm_$parseInt = function $parseInt(string, radix) {
  var str = trim_left_x_esm(to_string_x_esm(string));

  if (methodizedCharAt(str, 0) === BAD_CHAR) {
    return nan_x_esm;
  }

  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_methodizedTest(hexRegex, str) ? 16 : 10));
};

/* harmony default export */ var parse_int_x_esm = (parse_int_x_esm_$parseInt);


// CONCATENATED MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js






var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
var to_number_x_esm_castNumber = testCharsCount.constructor;
var methodizedStringSlice = simple_methodize_x_esm(to_number_x_esm_ERROR_MESSAGE.slice);
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_esm_methodizedTest = simple_methodize_x_esm(binaryRegex.test);

var isBinary = function isBinary(value) {
  return to_number_x_esm_methodizedTest(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function isOctal(value) {
  return to_number_x_esm_methodizedTest(octalRegex, value);
};

var nonWSregex = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS = function hasNonWS(value) {
  return to_number_x_esm_methodizedTest(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function isInvalidHexLiteral(value) {
  return to_number_x_esm_methodizedTest(invalidHexLiteral, value);
};

var to_number_x_esm_assertNotSymbol = function assertNotSymbol(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  return value;
};

var to_number_x_esm_parseBase = function parseBase(value, radix) {
  return parse_int_x_esm(methodizedStringSlice(value, testCharsCount), radix);
};

var parseString = function parseString(toNum, value) {
  if (isBinary(value)) {
    return toNum(to_number_x_esm_parseBase(value, binaryRadix));
  }

  if (isOctal(value)) {
    return toNum(to_number_x_esm_parseBase(value, octalRadix));
  }

  return null;
};

var to_number_x_esm_convertString = function convertString(toNum, value) {
  var val = parseString(toNum, value);

  if (val !== null) {
    return val;
  }

  if (hasNonWS(value) || isInvalidHexLiteral(value)) {
    return nan_x_esm;
  }

  var trimmed = trim_x_esm(value);

  if (trimmed !== value) {
    return toNum(trimmed);
  }

  return null;
};
/**
 * This method converts argument to a value of type Number. (ES2019).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


var to_number_x_esm_toNumber = function toNumber(argument) {
  var value = to_number_x_esm_assertNotSymbol(to_primitive_x_esm(argument, to_number_x_esm_castNumber));

  if (typeof value === 'string') {
    var val = to_number_x_esm_convertString(toNumber, value);

    if (val !== null) {
      return val;
    }
  }

  return to_number_x_esm_castNumber(value);
};

/* harmony default export */ var to_number_x_esm = (to_number_x_esm_toNumber);


// CONCATENATED MODULE: ./node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2019).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

var math_sign_x_esm_sign = function sign(x) {
  var n = to_number_x_esm(x);

  if (n === 0 || is_nan_x_esm(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

/* harmony default export */ var math_sign_x_esm = (math_sign_x_esm_sign);


// CONCATENATED MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var to_integer_x_esm_toInteger = function toInteger(value) {
  var number = to_number_x_esm(value);

  if (is_nan_x_esm(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm(number) === false) {
    return number;
  }

  return math_sign_x_esm(number) * floor(abs(number));
};

/* harmony default export */ var to_integer_x_esm = (to_integer_x_esm_toInteger);


// CONCATENATED MODULE: ./node_modules/is-integer-x/dist/is-integer-x.esm.js


/**
 * This method determines whether the passed value is an integer.
 *
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is an integer.
 */

var is_integer_x_esm_isInteger = function isInteger(value) {
  return is_finite_x_esm(value) && to_integer_x_esm(value) === value;
};

/* harmony default export */ var is_integer_x_esm = (is_integer_x_esm_isInteger);


// CONCATENATED MODULE: ./node_modules/is-safe-integer-x/dist/is-safe-integer-x.esm.js

var MAX_SAFE_INTEGER = 9007199254740991;
var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;
/**
 * This method determines whether the passed value is a safe integer.
 *
 * Can be exactly represented as an IEEE-754 double precision number, and
 * whose IEEE-754 representation cannot be the result of rounding any other
 * integer to fit the IEEE-754 representation.
 *
 * @param {*} value - The value to be tested for being a safe integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 *  safe integer.
 */

var is_safe_integer_x_esm_isSafeInteger = function isSafeInteger(value) {
  return is_integer_x_esm(value) && value >= MIN_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
};

/* harmony default export */ var is_safe_integer_x_esm = (is_safe_integer_x_esm_isSafeInteger);


// CONCATENATED MODULE: ./node_modules/is-length-x/dist/is-length-x.esm.js

/**
 * This method checks if `value` is a valid array-like length.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */

var is_length_x_esm_isLength = function isLength(value) {
  return is_safe_integer_x_esm(value) && value >= 0;
};

/* harmony default export */ var is_length_x_esm = (is_length_x_esm_isLength);


// CONCATENATED MODULE: ./node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js


/* eslint-disable-next-line compat/compat */

var pToString = has_symbol_support_x_esm && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && is_symbol_default.a;
/** @type {Function} */

var to_string_symbols_supported_x_esm_castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

var toStringSymbolsSupported = function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : to_string_symbols_supported_x_esm_castString(value);
};

/* harmony default export */ var to_string_symbols_supported_x_esm = (toStringSymbolsSupported);


// CONCATENATED MODULE: ./node_modules/math-clamp-x/dist/math-clamp-x.esm.js


var math_clamp_x_esm_getMaxMin = function getMaxMin(args) {
  var minVal = to_number_x_esm(args[1]);
  var result = args.length < 3 ? {
    max: minVal,
    min: 0
  } : {
    max: to_number_x_esm(args[2]),
    min: minVal
  };

  if (result.min > result.max) {
    throw new RangeError('"min" must be less than "max"');
  }

  return result;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 */
// eslint-enable jsdoc/check-param-names


var math_clamp_x_esm_clamp = function clamp(value) {
  var number = to_number_x_esm(value);

  if (arguments.length < 2) {
    return number;
  }
  /* eslint-disable-next-line prefer-rest-params */


  var _getMaxMin = math_clamp_x_esm_getMaxMin(arguments),
      max = _getMaxMin.max,
      min = _getMaxMin.min;

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};

/* harmony default export */ var math_clamp_x_esm = (math_clamp_x_esm_clamp);


// CONCATENATED MODULE: ./node_modules/is-index-x/dist/is-index-x.esm.js




var is_index_x_esm_MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var rxTest = reIsUint.test;
/**
 * This method determines whether the passed value is a zero based index.
 * JavaScript arrays are zero-indexed: the first element of an array is at
 * index 0, and the last element is at the index equal to the value of the
 * array's length property minus 1.
 *
 * @param {number|string} value - The value to be tested for being a zero based index.
 * @param {number} [length=MAX_SAFE_INTEGER] - The length that sets the upper bound.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 * zero based index within bounds.
 */

var is_index_x_esm_isIndex = function isIndex(value, length) {
  var string = to_string_symbols_supported_x_esm(value);

  if (rxTest.call(reIsUint, string) === false) {
    return false;
  }

  var number = to_number_x_esm(string);

  if (arguments.length > 1) {
    return number < math_clamp_x_esm(to_integer_x_esm(length), is_index_x_esm_MAX_SAFE_INTEGER);
  }

  return number < is_index_x_esm_MAX_SAFE_INTEGER;
};

/* harmony default export */ var is_index_x_esm = (is_index_x_esm_isIndex);


// CONCATENATED MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js











var object_get_own_property_descriptor_x_esm_EMPTY_STRING = '';
var charAt = simple_methodize_x_esm(object_get_own_property_descriptor_x_esm_EMPTY_STRING.charAt);
var object_get_own_property_descriptor_x_esm_ObjectCtr = {}.constructor;
var ngopd = object_get_own_property_descriptor_x_esm_ObjectCtr.getOwnPropertyDescriptor;
var nativeGOPD = typeof ngopd === 'function' && ngopd;
var getOPDFallback1;
var getOPDFallback2; // ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var object_get_own_property_descriptor_x_esm_doesGOPDWork = function doesGOPDWork(object, prop) {
  object[to_property_key_x_esm(prop)] = 0;
  var testResult = attempt_x_esm(nativeGOPD, object, prop);
  return testResult.threw === false && testResult.value.value === 0;
};

var prototypeOfObject = object_get_own_property_descriptor_x_esm_ObjectCtr.prototype; // If JS engine supports accessors creating shortcuts.

var supportsAccessors = has_own_property_x_esm(prototypeOfObject, '__defineGetter__');
/* eslint-disable-next-line no-underscore-dangle */

var lookupGetter = supportsAccessors && simple_methodize_x_esm(prototypeOfObject.__lookupGetter__);
/* eslint-disable-next-line no-underscore-dangle */

var lookupSetter = supportsAccessors && simple_methodize_x_esm(prototypeOfObject.__lookupSetter__);
var object_get_own_property_descriptor_x_esm_implementation = function getOwnPropertyDescriptor(object, property) {
  var obj = to_object_x_esm(object);
  var propKey = to_property_key_x_esm(property);
  var result; // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.

  if (getOPDFallback1) {
    result = attempt_x_esm(function attemptee() {
      return getOPDFallback1(to_object_x_esm(obj), propKey);
    });

    if (result.threw === false) {
      return result.value;
    } // try the shim if the real one doesn't work

  }

  var isStringIndex = is_string_default()(obj) && is_index_x_esm(propKey, obj.length);

  if (getOPDFallback2 && isStringIndex === false) {
    result = attempt_x_esm(function attemptee() {
      return getOPDFallback2(to_object_x_esm(obj), propKey);
    });

    if (result.threw === false) {
      return result.value;
    } // try the shim if the real one doesn't work

  }
  /* eslint-disable-next-line no-void */


  var descriptor = void 0; // If object does not owns property return undefined immediately.

  if (isStringIndex === false && has_own_property_x_esm(obj, propKey) === false) {
    return descriptor;
  } // If object has a property then it's for sure `configurable`, and
  // probably `enumerable`. Detect enumerability though.


  descriptor = {
    configurable: is_primitive_x_esm(object) === false && isStringIndex === false,
    enumerable: property_is_enumerable_x_esm(obj, propKey)
  }; // If JS engine supports accessor properties then property may be a
  // getter or setter.

  if (supportsAccessors) {
    // Unfortunately `__lookupGetter__` will return a getter even
    // if object has own non getter property along with a same named
    // inherited getter. To avoid misbehavior we temporary remove
    // `__proto__` so that `__lookupGetter__` will return getter only
    // if it's owned by an object.

    /* eslint-disable-next-line no-proto */
    var prototype = obj.__proto__;
    var notPrototypeOfObject = obj !== prototypeOfObject; // avoid recursion problem, breaking in Opera Mini when
    // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
    // or any other Object.prototype accessor

    if (notPrototypeOfObject) {
      /* eslint-disable-next-line no-proto */
      obj.__proto__ = prototypeOfObject;
    }

    var getter = lookupGetter(obj, propKey);
    var setter = lookupSetter(obj, propKey);

    if (notPrototypeOfObject) {
      // Once we have getter and setter we can put values back.

      /* eslint-disable-next-line no-proto */
      obj.__proto__ = prototype;
    }

    if (getter || setter) {
      if (getter) {
        descriptor.get = getter;
      }

      if (setter) {
        descriptor.set = setter;
      } // If it was accessor property we're done and return here
      // in order to avoid adding `value` to the descriptor.


      return descriptor;
    }
  } // If we got this far we know that object has an own property that is
  // not an accessor so we set it as a value and return descriptor.


  if (isStringIndex) {
    descriptor.value = charAt(obj, propKey);
    descriptor.writable = false;
  } else {
    descriptor.value = obj[propKey];
    descriptor.writable = true;
  }

  return descriptor;
};
/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 */

var $getOwnPropertyDescriptor; // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.

if (nativeGOPD) {
  var object_get_own_property_descriptor_x_esm_doc = typeof document !== 'undefined' && document;
  var getOPDWorksOnDom = object_get_own_property_descriptor_x_esm_doc ? object_get_own_property_descriptor_x_esm_doesGOPDWork(object_get_own_property_descriptor_x_esm_doc.createElement('div'), 'sentinel') : true;

  if (getOPDWorksOnDom) {
    var object_get_own_property_descriptor_x_esm_res = attempt_x_esm(nativeGOPD, to_object_x_esm('abc'), 1);
    var worksWithStr = object_get_own_property_descriptor_x_esm_res.threw === false && object_get_own_property_descriptor_x_esm_res.value && object_get_own_property_descriptor_x_esm_res.value.value === 'b';

    if (worksWithStr) {
      var getOPDWorksOnObject = object_get_own_property_descriptor_x_esm_doesGOPDWork({}, 'sentinel');

      if (getOPDWorksOnObject) {
        var worksWithPrim = attempt_x_esm(nativeGOPD, 42, 'name').threw === false;
        /* eslint-disable-next-line compat/compat */

        var worksWithObjSym = has_symbol_support_x_esm && object_get_own_property_descriptor_x_esm_doesGOPDWork({}, to_object_x_esm(Symbol(object_get_own_property_descriptor_x_esm_EMPTY_STRING)));

        if (worksWithObjSym) {
          if (worksWithPrim) {
            $getOwnPropertyDescriptor = nativeGOPD;
          } else {
            $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
              return nativeGOPD(to_object_x_esm(object), property);
            };
          }
        } else if (worksWithPrim) {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(object, to_property_key_x_esm(property));
          };
        } else {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(to_object_x_esm(object), to_property_key_x_esm(property));
          };
        }
      } else {
        getOPDFallback1 = nativeGOPD;
      }
    } else {
      getOPDFallback2 = nativeGOPD;
    }
  }
}

if (to_boolean_x_esm($getOwnPropertyDescriptor) === false || getOPDFallback1 || getOPDFallback2) {
  $getOwnPropertyDescriptor = object_get_own_property_descriptor_x_esm_implementation;
}

var gOPS = $getOwnPropertyDescriptor;
/* harmony default export */ var object_get_own_property_descriptor_x_esm = (gOPS);


// CONCATENATED MODULE: ./node_modules/util-get-getter-x/dist/util-get-getter-x.esm.js





var stubTrue = function stubTrue() {
  return true;
};
/**
 * @param {Function|!object} creator - A creator function or a created object.
 * @returns {!object} - An attempt object.
 */


var util_get_getter_x_esm_getResult = function getResult(creator) {
  return typeof creator === 'function' ? attempt_x_esm(creator) : {
    threw: false,
    value: creator
  };
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * @param {!object} descriptor - A descriptor object.
 * @param {!object} context - A created object.
 * @param {Function} [validator] - A function to validate the result.
 * @returns {Function|null} - The getter function or null.
 */
// eslint-enable jsdoc/check-param-names


var util_get_getter_x_esm_getter = function getter(descriptor, context) {
  /* eslint-disable-next-line prefer-rest-params */
  var validator = typeof arguments[2] === 'function' ? arguments[2] : stubTrue;
  var res = attempt_x_esm(function attemptee() {
    return simple_call_x_esm(descriptor.get, context);
  });
  return res.threw === false && validator(res.value) ? descriptor.get : null;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * Get a getter.
 *
 * @param {Function|!object} creator - A creator function or a created object.
 * @param {string} getterName - The getter name.
 * @param {Function} [validator] - A function to validate the result.
 * @returns {Function|null} The target.
 */
// eslint-enable jsdoc/check-param-names


var util_get_getter_x_esm_getGetter = function getGetter(creator, getterName) {
  var resTest1 = util_get_getter_x_esm_getResult(creator);

  if (resTest1.threw === false && is_object_like_x_esm(resTest1.value)) {
    var descriptor = object_get_own_property_descriptor_x_esm(resTest1.value.constructor.prototype, getterName);

    if (descriptor && typeof descriptor.get === 'function') {
      /* eslint-disable-next-line prefer-rest-params */
      return util_get_getter_x_esm_getter(descriptor, resTest1.value, arguments[2]);
    }
  }

  return null;
};

/* harmony default export */ var util_get_getter_x_esm = (util_get_getter_x_esm_getGetter);


// CONCATENATED MODULE: ./node_modules/is-map-x/dist/is-map-x.esm.js






var is_map_x_esm_creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new Map();
};

var getSize = util_get_getter_x_esm(is_map_x_esm_creator, 'size', is_length_x_esm);
/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */

var is_map_x_esm_isMap = function isMap(object) {
  if (getSize === null || is_object_like_x_esm(object) === false) {
    return false;
  }

  var result = attempt_x_esm(function attemptee() {
    return simple_call_x_esm(getSize, object);
  });
  return result.threw === false && is_length_x_esm(result.value);
};

/* harmony default export */ var is_map_x_esm = (is_map_x_esm_isMap);


// CONCATENATED MODULE: ./node_modules/assert-is-object-x/dist/assert-is-object-x.esm.js


/**
 * Tests `value` to see if it is an object, throws a `TypeError` if it is
 * not. Otherwise returns the `value`.
 *
 * @param {*} value - The argument to be tested.
 * @param {string} [message] - An alternative user message.
 * @throws {TypeError} Throws if `value` is not an object.
 * @returns {*} Returns `value` if it is an object.
 */

var assert_is_object_x_esm_assertIsObject = function assertIsObject(value, message) {
  if (is_primitive_x_esm(value)) {
    var msg = arguments.length > 1 ? to_string_symbols_supported_x_esm(message) : "".concat(to_string_symbols_supported_x_esm(value), " is not an object");
    throw new TypeError(msg);
  }

  return value;
};

/* harmony default export */ var assert_is_object_x_esm = (assert_is_object_x_esm_assertIsObject);


// CONCATENATED MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js








var object_define_property_x_esm_ObjectCtr = {}.constructor;
var nd = object_define_property_x_esm_ObjectCtr.defineProperty;
var nativeDefProp = typeof nd === 'function' && nd;
var definePropertyFallback;

var object_define_property_x_esm_toPropertyDescriptor = function toPropertyDescriptor(desc) {
  var object = to_object_x_esm(desc);
  var descriptor = {};

  if (has_own_property_x_esm(object, 'enumerable')) {
    descriptor.enumerable = to_boolean_x_esm(object.enumerable);
  }

  if (has_own_property_x_esm(object, 'configurable')) {
    descriptor.configurable = to_boolean_x_esm(object.configurable);
  }

  if (has_own_property_x_esm(object, 'value')) {
    descriptor.value = object.value;
  }

  if (has_own_property_x_esm(object, 'writable')) {
    descriptor.writable = to_boolean_x_esm(object.writable);
  }

  if (has_own_property_x_esm(object, 'get')) {
    var getter = object.get;

    if (typeof getter !== 'undefined' && is_function_x_esm(getter) === false) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = getter;
  }

  if (has_own_property_x_esm(object, 'set')) {
    var setter = object.set;

    if (typeof setter !== 'undefined' && is_function_x_esm(setter) === false) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = setter;
  }

  if ((has_own_property_x_esm(descriptor, 'get') || has_own_property_x_esm(descriptor, 'set')) && (has_own_property_x_esm(descriptor, 'value') || has_own_property_x_esm(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
}; // ES5 15.2.3.6
// http://es5.github.com/#x15.2.3.6
// Patch for WebKit and IE8 standard mode
// Designed by hax <hax.github.com>
// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
// IE8 Reference:
//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
// WebKit Bugs:
//     https://bugs.webkit.org/show_bug.cgi?id=36423


var object_define_property_x_esm_prototypeOfObject = object_define_property_x_esm_ObjectCtr.prototype; // If JS engine supports accessors creating shortcuts.

var object_define_property_x_esm_supportsAccessors = has_own_property_x_esm(object_define_property_x_esm_prototypeOfObject, '__defineGetter__');
/* eslint-disable-next-line no-underscore-dangle,no-restricted-properties */

var defineGetter = object_define_property_x_esm_supportsAccessors && simple_methodize_x_esm(object_define_property_x_esm_prototypeOfObject.__defineGetter__);
/* eslint-disable-next-line no-underscore-dangle,no-restricted-properties */

var defineSetter = object_define_property_x_esm_supportsAccessors && simple_methodize_x_esm(object_define_property_x_esm_prototypeOfObject.__defineSetter__);
/* eslint-disable-next-line no-underscore-dangle */

var object_define_property_x_esm_lookupGetter = object_define_property_x_esm_supportsAccessors && simple_methodize_x_esm(object_define_property_x_esm_prototypeOfObject.__lookupGetter__);
/* eslint-disable-next-line no-underscore-dangle */

var object_define_property_x_esm_lookupSetter = object_define_property_x_esm_supportsAccessors && simple_methodize_x_esm(object_define_property_x_esm_prototypeOfObject.__lookupSetter__);
var object_define_property_x_esm_implementation = function defineProperty(object, property, descriptor) {
  assert_is_object_x_esm(object);
  var propKey = to_property_key_x_esm(property);
  var propDesc = object_define_property_x_esm_toPropertyDescriptor(descriptor); // make a valiant attempt to use the real defineProperty for IE8's DOM elements.

  if (definePropertyFallback) {
    var result = attempt_x_esm(function attemptee() {
      return definePropertyFallback(object_define_property_x_esm_ObjectCtr, object, propKey, propDesc);
    });

    if (result.threw === false) {
      return result.value;
    } // try the shim if the real one doesn't work

  } // If it's a data property.


  if (has_own_property_x_esm(propDesc, 'value')) {
    // fail silently if 'writable', 'enumerable', or 'configurable' are requested but not supported
    if (object_define_property_x_esm_supportsAccessors && (object_define_property_x_esm_lookupGetter(object, propKey) || object_define_property_x_esm_lookupSetter(object, propKey))) {
      // As accessors are supported only on engines implementing
      // `__proto__` we can safely override `__proto__` while defining
      // a property to make sure that we don't hit an inherited accessor.

      /* eslint-disable-next-line no-proto */
      var prototype = object.__proto__;
      /* eslint-disable-next-line no-proto */

      object.__proto__ = object_define_property_x_esm_prototypeOfObject; // Deleting a property anyway since getter / setter may be defined on object itself.

      delete object[propKey];
      object[propKey] = propDesc.value; // Setting original `__proto__` back now.

      /* eslint-disable-next-line no-proto */

      object.__proto__ = prototype;
    } else {
      object[propKey] = propDesc.value;
    }
  } else {
    if (object_define_property_x_esm_supportsAccessors === false && (propDesc.get || propDesc.set)) {
      throw new TypeError('getters & setters can not be defined on this javascript engine');
    } // If we got that far then getters and setters can be defined !!


    if (propDesc.get) {
      defineGetter(object, propKey, propDesc.get);
    }

    if (propDesc.set) {
      defineSetter(object, propKey, propDesc.set);
    }
  }

  return object;
};
/**
 * This method defines a new property directly on an object, or modifies an
 * existing property on an object, and returns the object.
 *
 * @param {object} object - The object on which to define the property.
 * @param {string} property - The name of the property to be defined or modified.
 * @param {object} descriptor - The descriptor for the property being defined or modified.
 * @returns {object} The object that was passed to the function.
 * });.
 */

var $defineProperty; // check whether defineProperty works if it's given. Otherwise, shim partially.

if (nativeDefProp) {
  var object_define_property_x_esm_testWorksWith = function testWorksWith(object) {
    var testResult = attempt_x_esm(nativeDefProp, object, 'sentinel', {});
    return testResult.threw === false && testResult.value === object && 'sentinel' in object;
  };

  var object_define_property_x_esm_doc = typeof document !== 'undefined' && document;

  if (object_define_property_x_esm_testWorksWith({}) && (to_boolean_x_esm(object_define_property_x_esm_doc) === false || object_define_property_x_esm_testWorksWith(object_define_property_x_esm_doc.createElement('div')))) {
    $defineProperty = function defineProperty(object, property, descriptor) {
      return nativeDefProp(assert_is_object_x_esm(object), to_property_key_x_esm(property), object_define_property_x_esm_toPropertyDescriptor(descriptor));
    };
  } else {
    definePropertyFallback = nativeDefProp;
  }
}

if (to_boolean_x_esm(nativeDefProp) === false || definePropertyFallback) {
  $defineProperty = object_define_property_x_esm_implementation;
}

var defProp = $defineProperty;
/* harmony default export */ var object_define_property_x_esm = (defProp);


// CONCATENATED MODULE: ./node_modules/is-regexp-x/dist/is-regexp-x.esm.js







var regexExec = simple_methodize_x_esm(/none/.exec);
var regexClass = '[object RegExp]';

var tryRegexExecCall = function tryRegexExec(value, descriptor) {
  try {
    value.lastIndex = 0;
    regexExec(value);
    return true;
  } catch (e) {
    return false;
  } finally {
    object_define_property_x_esm(value, 'lastIndex', descriptor);
  }
};
/**
 * This method tests if a value is a regex.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if value is a regex; otherwise `false`.
 */


var is_regexp_x_esm_isRegex = function isRegex(value) {
  if (is_object_like_x_esm(value) === false) {
    return false;
  }

  if (has_to_string_tag_x_esm === false) {
    return to_string_tag_x_esm(value) === regexClass;
  }

  var descriptor = object_get_own_property_descriptor_x_esm(value, 'lastIndex');
  var hasLastIndexDataProperty = descriptor && has_own_property_x_esm(descriptor, 'value');

  if (hasLastIndexDataProperty !== true) {
    return false;
  }

  return tryRegexExecCall(value, descriptor);
};

/* harmony default export */ var is_regexp_x_esm = (is_regexp_x_esm_isRegex);


// CONCATENATED MODULE: ./node_modules/is-set-x/dist/is-set-x.esm.js






var is_set_x_esm_creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new Set();
};

var is_set_x_esm_getSize = util_get_getter_x_esm(is_set_x_esm_creator, 'size', is_length_x_esm);
/**
 * Determine if an `object` is a `Set`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Set`,
 *  else `false`.
 */

var is_set_x_esm_isSet = function isSet(object) {
  if (is_set_x_esm_getSize === null || is_object_like_x_esm(object) === false) {
    return false;
  }

  var result = attempt_x_esm(function attemptee() {
    return simple_call_x_esm(is_set_x_esm_getSize, object);
  });
  return result.threw === false && is_length_x_esm(result.value);
};

/* harmony default export */ var is_set_x_esm = (is_set_x_esm_isSet);


// EXTERNAL MODULE: ./node_modules/is-number-object/index.js
var is_number_object = __webpack_require__(5);
var is_number_object_default = /*#__PURE__*/__webpack_require__.n(is_number_object);

// EXTERNAL MODULE: ./node_modules/is-boolean-object/index.js
var is_boolean_object = __webpack_require__(2);
var is_boolean_object_default = /*#__PURE__*/__webpack_require__.n(is_boolean_object);

// CONCATENATED MODULE: ./node_modules/is-array-buffer-x/dist/is-array-buffer-x.esm.js







var hasABuf = typeof ArrayBuffer === 'function';
var aBufTag = '[object ArrayBuffer]';

var is_array_buffer_x_esm_validator = function validator(value) {
  return typeof value === 'number';
};

var is_array_buffer_x_esm_creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new ArrayBuffer(4);
};

var byteLength = hasABuf && has_to_string_tag_x_esm ? util_get_getter_x_esm(is_array_buffer_x_esm_creator, 'byteLength', is_array_buffer_x_esm_validator) : null;
/**
 * Determine if an `object` is an `ArrayBuffer`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is an `ArrayBuffer`,
 *  else false`.
 */

var is_array_buffer_x_esm_isArrayBuffer = function isArrayBuffer(object) {
  if (hasABuf === false || is_object_like_x_esm(object) === false) {
    return false;
  }

  if (to_boolean_x_esm(byteLength) === false) {
    return to_string_tag_x_esm(object) === aBufTag;
  }

  var result = attempt_x_esm(function attemptee() {
    return simple_call_x_esm(byteLength, object);
  });
  return result.threw === false && is_array_buffer_x_esm_validator(result.value);
};

/* harmony default export */ var is_array_buffer_x_esm = (is_array_buffer_x_esm_isArrayBuffer);


// CONCATENATED MODULE: ./node_modules/get-prototype-of-x/dist/get-prototype-of-x.esm.js



var get_prototype_of_x_esm_ObjectCtr = {}.constructor;
var nativeGetPrototypeOf = get_prototype_of_x_esm_ObjectCtr.getPrototypeOf;

var get_prototype_of_x_esm_test1 = function test1() {
  var prototypeOfCtr = {};
  /* eslint-disable-next-line lodash/prefer-noop */

  var Ctr = function Ctr() {};

  Ctr.prototype = prototypeOfCtr;
  var ctr = new Ctr();

  try {
    return nativeGetPrototypeOf(ctr) === prototypeOfCtr;
  } catch (ignore) {
    return false;
  }
};

var get_prototype_of_x_esm_isWorking = to_boolean_x_esm(nativeGetPrototypeOf) && get_prototype_of_x_esm_test1();

var patchedGetPrototypeOf = function getPrototypeOf(obj) {
  return nativeGetPrototypeOf(to_object_x_esm(obj));
};

var get_prototype_of_x_esm_implementation = function getPrototypeOf(obj) {
  var object = to_object_x_esm(obj);
  /* eslint-disable-next-line no-proto */

  var proto = object.__proto__;

  if (proto || proto === null) {
    return proto;
  }

  if (is_function_x_esm(object.constructor)) {
    return object.constructor.prototype;
  }

  if (object instanceof get_prototype_of_x_esm_ObjectCtr) {
    return get_prototype_of_x_esm_ObjectCtr.prototype;
  }

  return null;
};
/**
 * This method returns the prototype (i.e. The value of the internal [[Prototype]] property)
 * of the specified object.
 *
 * @function getPrototypeOf
 * @param {*} obj - The object whose prototype is to be returned.
 * @returns {object} The prototype of the given object. If there are no inherited properties, null is returned.
 */

var gpo = get_prototype_of_x_esm_isWorking ? patchedGetPrototypeOf : get_prototype_of_x_esm_implementation;
/* harmony default export */ var get_prototype_of_x_esm = (gpo);


// CONCATENATED MODULE: ./node_modules/is-error-x/dist/is-error-x.esm.js




var errorCheck = function checkIfError(value) {
  return to_string_tag_x_esm(value) === '[object Error]';
};

if (errorCheck(Error.prototype) === false) {
  var errorProto = Error.prototype;
  var testStringTag = errorCheck;

  errorCheck = function checkIfError(value) {
    return value === errorProto || testStringTag(value);
  };
}
/**
 * Determine whether or not a given `value` is an `Error` type.
 *
 * @param {*} value - The object to be tested.
 * @returns {boolean} Returns `true` if `value` is an `Error` type,
 *  else `false`.
 */


var is_error_x_esm_isError = function isError(value) {
  if (is_object_like_x_esm(value) === false) {
    return false;
  }

  var object = value;
  var maxLoop = 100;

  while (object && maxLoop > -1) {
    if (errorCheck(object)) {
      return true;
    }

    object = get_prototype_of_x_esm(object);
    maxLoop -= 1;
  }

  return false;
};

/* harmony default export */ var is_error_x_esm = (is_error_x_esm_isError);


// EXTERNAL MODULE: ./node_modules/is-boxed-primitive/implementation.js
var is_boxed_primitive_implementation = __webpack_require__(12);
var implementation_default = /*#__PURE__*/__webpack_require__.n(is_boxed_primitive_implementation);

// EXTERNAL MODULE: ./node_modules/is-bigint/index.js
var is_bigint = __webpack_require__(3);
var is_bigint_default = /*#__PURE__*/__webpack_require__.n(is_bigint);

// EXTERNAL MODULE: ./node_modules/which-typed-array/index.js
var which_typed_array = __webpack_require__(7);
var which_typed_array_default = /*#__PURE__*/__webpack_require__.n(which_typed_array);

// CONCATENATED MODULE: ./node_modules/same-value-x/dist/same-value-x.esm.js

/**
 * This method is the comparison abstract operation SameValue(x, y), where x
 * and y are ECMAScript language values, produces true or false.
 *
 * @param {*} [value1] - The first value to compare.
 * @param {*} [value2] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments are
 *  the same value.
 */

var same_value_x_esm_sameValue = function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  if (value1 === value2) {
    return true;
  }

  return is_nan_x_esm(value1) && is_nan_x_esm(value2);
};

/* harmony default export */ var same_value_x_esm = (same_value_x_esm_sameValue);


// CONCATENATED MODULE: ./node_modules/is-array-x/dist/is-array-x.esm.js


var nia = [].isArray;
var nativeIsArray = typeof nia === 'function' && nia;
var is_array_x_esm_testResult = attempt_x_esm(function attemptee() {
  return nativeIsArray([]) === true && nativeIsArray({
    length: 0
  }) === false;
});
var is_array_x_esm_isWorking = is_array_x_esm_testResult.threw === false && is_array_x_esm_testResult.value === true;
var is_array_x_esm_implementation = function isArray(value) {
  return to_string_tag_x_esm(value) === '[object Array]';
};
/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} - True if an array; otherwise false.
 */

var is_array_x_esm_isArray = is_array_x_esm_isWorking ? nativeIsArray : is_array_x_esm_implementation;
/* harmony default export */ var is_array_x_esm = (is_array_x_esm_isArray);


// EXTERNAL MODULE: ./node_modules/is-arguments/index.js
var is_arguments = __webpack_require__(6);
var is_arguments_default = /*#__PURE__*/__webpack_require__.n(is_arguments);

// CONCATENATED MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js

var to_length_x_esm_MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var to_length_x_esm_toLength = function toLength(value) {
  var len = to_integer_x_esm(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > to_length_x_esm_MAX_SAFE_INTEGER) {
    return to_length_x_esm_MAX_SAFE_INTEGER;
  }

  return len;
};

/* harmony default export */ var to_length_x_esm = (to_length_x_esm_toLength);


// CONCATENATED MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js



var split_if_boxed_bug_x_esm_EMPTY_STRING = '';
var strSplit = simple_methodize_x_esm(split_if_boxed_bug_x_esm_EMPTY_STRING.split);

var identity = function splitIfBoxedBug(value) {
  return value;
};

var split_if_boxed_bug_x_esm_implementation = function splitIfBoxedBug(value) {
  return is_string_default()(value) ? strSplit(value, split_if_boxed_bug_x_esm_EMPTY_STRING) : identity(value);
};
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

var $splitIfBoxedBug = has_boxed_string_x_esm ? identity : split_if_boxed_bug_x_esm_implementation;
/* harmony default export */ var split_if_boxed_bug_x_esm = ($splitIfBoxedBug);


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/dist/array-like-slice-x.esm.js





var array_like_slice_x_esm_getMax = function getMax(a, b) {
  return a >= b ? a : b;
};

var getMin = function getMin(a, b) {
  return a <= b ? a : b;
};

var setRelative = function setRelative(value, length) {
  return value < 0 ? array_like_slice_x_esm_getMax(length + value, 0) : getMin(value, length);
};
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {!object} arrayLike - The array like object to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */


var array_like_slice_x_esm_slice = function slice(arrayLike, start, end) {
  var iterable = split_if_boxed_bug_x_esm(to_object_x_esm(arrayLike));
  var length = to_length_x_esm(iterable.length);
  var k = setRelative(to_integer_x_esm(start), length);
  var relativeEnd = typeof end === 'undefined' ? length : to_integer_x_esm(end);
  var finalEnd = setRelative(relativeEnd, length);
  var val = [];
  val.length = array_like_slice_x_esm_getMax(finalEnd - k, 0);
  var next = 0;

  while (k < finalEnd) {
    if (k in iterable) {
      val[next] = iterable[k];
    }

    next += 1;
    k += 1;
  }

  return val;
};

/* harmony default export */ var array_like_slice_x_esm = (array_like_slice_x_esm_slice);


// EXTERNAL MODULE: ./node_modules/object-keys/index.js
var object_keys = __webpack_require__(13);
var object_keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/object-keys-x/dist/object-keys-x.esm.js










var object_keys_x_esm_ObjectCtr = {}.constructor;
var nativeKeys = typeof object_keys_x_esm_ObjectCtr.keys === 'function' && object_keys_x_esm_ObjectCtr.keys;
var object_keys_x_esm_isWorking;
var throwsWithNull;
var object_keys_x_esm_worksWithPrim;
var worksWithRegex;
var worksWithArgs;
var object_keys_x_esm_worksWithStr;

if (nativeKeys) {
  var object_keys_x_esm_isCorrectRes = function isCorrectRes(r, length) {
    return r.threw === false && is_array_x_esm(r.value) && r.value.length === length;
  };

  var either = function either(r, a, b) {
    var x = r.value[0];
    var y = r.value[1];
    return x === a && y === b || x === b && y === a;
  };

  var testObj = {
    a: 1,
    b: 2
  };
  var object_keys_x_esm_res = attempt_x_esm(nativeKeys, testObj);
  object_keys_x_esm_isWorking = object_keys_x_esm_isCorrectRes(object_keys_x_esm_res, 2) && either(object_keys_x_esm_res, 'a', 'b');

  if (object_keys_x_esm_isWorking) {
    testObj = Object('a');
    testObj.y = 1;
    object_keys_x_esm_res = attempt_x_esm(nativeKeys, testObj);
    object_keys_x_esm_isWorking = object_keys_x_esm_isCorrectRes(object_keys_x_esm_res, 2) && either(object_keys_x_esm_res, '0', 'y');
  }

  if (object_keys_x_esm_isWorking) {
    throwsWithNull = attempt_x_esm(nativeKeys, null).threw;
    object_keys_x_esm_worksWithPrim = object_keys_x_esm_isCorrectRes(attempt_x_esm(nativeKeys, 42), 0);
    worksWithRegex = attempt_x_esm(nativeKeys, /a/g).threw === false;
    object_keys_x_esm_res = attempt_x_esm(nativeKeys, function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2));
    worksWithArgs = object_keys_x_esm_isCorrectRes(object_keys_x_esm_res, 2) && either(object_keys_x_esm_res, '0', '1');
    object_keys_x_esm_res = attempt_x_esm(nativeKeys, Object('ab'));
    object_keys_x_esm_worksWithStr = object_keys_x_esm_isCorrectRes(object_keys_x_esm_res, 2) && either(object_keys_x_esm_res, '0', '1');
  }
}

var patched = function keys(object) {
  var obj = to_object_x_esm ? to_object_x_esm(object) : object;

  if (worksWithArgs !== true && is_arguments_default()(obj)) {
    obj = array_like_slice_x_esm(obj);
  } else if (object_keys_x_esm_worksWithStr !== true && is_string_default()(obj)) {
    obj = split_if_boxed_bug_x_esm(obj);
  } else if (worksWithRegex !== true && is_regexp_x_esm(obj)) {
    var regexKeys = [];
    /* eslint-disable-next-line no-restricted-syntax */

    for (var key in obj) {
      // noinspection JSUnfilteredForInLoop
      if (has_own_property_x_esm(obj, key)) {
        regexKeys[regexKeys.length] = key;
      }
    }

    return regexKeys;
  }

  return nativeKeys(obj);
};
var object_keys_x_esm_implementation = function keys(object) {
  return object_keys_default()(to_object_x_esm(object));
};
var objectKeys;

if (object_keys_x_esm_isWorking) {
  if (throwsWithNull && object_keys_x_esm_worksWithPrim && worksWithRegex && worksWithArgs && object_keys_x_esm_worksWithStr) {
    objectKeys = nativeKeys;
  } else {
    objectKeys = patched;
  }
}
/**
 * This method returns an array of a given object's own enumerable properties,
 * in the same order as that provided by a for...in loop (the difference being
 * that a for-in loop enumerates properties in the prototype chain as well).
 *
 * @param {*} obj - The object of which the enumerable own properties are to be returned.
 * @returns {Array} An array of strings that represent all the enumerable properties of the given object.
 */


var $objectKeys = object_keys_x_esm_isWorking ? objectKeys : object_keys_x_esm_implementation;
/* harmony default export */ var object_keys_x_esm = ($objectKeys);


// CONCATENATED MODULE: ./node_modules/get-own-property-symbols-x/dist/get-own-property-symbols-x.esm.js



var nativeGOPS = {}.constructor.getOwnPropertySymbols;
var get_own_property_symbols_x_esm_isWorking;

if (has_symbol_support_x_esm && nativeGOPS && typeof nativeGOPS === 'function') {
  /* eslint-disable-next-line compat/compat */
  var get_own_property_symbols_x_esm_symbol = Symbol('');
  var get_own_property_symbols_x_esm_testObj = {
    a: 1
  };
  get_own_property_symbols_x_esm_testObj[get_own_property_symbols_x_esm_symbol] = 2;
  var get_own_property_symbols_x_esm_r = attempt_x_esm(nativeGOPS, get_own_property_symbols_x_esm_testObj);
  get_own_property_symbols_x_esm_isWorking = get_own_property_symbols_x_esm_r.threw === false && get_own_property_symbols_x_esm_r.value && get_own_property_symbols_x_esm_r.value.length === 1 && get_own_property_symbols_x_esm_r.value[0] === get_own_property_symbols_x_esm_symbol;
}
/**
 * This method creates an array of all symbol properties found directly upon a
 * given object.
 *
 * @param {object} obj - The object whose symbol properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of all symbol properties found directly upon the
 *  given object.
 */


var get_own_property_symbols_x_esm_getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
  var object = to_object_x_esm(obj);
  return get_own_property_symbols_x_esm_isWorking ? nativeGOPS(object) : [];
};

/* harmony default export */ var get_own_property_symbols_x_esm = (get_own_property_symbols_x_esm_getOwnPropertySymbols);


// CONCATENATED MODULE: ./node_modules/array-slice-x/dist/array-slice-x.esm.js







var methodizedSlice = simple_methodize_x_esm([].slice);

var array_slice_x_esm_testArray = function testArray() {
  var res = attempt_x_esm(function attemptee() {
    return methodizedSlice([1, 2, 3], 1, 2);
  });
  return res.threw || is_array_x_esm(res.value) === false || res.value.length !== 1 || res.value[0] !== 2;
};

var array_slice_x_esm_testString = function testString() {
  var res = attempt_x_esm(function attemptee() {
    return methodizedSlice('abc', 1, 2);
  });
  return res.threw || is_array_x_esm(res.value) === false || res.value.length !== 1 || res.value[0] !== 'b';
};

var array_slice_x_esm_testDOM = function testDOM() {
  var doc = typeof document !== 'undefined' && document;
  var resultDocElement = doc ? attempt_x_esm(function attemptee() {
    return methodizedSlice(doc.documentElement);
  }).threw : false;
  return resultDocElement ? resultDocElement.threw : false;
};

var failArray = array_slice_x_esm_testArray();
var failString = array_slice_x_esm_testString();
var failDOM = array_slice_x_esm_testDOM();

var array_slice_x_esm_useArrayLike = function useArrayLike(object) {
  return failArray || failDOM && is_array_x_esm(object) === false || failString && is_string_default()(object) || is_arguments_default()(object);
};
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {Array|object} array - The array to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice(1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the
 *  sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */


var array_slice_x_esm_slice = function slice(array, start, end) {
  var object = to_object_x_esm(array);
  return array_slice_x_esm_useArrayLike(object) ? array_like_slice_x_esm(object, start, end) : methodizedSlice(object, start, end);
};

/* harmony default export */ var array_slice_x_esm = (array_slice_x_esm_slice);


// CONCATENATED MODULE: ./node_modules/get-own-property-names-x/dist/get-own-property-names-x.esm.js
function get_own_property_names_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { get_own_property_names_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { get_own_property_names_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return get_own_property_names_x_esm_typeof(obj); }

function get_own_property_names_x_esm_slicedToArray(arr, i) { return get_own_property_names_x_esm_arrayWithHoles(arr) || get_own_property_names_x_esm_iterableToArrayLimit(arr, i) || get_own_property_names_x_esm_nonIterableRest(); }

function get_own_property_names_x_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function get_own_property_names_x_esm_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function get_own_property_names_x_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var get_own_property_names_x_esm_ObjectCtr = {}.constructor;
var nGOPN = get_own_property_names_x_esm_ObjectCtr.getOwnPropertyNames;
var nativeGOPN = typeof nGOPN === 'function' && nGOPN;

var get_own_property_names_x_esm_isCorrectRes = function isCorrectRes(r, length) {
  return r.threw === false && is_array_x_esm(r.value) && r.value.length === length;
};

var get_own_property_names_x_esm_either = function either(args) {
  var _args = get_own_property_names_x_esm_slicedToArray(args, 3),
      r = _args[0],
      a = _args[1],
      b = _args[2];

  var x = r.value[0];
  var y = r.value[1];
  return x === a && y === b || x === b && y === a;
};

var get_own_property_names_x_esm_test1 = function test1() {
  var res = attempt_x_esm(nativeGOPN, 'fo');
  return get_own_property_names_x_esm_isCorrectRes(res, 3) && get_own_property_names_x_esm_either([res, '0', '1']) && res.value[2] === 'length';
};

var get_own_property_names_x_esm_test2 = function test2() {
  var res = attempt_x_esm(nativeGOPN, {
    a: 1,
    b: 2
  });
  return get_own_property_names_x_esm_isCorrectRes(res, 2) && get_own_property_names_x_esm_either([res, 'a', 'b']);
};

var win = (typeof window === "undefined" ? "undefined" : get_own_property_names_x_esm_typeof(window)) === 'object' && window;
var cachedWindowNames = win ? nativeGOPN(win) : [];
var implementation1 = function getOwnPropertyNames(obj) {
  var val = to_object_x_esm(obj); // IE bug where layout engine calls userland gOPN for cross-domain `window` objects

  if (win && win !== window && to_string_tag_x_esm(val) === '[object Window]') {
    var result = attempt_x_esm(nativeGOPN, val);
    return result.threw ? array_slice_x_esm(cachedWindowNames) : result.value;
  }

  return nativeGOPN(val);
};
var implementation2 = function getOwnPropertyNames(obj) {
  return object_keys_x_esm(obj);
};

var getImplementation = function getImplementation() {
  if (get_own_property_names_x_esm_test1()) {
    return nativeGOPN;
  }

  return get_own_property_names_x_esm_test2() ? implementation1 : implementation2;
};
/**
 * This method creates an array of all properties (enumerable or not) found
 * directly upon a given object.
 *
 * @param {object} obj - The object whose enumerable and non-enumerable own
 *  properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of strings that correspond to the properties found
 *  directly upon the given object.
 */


var getOPN = getImplementation();
/* harmony default export */ var get_own_property_names_x_esm = (getOPN);


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @param {string} [message] - An alternative user message.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

var assert_is_function_x_esm_assertIsFunction = function assertIsFunction(callback, message) {
  if (is_function_x_esm(callback) === false) {
    var msg = arguments.length > 1 ? to_string_symbols_supported_x_esm(message) : "".concat(is_primitive_x_esm(callback) ? to_string_symbols_supported_x_esm(callback) : '#<Object>', " is not a function");
    throw new TypeError(msg);
  }

  return callback;
};

/* harmony default export */ var assert_is_function_x_esm = (assert_is_function_x_esm_assertIsFunction);


// CONCATENATED MODULE: ./node_modules/array-any-x/dist/array-any-x.esm.js




 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method tests whether some element in the array passes the test
 * implemented by the provided function.
 *
 * @function any
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  any array element; otherwise, `false`.
 */
// eslint-enable jsdoc/check-param-names

var array_any_x_esm_any = function any(array, callBack
/* , thisArg */
) {
  var object = to_object_x_esm(array); // If no callback function or if callback is not a callable function

  assert_is_function_x_esm(callBack);
  var iterable = split_if_boxed_bug_x_esm(object);
  var length = to_length_x_esm(iterable.length);

  if (length) {
    /* eslint-disable-next-line prefer-rest-params */
    var thisArg = arguments[2];

    for (var index = 0; index < length; index += 1) {
      if (simple_call_x_esm(callBack, thisArg, [iterable[index], index, object])) {
        return true;
      }
    }
  }

  return false;
};

/* harmony default export */ var array_any_x_esm = (array_any_x_esm_any);


// CONCATENATED MODULE: ./node_modules/array-all-x/dist/array-all-x.esm.js

 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method executes a provided function once for each array element.
 *
 * @function all
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 */
// eslint-enable jsdoc/check-param-names

var array_all_x_esm_all = function all(array, callBack
/* , thisArg */
) {
  array_any_x_esm(array, function iteratee() {
    /* eslint-disable-next-line prefer-rest-params,babel/no-invalid-this */
    simple_call_x_esm(callBack, this, arguments);
  },
  /* eslint-disable-next-line prefer-rest-params */
  arguments[2]);
};

/* harmony default export */ var array_all_x_esm = (array_all_x_esm_all);


// CONCATENATED MODULE: ./node_modules/array-filter-x/dist/array-filter-x.esm.js
function array_filter_x_esm_slicedToArray(arr, i) { return array_filter_x_esm_arrayWithHoles(arr) || array_filter_x_esm_iterableToArrayLimit(arr, i) || array_filter_x_esm_nonIterableRest(); }

function array_filter_x_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function array_filter_x_esm_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function array_filter_x_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var nf = [].filter;
var nativeFilter = typeof nf === 'function' && simple_methodize_x_esm(nf);

var array_filter_x_esm_test1 = function test1() {
  var spy = 0;
  var res = attempt_x_esm(function attemptee() {
    return nativeFilter([1, 2], function spyAdd1(item) {
      spy += item;
      return false;
    });
  });
  return res.threw === false && res.value && res.value.length === 0 && spy === 3;
};

var array_filter_x_esm_test2 = function test2() {
  var spy = '';
  var res = attempt_x_esm(function attemptee() {
    return nativeFilter(to_object_x_esm('abc'), function spyAdd2(item, index) {
      spy += item;
      return index === 1;
    });
  });
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === 'b' && spy === 'abc';
};

var array_filter_x_esm_test3 = function test3() {
  var spy = 0;
  var res = attempt_x_esm(function attemptee() {
    var args = function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3);

    return nativeFilter(args, function spyAdd3(item, index) {
      spy += item;
      return index === 2;
    });
  });
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === 3 && spy === 6;
};

var array_filter_x_esm_test4 = function test4() {
  var spy = 0;
  var res = attempt_x_esm(function attemptee() {
    return nativeFilter({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, function spyAdd4(item) {
      spy += item;
      return false;
    });
  });
  return res.threw === false && res.value && res.value.length === 0 && spy === 6;
};

var getTest5Result = function getTest5Result(args) {
  var _args = array_filter_x_esm_slicedToArray(args, 3),
      res = _args[0],
      div = _args[1],
      spy = _args[2];

  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === div && spy === div;
};

var array_filter_x_esm_doc = typeof document !== 'undefined' && document;

var array_filter_x_esm_test5 = function test5() {
  if (array_filter_x_esm_doc) {
    var spy = null;
    var fragment = array_filter_x_esm_doc.createDocumentFragment();
    var div = array_filter_x_esm_doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x_esm(function attemptee() {
      return nativeFilter(fragment.childNodes, function spyAssign(item) {
        spy = item;
        return item;
      });
    });
    return getTest5Result([res, div, spy]);
  }

  return true;
};

var isStrict = function returnIsStrict() {
  /* eslint-disable-next-line babel/no-invalid-this */
  return to_boolean_x_esm(this) === false;
}();

var array_filter_x_esm_test6 = function test6() {
  if (isStrict) {
    var spy = null;

    var testThis = function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x_esm(function attemptee() {
      return nativeFilter([1], testThis, 'x');
    });
    return res.threw === false && res.value && res.value.length === 0 && spy === true;
  }

  return true;
};

var array_filter_x_esm_test7 = function test7() {
  var spy = {};
  var fn = 'return nativeFilter("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  var res = attempt_x_esm(function attemptee() {
    /* eslint-disable-next-line no-new-func */
    return Function('nativeFilter', 'spy', 'castBoolean', fn)(nativeFilter, spy, to_boolean_x_esm);
  });
  return res.threw === false && res.value && res.value.length === 0 && spy.value !== true;
};

var array_filter_x_esm_isWorking = to_boolean_x_esm(nativeFilter) && array_filter_x_esm_test1() && array_filter_x_esm_test2() && array_filter_x_esm_test3() && array_filter_x_esm_test4() && array_filter_x_esm_test5() && array_filter_x_esm_test6() && array_filter_x_esm_test7();

var patchedFilter = function filter(array, callBack
/* , thisArg */
) {
  /* eslint-disable-next-line prefer-rest-params, */
  return nativeFilter(require_object_coercible_x_esm(array), assert_is_function_x_esm(callBack), arguments[2]);
};

var array_filter_x_esm_implementation = function filter(array, callBack
/* , thisArg */
) {
  var object = to_object_x_esm(array); // If no callback function or if callback is not a callable function

  assert_is_function_x_esm(callBack);
  var result = [];

  var predicate = function predicate() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line prefer-rest-params */
      var item = arguments[0];
      /* eslint-disable-next-line babel/no-invalid-this */

      if (simple_call_x_esm(callBack, this, [item, i, object])) {
        result[result.length] = item;
      }
    }
  };
  /* eslint-disable-next-line prefer-rest-params */


  array_all_x_esm(object, predicate, arguments[2]);
  return result;
};
/**
 * This method creates a new array with all elements that pass the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function is a predicate, to test each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with the elements that pass the test.
 */

var $filter = array_filter_x_esm_isWorking ? patchedFilter : array_filter_x_esm_implementation;
/* harmony default export */ var array_filter_x_esm = ($filter);


// CONCATENATED MODULE: ./node_modules/array-for-each-x/dist/array-for-each-x.esm.js








var nfe = [].forEach;
var nativeForEach = typeof nfe === 'function' && simple_methodize_x_esm(nfe);

var array_for_each_x_esm_test1 = function test1() {
  var spy = 0;
  var res = attempt_x_esm(function attemptee() {
    return nativeForEach([1, 2], function iteratee(item) {
      spy += item;
    });
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 3;
};

var array_for_each_x_esm_test2 = function test2() {
  var spy = '';
  var res = attempt_x_esm(function attemptee() {
    return nativeForEach(to_object_x_esm('abc'), function iteratee(item) {
      spy += item;
    });
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 'abc';
};

var array_for_each_x_esm_test3 = function test3() {
  var spy = 0;
  var res = attempt_x_esm(function attemptee() {
    var args = function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3);

    return nativeForEach(args, function iteratee(item) {
      spy += item;
    });
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 6;
};

var array_for_each_x_esm_test4 = function test4() {
  var spy = 0;
  var res = attempt_x_esm(function attemptee() {
    return nativeForEach({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, function iteratee(item) {
      spy += item;
    });
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 6;
};

var array_for_each_x_esm_doc = typeof document !== 'undefined' && document;

var array_for_each_x_esm_test5 = function test5() {
  if (array_for_each_x_esm_doc) {
    var spy = null;
    var fragment = array_for_each_x_esm_doc.createDocumentFragment();
    var div = array_for_each_x_esm_doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x_esm(function attemptee() {
      return nativeForEach(fragment.childNodes, function iteratee(item) {
        spy = item;
      });
    });
    return res.threw === false && typeof res.value === 'undefined' && spy === div;
  }

  return true;
};

var array_for_each_x_esm_isStrict = function returnIsStrict() {
  /* eslint-disable-next-line babel/no-invalid-this */
  return to_boolean_x_esm(this) === false;
}();

var array_for_each_x_esm_test6 = function test6() {
  if (array_for_each_x_esm_isStrict) {
    var spy = null;

    var thisTest = function thisTest() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x_esm(function attemptee() {
      return nativeForEach([1], thisTest, 'x');
    });
    return res.threw === false && typeof res.value === 'undefined' && spy === true;
  }

  return true;
};

var array_for_each_x_esm_test7 = function test7() {
  var spy = {};
  var fn = 'return nativeForEach("foo", function (_, __, context) {' + 'if (toBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  var res = attempt_x_esm(function attemptee() {
    /* eslint-disable-next-line no-new-func */
    return Function('nativeForEach', 'spy', 'toBoolean', fn)(nativeForEach, spy, to_boolean_x_esm);
  });
  return res.threw === false && typeof res.value === 'undefined' && spy.value !== true;
};

var array_for_each_x_esm_isWorking = to_boolean_x_esm(nativeForEach) && array_for_each_x_esm_test1() && array_for_each_x_esm_test2() && array_for_each_x_esm_test3() && array_for_each_x_esm_test4() && array_for_each_x_esm_test5() && array_for_each_x_esm_test6() && array_for_each_x_esm_test7();

var patchedNative = function forEach(array, callBack
/* , thisArg */
) {
  /* eslint-disable-next-line prefer-rest-params */
  return nativeForEach(require_object_coercible_x_esm(array), assert_is_function_x_esm(callBack), arguments[2]);
};

var array_for_each_x_esm_implementation = function forEach(array, callBack
/* , thisArg */
) {
  var object = to_object_x_esm(array); // If no callback function or if callback is not a callable function

  assert_is_function_x_esm(callBack);

  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line prefer-rest-params,babel/no-invalid-this */
      simple_call_x_esm(callBack, this, [arguments[0], i, object]);
    }
  };
  /* eslint-disable-next-line prefer-rest-params */


  array_all_x_esm(object, iteratee, arguments[2]);
};
/**
 * This method executes a provided function once for each array element.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 */

var $forEach = array_for_each_x_esm_isWorking ? patchedNative : array_for_each_x_esm_implementation;
/* harmony default export */ var array_for_each_x_esm = ($forEach);


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/dist/get-own-enumerable-property-symbols-x.esm.js




/**
 * This method returns only the enumerable own property symbols of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own property symbols.
 */

var get_own_enumerable_property_symbols_x_esm_getOwnEnumerablePropertySymbols = function getOwnEnumerablePropertySymbols(target) {
  var object = to_object_x_esm(target);
  return array_filter_x_esm(get_own_property_symbols_x_esm(object), function iteratee(symbol) {
    return property_is_enumerable_x_esm(object, symbol);
  });
};

/* harmony default export */ var get_own_enumerable_property_symbols_x_esm = (get_own_enumerable_property_symbols_x_esm_getOwnEnumerablePropertySymbols);


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-keys-x/dist/get-own-enumerable-keys-x.esm.js




var concat = simple_methodize_x_esm([].concat);
/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own keys.
 */

var get_own_enumerable_keys_x_esm_getOwnNonEnumerableKeys = function getOwnNonEnumerableKeys(target) {
  var object = to_object_x_esm(target);
  return concat(object_keys_x_esm(object), get_own_enumerable_property_symbols_x_esm(object));
};

/* harmony default export */ var get_own_enumerable_keys_x_esm = (get_own_enumerable_keys_x_esm_getOwnNonEnumerableKeys);


// CONCATENATED MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js





var object_define_properties_x_esm_defineProperty = object_define_property_x_esm;
/**
 * This method defines new or modifies existing properties directly on an
 * object, returning the object.
 *
 * @param {object} object - The object on which to define or modify properties.
 * @param {object} properties - An object whose own enumerable properties
 *  constitute descriptors for the
 * properties to be defined or modified.
 * @returns {object} The object that was passed to the function.
 */

var object_define_properties_x_esm_defineProperties = function defineProperties(object, properties) {
  assert_is_object_x_esm(object);
  var props = to_object_x_esm(properties);
  array_for_each_x_esm(get_own_enumerable_keys_x_esm(props), function defineProp(property) {
    if (property !== '__proto__') {
      object_define_property_x_esm(object, property, props[property]);
    }
  });
  return object;
};

/* harmony default export */ var object_define_properties_x_esm = (object_define_properties_x_esm_defineProperties);


// CONCATENATED MODULE: ./node_modules/is-array-like-x/dist/is-array-like-x.esm.js



/**
 * Checks if value is array-like. A value is considered array-like if it's
 * not a function and has a `length` that's an integer greater than or
 * equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @param {*} value - The object to be tested.
 */

var is_array_like_x_esm_isArrayLike = function isArrayLike(value) {
  return is_nil_x_esm(value) === false && is_function_x_esm(value, true) === false && is_length_x_esm(value.length);
};

/* harmony default export */ var is_array_like_x_esm = (is_array_like_x_esm_isArrayLike);


// CONCATENATED MODULE: ./node_modules/is-surrogate-pair-x/dist/is-surrogate-pair-x.esm.js


var methodizedCharCodeAt = simple_methodize_x_esm(''.charCodeAt);

var is_surrogate_pair_x_esm_checkPair1 = function checkPair1(char1) {
  return is_string_default()(char1) && char1.length === 2;
};

var is_surrogate_pair_x_esm_checkPair2 = function checkPair2(char1, char2) {
  return is_string_default()(char1) && char1.length === 1 && is_string_default()(char2) && char2.length === 1;
};

var getPair1 = function getPair1(char1) {
  if (is_surrogate_pair_x_esm_checkPair1(char1)) {
    return {
      first: methodizedCharCodeAt(char1, 0),
      second: methodizedCharCodeAt(char1, 1)
    };
  }

  return false;
};

var getPair2 = function getPair2(char1, char2) {
  if (is_surrogate_pair_x_esm_checkPair2(char1, char2)) {
    return {
      first: methodizedCharCodeAt(char1, 0),
      second: methodizedCharCodeAt(char2, 0)
    };
  }

  return false;
};

var isPair = function isPair(result) {
  if (result === false) {
    return false;
  }

  var first = result.first,
      second = result.second;
  return first >= 0xd800 && first <= 0xdbff && second >= 0xdc00 && second <= 0xdfff;
};
/**
 * Tests if the two character arguments combined are a valid UTF-16
 * surrogate pair.
 *
 * @param {*} char1 - The character combination, or if `char2` is supplied then
 *  the first character of a suspected surrogate pair.
 * @param {*} [char2] - The second character of a suspected surrogate pair.
 * @returns {boolean} Returns true if the two characters create a valid
 *  'UTF-16' surrogate pair; otherwise false.
 */


var isSurrogatePair = function isSurrogatePair(char1, char2) {
  var argsLength = arguments.length;

  if (argsLength < 1) {
    return false;
  }

  var result;

  if (argsLength === 1) {
    result = getPair1(char1);
  } else if (argsLength > 1) {
    result = getPair2(char1, char2);
  }

  return isPair(result);
};

/* harmony default export */ var is_surrogate_pair_x_esm = (isSurrogatePair);


// CONCATENATED MODULE: ./node_modules/same-value-zero-x/dist/same-value-zero-x.esm.js

/**
 * This method determines whether two values are the same value.
 * SameValueZero differs from SameValue (`Object.is`) only in its treatment
 * of +0 and -0.
 *
 * @param {*} [x] - The first value to compare.
 * @param {*} [y] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments
 * are the same value.
 */

var same_value_zero_x_esm_sameValueZero = function sameValueZero(x, y) {
  return x === y || same_value_x_esm(x, y);
};

/* harmony default export */ var same_value_zero_x_esm = (same_value_zero_x_esm_sameValueZero);


// CONCATENATED MODULE: ./node_modules/find-index-x/dist/find-index-x.esm.js
var find_index_x_esm_this = undefined;

function find_index_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var pFindIndex = typeof Array.prototype.findIndex === 'function' && Array.prototype.findIndex;
var find_index_x_esm_isWorking;

if (pFindIndex) {
  var find_index_x_esm_testArr = [];
  find_index_x_esm_testArr.length = 2;
  find_index_x_esm_testArr[1] = 1;
  var find_index_x_esm_res = attempt_x_esm.call(find_index_x_esm_testArr, pFindIndex, function (item, idx) {
    find_index_x_esm_newArrowCheck(this, find_index_x_esm_this);

    return idx === 0;
  }.bind(undefined));
  find_index_x_esm_isWorking = find_index_x_esm_res.threw === false && find_index_x_esm_res.value === 0;

  if (find_index_x_esm_isWorking) {
    find_index_x_esm_res = attempt_x_esm.call(1, pFindIndex, function (item, idx) {
      find_index_x_esm_newArrowCheck(this, find_index_x_esm_this);

      return idx === 0;
    }.bind(undefined));
    find_index_x_esm_isWorking = find_index_x_esm_res.threw === false && find_index_x_esm_res.value === -1;
  }

  if (find_index_x_esm_isWorking) {
    find_index_x_esm_isWorking = attempt_x_esm.call([], pFindIndex).threw;
  }

  if (find_index_x_esm_isWorking) {
    find_index_x_esm_res = attempt_x_esm.call('abc', pFindIndex, function (item) {
      find_index_x_esm_newArrowCheck(this, find_index_x_esm_this);

      return item === 'c';
    }.bind(undefined));
    find_index_x_esm_isWorking = find_index_x_esm_res.threw === false && find_index_x_esm_res.value === 2;
  }

  if (find_index_x_esm_isWorking) {
    find_index_x_esm_res = attempt_x_esm.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), pFindIndex, function (item) {
      find_index_x_esm_newArrowCheck(this, find_index_x_esm_this);

      return item === 'c';
    }.bind(undefined));
    find_index_x_esm_isWorking = find_index_x_esm_res.threw === false && find_index_x_esm_res.value === 2;
  }
}
/**
 * Like `findIndex`, this method returns an index in the array, if an element
 * in the array satisfies the provided testing function. Otherwise -1 is returned.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If array is `null` or `undefined`-.
 * @param {Function} callback - Function to execute on each value in the array,
 *  taking three arguments: `element`, `index` and `array`.
 * @throws {TypeError} If `callback` is not a function.
 * @param {*} [thisArg] - Object to use as `this` when executing `callback`.
 * @returns {number} Returns index of positively tested element, otherwise -1.
 */


var findIdx;

if (find_index_x_esm_isWorking) {
  findIdx = function findIndex(array, callback) {
    var args = [callback];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return pFindIndex.apply(array, args);
  };
} else {
  findIdx = function findIndex(array, callback) {
    var object = to_object_x_esm(array);
    assert_is_function_x_esm(callback);
    var iterable = split_if_boxed_bug_x_esm(object);
    var length = to_length_x_esm(iterable.length);

    if (length < 1) {
      return -1;
    }

    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var index = 0;

    while (index < length) {
      if (callback.call(thisArg, iterable[index], index, object)) {
        return index;
      }

      index += 1;
    }

    return -1;
  };
}

var fi = findIdx;
/* harmony default export */ var find_index_x_esm = (fi);


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/dist/calculate-from-index-x.esm.js





var calculate_from_index_x_esm_getMax = function getMax(a, b) {
  return a >= b ? a : b;
};
/**
 * This method calculates a fromIndex of a given value for an array.
 *
 * @param {Array} array - * The array on which to calculate the starting index.
 * @throws {TypeError} If array is null or undefined.
 * @param {number} fromIndex - * The position in this array at which to begin. A
 *  negative value gives the index of array.length + fromIndex by asc.
 * @returns {number} The calculated fromIndex. Default is 0.
 */


var calculate_from_index_x_esm_calcFromIndex = function calcFromIndex(array, fromIndex) {
  var object = to_object_x_esm(array);

  if (is_array_like_x_esm(object) === false) {
    return 0;
  }

  var index = to_integer_x_esm(fromIndex);
  return index >= 0 ? index : calculate_from_index_x_esm_getMax(0, to_length_x_esm(object.length) + index);
};

/* harmony default export */ var calculate_from_index_x_esm = (calculate_from_index_x_esm_calcFromIndex);


// CONCATENATED MODULE: ./node_modules/index-of-x/dist/index-of-x.esm.js
function index_of_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }














var nio = [].indexOf;
var nativeIndexOf = typeof nio === 'function' && simple_methodize_x_esm(nio);
var mathMax = Math.max;

var index_of_x_esm_test1 = function test1() {
  var res = attempt_x_esm(nativeIndexOf, [0, 1], 1, 2);
  return res.threw === false && res.value === -1;
};

var index_of_x_esm_test2 = function test2() {
  var res = attempt_x_esm(nativeIndexOf, [0, 1], 1);
  return res.threw === false && res.value === 1;
};

var index_of_x_esm_test3 = function test3() {
  var res = attempt_x_esm(nativeIndexOf, [0, -0], -0);
  return res.threw === false && res.value === 0;
};

var index_of_x_esm_test4 = function test4() {
  var testArr = [];
  testArr.length = 2;
  /* eslint-disable-next-line no-void */

  testArr[1] = void 0;
  /* eslint-disable-next-line no-void */

  var res = attempt_x_esm(nativeIndexOf, testArr, void 0);
  return res.threw === false && res.value === 1;
};

var index_of_x_esm_test5 = function test5() {
  var res = attempt_x_esm(nativeIndexOf, 'abc', 'c');
  return res.threw === false && res.value === 2;
};

var index_of_x_esm_test6 = function test6() {
  var args = function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }('a', 'b', 'c');

  var res = attempt_x_esm(nativeIndexOf, args, 'c');
  return res.threw === false && res.value === 2;
};

var index_of_x_esm_isWorking = to_boolean_x_esm(nativeIndexOf) && index_of_x_esm_test1() && index_of_x_esm_test2() && index_of_x_esm_test3() && index_of_x_esm_test4() && index_of_x_esm_test5() && index_of_x_esm_test6();
var index_of_x_esm_implementation = function indexOf(array, searchElement) {
  var object = to_object_x_esm(array); // If no callback function or if callback is not a callable function

  var iterable = split_if_boxed_bug_x_esm(object);
  var length = to_length_x_esm(iterable.length);

  if (length === 0) {
    return -1;
  }

  var i = 0;

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params */
    i = to_integer_x_esm(arguments[2]);
  } // handle negative indices


  i = i >= 0 ? i : mathMax(0, length + i);

  for (; i < length; i += 1) {
    if (i in iterable && iterable[i] === searchElement) {
      return i;
    }
  }

  return -1;
};
var pIndexOf = index_of_x_esm_isWorking ? nativeIndexOf : index_of_x_esm_implementation;
/**
 * This method returns an index in the array, if an element in the array
 * satisfies the provided testing function. Otherwise -1 is returned.
 *
 * @private
 * @param {Array} array - The array to search.
 * @param {*} searchElement - Element to locate in the array.
 * @param {number} fromIndex - The index to start the search at.
 * @param {Function} extendFn - The comparison function to use.
 * @returns {number} Returns index of found element, otherwise -1.
 */

var findIdxFrom = function findIndexFrom(array, searchElement, fromIndex, extendFn) {
  var fIdx = fromIndex;
  var length = to_length_x_esm(array.length);

  while (fIdx < length) {
    if (fIdx in array && extendFn(array[fIdx], searchElement)) {
      return fIdx;
    }

    fIdx += 1;
  }

  return -1;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method returns the first index at which a given element can be found
 * in the array, or -1 if it is not present.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If `array` is `null` or `undefined`.
 * @param {*} searchElement - Element to locate in the `array`.
 * @param {number} [fromIndex] - The index to start the search at. If the
 *  index is greater than or equal to the array's length, -1 is returned,
 *  which means the array will not be searched. If the provided index value is
 *  a negative number, it is taken as the offset from the end of the array.
 *  Note: if the provided index is negative, the array is still searched from
 *  front to back. If the calculated index is less than 0, then the whole
 *  array will be searched. Default: 0 (entire array is searched).
 * @param {string} [extend] - Extension type: `SameValue` or `SameValueZero`.
 * @returns {number} Returns index of found element, otherwise -1.
 */
// eslint-enable jsdoc/check-param-names


var index_of_x_esm_indexOf = function indexOf(array, searchElement) {
  var _this = this;

  var object = to_object_x_esm(array);
  var iterable = split_if_boxed_bug_x_esm(object);
  var length = to_length_x_esm(iterable.length);

  if (length < 1) {
    return -1;
  }

  var argLength = arguments.length;
  /* eslint-disable-next-line prefer-rest-params */

  var extend = argLength > 2 && argLength > 3 ? arguments[3] : arguments[2];
  var extendFn;

  if (is_string_default()(extend)) {
    extend = extend.toLowerCase();

    if (extend === 'samevalue') {
      extendFn = same_value_x_esm;
    } else if (extend === 'samevaluezero') {
      extendFn = same_value_zero_x_esm;
    }
  }

  var fromIndex = 0;

  if (extendFn && (searchElement === 0 || is_nan_x_esm(searchElement))) {
    if (argLength > 3) {
      /* eslint-disable-next-line prefer-rest-params */
      fromIndex = calculate_from_index_x_esm(iterable, arguments[2]);

      if (fromIndex >= length) {
        return -1;
      }

      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }

    if (fromIndex > 0) {
      return findIdxFrom(iterable, searchElement, fromIndex, extendFn);
    }

    return find_index_x_esm(iterable, function (element, index) {
      index_of_x_esm_newArrowCheck(this, _this);

      return index in iterable && extendFn(searchElement, element);
    }.bind(this));
  }

  if (argLength > 3 || argLength > 2 && to_boolean_x_esm(extendFn) === false) {
    /* eslint-disable-next-line prefer-rest-params */
    fromIndex = calculate_from_index_x_esm(iterable, arguments[2]);

    if (fromIndex >= length) {
      return -1;
    }

    if (fromIndex < 0) {
      fromIndex = 0;
    }
  }

  return pIndexOf(iterable, searchElement, fromIndex);
};

/* harmony default export */ var index_of_x_esm = (index_of_x_esm_indexOf);


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/dist/array-reduce-right-x.esm.js
function array_reduce_right_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { array_reduce_right_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { array_reduce_right_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return array_reduce_right_x_esm_typeof(obj); }









var rr = [].reduceRight;
var nativeReduceR = typeof rr === 'function' && simple_methodize_x_esm(rr);

var array_reduce_right_x_esm_test1 = function test1() {
  return attempt_x_esm(function attemptee() {
    return nativeReduceR([], function iteratee(acc) {
      return acc;
    });
  }).threw;
};

var array_reduce_right_x_esm_test2 = function test2() {
  var res = attempt_x_esm(function attemptee() {
    return nativeReduceR(to_object_x_esm('abc'), function iteratee(acc, c) {
      return acc + c;
    }, 'x');
  });
  return res.threw === false && res.value === 'xcba';
};

var array_reduce_right_x_esm_test3 = function test3() {
  var res = attempt_x_esm(function attemptee() {
    var args = function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3);

    return nativeReduceR(args, function iteratee(acc, arg) {
      return acc + arg;
    }, 1);
  });
  return res.threw === false && res.value === 7;
};

var array_reduce_right_x_esm_test4 = function test4() {
  var res = attempt_x_esm(function attemptee() {
    return nativeReduceR({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, function iteratee(acc, arg) {
      return acc + arg;
    }, 2);
  });
  return res.threw === false && res.value === 8;
};

var array_reduce_right_x_esm_doc = typeof document !== 'undefined' && document;

var iteratee5 = function iteratee5(acc, node) {
  acc[acc.length] = node;
  return acc;
};

var array_reduce_right_x_esm_test5 = function test5() {
  if (array_reduce_right_x_esm_doc) {
    var fragment = array_reduce_right_x_esm_doc.createDocumentFragment();
    var div = array_reduce_right_x_esm_doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x_esm(function attemptee() {
      return nativeReduceR(fragment.childNodes, iteratee5, []);
    });
    return res.threw === false && res.value.length === 1 && res.value[0] === div;
  }

  return true;
};

var array_reduce_right_x_esm_test6 = function test6() {
  var res = attempt_x_esm(function attemptee() {
    return nativeReduceR('ab', function iteratee() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments[3];
    });
  });
  return res.threw === false && array_reduce_right_x_esm_typeof(res.value) === 'object';
}; // ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight


var array_reduce_right_x_esm_isWorking = to_boolean_x_esm(nativeReduceR) && array_reduce_right_x_esm_test1() && array_reduce_right_x_esm_test2() && array_reduce_right_x_esm_test3() && array_reduce_right_x_esm_test4() && array_reduce_right_x_esm_test5() && array_reduce_right_x_esm_test6();

var patchedReduceRight = function reduceRight(array, callBack
/* , initialValue */
) {
  require_object_coercible_x_esm(array);
  assert_is_function_x_esm(callBack);
  /* eslint-disable-next-line prefer-rest-params */

  return arguments.length > 2 ? nativeReduceR(array, callBack, arguments[2]) : nativeReduceR(array, callBack);
};

var array_reduce_right_x_esm_implementation = function reduceRight(array, callBack
/* , initialValue */
) {
  var object = to_object_x_esm(array); // If no callback function or if callback is not a callable function

  assert_is_function_x_esm(callBack);
  var iterable = split_if_boxed_bug_x_esm(object);
  var length = to_length_x_esm(iterable.length);
  var argsLength = arguments.length; // no value to return if no initial value, empty array

  if (length === 0 && argsLength < 3) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  var result;
  var i = length - 1;

  if (argsLength > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    result = arguments[2];
  } else {
    do {
      if (i in iterable) {
        result = iterable[i];
        i -= 1;
        break;
      } // if array contains no values, no initial value to return


      i -= 1;

      if (i < 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
    } while (true);
    /* eslint-disable-line no-constant-condition */

  }

  while (i >= 0) {
    if (i in iterable) {
      result = callBack(result, iterable[i], i, object);
    }

    i -= 1;
  }

  return result;
};
/**
 * This method applies a function against an accumulator and each value of the
 * array (from right-to-left) to reduce it to a single value..
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [initialValue] - Value to use as the first argument to the first
 *  call of the callback. If no initial value is supplied, the first element in
 *  the array will be used. Calling reduceRight on an empty array without an initial
 *  value is an error.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @throws {TypeError} If called on an empty array without an initial value.
 * @returns {*} The value that results from the reduction.
 */

var $reduceRight = array_reduce_right_x_esm_isWorking ? patchedReduceRight : array_reduce_right_x_esm_implementation;
/* harmony default export */ var array_reduce_right_x_esm = ($reduceRight);


// CONCATENATED MODULE: ./node_modules/big-counter-x/dist/big-counter-x.esm.js





var reducer = function _reducer(acc, digit) {
  return acc + digit;
};
/**
 * Serialise the counter´s current value.
 *
 * @private
 * @this BigCounter
 * @returns {string} A string representation of an integer.
 */


var counterToString = function ToString() {
  return array_reduce_right_x_esm(this.count, reducer, '');
};
/**
 * Incremental integer counter. Counts from `0` to very big integers.
 * Javascript´s number type allows you to count in integer steps
 * from `0` to `9007199254740991`. As of ES5, Strings can contain
 * approximately 65000 characters and ES6 is supposed to handle
 * the `MAX_SAFE_INTEGER` (though I don´t believe any environments supports
 * this). This counter represents integer values as strings and can therefore
 * count in integer steps from `0` to the maximum string length (that´s some
 * 65000 digits). In the lower range, upto `9007199254740991`, the strings can
 * be converted to safe Javascript integers `Number(value)` or `+value`. This
 * counter is great for any applications that need a really big count
 * represented as a string, (an ID string).
 *
 * @class
 * @property {Array<number>} count - A representation of a big number.
 */


var big_counter_x_esm_BigCounter = function BigCounter() {
  if (to_boolean_x_esm(this) === false || !(this instanceof BigCounter)) {
    throw new TypeError('Constructor BigCounter requires "new"');
  }

  object_define_properties_x_esm(this, {
    count: {
      value: [0]
    }
  });
};

object_define_properties_x_esm(big_counter_x_esm_BigCounter.prototype, {
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  get: {
    value: counterToString
  },

  /**
   * Increments the counter´s value by `1`.
   *
   * @function
   * @returns {object} The counter object.
   */
  next: {
    value: function next() {
      var clone = array_slice_x_esm(this.count);
      this.count.length = 0;
      var length = clone.length;
      var howMany = length > 0 ? length : 1;
      var carry = 0;
      var index = 0;

      while (index < howMany || carry) {
        var zi = carry + (clone[index] || 0) + (index === 0);
        this.count[this.count.length] = zi % 10;
        /* eslint-disable-next-line no-bitwise */

        carry = zi / 10 >> 0; // floor

        index += 1;
      }

      return this;
    }
  },

  /**
   * Resets the counter back to `0`.
   *
   * @function
   * @returns {object} The counter object.
   */
  reset: {
    value: function reset() {
      this.count.length = 1;
      this.count[0] = 0;
      return this;
    }
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toJSON: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toString: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  valueOf: {
    value: counterToString
  }
});
/* harmony default export */ var big_counter_x_esm = (big_counter_x_esm_BigCounter);


// CONCATENATED MODULE: ./node_modules/array-some-x/dist/array-some-x.esm.js








var ns = [].some;
var nativeSome = typeof ns === 'function' && simple_methodize_x_esm(ns);

var array_some_x_esm_test1 = function test1() {
  var spy = 0;
  var res = attempt_x_esm(function attemptee() {
    return nativeSome([1, 2], function spyAdd1(item) {
      spy += item;
      return false;
    });
  });
  return res.threw === false && res.value === false && spy === 3;
};

var array_some_x_esm_test2 = function test2() {
  var spy = '';
  var res = attempt_x_esm(function attemptee() {
    return nativeSome(to_object_x_esm('abc'), function spyAdd2(item, index) {
      spy += item;
      return index === 1;
    });
  });
  return res.threw === false && res.value === true && spy === 'ab';
};

var array_some_x_esm_test3 = function test3() {
  var spy = 0;
  var res = attempt_x_esm(function attemptee() {
    var args = function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3);

    return nativeSome(args, function spyAdd3(item, index) {
      spy += item;
      return index === 2;
    });
  });
  return res.threw === false && res.value === true && spy === 6;
};

var array_some_x_esm_test4 = function test4() {
  var spy = 0;
  var res = attempt_x_esm(function attemptee() {
    return nativeSome({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, function spyAdd4(item) {
      spy += item;
      return false;
    });
  });
  return res.threw === false && res.value === false && spy === 6;
};

var array_some_x_esm_doc = typeof document !== 'undefined' && document;

var array_some_x_esm_test5 = function test5() {
  if (array_some_x_esm_doc) {
    var spy = null;
    var fragment = array_some_x_esm_doc.createDocumentFragment();
    var div = array_some_x_esm_doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x_esm(function attemptee() {
      return nativeSome(fragment.childNodes, function spyAssign(item) {
        spy = item;
        return item;
      });
    });
    return res.threw === false && res.value === true && spy === div;
  }

  return true;
};

var array_some_x_esm_isStrict = function getIsStrict() {
  /* eslint-disable-next-line babel/no-invalid-this */
  return to_boolean_x_esm(this) === false;
}();

var array_some_x_esm_test6 = function test6() {
  if (array_some_x_esm_isStrict) {
    var spy = null;

    var thisTest = function thisTest() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x_esm(function attemptee() {
      return nativeSome([1], thisTest, 'x');
    });
    return res.threw === false && res.value === false && spy === true;
  }

  return true;
};

var array_some_x_esm_test7 = function test7() {
  var spy = {};
  var fn = 'return nativeSome("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  var res = attempt_x_esm(function attemptee() {
    /* eslint-disable-next-line no-new-func */
    return Function('nativeSome', 'spy', 'castBoolean', fn)(nativeSome, spy, to_boolean_x_esm);
  });
  return res.threw === false && res.value === false && spy.value !== true;
};

var array_some_x_esm_isWorking = to_boolean_x_esm(nativeSome) && array_some_x_esm_test1() && array_some_x_esm_test2() && array_some_x_esm_test3() && array_some_x_esm_test4() && array_some_x_esm_test5() && array_some_x_esm_test6() && array_some_x_esm_test7();
console.log(array_some_x_esm_isWorking);

var patchedSome = function some(array, callBack
/* , thisArg */
) {
  /* eslint-disable-next-line prefer-rest-params */
  return nativeSome(require_object_coercible_x_esm(array), assert_is_function_x_esm(callBack), arguments[2]);
}; // ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some


var array_some_x_esm_implementation = function some(array, callBack
/* , thisArg */
) {
  var object = to_object_x_esm(array); // If no callback function or if callback is not a callable function

  assert_is_function_x_esm(callBack);

  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line prefer-rest-params,babel/no-invalid-this */
      if (simple_call_x_esm(callBack, this, [arguments[0], i, object])) {
        return true;
      }
    }

    return false;
  };
  /* eslint-disable-next-line prefer-rest-params */


  return array_any_x_esm(object, iteratee, arguments[2]);
};
/**
 * This method tests whether some element in the array passes the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  any array element; otherwise, `false`.
 */

var $some = array_some_x_esm_isWorking ? patchedSome : array_some_x_esm_implementation;
/* harmony default export */ var array_some_x_esm = ($some);


// CONCATENATED MODULE: ./node_modules/symbol-iterator-x/dist/symbol-iterator-x.esm.js
function symbol_iterator_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { symbol_iterator_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { symbol_iterator_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return symbol_iterator_x_esm_typeof(obj); }



var ES6_SHIM_ITERATOR = '_es6-shim iterator_';
var AT_AT_ITERATOR = '@@iterator';
/* eslint-disable-next-line compat/compat */

var hasRealSymbolIterator = has_symbol_support_x_esm && symbol_iterator_x_esm_typeof(Symbol.iterator) === 'symbol';
/* eslint-disable-next-line compat/compat */

var hasFakeSymbolIterator = (typeof Symbol === "undefined" ? "undefined" : symbol_iterator_x_esm_typeof(Symbol)) === 'object' && Symbol !== null && typeof Symbol.iterator === 'string';
var hasSymbolIterator = hasRealSymbolIterator || hasFakeSymbolIterator;

var getOtherSymbolIterator = function getOtherSymbolIterator(iterable) {
  if (iterable[ES6_SHIM_ITERATOR]) {
    return ES6_SHIM_ITERATOR;
  }

  if (iterable[AT_AT_ITERATOR]) {
    return AT_AT_ITERATOR;
  }

  return null;
};

var getSymIt = function getSymIt() {
  if (hasSymbolIterator) {
    /* eslint-disable-next-line compat/compat */
    return Symbol.iterator;
  }

  var result = getOtherSymbolIterator([]);

  if (typeof result === 'string' && typeof [][result] === 'function') {
    return result;
  }

  return AT_AT_ITERATOR;
};
/**
 * Whenever an object needs to be iterated (such as at the beginning of a for..of loop),
 * its @@iterator method is called with no arguments, and the returned iterator is used
 * to obtain the values to be iterated.
 *
 * Possible values are.
 *
 * Symbol.iterator
 * '_es6-shim iterator_'
 * '@@iterator'.
 *
 * @type {symbol|string}
 */


var $iterator$ = getSymIt();
/**
 * Detect an iterator function.
 *
 * @private
 * @param {*} iterable - Value to detect iterator function.
 * @returns {symbol|string|undefined} The iterator property identifier.
 */

var symbol_iterator_x_esm_getSymbolIterator = function getSymbolIterator(iterable) {
  if (is_nil_x_esm(iterable) === false) {
    if (hasSymbolIterator && iterable[$iterator$]) {
      return $iterator$;
    }

    var result = getOtherSymbolIterator(iterable);

    if (typeof result === 'string') {
      return result;
    }
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};
/* harmony default export */ var symbol_iterator_x_esm = ($iterator$);


// CONCATENATED MODULE: ./node_modules/symbol-species-x/dist/symbol-species-x.esm.js

/**
 * The species accessor property allows subclasses to override the default constructor for objects.
 *
 * Possible values are.
 *
 * Symbol.species
 * '@@species'.
 *
 * @type {symbol|string}
 */

var symbolSpecies = has_symbol_support_x_esm && Symbol.species || '@@species';
/* eslint-disable-line compat/compat */

/* harmony default export */ var symbol_species_x_esm = (symbolSpecies);


// CONCATENATED MODULE: ./node_modules/object-create-x/dist/object-create-x.esm.js
function object_create_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { object_create_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { object_create_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return object_create_x_esm_typeof(obj); }





var object_create_x_esm_ObjectCtr = {}.constructor;
var nCreate = object_create_x_esm_ObjectCtr.create;
var nativeCreate = typeof nCreate === 'function' && nCreate;

var object_create_x_esm_test1 = function test1() {
  var res = attempt_x_esm(nativeCreate, null);
  return res.threw === false && res.value && object_create_x_esm_typeof(res.value) === 'object';
};

var object_create_x_esm_test2 = function test2() {
  var res = attempt_x_esm(nativeCreate, null); // noinspection LoopStatementThatDoesntLoopJS

  for (var _ in res.value)
  /* eslint-disable-line guard-for-in,no-restricted-syntax */
  {
    return false;
  }

  return true;
};

var object_create_x_esm_test3 = function test3() {
  var res = attempt_x_esm(nativeCreate, null, {
    test: {
      value: true
    }
  });
  return res.threw === false && res.value && object_create_x_esm_typeof(res.value) === 'object' && res.value.test === true;
};

var getShapes = function getShapes() {
  // Shape - superclass
  var Shape = function Shape() {
    // noinspection JSUnusedGlobalSymbols
    this.x = 0; // noinspection JSUnusedGlobalSymbols

    this.y = 0;
  }; // superclass method


  Shape.prototype.move = function move(x, y) {
    // noinspection JSUnusedGlobalSymbols
    this.x += x; // noinspection JSUnusedGlobalSymbols

    this.y += y;
    return 'Shape moved.';
  }; // Rectangle - subclass


  var Rectangle = function Rectangle() {
    Shape.call(this); // call super constructor.
  };

  return {
    Shape: Shape,
    Rectangle: Rectangle
  };
};

var object_create_x_esm_test4 = function test4() {
  var _getShapes = getShapes(),
      Shape = _getShapes.Shape;

  var res = attempt_x_esm(nativeCreate, Shape.prototype);
  return res.threw === false && res.value && object_create_x_esm_typeof(res.value) === 'object';
};

var object_create_x_esm_test5 = function test5() {
  var _getShapes2 = getShapes(),
      Shape = _getShapes2.Shape,
      Rectangle = _getShapes2.Rectangle;

  var res = attempt_x_esm(nativeCreate, Shape.prototype); // subclass extends superclass

  Rectangle.prototype = res.value;
  Rectangle.prototype.constructor = Rectangle;
  var rect = new Rectangle();
  return rect instanceof Rectangle;
};

var object_create_x_esm_test6 = function test6() {
  var _getShapes3 = getShapes(),
      Shape = _getShapes3.Shape,
      Rectangle = _getShapes3.Rectangle;

  var res = attempt_x_esm(nativeCreate, Shape.prototype); // subclass extends superclass

  Rectangle.prototype = res.value;
  Rectangle.prototype.constructor = Rectangle;
  var rect = new Rectangle();
  return rect instanceof Shape;
};

var object_create_x_esm_test7 = function test7() {
  var _getShapes4 = getShapes(),
      Shape = _getShapes4.Shape,
      Rectangle = _getShapes4.Rectangle;

  var res = attempt_x_esm(nativeCreate, Shape.prototype); // subclass extends superclass

  Rectangle.prototype = res.value;
  Rectangle.prototype.constructor = Rectangle;
  var rect = new Rectangle();
  return rect.move(1, 1) === 'Shape moved.';
};

var object_create_x_esm_isWorking = to_boolean_x_esm(nativeCreate) && object_create_x_esm_test1() && object_create_x_esm_test2() && object_create_x_esm_test3() && object_create_x_esm_test4() && object_create_x_esm_test5() && object_create_x_esm_test6() && object_create_x_esm_test7();
/**
 * This method method creates a new object with the specified prototype object and properties.
 *
 * @param {*} prototype - The object which should be the prototype of the newly-created object.
 * @param {*} [properties] - If specified and not undefined, an object whose enumerable own properties
 * (that is, those properties defined upon itself and not enumerable properties along its prototype chain)
 * specify property descriptors to be added to the newly-created object, with the corresponding property names.
 * @throws {TypeError} If the properties parameter isn't null or an object.
 * @returns {boolean} A new object with the specified prototype object and properties.
 */

var object_create_x_esm_doc = typeof document !== 'undefined' && document;
var supportsProto = to_boolean_x_esm({
  __proto__: null
} instanceof object_create_x_esm_ObjectCtr) === false; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346

var object_create_x_esm_shouldUseActiveX = function shouldUseActiveX() {
  // return early if document.domain not set
  if (to_boolean_x_esm(object_create_x_esm_doc.domain) === false) {
    return false;
  }

  var result = attempt_x_esm(function attemptee() {
    /* eslint-disable-next-line no-undef */
    return new ActiveXObject('htmlfile');
  });
  return result.threw === false && Boolean(result.value);
}; // This supports IE8 when document.domain is used
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346


var getEmptyViaActiveX = function getEmptyViaActiveX() {
  /* eslint-disable-next-line no-undef */
  var xDoc = new ActiveXObject('htmlfile');
  /* eslint-disable-next-line no-useless-escape,prettier/prettier */

  xDoc.write('<script><\/script>');
  xDoc.close(); // noinspection JSUnresolvedVariable

  var empty = xDoc.parentWindow.Object.prototype;
  xDoc = null;
  return empty;
}; // The original implementation using an iframe
// before the activex approach was added
// see https://github.com/es-shims/es5-shim/issues/150


var getEmptyViaIFrame = function getEmptyViaIFrame() {
  var iframe = object_create_x_esm_doc.createElement('iframe');
  iframe.style.display = 'none';
  /* eslint-disable-next-line no-script-url */

  iframe.src = 'javascript:';
  var parent = object_create_x_esm_doc.body || object_create_x_esm_doc.documentElement;
  parent.appendChild(iframe);
  var empty = iframe.contentWindow.Object.prototype;
  parent.removeChild(iframe);
  iframe = null;
  return empty;
}; // the following produces false positives
// in Opera Mini => not a reliable check
// Object.prototype.__proto__ === null


var createEmptyProto = function createEmpty() {
  return {
    __proto__: null
  };
}; // In old IE __proto__ can't be used to manually set `null`, nor does
// any other method exist to make an object that inherits from nothing,
// aside from Object.prototype itself. Instead, create a new global
// object and *steal* its Object.prototype and strip it bare. This is
// used as the prototype to create nullary objects.


var createEmptyNoProto = function createEmpty() {
  // Determine which approach to use
  // see https://github.com/es-shims/es5-shim/issues/150
  var empty = object_create_x_esm_shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();
  delete empty.constructor;
  delete empty.hasOwnProperty;
  delete empty.propertyIsEnumerable;
  delete empty.isPrototypeOf;
  delete empty.toLocaleString;
  delete empty.toString;
  delete empty.valueOf;
  /* eslint-disable-next-line lodash/prefer-noop */

  var E = function Empty() {};

  E.prototype = empty; // short-circuit future calls

  createEmptyNoProto = function createEmptyShortCircuit() {
    return new E();
  };

  return new E();
}; // Contributed by Brandon Benvie, October, 2012


var createEmpty = supportsProto || to_boolean_x_esm(object_create_x_esm_doc) === false ? createEmptyProto : createEmptyNoProto;
var object_create_x_esm_implementation = function create(prototype, properties) {
  var object;
  /* eslint-disable-next-line lodash/prefer-noop */

  var T = function Type() {}; // An empty constructor.


  if (prototype === null) {
    object = createEmpty();
  } else {
    if (is_primitive_x_esm(prototype)) {
      // In the native implementation `parent` can be `null`
      // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
      // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
      // like they are in modern browsers. Using `Object.create` on DOM elements
      // is...err...probably inappropriate, but the native version allows for it.
      throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
    }

    T.prototype = prototype;
    object = new T(); // IE has no built-in implementation of `Object.getPrototypeOf`
    // neither `__proto__`, but this manually setting `__proto__` will
    // guarantee that `Object.getPrototypeOf` will work as expected with
    // objects created using `Object.create`

    /* eslint-disable-next-line no-proto */

    object.__proto__ = prototype;
  }

  if (typeof properties !== 'undefined') {
    object_define_properties_x_esm(object, properties);
  }

  return object;
};
var $create = object_create_x_esm_isWorking ? nativeCreate : object_create_x_esm_implementation;
/* harmony default export */ var object_create_x_esm = ($create);


// CONCATENATED MODULE: ./node_modules/is-var-name/index.mjs
/*!
 * is-var-name | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-var-name
*/
function isVarName(str) {
	if (typeof str !== 'string') {
		return false;
	}

	if (str.trim() !== str) {
		return false;
	}

	try {
		new Function(str, 'var ' + str);
	} catch (e) {
		return false;
	}

	return true;
}

// CONCATENATED MODULE: ./node_modules/rename-function-x/dist/rename-function-x.esm.js








var rename_function_x_esm_rename = function rename(fn, name) {
  var descriptor = object_get_own_property_descriptor_x_esm(fn, 'name');

  if (descriptor && descriptor.configurable) {
    object_define_property_x_esm(fn, 'name', {
      configurable: true,
      value: name
    });
  }

  return fn.name;
};

var supportsFunctionRenaming = attempt_x_esm(function attemptee() {
  /* eslint-disable-next-line lodash/prefer-noop */
  return rename_function_x_esm_rename(function test1() {}, 'test2');
}).value === 'test2'; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * Renames a function.
 *
 * @param {Function} fn - The function to be renamed.
 * @param {string} name - The new name for the function.
 * @param {boolean} [force=false] - Rename even if reported as not valid.
 * @returns {boolean} - Returns true if renaming was a success; otherwise false.
 */
// eslint-enable jsdoc/check-param-names

var rename_function_x_esm_renameFunction = function renameFunction(fn, name) {
  assert_is_function_x_esm(fn);
  var string = to_string_x_esm(name);
  /* eslint-disable-next-line prefer-rest-params */

  var force = arguments.length > 2 && to_boolean_x_esm(arguments[2]);

  if (force === false && isVarName(string) === false) {
    throw new Error("Not a valid function name \"".concat(string, "\""));
  }

  return supportsFunctionRenaming && rename_function_x_esm_rename(fn, name) === string;
};

/* harmony default export */ var rename_function_x_esm = (rename_function_x_esm_renameFunction);


// CONCATENATED MODULE: ./node_modules/collections-x/dist/collections-x.esm.js
var _sizeDescriptor, _defineProperties3, _defineProperties5;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function collections_x_esm_slicedToArray(arr, i) { return collections_x_esm_arrayWithHoles(arr) || collections_x_esm_iterableToArrayLimit(arr, i) || collections_x_esm_nonIterableRest(); }

function collections_x_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function collections_x_esm_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function collections_x_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function collections_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { collections_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { collections_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return collections_x_esm_typeof(obj); }





























/* eslint-disable-next-line no-void */

var collections_x_esm_UNDEFINED = void 0;
var SIZE = 'size';
var NEXT = 'next';
var KEY = 'key';
var VALUE = 'value';
var DONE = 'done';
var WRITABLE = 'writable';
var DELETE = 'delete';
var MAP = 'map';
var SET = 'set';
var PROP_CHANGED = '[[changed]]';
var PROP_CHANGE = '[[change]]';
var PROP_ID = '[[id]]';
var PROP_KEY = "[[".concat(KEY, "]]");
var PROP_ORDER = '[[order]]';
var PROP_VALUE = "[[".concat(VALUE, "]]");
var PROP_ITERATORHASMORE = '[[IteratorHasMore]]';
var PROP_MAP = '[[Map]]';
var PROP_MAPITERATIONKIND = '[[MapIterationKind]]';
var PROP_MAPNEXTINDEX = '[[MapNextIndex]]';
var PROP_SET = '[[Set]]';
var PROP_SETITERATIONKIND = '[[SetIterationKind]]';
var PROP_SETNEXTINDEX = '[[SetNextIndex]]';
var KIND_VALUE = VALUE;
var KIND_KEY = KEY;
var KIND_KEY_VALUE = "".concat(KIND_KEY, "+").concat(KIND_VALUE);
var SAMEVALUEZERO = 'SameValueZero';
var tempArray = [];
var push = simple_methodize_x_esm(tempArray.push);
var splice = simple_methodize_x_esm(tempArray.splice);
var collections_x_esm_charAt = simple_methodize_x_esm(KEY.charAt);
var setPrototypeOf = simple_methodize_x_esm({}.constructor.setPrototypeOf);
var collections_x_esm_hasRealSymbolIterator = collections_x_esm_typeof(symbol_iterator_x_esm) === 'symbol';
/**
 * The iterator identifier that is in use.
 *
 * Type {Symbol|string}.
 */

var symIt = symbol_iterator_x_esm;

var collections_x_esm_assertIterableEntryObject = function assertIterableEntryObject(kind, next) {
  if (kind === MAP) {
    if (is_array_like_x_esm(next[VALUE]) === false || next[VALUE].length < 2) {
      throw new TypeError("Iterator value ".concat(is_array_like_x_esm(next[VALUE]), " is not an entry object"));
    }
  }
};

var collections_x_esm_setPropsIterable = function setPropsIterable(args) {
  var _args = collections_x_esm_slicedToArray(args, 3),
      kind = _args[0],
      context = _args[1],
      next = _args[2];

  var key = kind === MAP ? next[VALUE][0] : next[VALUE];
  var indexof = index_of_x_esm(assert_is_object_x_esm(context)[PROP_KEY], key, SAMEVALUEZERO);

  if (indexof < 0) {
    if (kind === MAP) {
      push(context[PROP_VALUE], next[VALUE][1]);
    }

    push(context[PROP_KEY], key);
    push(context[PROP_ORDER], context[PROP_ID].get());
    context[PROP_ID][NEXT]();
  } else if (kind === MAP) {
    /* eslint-disable-next-line prefer-destructuring */
    context[PROP_VALUE][indexof] = next[VALUE][1];
  }
};

var parseIterable = function parseIterable(args) {
  var _args2 = collections_x_esm_slicedToArray(args, 4),
      kind = _args2[0],
      iterable = _args2[1],
      context = _args2[2],
      symbolIterator = _args2[3];

  var iterator = iterable[symbolIterator]();
  var next = iterator[NEXT]();
  collections_x_esm_assertIterableEntryObject(kind, next);

  while (next[DONE] === false) {
    collections_x_esm_setPropsIterable([kind, context, next]);
    next = iterator[NEXT]();
  }
};

var assertStringEntryObject = function assertStringEntryObject(kind, iterable) {
  if (kind === MAP) {
    throw new TypeError("Iterator value ".concat(collections_x_esm_charAt(iterable, 0), " is not an entry object"));
  }
};

var getCharsString = function getCharsString(iterable, next) {
  return {
    char1: collections_x_esm_charAt(iterable, next),
    char2: collections_x_esm_charAt(iterable, next + 1)
  };
};

var collections_x_esm_setContextString = function setContextString(context, key) {
  var indexof = index_of_x_esm(assert_is_object_x_esm(context)[PROP_KEY], key, SAMEVALUEZERO);

  if (indexof < 0) {
    push(context[PROP_KEY], key);
    push(context[PROP_ORDER], context[PROP_ID].get());
    context[PROP_ID][NEXT]();
  }
};

var collections_x_esm_getNextKey = function getNextKey(iterable, next) {
  var _getCharsString = getCharsString(iterable, next),
      char1 = _getCharsString.char1,
      char2 = _getCharsString.char2;

  if (is_surrogate_pair_x_esm(char1, char2)) {
    return {
      key: char1 + char2,
      nxt: next + 1
    };
  }

  return {
    key: char1,
    nxt: next
  };
};

var collections_x_esm_parseString = function parseString(args) {
  var _args3 = collections_x_esm_slicedToArray(args, 3),
      kind = _args3[0],
      iterable = _args3[1],
      context = _args3[2];

  assertStringEntryObject(kind, iterable);
  var next = 0;

  while (next < iterable.length) {
    var nextKey = collections_x_esm_getNextKey(iterable, next);
    next = nextKey.nxt;
    collections_x_esm_setContextString(context, nextKey.key);
    next += 1;
  }
};

var collections_x_esm_assertArrayLikeIterable = function assertArrayLikeIterable(iterable, next) {
  if (is_primitive_x_esm(iterable[next])) {
    throw new TypeError("Iterator value ".concat(is_array_like_x_esm(next[VALUE]), " is not an entry object"));
  }
};

var collections_x_esm_setContextArrayLike = function setContextArrayLike(args) {
  var _args4 = collections_x_esm_slicedToArray(args, 5),
      kind = _args4[0],
      context = _args4[1],
      key = _args4[2],
      iterable = _args4[3],
      next = _args4[4];

  var indexof = index_of_x_esm(assert_is_object_x_esm(context)[PROP_KEY], key, SAMEVALUEZERO);

  if (indexof < 0) {
    if (kind === MAP) {
      push(context[PROP_VALUE], iterable[next][1]);
    }

    push(context[PROP_KEY], key);
    push(context[PROP_ORDER], context[PROP_ID].get());
    context[PROP_ID][NEXT]();
  } else if (kind === MAP) {
    /* eslint-disable-next-line prefer-destructuring */
    context[PROP_VALUE][indexof] = iterable[next][1];
  }
};

var parseArrayLike = function parseArrayLike(args) {
  var _args5 = collections_x_esm_slicedToArray(args, 3),
      kind = _args5[0],
      iterable = _args5[1],
      context = _args5[2];

  var next = 0;

  while (next < iterable.length) {
    var key = void 0;

    if (kind === MAP) {
      collections_x_esm_assertArrayLikeIterable(iterable, next);
      /* eslint-disable-next-line prefer-destructuring */

      key = iterable[next][0];
    } else {
      key = iterable[next];
    }

    collections_x_esm_setContextArrayLike([kind, context, key, iterable, next]);
    next += 1;
  }
};

var collections_x_esm_defineDefaultProps = function defineDefaultProps(context) {
  var _defineProperties;

  object_define_properties_x_esm(context, (_defineProperties = {}, _defineProperty(_defineProperties, PROP_CHANGED, _defineProperty({}, VALUE, false)), _defineProperty(_defineProperties, PROP_ID, _defineProperty({}, VALUE, new big_counter_x_esm())), _defineProperty(_defineProperties, PROP_KEY, _defineProperty({}, VALUE, [])), _defineProperty(_defineProperties, PROP_ORDER, _defineProperty({}, VALUE, [])), _defineProperties));
};

var collections_x_esm_performParsing = function performParsing(args) {
  var _args6 = collections_x_esm_slicedToArray(args, 4),
      iterable = _args6[1],
      symbolIterator = _args6[3];

  if (iterable && is_function_x_esm(iterable[symbolIterator])) {
    parseIterable(args);
  } else if (is_string_default()(iterable)) {
    collections_x_esm_parseString(args);
  } else if (is_array_like_x_esm(iterable)) {
    parseArrayLike(args);
  }
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * If an iterable object is passed, all of its elements will be added to the
 * new Map/Set, null is treated as undefined.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @param {*} iterable - Value to parsed.
 */
// eslint-enable jsdoc/check-param-names


var collections_x_esm_parse = function parse(args) {
  var _defineProperty3;

  var _args7 = collections_x_esm_slicedToArray(args, 3),
      kind = _args7[0],
      context = _args7[1],
      iterable = _args7[2];

  var symbolIterator = symbol_iterator_x_esm_getSymbolIterator(iterable);

  if (kind === MAP) {
    object_define_property_x_esm(context, PROP_VALUE, _defineProperty({}, VALUE, []));
  }

  collections_x_esm_defineDefaultProps(context);
  collections_x_esm_performParsing([kind, iterable, context, symbolIterator]);
  object_define_property_x_esm(context, SIZE, (_defineProperty3 = {}, _defineProperty(_defineProperty3, VALUE, context[PROP_KEY].length), _defineProperty(_defineProperty3, WRITABLE, true), _defineProperty3));
};

var collections_x_esm_updatePointerIndexes = function updatePointerIndexes(context, pointers) {
  array_some_x_esm(context[PROP_ORDER], function predicate(id, count) {
    pointers.index = count;
    return id > pointers.order;
  });
};

var updateBaseForEach = function updateBaseForEach(args) {
  var _args8 = collections_x_esm_slicedToArray(args, 3),
      context = _args8[0],
      pointers = _args8[1],
      length = _args8[2];

  var len = length;

  if (context[PROP_CHANGE]) {
    collections_x_esm_updatePointerIndexes(context, pointers);
    context[PROP_CHANGE] = false;
    len = context[PROP_KEY].length;
  } else {
    pointers.index += 1;
  }

  pointers.order = context[PROP_ORDER][pointers.index];
  return len;
};

var collections_x_esm_doCallback = function doCallback(args) {
  var _args9 = collections_x_esm_slicedToArray(args, 5),
      kind = _args9[0],
      context = _args9[1],
      pointers = _args9[2],
      callback = _args9[3],
      thisArg = _args9[4];

  if (has_own_property_x_esm(context[PROP_KEY], pointers.index)) {
    var key = context[PROP_KEY][pointers.index];
    var value = kind === MAP ? context[PROP_VALUE][pointers.index] : key;
    simple_call_x_esm(callback, thisArg, [value, key, context]);
  }
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The base forEach method executes a provided function once per each value
 * in the Map/Set object, in insertion order.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @param {Function} callback - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @returns {object} The Map/Set object.
 */
// eslint-enable jsdoc/check-param-names


var collections_x_esm_baseForEach = function baseForEach(args) {
  var _args10 = collections_x_esm_slicedToArray(args, 4),
      kind = _args10[0],
      context = _args10[1],
      callback = _args10[2],
      thisArg = _args10[3];

  assert_is_object_x_esm(context);
  assert_is_function_x_esm(callback);
  context[PROP_CHANGE] = false;
  var pointers = {
    index: 0,
    order: context[PROP_ORDER][0]
  };
  var length = context[PROP_KEY].length;

  while (pointers.index < length) {
    collections_x_esm_doCallback([kind, context, pointers, callback, thisArg]);
    length = updateBaseForEach([context, pointers, length]);
  }

  return context;
};
/**
 * The base has method returns a boolean indicating whether an element with
 * the specified key/value exists in a Map/Set object or not.
 *
 * @private
 * @param {*} key - The key/value to test for presence in the Map/Set object.
 * @returns {boolean} Returns true if an element with the specified key/value
 *  exists in the Map/Set object; otherwise false.
 */


var baseHas = function has(key) {
  /* eslint-disable-next-line babel/no-invalid-this */
  return index_of_x_esm(assert_is_object_x_esm(this)[PROP_KEY], key, SAMEVALUEZERO) > -1;
};
/**
 * The base clear method removes all elements from a Map/Set object.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @returns {object} The Map/Set object.
 */


var collections_x_esm_baseClear = function baseClear(kind, context) {
  assert_is_object_x_esm(context);
  context[PROP_ID].reset();
  context[PROP_CHANGE] = true;
  context[SIZE] = 0;
  context[PROP_ORDER].length = 0;
  context[PROP_KEY].length = 0;

  if (kind === MAP) {
    context[PROP_VALUE].length = 0;
  }

  return context;
};

var setContextFoundBaseDelete = function setContextFoundBaseDelete(args) {
  var _args11 = collections_x_esm_slicedToArray(args, 3),
      kind = _args11[0],
      context = _args11[1],
      indexof = _args11[2];

  if (kind === MAP) {
    splice(context[PROP_VALUE], indexof, 1);
  }

  splice(context[PROP_KEY], indexof, 1);
  splice(context[PROP_ORDER], indexof, 1);
  context[PROP_CHANGE] = true;
  context[SIZE] = context[PROP_KEY].length;
  return true;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The base delete method removes the specified element from a Map/Set object.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @param {*} key - The key/value of the element to remove from Map/Set object.
 * @returns {object} The Map/Set object.
 */
// eslint-enable jsdoc/check-param-names


var collections_x_esm_baseDelete = function baseDelete(args) {
  var _args12 = collections_x_esm_slicedToArray(args, 3),
      kind = _args12[0],
      context = _args12[1],
      key = _args12[2];

  var indexof = index_of_x_esm(assert_is_object_x_esm(context)[PROP_KEY], key, SAMEVALUEZERO);
  return indexof > -1 && setContextFoundBaseDelete([kind, context, indexof]);
};

var setContextFoundBaseAddSet = function setContextFoundBaseAddSet(args) {
  var _args13 = collections_x_esm_slicedToArray(args, 4),
      kind = _args13[0],
      context = _args13[1],
      key = _args13[2],
      value = _args13[3];

  if (kind === MAP) {
    push(context[PROP_VALUE], value);
  }

  push(context[PROP_KEY], key);
  push(context[PROP_ORDER], context[PROP_ID].get());
  context[PROP_ID][NEXT]();
  context[PROP_CHANGE] = true;
  context[SIZE] = context[PROP_KEY].length;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The base set and add method.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @param {*} key - The key or value of the element to add/set on the object.
 * @param {*} [value] - The value of the element to add to the Map object.
 * @returns {object} The Map/Set object.
 */
// eslint-enable jsdoc/check-param-names


var collections_x_esm_baseAddSet = function baseAddSet(args) {
  var _args14 = collections_x_esm_slicedToArray(args, 4),
      kind = _args14[0],
      context = _args14[1],
      key = _args14[2],
      value = _args14[3];

  var index = index_of_x_esm(assert_is_object_x_esm(context)[PROP_KEY], key, SAMEVALUEZERO);

  if (index > -1) {
    if (kind === MAP) {
      context[PROP_VALUE][index] = value;
    }
  } else {
    setContextFoundBaseAddSet([kind, context, key, value]);
  }

  return context;
};

var thisIteratorDescriptor = _defineProperty({}, VALUE, function iterator() {
  return this;
});

var thisSpeciesDescriptor = {
  get: function species() {
    return this;
  }
};
/**
 * An object is an iterator when it knows how to access items from a
 * collection one at a time, while keeping track of its current position
 * within that sequence. In JavaScript an iterator is an object that provides
 * a next() method which returns the next item in the sequence. This method
 * returns an object with two properties: done and value. Once created,
 * an iterator object can be used explicitly by repeatedly calling next().
 *
 * @private
 * @class
 * @param {object} context - The Set object.
 * @param {string} [iteratorKind] - Values are `value`, `key` or `key+value`.
 */

var SetIt = function SetIterator(context, iteratorKind) {
  var _PROP_ITERATORHASMORE, _PROP_SETNEXTINDEX, _defineProperties2;

  object_define_properties_x_esm(this, (_defineProperties2 = {}, _defineProperty(_defineProperties2, PROP_ITERATORHASMORE, (_PROP_ITERATORHASMORE = {}, _defineProperty(_PROP_ITERATORHASMORE, VALUE, true), _defineProperty(_PROP_ITERATORHASMORE, WRITABLE, true), _PROP_ITERATORHASMORE)), _defineProperty(_defineProperties2, PROP_SET, _defineProperty({}, VALUE, assert_is_object_x_esm(context))), _defineProperty(_defineProperties2, PROP_SETITERATIONKIND, _defineProperty({}, VALUE, iteratorKind || KIND_VALUE)), _defineProperty(_defineProperties2, PROP_SETNEXTINDEX, (_PROP_SETNEXTINDEX = {}, _defineProperty(_PROP_SETNEXTINDEX, VALUE, 0), _defineProperty(_PROP_SETNEXTINDEX, WRITABLE, true), _PROP_SETNEXTINDEX)), _defineProperties2));
};

var getSetNextObject = function getSetNextObject(args) {
  var _ref;

  var _args15 = collections_x_esm_slicedToArray(args, 3),
      iteratorKind = _args15[0],
      context = _args15[1],
      index = _args15[2];

  return _ref = {}, _defineProperty(_ref, DONE, false), _defineProperty(_ref, VALUE, iteratorKind === KIND_KEY_VALUE ? [context[PROP_KEY][index], context[PROP_KEY][index]] : context[PROP_KEY][index]), _ref;
};
/**
 * Once initialized, the next() method can be called to access key-value
 * pairs from the object in turn.
 *
 * @private
 * @function next
 * @returns {object} Returns an object with two properties: done and value.
 */


object_define_property_x_esm(SetIt.prototype, NEXT, _defineProperty({}, VALUE, function next() {
  var _ref2;

  var context = assert_is_object_x_esm(this[PROP_SET]);
  var index = this[PROP_SETNEXTINDEX];
  var iteratorKind = this[PROP_SETITERATIONKIND];
  var more = this[PROP_ITERATORHASMORE];

  if (index < context[PROP_KEY].length && more) {
    this[PROP_SETNEXTINDEX] += 1;
    return getSetNextObject([iteratorKind, context, index]);
  }

  this[PROP_ITERATORHASMORE] = false;
  return _ref2 = {}, _defineProperty(_ref2, DONE, true), _defineProperty(_ref2, VALUE, collections_x_esm_UNDEFINED), _ref2;
}));
/**
 * The @@iterator property is the same Iterator object.
 *
 * @private
 * @function symIt
 * @memberof SetIterator.prototype
 * @returns {object} This Iterator object.
 */

object_define_property_x_esm(SetIt.prototype, symIt, thisIteratorDescriptor);

var hasDescriptor = _defineProperty({}, VALUE, baseHas);

var sizeDescriptor = (_sizeDescriptor = {}, _defineProperty(_sizeDescriptor, VALUE, 0), _defineProperty(_sizeDescriptor, WRITABLE, true), _sizeDescriptor);
/**
 * This method returns a new Iterator object that contains the
 * values for each element in the Set object in insertion order.
 *
 * @private
 * @this Set
 * @returns {object} A new Iterator object.
 */

var setValuesIterator = function values() {
  return new SetIt(this);
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The Set object lets you store unique values of any type, whether primitive
 * values or object references.
 *
 * @class Set
 * @param {*} [iterable] - If an iterable object is passed, all of its elements
 * will be added to the new Set. A null is treated as undefined.
 */
// eslint-enable jsdoc/check-param-names


var SetImplementation = function Set() {
  if (to_boolean_x_esm(this) === false || !(this instanceof SetImplementation)) {
    throw new TypeError("Constructor Set requires 'new'");
  }
  /* eslint-disable-next-line prefer-rest-params */


  collections_x_esm_parse([SET, this, arguments.length ? arguments[0] : collections_x_esm_UNDEFINED]);
}; // noinspection JSValidateTypes

object_define_properties_x_esm(SetImplementation.prototype, (_defineProperties3 = {
  /**
   * The add() method appends a new element with a specified value to the end
   * of a Set object.
   *
   * @param {*} value - Required. The value of the element to add to the Set
   *  object.
   * @returns {object} The Set object.
   */
  add: _defineProperty({}, VALUE, function add(value) {
    return collections_x_esm_baseAddSet([SET, this, value]);
  }),

  /**
   * The clear() method removes all elements from a Set object.
   *
   * @returns {object} The Set object.
   */
  clear: _defineProperty({}, VALUE, function clear() {
    return collections_x_esm_baseClear(SET, this);
  })
}, _defineProperty(_defineProperties3, DELETE, _defineProperty({}, VALUE, function $delete(value) {
  return collections_x_esm_baseDelete([SET, this, value]);
})), _defineProperty(_defineProperties3, "entries", _defineProperty({}, VALUE, function entries() {
  return new SetIt(this, KIND_KEY_VALUE);
})), _defineProperty(_defineProperties3, "forEach", _defineProperty({}, VALUE, function forEach(callback, thisArg) {
  return collections_x_esm_baseForEach([SET, this, callback, thisArg]);
})), _defineProperty(_defineProperties3, "has", hasDescriptor), _defineProperty(_defineProperties3, "keys", _defineProperty({}, VALUE, setValuesIterator)), _defineProperty(_defineProperties3, "size", sizeDescriptor), _defineProperty(_defineProperties3, "values", _defineProperty({}, VALUE, setValuesIterator)), _defineProperty(_defineProperties3, symbol_species_x_esm, thisSpeciesDescriptor), _defineProperties3));
/**
 * The initial value of the @@iterator property is the same function object
 * as the initial value of the values property.
 *
 * @function symIt
 * @memberof $SetObject.prototype
 * @returns {object} A new Iterator object.
 */

object_define_property_x_esm(SetImplementation.prototype, symIt, _defineProperty({}, VALUE, setValuesIterator));
rename_function_x_esm(SetImplementation.prototype.delete, DELETE, true);
/**
 * An object is an iterator when it knows how to access items from a
 * collection one at a time, while keeping track of its current position
 * within that sequence. In JavaScript an iterator is an object that provides
 * a next() method which returns the next item in the sequence. This method
 * returns an object with two properties: done and value. Once created,
 * an iterator object can be used explicitly by repeatedly calling next().
 *
 * @private
 * @class
 * @param {object} context - The Map object.
 * @param {string} iteratorKind - Values are `value`, `key` or `key+value`.
 */

var MapIt = function MapIterator(context, iteratorKind) {
  var _PROP_ITERATORHASMORE2, _PROP_MAPNEXTINDEX, _defineProperties4;

  object_define_properties_x_esm(this, (_defineProperties4 = {}, _defineProperty(_defineProperties4, PROP_ITERATORHASMORE, (_PROP_ITERATORHASMORE2 = {}, _defineProperty(_PROP_ITERATORHASMORE2, VALUE, true), _defineProperty(_PROP_ITERATORHASMORE2, WRITABLE, true), _PROP_ITERATORHASMORE2)), _defineProperty(_defineProperties4, PROP_MAP, _defineProperty({}, VALUE, assert_is_object_x_esm(context))), _defineProperty(_defineProperties4, PROP_MAPITERATIONKIND, _defineProperty({}, VALUE, iteratorKind)), _defineProperty(_defineProperties4, PROP_MAPNEXTINDEX, (_PROP_MAPNEXTINDEX = {}, _defineProperty(_PROP_MAPNEXTINDEX, VALUE, 0), _defineProperty(_PROP_MAPNEXTINDEX, WRITABLE, true), _PROP_MAPNEXTINDEX)), _defineProperties4));
};

var getMapNextObject = function getMapNextObject(args) {
  var _ref3;

  var _args16 = collections_x_esm_slicedToArray(args, 3),
      iteratorKind = _args16[0],
      context = _args16[1],
      index = _args16[2];

  return _ref3 = {}, _defineProperty(_ref3, DONE, false), _defineProperty(_ref3, VALUE, iteratorKind === KIND_KEY_VALUE ? [context[PROP_KEY][index], context[PROP_VALUE][index]] : context["[[".concat(iteratorKind, "]]")][index]), _ref3;
};
/**
 * Once initialized, the next() method can be called to access key-value
 * pairs from the object in turn.
 *
 * @private
 * @function next
 * @returns {object} Returns an object with two properties: done and value.
 */


object_define_property_x_esm(MapIt.prototype, NEXT, _defineProperty({}, VALUE, function next() {
  var _ref4;

  var context = assert_is_object_x_esm(this[PROP_MAP]);
  var index = this[PROP_MAPNEXTINDEX];
  var iteratorKind = this[PROP_MAPITERATIONKIND];
  var more = this[PROP_ITERATORHASMORE];

  if (index < context[PROP_KEY].length && more) {
    this[PROP_MAPNEXTINDEX] += 1;
    return getMapNextObject([iteratorKind, context, index]);
  }

  this[PROP_ITERATORHASMORE] = false;
  return _ref4 = {}, _defineProperty(_ref4, DONE, true), _defineProperty(_ref4, VALUE, collections_x_esm_UNDEFINED), _ref4;
}));
/**
 * The @@iterator property is the same Iterator object.
 *
 * @private
 * @function symIt
 * @memberof MapIterator.prototype
 * @returns {object} This Iterator object.
 */

object_define_property_x_esm(MapIt.prototype, symIt, thisIteratorDescriptor); // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The Map object is a simple key/value map. Any value (both objects and
 * primitive values) may be used as either a key or a value.
 *
 * @class Map
 * @param {*} [iterable] - Iterable is an Array or other iterable object whose
 *  elements are key-value pairs (2-element Arrays). Each key-value pair is
 *  added to the new Map. A null is treated as undefined.
 */
// eslint-enable jsdoc/check-param-names

var MapImplementation = function Map() {
  if (to_boolean_x_esm(this) === false || !(this instanceof MapImplementation)) {
    throw new TypeError("Constructor Map requires 'new'");
  }
  /* eslint-disable-next-line prefer-rest-params */


  collections_x_esm_parse([MAP, this, arguments.length ? arguments[0] : collections_x_esm_UNDEFINED]);
}; // noinspection JSValidateTypes

object_define_properties_x_esm(MapImplementation.prototype, (_defineProperties5 = {
  /**
   * The clear() method removes all elements from a Map object.
   *
   * @returns {object} The Map object.
   */
  clear: _defineProperty({}, VALUE, function clear() {
    return collections_x_esm_baseClear(MAP, this);
  })
}, _defineProperty(_defineProperties5, DELETE, _defineProperty({}, VALUE, function $delete(key) {
  return collections_x_esm_baseDelete([MAP, this, key]);
})), _defineProperty(_defineProperties5, "entries", _defineProperty({}, VALUE, function entries() {
  return new MapIt(this, KIND_KEY_VALUE);
})), _defineProperty(_defineProperties5, "forEach", _defineProperty({}, VALUE, function forEach(callback, thisArg) {
  return collections_x_esm_baseForEach([MAP, this, callback, thisArg]);
})), _defineProperty(_defineProperties5, "get", _defineProperty({}, VALUE, function get(key) {
  var index = index_of_x_esm(assert_is_object_x_esm(this)[PROP_KEY], key, SAMEVALUEZERO);
  return index > -1 ? this[PROP_VALUE][index] : collections_x_esm_UNDEFINED;
})), _defineProperty(_defineProperties5, "has", hasDescriptor), _defineProperty(_defineProperties5, "keys", _defineProperty({}, VALUE, function keys() {
  return new MapIt(this, KIND_KEY);
})), _defineProperty(_defineProperties5, "set", _defineProperty({}, VALUE, function set(key, value) {
  return collections_x_esm_baseAddSet([MAP, this, key, value]);
})), _defineProperty(_defineProperties5, "size", sizeDescriptor), _defineProperty(_defineProperties5, "values", _defineProperty({}, VALUE, function values() {
  return new MapIt(this, KIND_VALUE);
})), _defineProperty(_defineProperties5, symbol_species_x_esm, thisSpeciesDescriptor), _defineProperties5));
/**
 * The initial value of the @@iterator property is the same function object
 * as the initial value of the entries property.
 *
 * @function symIt
 * @memberof $MapObject.prototype
 * @returns {object} A new Iterator object.
 */

object_define_property_x_esm(MapImplementation.prototype, symIt, _defineProperty({}, VALUE, MapImplementation.prototype.entries));
rename_function_x_esm(MapImplementation.prototype.delete, DELETE, true);
/*
 * Determine whether to use shim or native.
 */

/* istanbul ignore next */

var collections_x_esm_getMyClass = function getMyClass(Subject) {
  var MyClass = function MyClass(arg) {
    var testObject = new Subject(arg);
    setPrototypeOf(testObject, MyClass.prototype);
    return testObject;
  };

  setPrototypeOf(MyClass, Subject);
  MyClass.prototype = object_create_x_esm(Subject.prototype, {
    constructor: _defineProperty({}, VALUE, MyClass)
  });
  return MyClass;
};

var collections_x_esm_noNewfixee = function noNewfixee(Subject) {
  var res = attempt_x_esm(function attemptee() {
    /* eslint-disable-next-line babel/new-cap */
    return Subject();
  });
  return res.threw === false;
};

var collections_x_esm_badDoneFixee = function badDoneFixee(Subject) {
  var res = attempt_x_esm(function attemptee() {
    return new Subject().keys()[NEXT]()[DONE] === false;
  });
  return res.threw || res.value;
};

var collections_x_esm_badNextFunction = function badNextFunction(Subject) {
  // Safari 8
  return is_function_x_esm(new Subject().keys()[NEXT]) === false;
};
/* Map fixes */

/* istanbul ignore next */


var collections_x_esm_performMapFixes = function performMapFixes() {
  var result = attempt_x_esm(function attemptee() {
    /* eslint-disable-next-line compat/compat */
    return to_boolean_x_esm(new Map() instanceof Map) === false;
  });
  var Export = result.threw || result.value ? MapImplementation : Map;

  var peformMapFix = function peformMapFix(fixee) {
    if (Export !== MapImplementation && fixee(Export)) {
      Export = MapImplementation;
    }
  };

  var fixees = [collections_x_esm_noNewfixee, function fixee(Subject) {
    var testMap = new Subject();

    if (typeof testMap[SIZE] !== 'number' || testMap[SIZE] !== 0) {
      return true;
    }

    var propsMap = ['has', 'set', 'clear', 'delete', 'forEach', 'values', 'entries', 'keys', symIt];
    return array_some_x_esm(propsMap, function predicate(method) {
      return is_function_x_esm(testMap[method]) === false;
    });
  }, function fixee(Subject) {
    // Safari 8, for example, doesn't accept an iterable.
    var res = attempt_x_esm(function attemptee() {
      return new Subject([[1, 2]]).get(1) !== 2;
    });
    return res.threw || res.result;
  }, function fixee(Subject) {
    var testMap = new Subject();
    return testMap.set(1, 2) !== testMap;
  }, function fixee(Subject) {
    // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4
    var testMap = new Subject([[1, 0], [2, 0], [3, 0], [4, 0]]);
    testMap.set(-0, testMap);
    var gets = testMap.get(0) === testMap && testMap.get(-0) === testMap;
    var mapUsesSameValueZero = gets && testMap.has(0) && testMap.has(-0);
    return mapUsesSameValueZero === false;
  }, function fixee(Subject) {
    if (setPrototypeOf) {
      return false;
    }

    var MyMap = collections_x_esm_getMyClass(Subject);
    var res = attempt_x_esm(function attemptee() {
      return to_boolean_x_esm(new MyMap([]).set(42, 42) instanceof MyMap) === false;
    });
    return res.threw || res.value;
  }, collections_x_esm_badDoneFixee, collections_x_esm_badNextFunction, function fixee(Subject) {
    var testMapProto = collections_x_esm_hasRealSymbolIterator && get_prototype_of_x_esm(new Subject().keys());
    return to_boolean_x_esm(testMapProto) && is_function_x_esm(testMapProto[symIt]) === false;
  }];
  array_for_each_x_esm(fixees, function iteratee(fixee) {
    peformMapFix(fixee);
  });
  return Export;
};
/* Set fixes */

/* istanbul ignore next */


var collections_x_esm_performSetFixes = function performSetFixes() {
  var result = attempt_x_esm(function attemptee() {
    /* eslint-disable-next-line compat/compat */
    return to_boolean_x_esm(new Set() instanceof Set) === false;
  });
  var Export = result.threw || result.value ? SetImplementation : Set;

  var peformSetFix = function peformSetFix(fixee) {
    if (Export !== SetImplementation && fixee(Export)) {
      Export = SetImplementation;
    }
  };

  var fixees = [collections_x_esm_noNewfixee, function fixee(Subject) {
    var testSet = new Subject();

    if (typeof testSet[SIZE] !== 'number' || testSet[SIZE] !== 0) {
      /* istanbul ignore next */
      return true;
    }

    var propsSet = ['has', 'add', 'clear', 'delete', 'forEach', 'values', 'entries', 'keys', symIt];
    return array_some_x_esm(propsSet, function predicate(method) {
      return is_function_x_esm(testSet[method]) === false;
    });
  }, function fixee(Subject) {
    var testSet = new Subject();
    testSet.delete(0);
    testSet.add(-0);
    return testSet.has(0) === false || testSet.has(-0) === false;
  }, function fixee(Subject) {
    var testSet = new Subject();
    return testSet.add(1) !== testSet;
  }, function fixee(Subject) {
    if (setPrototypeOf) {
      return false;
    }

    var MySet = collections_x_esm_getMyClass(Subject);
    var res = attempt_x_esm(function attemptee() {
      return to_boolean_x_esm(new MySet([]).add(42) instanceof MySet) === false;
    });
    return res.threw || res.value;
  }, collections_x_esm_badDoneFixee, collections_x_esm_badNextFunction, function fixee(Subject) {
    var testSetProto = collections_x_esm_hasRealSymbolIterator && get_prototype_of_x_esm(new Subject().keys());
    return to_boolean_x_esm(testSetProto) && is_function_x_esm(testSetProto[symIt]) === false;
  }];
  array_for_each_x_esm(fixees, function iteratee(fixee) {
    peformSetFix(fixee);
  });
  return Export;
};
/**
 * The Map object is a simple key/value map. Any value (both objects and
 * primitive values) may be used as either a key or a value.
 *
 * @class Map
 * @param {*} [iterable] - Iterable is an Array or other iterable object whose
 *  elements are key-value pairs (2-element Arrays). Each key-value pair is
 *  added to the new Map. A null is treated as undefined.
 */


var MapConstructor = collections_x_esm_performMapFixes();
/**
 * The Set object lets you store unique values of any type, whether primitive
 * values or object references.
 *
 * @class Set
 * @param {*} [iterable] - If an iterable object is passed, all of its elements
 * will be added to the new Set. A null is treated as undefined.
 */

var SetConstructor = collections_x_esm_performSetFixes();

var collections_x_esm_hasImplementationProps = function hasImplementationProps(object) {
  return is_boolean_object_default()(object[PROP_CHANGED]) && is_object_like_x_esm(object[PROP_ID]) && is_array_x_esm(object[PROP_KEY]) && is_array_x_esm(object[PROP_ORDER]) && typeof object[SIZE] === 'number';
};

var collections_x_esm_hasCommon = function hasCommon(object) {
  return is_object_like_x_esm(object) && is_function_x_esm(object[symIt]) && collections_x_esm_hasImplementationProps(object);
};

var collections_x_esm_isMapImplementation = function isMapImplementation(object) {
  return is_map_x_esm(object) || collections_x_esm_hasCommon(object) && is_array_x_esm(object[PROP_VALUE]);
};
/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */

var collections_x_esm_isMap = MapConstructor === MapImplementation ? collections_x_esm_isMapImplementation : is_map_x_esm;
var collections_x_esm_isSetImplementation = function isSetImplementation(object) {
  return is_set_x_esm(object) || collections_x_esm_hasCommon(object) && typeof object[PROP_VALUE] === 'undefined';
};
/**
 * Determine if an `object` is a `Set`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Set`,
 *  else `false`.
 */

var collections_x_esm_isSet = SetConstructor === SetImplementation ? collections_x_esm_isSetImplementation : is_set_x_esm;


// EXTERNAL MODULE: ./node_modules/arraybuffer-equal/index.js
var arraybuffer_equal = __webpack_require__(9);
var arraybuffer_equal_default = /*#__PURE__*/__webpack_require__.n(arraybuffer_equal);

// CONCATENATED MODULE: ./node_modules/is-data-view-x/dist/is-data-view-x.esm.js







var hasDView = typeof DataView === 'function';
var dViewTag = '[object DataView]';

var is_data_view_x_esm_getDataView = function getDataView(creator) {
  var res = attempt_x_esm(creator);
  return res.threw === false && is_object_like_x_esm(res.value) && res.value;
};

var is_data_view_x_esm_legacyCheck1 = function legacyCheck1(object) {
  return to_string_tag_x_esm(object) === dViewTag;
};
var is_data_view_x_esm_legacyCheck2 = function legacyCheck2(object) {
  if (is_object_like_x_esm(object) === false) {
    return false;
  }

  var isByteLength = typeof object.byteLength === 'number';
  var isByteOffset = typeof object.byteOffset === 'number';
  var isGetFloat32 = typeof object.getFloat32 === 'function';
  var isSetFloat64 = typeof object.setFloat64 === 'function';
  return isByteLength && isByteOffset && isGetFloat32 && isSetFloat64 && is_array_buffer_x_esm(object.buffer);
};

var is_data_view_x_esm_validator = function validator(value) {
  return typeof value === 'number';
};

var is_data_view_x_esm_creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new DataView(new ArrayBuffer(4));
};

var is_data_view_x_esm_init = function init() {
  if (hasDView) {
    var dataView = is_data_view_x_esm_getDataView(is_data_view_x_esm_creator);

    var _byteLength = dataView && has_to_string_tag_x_esm ? util_get_getter_x_esm(dataView, 'byteLength', is_data_view_x_esm_validator) : null;

    return {
      byteLength: _byteLength,
      legacyCheck: _byteLength === null && is_data_view_x_esm_legacyCheck1(dataView) ? is_data_view_x_esm_legacyCheck1 : is_data_view_x_esm_legacyCheck2
    };
  }

  return {
    byteLength: null,
    legacyCheck: null
  };
};

var _init = is_data_view_x_esm_init(),
    is_data_view_x_esm_byteLength = _init.byteLength,
    legacyCheck = _init.legacyCheck;
/**
 * Determine if an `object` is an `DataView`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `DataView`, else `false`.
 */


var is_data_view_x_esm_isDataView = function isDataView(object) {
  if (hasDView === false || is_object_like_x_esm(object) === false) {
    return false;
  }

  if (is_data_view_x_esm_byteLength === null && legacyCheck) {
    return legacyCheck(object);
  }

  var result = attempt_x_esm(function attemptee() {
    return simple_call_x_esm(is_data_view_x_esm_byteLength, object);
  });
  return result.threw === false && is_data_view_x_esm_validator(result.value);
};

/* harmony default export */ var is_data_view_x_esm = (is_data_view_x_esm_isDataView);


// CONCATENATED MODULE: ./dist/is-deep-strict-equal-x.esm.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeepEqual", function() { return isDeepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeepStrictEqual", function() { return isDeepStrictEqual; });
function is_deep_strict_equal_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { is_deep_strict_equal_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { is_deep_strict_equal_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return is_deep_strict_equal_x_esm_typeof(obj); }

function is_deep_strict_equal_x_esm_slicedToArray(arr, i) { return is_deep_strict_equal_x_esm_arrayWithHoles(arr) || is_deep_strict_equal_x_esm_iterableToArrayLimit(arr, i) || is_deep_strict_equal_x_esm_nonIterableRest(); }

function is_deep_strict_equal_x_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function is_deep_strict_equal_x_esm_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function is_deep_strict_equal_x_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

































var is_deep_strict_equal_x_esm_tempArray = [];
var is_deep_strict_equal_x_esm_push = simple_methodize_x_esm(is_deep_strict_equal_x_esm_tempArray.push);
var is_deep_strict_equal_x_esm_concat = simple_methodize_x_esm(is_deep_strict_equal_x_esm_tempArray.concat);
/* eslint-disable-next-line no-void */

var is_deep_strict_equal_x_esm_UNDEFINED = void 0;
var is_deep_strict_equal_x_esm_EMPTY_STRING = '';
var $innerDeepEqual;

var is_deep_strict_equal_x_esm_getBigInt48 = function getBigInt48() {
  if (typeof BigInt === 'function') {
    var res = attempt_x_esm(function attemptee() {
      /* eslint-disable-next-line compat/compat */
      return BigInt(48);
    });

    if (res.threw === false) {
      return res.value;
    }
  }

  return is_deep_strict_equal_x_esm_UNDEFINED;
};

var bigInt48 = is_deep_strict_equal_x_esm_getBigInt48();
var hasBigInt = is_bigint_default()(bigInt48);
var bigIntValueOf = hasBigInt ? simple_methodize_x_esm(bigInt48.valueOf) : is_deep_strict_equal_x_esm_UNDEFINED;
var booleanValueOf = simple_methodize_x_esm(true.valueOf);
var dateGetTime = simple_methodize_x_esm(new Date().getTime);
var numberValueOf = simple_methodize_x_esm(0 .valueOf);
var stringValueOf = simple_methodize_x_esm(is_deep_strict_equal_x_esm_EMPTY_STRING.valueOf);
/* eslint-disable-next-line compat/compat */

var symbolValueOf = has_symbol_support_x_esm ? simple_methodize_x_esm(Symbol(is_deep_strict_equal_x_esm_EMPTY_STRING).valueOf) : is_deep_strict_equal_x_esm_UNDEFINED;

var is_deep_strict_equal_x_esm_testArrayBuffer = function testArrayBuffer() {
  if (typeof ArrayBuffer === 'function') {
    var res = attempt_x_esm(function attemptee() {
      /* eslint-disable-next-line compat/compat */
      return is_array_buffer_x_esm(new ArrayBuffer(4));
    });

    if (res.threw === false) {
      return res.value;
    }
  }

  return false;
};

var hasArrayBuffer = is_deep_strict_equal_x_esm_testArrayBuffer();
/* eslint-disable-next-line compat/compat */

var hasIsView = hasArrayBuffer && typeof ArrayBuffer.isView === 'function';
var is_deep_strict_equal_x_esm_isArrayBufferView = hasIsView ? ArrayBuffer.isView
/* eslint-disable-line compat/compat */
: function isArrayBufferView(value) {
  return which_typed_array_default()(value) !== false || is_data_view_x_esm(value);
};

var is_deep_strict_equal_x_esm_isFloat32Array = function isFloat32Array(value) {
  // noinspection JSIncompatibleTypesComparison
  return which_typed_array_default()(value) === 'Float32Array';
};

var is_deep_strict_equal_x_esm_isFloat64Array = function isFloat64Array(value) {
  // noinspection JSIncompatibleTypesComparison
  return which_typed_array_default()(value) === 'Float64Array';
}; // const ALL_PROPERTIES = 0;
// const ONLY_WRITABLE = 1;


var ONLY_ENUMERABLE = 2; // const ONLY_CONFIGURABLE = 4;
// const SKIP_STRINGS = 8;

var SKIP_SYMBOLS = 16;

var is_deep_strict_equal_x_esm_getOwnNonIndexProperties = function getOwnNonIndexProperties(value, filter) {
  // noinspection JSBitwiseOperatorUsage
  var names = filter & ONLY_ENUMERABLE
  /* eslint-disable-line no-bitwise */
  ? object_keys_x_esm(value) : get_own_property_names_x_esm(value); // noinspection JSBitwiseOperatorUsage

  var symbols = filter & SKIP_SYMBOLS
  /* eslint-disable-line no-bitwise */
  ? [] : get_own_property_symbols_x_esm(value);
  return array_filter_x_esm(is_deep_strict_equal_x_esm_concat(names, symbols), function predicate(key) {
    return is_index_x_esm(key) === false;
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

var is_deep_strict_equal_x_esm_areSimilarTypedArrays = function areSimilarTypedArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  /* eslint-disable-next-line compat/compat */


  return arraybuffer_equal_default()(a.buffer, new Uint8Array(b.buffer, b.byteOffset, b.byteLength).buffer);
};

var is_deep_strict_equal_x_esm_areEqualArrayBuffers = function areEqualArrayBuffers(buf1, buf2) {
  /* eslint-disable-next-line compat/compat */
  return buf1.byteLength === buf2.byteLength && arraybuffer_equal_default()(new Uint8Array(buf1).buffer, new Uint8Array(buf2).buffer);
};

var is_deep_strict_equal_x_esm_setHasEqualElement = function setHasEqualElement(args) {
  var _args = is_deep_strict_equal_x_esm_slicedToArray(args, 4),
      set = _args[0],
      val1 = _args[1],
      strict = _args[2],
      memo = _args[3]; // Go looking.


  var setIter = set.values();
  var next = setIter.next();

  while (to_boolean_x_esm(next.done) === false) {
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

var is_deep_strict_equal_x_esm_getEnumerables = function getEnumerables(val, keys) {
  return array_filter_x_esm(keys, function predicate(k) {
    return property_is_enumerable_x_esm(val, k);
  });
}; // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').


var is_deep_strict_equal_x_esm_findLooseMatchingPrimitives = function findLooseMatchingPrimitives(prim) {
  var $prim = prim;

  switch (is_deep_strict_equal_x_esm_typeof($prim)) {
    case 'undefined':
      return null;

    case 'object':
      // Only pass in null as object!
      return is_deep_strict_equal_x_esm_UNDEFINED;

    case 'symbol':
      return false;

    case 'string':
      $prim = +$prim;
    // Loose equal entries exist only if the string is possible to convert to
    // a regular number and not NaN.
    // Fall through

    case 'number':
      if (is_nan_x_esm($prim)) {
        return false;
      }

      break;

    default:
  }

  return true;
};

var setMightHaveLoosePrim = function setMightHaveLoosePrim(args) {
  var _args2 = is_deep_strict_equal_x_esm_slicedToArray(args, 3),
      a = _args2[0],
      b = _args2[1],
      prim = _args2[2];

  var altValue = is_deep_strict_equal_x_esm_findLooseMatchingPrimitives(prim);

  if (altValue != null) {
    return altValue;
  }

  return b.has(altValue) && a.has(altValue) === false;
};

var mapMightHaveLoosePrim = function mapMightHaveLoosePrim(args) {
  var _args3 = is_deep_strict_equal_x_esm_slicedToArray(args, 5),
      a = _args3[0],
      b = _args3[1],
      prim = _args3[2],
      item = _args3[3],
      memo = _args3[4];

  var altValue = is_deep_strict_equal_x_esm_findLooseMatchingPrimitives(prim);

  if (altValue != null) {
    return altValue;
  }

  var curB = b.get(altValue);

  if (typeof curB === 'undefined' && b.has(altValue) === false || $innerDeepEqual([item, curB, false, memo]) === false) {
    return false;
  }

  return a.has(altValue) === false && $innerDeepEqual([item, curB, false, memo]);
};

var is_deep_strict_equal_x_esm_setEquiv = function setEquiv(args) {
  var _args4 = is_deep_strict_equal_x_esm_slicedToArray(args, 4),
      a = _args4[0],
      b = _args4[1],
      strict = _args4[2],
      memo = _args4[3]; // This is a lazily initiated Set of entries which have to be compared pairwise.

  /** @type {Set} */


  var set = null;
  var setIterA = a.values();
  var nextA = setIterA.next();

  while (to_boolean_x_esm(nextA.done) === false) {
    var val = nextA.value; // Note: Checking for the objects first improves the performance for object
    // heavy sets but it is a minor slow down for primitives. As they are fast
    // to check this improves the worst case scenario instead.

    if (is_deep_strict_equal_x_esm_typeof(val) === 'object' && val !== null) {
      if (set === null) {
        set = new SetConstructor();
      } // If the specified value doesn't exist in the second set its an not null
      // object (or non strict only: a not matching primitive) we'll need to go
      // hunting for something that's deep-(strict-)equal to it. To make this
      // O(n log n) complexity we have to copy these values in a new set first.


      set.add(val);
    } else if (b.has(val) === false) {
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

    while (to_boolean_x_esm(nextB.done) === false) {
      var _val = nextB.value; // We have to check if a primitive value is already
      // matching and only if it's not, go hunting for it.

      if (is_deep_strict_equal_x_esm_typeof(_val) === 'object' && _val !== null) {
        if (is_deep_strict_equal_x_esm_setHasEqualElement([set, _val, strict, memo]) === false) {
          return false;
        }
      } else if (to_boolean_x_esm(strict) === false && a.has(_val) === false && is_deep_strict_equal_x_esm_setHasEqualElement([set, _val, strict, memo]) === false) {
        return false;
      }

      nextB = setIterB.next();
    }

    return set.size === 0;
  }

  return true;
};

var mapHasEqualEntry = function mapHasEqualEntry(args) {
  var _args5 = is_deep_strict_equal_x_esm_slicedToArray(args, 6),
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

var is_deep_strict_equal_x_esm_mapEquiv = function mapEquiv(args) {
  var _args6 = is_deep_strict_equal_x_esm_slicedToArray(args, 4),
      a = _args6[0],
      b = _args6[1],
      strict = _args6[2],
      memo = _args6[3];
  /** @type {Set} */


  var set = null;
  var setIterA = a.entries();
  var nextA = setIterA.next();

  while (!nextA.done) {
    var _nextA$value = is_deep_strict_equal_x_esm_slicedToArray(nextA.value, 2),
        key = _nextA$value[0],
        item1 = _nextA$value[1];

    if (is_deep_strict_equal_x_esm_typeof(key) === 'object' && key !== null) {
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
      var _nextB$value = is_deep_strict_equal_x_esm_slicedToArray(nextB.value, 2),
          key = _nextB$value[0],
          item = _nextB$value[1];

      if (is_deep_strict_equal_x_esm_typeof(key) === 'object' && key !== null) {
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

var is_deep_strict_equal_x_esm_isEqualBoxedPrimitive = function isEqualBoxedPrimitive(val1, val2) {
  if (is_number_object_default()(val1)) {
    return is_number_object_default()(val2) && same_value_x_esm(numberValueOf(val1), numberValueOf(val2));
  }

  if (is_string_default()(val1)) {
    return is_string_default()(val2) && stringValueOf(val1) === stringValueOf(val2);
  }

  if (is_boolean_object_default()(val1)) {
    return is_boolean_object_default()(val2) && booleanValueOf(val1) === booleanValueOf(val2);
  }

  if (is_bigint_default()(val1)) {
    return is_bigint_default()(val2) && bigIntValueOf(val1) === bigIntValueOf(val2);
  }

  return is_symbol_default()(val2) && symbolValueOf(val1) === symbolValueOf(val2);
};

var is_deep_strict_equal_x_esm_objEquiv = function objEquiv(args) {
  var _args7 = is_deep_strict_equal_x_esm_slicedToArray(args, 6),
      a = _args7[0],
      b = _args7[1],
      strict = _args7[2],
      keys = _args7[3],
      memos = _args7[4],
      iterationType = _args7[5]; // Sets and maps don't have their entries accessible via normal object
  // properties.


  var i = 0;

  if (iterationType === kIsSet) {
    if (!is_deep_strict_equal_x_esm_setEquiv([a, b, strict, memos])) {
      return false;
    }
  } else if (iterationType === kIsMap) {
    if (!is_deep_strict_equal_x_esm_mapEquiv([a, b, strict, memos])) {
      return false;
    }
  } else if (iterationType === kIsArray) {
    for (; i < a.length; i += 1) {
      if (has_own_property_x_esm(a, i)) {
        if (!has_own_property_x_esm(b, i) || !$innerDeepEqual([a[i], b[i], strict, memos])) {
          return false;
        }
      } else if (has_own_property_x_esm(b, i)) {
        return false;
      } else {
        // Array is sparse.
        var keysA = object_keys_x_esm(a);

        for (; i < keysA.length; i += 1) {
          var key = keysA[i];

          if (!has_own_property_x_esm(b, key) || !$innerDeepEqual([a[key], b[key], strict, memos])) {
            return false;
          }
        }

        return keysA.length === object_keys_x_esm(b).length;
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

var is_deep_strict_equal_x_esm_keyCheck = function keyCheck(args) {
  var _args8 = is_deep_strict_equal_x_esm_slicedToArray(args, 6),
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
    $aKeys = object_keys_x_esm(val1);
    var bKeys = object_keys_x_esm(val2); // The pair must have the same number of owned properties.

    if ($aKeys.length !== bKeys.length) {
      return false;
    }
  } // Cheap key test


  var i = 0;

  for (; i < $aKeys.length; i += 1) {
    if (!has_own_property_x_esm(val2, $aKeys[i])) {
      return false;
    }
  }

  if (strict && args.length === 5) {
    var symbolKeysA = get_own_property_symbols_x_esm(val1);

    if (symbolKeysA.length !== 0) {
      var count = 0;

      for (i = 0; i < symbolKeysA.length; i += 1) {
        var key = symbolKeysA[i];

        if (property_is_enumerable_x_esm(val1, key)) {
          if (!property_is_enumerable_x_esm(val2, key)) {
            return false;
          }

          is_deep_strict_equal_x_esm_push($aKeys, key);
          count += 1;
        } else if (property_is_enumerable_x_esm(val2, key)) {
          return false;
        }
      }

      var symbolKeysB = get_own_property_symbols_x_esm(val2);

      if (symbolKeysA.length !== symbolKeysB.length && is_deep_strict_equal_x_esm_getEnumerables(val2, symbolKeysB).length !== count) {
        return false;
      }
    } else {
      var _symbolKeysB = get_own_property_symbols_x_esm(val2);

      if (_symbolKeysB.length !== 0 && is_deep_strict_equal_x_esm_getEnumerables(val2, _symbolKeysB).length !== 0) {
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
  var areEq = is_deep_strict_equal_x_esm_objEquiv([val1, val2, strict, $aKeys, $memos, iterationType]);
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
  var _args9 = is_deep_strict_equal_x_esm_slicedToArray(args, 4),
      val1 = _args9[0],
      val2 = _args9[1],
      strict = _args9[2],
      memos = _args9[3]; // All identical values are equivalent, as determined by ===.


  if (val1 === val2) {
    if (val1 !== 0) {
      return true;
    }

    return strict ? same_value_x_esm(val1, val2) : true;
  } // Check more closely if val1 and val2 are equal.


  if (strict) {
    if (is_deep_strict_equal_x_esm_typeof(val1) !== 'object') {
      return typeof val1 === 'number' && is_nan_x_esm(val1) && is_nan_x_esm(val2);
    }

    if (is_deep_strict_equal_x_esm_typeof(val2) !== 'object' || val1 === null || val2 === null) {
      return false;
    }

    if (get_prototype_of_x_esm(val1) !== get_prototype_of_x_esm(val2)) {
      return false;
    }
  } else {
    if (val1 === null || is_deep_strict_equal_x_esm_typeof(val1) !== 'object') {
      if (val2 === null || is_deep_strict_equal_x_esm_typeof(val2) !== 'object') {
        // noinspection EqualityComparisonWithCoercionJS
        return val1 == val2;
        /* eslint-disable-line eqeqeq */
      }

      return false;
    }

    if (val2 === null || is_deep_strict_equal_x_esm_typeof(val2) !== 'object') {
      return false;
    }
  }

  var val1Tag = to_string_tag_x_esm(val1);
  var val2Tag = to_string_tag_x_esm(val2);

  if (val1Tag !== val2Tag) {
    return false;
  }

  if (is_array_x_esm(val1)) {
    // Check for sparse arrays and general fast path
    if (val1.length !== val2.length) {
      return false;
    }
    /* eslint-disable-next-line no-bitwise */


    var filter = strict ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;
    var keys1 = is_deep_strict_equal_x_esm_getOwnNonIndexProperties(val1, filter);
    var keys2 = is_deep_strict_equal_x_esm_getOwnNonIndexProperties(val2, filter);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return is_deep_strict_equal_x_esm_keyCheck([val1, val2, strict, memos, kIsArray, keys1]);
  }

  if (val1Tag === '[object Object]') {
    return is_deep_strict_equal_x_esm_keyCheck([val1, val2, strict, memos, kNoIterator]);
  }

  if (is_date_object_default()(val1)) {
    if (dateGetTime(val1) !== dateGetTime(val2)) {
      return false;
    }
  } else if (is_regexp_x_esm(val1)) {
    if (!areSimilarRegExps(val1, val2)) {
      return false;
    }
  } else if (is_error_x_esm(val1)) {
    // Do not compare the stack as it might differ even though the error itself
    // is otherwise identical.
    if (val1.message !== val2.message || val1.name !== val2.name) {
      return false;
    }
  } else if (is_deep_strict_equal_x_esm_isArrayBufferView(val1)) {
    if (!strict && (is_deep_strict_equal_x_esm_isFloat32Array(val1) || is_deep_strict_equal_x_esm_isFloat64Array(val1))) {
      if (areSimilarFloatArrays(val1, val2) === false) {
        return false;
      }
    } else if (is_deep_strict_equal_x_esm_areSimilarTypedArrays(val1, val2) === false) {
      return false;
    } // Buffer.compare returns true, so val1.length === val2.length. If they both
    // only contain numeric keys, we don't need to exam further than checking
    // the symbols.

    /* eslint-disable-next-line no-bitwise */


    var _filter = strict ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;

    var _keys = is_deep_strict_equal_x_esm_getOwnNonIndexProperties(val1, _filter);

    var _keys2 = is_deep_strict_equal_x_esm_getOwnNonIndexProperties(val2, _filter);

    if (_keys.length !== _keys2.length) {
      return false;
    }

    return is_deep_strict_equal_x_esm_keyCheck([val1, val2, strict, memos, kNoIterator, _keys]);
  } else if (is_set_x_esm(val1)) {
    if (is_set_x_esm(val2) === false || val1.size !== val2.size) {
      return false;
    }

    return is_deep_strict_equal_x_esm_keyCheck([val1, val2, strict, memos, kIsSet]);
  } else if (is_map_x_esm(val1)) {
    if (is_map_x_esm(val2) === false || val1.size !== val2.size) {
      return false;
    }

    return is_deep_strict_equal_x_esm_keyCheck([val1, val2, strict, memos, kIsMap]);
  } else if (is_array_buffer_x_esm(val1)) {
    if (is_deep_strict_equal_x_esm_areEqualArrayBuffers(val1, val2) === false) {
      return false;
    }
  } else if (implementation_default()(val1) && !is_deep_strict_equal_x_esm_isEqualBoxedPrimitive(val1, val2)) {
    return false;
  }

  return is_deep_strict_equal_x_esm_keyCheck([val1, val2, strict, memos, kNoIterator]);
}; // noinspection JSUnusedGlobalSymbols


function isDeepEqual(val1, val2) {
  return $innerDeepEqual([val1, val2, kLoose]);
}
function isDeepStrictEqual(val1, val2) {
  return $innerDeepEqual([val1, val2, kStrict]);
}



/***/ })
/******/ ]);
});
//# sourceMappingURL=is-deep-strict-equal-x.js.map