(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dat"] = factory();
	else
		root["dat"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	__webpack_require__(1);
	
	exports['default'] = __webpack_require__(193);
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(4);
	
	__webpack_require__(191);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel/polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(38);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(134);
	__webpack_require__(135);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(147);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(189);
	__webpack_require__(190);
	module.exports = __webpack_require__(9);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(6)
	  , $export           = __webpack_require__(7)
	  , DESCRIPTORS       = __webpack_require__(12)
	  , createDesc        = __webpack_require__(11)
	  , html              = __webpack_require__(18)
	  , cel               = __webpack_require__(19)
	  , has               = __webpack_require__(21)
	  , cof               = __webpack_require__(22)
	  , invoke            = __webpack_require__(23)
	  , fails             = __webpack_require__(13)
	  , anObject          = __webpack_require__(24)
	  , aFunction         = __webpack_require__(17)
	  , isObject          = __webpack_require__(20)
	  , toObject          = __webpack_require__(25)
	  , toIObject         = __webpack_require__(27)
	  , toInteger         = __webpack_require__(29)
	  , toIndex           = __webpack_require__(30)
	  , toLength          = __webpack_require__(31)
	  , IObject           = __webpack_require__(28)
	  , IE_PROTO          = __webpack_require__(15)('__proto__')
	  , createArrayMethod = __webpack_require__(32)
	  , arrayIndexOf      = __webpack_require__(37)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;
	
	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(34)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	
	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(14)
	  , ctx       = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(6)
	  , createDesc = __webpack_require__(11);
	module.exports = __webpack_require__(12) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(13)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(8)
	  , hide      = __webpack_require__(10)
	  , SRC       = __webpack_require__(15)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(28)
	  , defined = __webpack_require__(26);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(22);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(29)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(16)
	  , IObject  = __webpack_require__(28)
	  , toObject = __webpack_require__(25)
	  , toLength = __webpack_require__(31)
	  , asc      = __webpack_require__(33);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(20)
	  , isArray  = __webpack_require__(34)
	  , SPECIES  = __webpack_require__(35)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(22);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(36)('wks')
	  , uid    = __webpack_require__(15)
	  , Symbol = __webpack_require__(8).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(27)
	  , toLength  = __webpack_require__(31)
	  , toIndex   = __webpack_require__(30);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(6)
	  , global         = __webpack_require__(8)
	  , has            = __webpack_require__(21)
	  , DESCRIPTORS    = __webpack_require__(12)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(14)
	  , $fails         = __webpack_require__(13)
	  , shared         = __webpack_require__(36)
	  , setToStringTag = __webpack_require__(39)
	  , uid            = __webpack_require__(15)
	  , wks            = __webpack_require__(35)
	  , keyOf          = __webpack_require__(40)
	  , $names         = __webpack_require__(41)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(34)
	  , anObject       = __webpack_require__(24)
	  , toIObject      = __webpack_require__(27)
	  , createDesc     = __webpack_require__(11)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(43)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(6).setDesc
	  , has = __webpack_require__(21)
	  , TAG = __webpack_require__(35)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(6)
	  , toIObject = __webpack_require__(27);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(27)
	  , getNames  = __webpack_require__(6).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(6);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(7);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(6)
	  , toObject = __webpack_require__(25)
	  , IObject  = __webpack_require__(28);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(13)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(7);
	$export($export.S, 'Object', {is: __webpack_require__(47)});

/***/ },
/* 47 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(7);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(49).set});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(6).getDesc
	  , isObject = __webpack_require__(20)
	  , anObject = __webpack_require__(24);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(51)
	  , test    = {};
	test[__webpack_require__(35)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(14)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(22)
	  , TAG = __webpack_require__(35)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(20);
	
	__webpack_require__(53)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(7)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(13);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(20);
	
	__webpack_require__(53)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(20);
	
	__webpack_require__(53)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(20);
	
	__webpack_require__(53)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(20);
	
	__webpack_require__(53)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(20);
	
	__webpack_require__(53)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(27);
	
	__webpack_require__(53)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(25);
	
	__webpack_require__(53)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(25);
	
	__webpack_require__(53)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(53)('getOwnPropertyNames', function(){
	  return __webpack_require__(41).get;
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(6).setDesc
	  , createDesc = __webpack_require__(11)
	  , has        = __webpack_require__(21)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(12) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(6)
	  , isObject      = __webpack_require__(20)
	  , HAS_INSTANCE  = __webpack_require__(35)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(6)
	  , global      = __webpack_require__(8)
	  , has         = __webpack_require__(21)
	  , cof         = __webpack_require__(22)
	  , toPrimitive = __webpack_require__(66)
	  , fails       = __webpack_require__(13)
	  , $trim       = __webpack_require__(67).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(12) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(14)(global, NUMBER, $Number);
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(20);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7)
	  , defined = __webpack_require__(26)
	  , fails   = __webpack_require__(13)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(7)
	  , _isFinite = __webpack_require__(8).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(20)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(7)
	  , isInteger = __webpack_require__(71)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(7)
	  , log1p   = __webpack_require__(79)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 79 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(7);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(7)
	  , sign    = __webpack_require__(83);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(7)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(87)});

/***/ },
/* 87 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(7)
	  , sign      = __webpack_require__(83)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(7)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(7)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(13)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(79)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Math', {sign: __webpack_require__(83)});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(7)
	  , expm1   = __webpack_require__(87)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(13)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(7)
	  , expm1   = __webpack_require__(87)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(7)
	  , toIndex        = __webpack_require__(30)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(7)
	  , toIObject = __webpack_require__(27)
	  , toLength  = __webpack_require__(31);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(67)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(102)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(103)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , defined   = __webpack_require__(26);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(43)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(14)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(21)
	  , Iterators      = __webpack_require__(104)
	  , $iterCreate    = __webpack_require__(105)
	  , setToStringTag = __webpack_require__(39)
	  , getProto       = __webpack_require__(6).getProto
	  , ITERATOR       = __webpack_require__(35)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(6)
	  , descriptor     = __webpack_require__(11)
	  , setToStringTag = __webpack_require__(39)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(35)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(7)
	  , $at     = __webpack_require__(102)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(7)
	  , toLength  = __webpack_require__(31)
	  , context   = __webpack_require__(108)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(110)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(109)
	  , defined  = __webpack_require__(26);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(20)
	  , cof      = __webpack_require__(22)
	  , MATCH    = __webpack_require__(35)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(35)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(7)
	  , context  = __webpack_require__(108)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(110)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(113)
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(29)
	  , defined   = __webpack_require__(26);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(7)
	  , toLength    = __webpack_require__(31)
	  , context     = __webpack_require__(108)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(110)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(16)
	  , $export     = __webpack_require__(7)
	  , toObject    = __webpack_require__(25)
	  , call        = __webpack_require__(116)
	  , isArrayIter = __webpack_require__(117)
	  , toLength    = __webpack_require__(31)
	  , getIterFn   = __webpack_require__(118);
	$export($export.S + $export.F * !__webpack_require__(119)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(24);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(104)
	  , ITERATOR   = __webpack_require__(35)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(51)
	  , ITERATOR  = __webpack_require__(35)('iterator')
	  , Iterators = __webpack_require__(104);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(35)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(7);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(13)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(122)
	  , step             = __webpack_require__(123)
	  , Iterators        = __webpack_require__(104)
	  , toIObject        = __webpack_require__(27);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(103)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(35)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(125)('Array');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(8)
	  , $           = __webpack_require__(6)
	  , DESCRIPTORS = __webpack_require__(12)
	  , SPECIES     = __webpack_require__(35)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(7);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(127)});
	
	__webpack_require__(122)('copyWithin');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(25)
	  , toIndex  = __webpack_require__(30)
	  , toLength = __webpack_require__(31);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(7);
	
	$export($export.P, 'Array', {fill: __webpack_require__(129)});
	
	__webpack_require__(122)('fill');

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(25)
	  , toIndex  = __webpack_require__(30)
	  , toLength = __webpack_require__(31);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(7)
	  , $find   = __webpack_require__(32)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(122)(KEY);

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(7)
	  , $find   = __webpack_require__(32)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(122)(KEY);

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(6)
	  , global   = __webpack_require__(8)
	  , isRegExp = __webpack_require__(109)
	  , $flags   = __webpack_require__(133)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(12) && (!CORRECT_NEW || __webpack_require__(13)(function(){
	  re2[__webpack_require__(35)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(14)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(125)('RegExp');

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(24);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(6);
	if(__webpack_require__(12) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(133)
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(136)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(14)
	  , fails    = __webpack_require__(13)
	  , defined  = __webpack_require__(26)
	  , wks      = __webpack_require__(35);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(136)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(136)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(136)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(6)
	  , LIBRARY    = __webpack_require__(43)
	  , global     = __webpack_require__(8)
	  , ctx        = __webpack_require__(16)
	  , classof    = __webpack_require__(51)
	  , $export    = __webpack_require__(7)
	  , isObject   = __webpack_require__(20)
	  , anObject   = __webpack_require__(24)
	  , aFunction  = __webpack_require__(17)
	  , strictNew  = __webpack_require__(141)
	  , forOf      = __webpack_require__(142)
	  , setProto   = __webpack_require__(49).set
	  , same       = __webpack_require__(47)
	  , SPECIES    = __webpack_require__(35)('species')
	  , speciesConstructor = __webpack_require__(143)
	  , asap       = __webpack_require__(144)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , empty      = function(){ /* empty */ }
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(empty), promise;
	  if(sub)test.constructor = function(exec){
	    exec(empty, empty);
	  };
	  (promise = P.resolve(test))['catch'](empty);
	  return promise === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(12)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(146)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(39)(P, PROMISE);
	__webpack_require__(125)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(119)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(16)
	  , call        = __webpack_require__(116)
	  , isArrayIter = __webpack_require__(117)
	  , anObject    = __webpack_require__(24)
	  , toLength    = __webpack_require__(31)
	  , getIterFn   = __webpack_require__(118);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(24)
	  , aFunction = __webpack_require__(17)
	  , SPECIES   = __webpack_require__(35)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , macrotask = __webpack_require__(145).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(22)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(16)
	  , invoke             = __webpack_require__(23)
	  , html               = __webpack_require__(18)
	  , cel                = __webpack_require__(19)
	  , global             = __webpack_require__(8)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(22)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(14);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(148);
	
	// 23.1 Map Objects
	__webpack_require__(149)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(6)
	  , hide         = __webpack_require__(10)
	  , redefineAll  = __webpack_require__(146)
	  , ctx          = __webpack_require__(16)
	  , strictNew    = __webpack_require__(141)
	  , defined      = __webpack_require__(26)
	  , forOf        = __webpack_require__(142)
	  , $iterDefine  = __webpack_require__(103)
	  , step         = __webpack_require__(123)
	  , ID           = __webpack_require__(15)('id')
	  , $has         = __webpack_require__(21)
	  , isObject     = __webpack_require__(20)
	  , setSpecies   = __webpack_require__(125)
	  , DESCRIPTORS  = __webpack_require__(12)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(8)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(14)
	  , redefineAll    = __webpack_require__(146)
	  , forOf          = __webpack_require__(142)
	  , strictNew      = __webpack_require__(141)
	  , isObject       = __webpack_require__(20)
	  , fails          = __webpack_require__(13)
	  , $iterDetect    = __webpack_require__(119)
	  , setToStringTag = __webpack_require__(39);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(148);
	
	// 23.2 Set Objects
	__webpack_require__(149)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(6)
	  , redefine     = __webpack_require__(14)
	  , weak         = __webpack_require__(152)
	  , isObject     = __webpack_require__(20)
	  , has          = __webpack_require__(21)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(149)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(10)
	  , redefineAll       = __webpack_require__(146)
	  , anObject          = __webpack_require__(24)
	  , isObject          = __webpack_require__(20)
	  , strictNew         = __webpack_require__(141)
	  , forOf             = __webpack_require__(142)
	  , createArrayMethod = __webpack_require__(32)
	  , $has              = __webpack_require__(21)
	  , WEAK              = __webpack_require__(15)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(152);
	
	// 23.4 WeakSet Objects
	__webpack_require__(149)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export  = __webpack_require__(7)
	  , _apply   = Function.apply
	  , anObject = __webpack_require__(24);
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, anObject(argumentsList));
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(6)
	  , $export   = __webpack_require__(7)
	  , aFunction = __webpack_require__(17)
	  , anObject  = __webpack_require__(24)
	  , isObject  = __webpack_require__(20)
	  , bind      = Function.bind || __webpack_require__(9).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(13)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(6)
	  , $export  = __webpack_require__(7)
	  , anObject = __webpack_require__(24);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(13)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(7)
	  , getDesc  = __webpack_require__(6).getDesc
	  , anObject = __webpack_require__(24);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(7)
	  , anObject = __webpack_require__(24);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(105)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(6)
	  , has      = __webpack_require__(21)
	  , $export  = __webpack_require__(7)
	  , isObject = __webpack_require__(20)
	  , anObject = __webpack_require__(24);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(6)
	  , $export  = __webpack_require__(7)
	  , anObject = __webpack_require__(24);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(7)
	  , getProto = __webpack_require__(6).getProto
	  , anObject = __webpack_require__(24);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(7)
	  , anObject      = __webpack_require__(24)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(165)});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(6)
	  , anObject = __webpack_require__(24)
	  , Reflect  = __webpack_require__(8).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(7)
	  , anObject           = __webpack_require__(24)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(6)
	  , has        = __webpack_require__(21)
	  , $export    = __webpack_require__(7)
	  , createDesc = __webpack_require__(11)
	  , anObject   = __webpack_require__(24)
	  , isObject   = __webpack_require__(20);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(7)
	  , setProto = __webpack_require__(49);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(7)
	  , $includes = __webpack_require__(37)(true);
	
	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(122)('includes');

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(7)
	  , $at     = __webpack_require__(102)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(7)
	  , $pad    = __webpack_require__(172);
	
	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(31)
	  , repeat   = __webpack_require__(113)
	  , defined  = __webpack_require__(26);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(7)
	  , $pad    = __webpack_require__(172);
	
	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(67)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(67)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(7)
	  , $re     = __webpack_require__(177)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(6)
	  , $export    = __webpack_require__(7)
	  , ownKeys    = __webpack_require__(165)
	  , toIObject  = __webpack_require__(27)
	  , createDesc = __webpack_require__(11);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(7)
	  , $values = __webpack_require__(180)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(6)
	  , toIObject = __webpack_require__(27)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(7)
	  , $entries = __webpack_require__(180)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(7);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(183)('Map')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(142)
	  , classof = __webpack_require__(51);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(7);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(183)('Set')});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(6)
	  , $export = __webpack_require__(7)
	  , $ctx    = __webpack_require__(16)
	  , $Array  = __webpack_require__(9).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(8)
	  , $export    = __webpack_require__(7)
	  , invoke     = __webpack_require__(23)
	  , partial    = __webpack_require__(187)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(188)
	  , invoke    = __webpack_require__(23)
	  , aFunction = __webpack_require__(17);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7)
	  , $task   = __webpack_require__(145);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(121);
	var global      = __webpack_require__(8)
	  , hide        = __webpack_require__(10)
	  , Iterators   = __webpack_require__(104)
	  , ITERATOR    = __webpack_require__(35)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(192)))

/***/ },
/* 192 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  color: {
	    Color: __webpack_require__(194),
	    math: __webpack_require__(198),
	    interpret: __webpack_require__(195)
	  },
	
	  controllers: {
	    Controller: __webpack_require__(199),
	    BooleanController: __webpack_require__(200),
	    OptionController: __webpack_require__(202),
	    StringController: __webpack_require__(203),
	    NumberController: __webpack_require__(204),
	    NumberControllerBox: __webpack_require__(205),
	    NumberControllerSlider: __webpack_require__(206),
	    FunctionController: __webpack_require__(210),
	    ColorController: __webpack_require__(211)
	  },
	
	  dom: {
	    dom: __webpack_require__(201)
	  },
	
	  gui: {
	    GUI: __webpack_require__(212)
	  },
	
	  GUI: __webpack_require__(212)
	};
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _interpret = __webpack_require__(195);
	
	var _interpret2 = _interopRequireDefault(_interpret);
	
	var _math = __webpack_require__(198);
	
	var _math2 = _interopRequireDefault(_math);
	
	var _toString = __webpack_require__(196);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	var Color = (function () {
	  function Color() {
	    _classCallCheck(this, Color);
	
	    this.__state = _interpret2['default'].apply(this, arguments);
	
	    if (this.__state === false) {
	      throw new Error('Failed to interpret color arguments');
	    }
	
	    this.__state.a = this.__state.a || 1;
	  }
	
	  Color.prototype.toString = function toString() {
	    return _toString2['default'](this);
	  };
	
	  Color.prototype.toOriginal = function toOriginal() {
	    return this.__state.conversion.write(this);
	  };
	
	  return Color;
	})();
	
	function defineRGBComponent(target, component, componentHexIndex) {
	  Object.defineProperty(target, component, {
	    get: function get() {
	      if (this.__state.space === 'RGB') {
	        return this.__state[component];
	      }
	
	      Color.recalculateRGB(this, component, componentHexIndex);
	
	      return this.__state[component];
	    },
	
	    set: function set(v) {
	      if (this.__state.space !== 'RGB') {
	        Color.recalculateRGB(this, component, componentHexIndex);
	        this.__state.space = 'RGB';
	      }
	
	      this.__state[component] = v;
	    }
	  });
	}
	
	function defineHSVComponent(target, component) {
	  Object.defineProperty(target, component, {
	    get: function get() {
	      if (this.__state.space === 'HSV') {
	        return this.__state[component];
	      }
	
	      Color.recalculateHSV(this);
	
	      return this.__state[component];
	    },
	
	    set: function set(v) {
	      if (this.__state.space !== 'HSV') {
	        Color.recalculateHSV(this);
	        this.__state.space = 'HSV';
	      }
	
	      this.__state[component] = v;
	    }
	  });
	}
	
	Color.recalculateRGB = function (color, component, componentHexIndex) {
	  if (color.__state.space === 'HEX') {
	    color.__state[component] = _math2['default'].component_from_hex(color.__state.hex, componentHexIndex);
	  } else if (color.__state.space === 'HSV') {
	    _utilsCommon2['default'].extend(color.__state, _math2['default'].hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
	  } else {
	    throw new Error('Corrupted color state');
	  }
	};
	
	Color.recalculateHSV = function (color) {
	  var result = _math2['default'].rgb_to_hsv(color.r, color.g, color.b);
	
	  _utilsCommon2['default'].extend(color.__state, {
	    s: result.s,
	    v: result.v
	  });
	
	  if (!_utilsCommon2['default'].isNaN(result.h)) {
	    color.__state.h = result.h;
	  } else if (_utilsCommon2['default'].isUndefined(color.__state.h)) {
	    color.__state.h = 0;
	  }
	};
	
	Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
	
	defineRGBComponent(Color.prototype, 'r', 2);
	defineRGBComponent(Color.prototype, 'g', 1);
	defineRGBComponent(Color.prototype, 'b', 0);
	
	defineHSVComponent(Color.prototype, 'h');
	defineHSVComponent(Color.prototype, 's');
	defineHSVComponent(Color.prototype, 'v');
	
	Object.defineProperty(Color.prototype, 'a', {
	  get: function get() {
	    return this.__state.a;
	  },
	
	  set: function set(v) {
	    this.__state.a = v;
	  }
	});
	
	Object.defineProperty(Color.prototype, 'hex', {
	  get: function get() {
	    if (!this.__state.space !== 'HEX') {
	      this.__state.hex = _math2['default'].rgb_to_hex(this.r, this.g, this.b);
	    }
	
	    return this.__state.hex;
	  },
	
	  set: function set(v) {
	    this.__state.space = 'HEX';
	    this.__state.hex = v;
	  }
	});
	
	exports['default'] = Color;
	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _toString = __webpack_require__(196);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	var INTERPRETATIONS = [
	// Strings
	{
	  litmus: _utilsCommon2['default'].isString,
	  conversions: {
	    THREE_CHAR_HEX: {
	      read: function read(original) {
	        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
	        if (test === null) {
	          return false;
	        }
	
	        return {
	          space: 'HEX',
	          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
	        };
	      },
	
	      write: _toString2['default']
	    },
	
	    SIX_CHAR_HEX: {
	      read: function read(original) {
	        var test = original.match(/^#([A-F0-9]{6})$/i);
	        if (test === null) {
	          return false;
	        }
	
	        return {
	          space: 'HEX',
	          hex: parseInt('0x' + test[1].toString(), 0)
	        };
	      },
	
	      write: _toString2['default']
	    },
	
	    CSS_RGB: {
	      read: function read(original) {
	        var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	        if (test === null) {
	          return false;
	        }
	
	        return {
	          space: 'RGB',
	          r: parseFloat(test[1]),
	          g: parseFloat(test[2]),
	          b: parseFloat(test[3])
	        };
	      },
	
	      write: _toString2['default']
	    },
	
	    CSS_RGBA: {
	      read: function read(original) {
	        var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
	        if (test === null) {
	          return false;
	        }
	
	        return {
	          space: 'RGB',
	          r: parseFloat(test[1]),
	          g: parseFloat(test[2]),
	          b: parseFloat(test[3]),
	          a: parseFloat(test[4])
	        };
	      },
	
	      write: _toString2['default']
	    }
	  }
	},
	
	// Numbers
	{
	  litmus: _utilsCommon2['default'].isNumber,
	
	  conversions: {
	
	    HEX: {
	      read: function read(original) {
	        return {
	          space: 'HEX',
	          hex: original,
	          conversionName: 'HEX'
	        };
	      },
	
	      write: function write(color) {
	        return color.hex;
	      }
	    }
	
	  }
	
	},
	
	// Arrays
	{
	  litmus: _utilsCommon2['default'].isArray,
	  conversions: {
	    RGB_ARRAY: {
	      read: function read(original) {
	        if (original.length !== 3) {
	          return false;
	        }
	
	        return {
	          space: 'RGB',
	          r: original[0],
	          g: original[1],
	          b: original[2]
	        };
	      },
	
	      write: function write(color) {
	        return [color.r, color.g, color.b];
	      }
	    },
	
	    RGBA_ARRAY: {
	      read: function read(original) {
	        if (original.length !== 4) return false;
	        return {
	          space: 'RGB',
	          r: original[0],
	          g: original[1],
	          b: original[2],
	          a: original[3]
	        };
	      },
	
	      write: function write(color) {
	        return [color.r, color.g, color.b, color.a];
	      }
	    }
	  }
	},
	
	// Objects
	{
	  litmus: _utilsCommon2['default'].isObject,
	  conversions: {
	
	    RGBA_OBJ: {
	      read: function read(original) {
	        if (_utilsCommon2['default'].isNumber(original.r) && _utilsCommon2['default'].isNumber(original.g) && _utilsCommon2['default'].isNumber(original.b) && _utilsCommon2['default'].isNumber(original.a)) {
	          return {
	            space: 'RGB',
	            r: original.r,
	            g: original.g,
	            b: original.b,
	            a: original.a
	          };
	        }
	        return false;
	      },
	
	      write: function write(color) {
	        return {
	          r: color.r,
	          g: color.g,
	          b: color.b,
	          a: color.a
	        };
	      }
	    },
	
	    RGB_OBJ: {
	      read: function read(original) {
	        if (_utilsCommon2['default'].isNumber(original.r) && _utilsCommon2['default'].isNumber(original.g) && _utilsCommon2['default'].isNumber(original.b)) {
	          return {
	            space: 'RGB',
	            r: original.r,
	            g: original.g,
	            b: original.b
	          };
	        }
	        return false;
	      },
	
	      write: function write(color) {
	        return {
	          r: color.r,
	          g: color.g,
	          b: color.b
	        };
	      }
	    },
	
	    HSVA_OBJ: {
	      read: function read(original) {
	        if (_utilsCommon2['default'].isNumber(original.h) && _utilsCommon2['default'].isNumber(original.s) && _utilsCommon2['default'].isNumber(original.v) && _utilsCommon2['default'].isNumber(original.a)) {
	          return {
	            space: 'HSV',
	            h: original.h,
	            s: original.s,
	            v: original.v,
	            a: original.a
	          };
	        }
	        return false;
	      },
	
	      write: function write(color) {
	        return {
	          h: color.h,
	          s: color.s,
	          v: color.v,
	          a: color.a
	        };
	      }
	    },
	
	    HSV_OBJ: {
	      read: function read(original) {
	        if (_utilsCommon2['default'].isNumber(original.h) && _utilsCommon2['default'].isNumber(original.s) && _utilsCommon2['default'].isNumber(original.v)) {
	          return {
	            space: 'HSV',
	            h: original.h,
	            s: original.s,
	            v: original.v
	          };
	        }
	        return false;
	      },
	
	      write: function write(color) {
	        return {
	          h: color.h,
	          s: color.s,
	          v: color.v
	        };
	      }
	    }
	  }
	}];
	
	var result = undefined;
	var toReturn = undefined;
	
	var interpret = function interpret() {
	  toReturn = false;
	
	  var original = arguments.length > 1 ? _utilsCommon2['default'].toArray(arguments) : arguments[0];
	  _utilsCommon2['default'].each(INTERPRETATIONS, function (family) {
	    if (family.litmus(original)) {
	      _utilsCommon2['default'].each(family.conversions, function (conversion, conversionName) {
	        result = conversion.read(original);
	
	        if (toReturn === false && result !== false) {
	          toReturn = result;
	          result.conversionName = conversionName;
	          result.conversion = conversion;
	          return _utilsCommon2['default'].BREAK;
	        }
	      });
	
	      return _utilsCommon2['default'].BREAK;
	    }
	  });
	
	  return toReturn;
	};
	
	exports['default'] = interpret;
	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	exports['default'] = function (color) {
	  if (color.a === 1 || _utilsCommon2['default'].isUndefined(color.a)) {
	    var s = color.hex.toString(16);
	    while (s.length < 6) {
	      s = '0' + s;
	    }
	    return '#' + s;
	  }
	
	  return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';
	};
	
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	var ARR_EACH = Array.prototype.forEach;
	var ARR_SLICE = Array.prototype.slice;
	
	/**
	 * Band-aid methods for things that should be a lot easier in JavaScript.
	 * Implementation and structure inspired by underscore.js
	 * http://documentcloud.github.com/underscore/
	 */
	
	var Common = {
	  BREAK: {},
	
	  extend: function extend(target) {
	    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
	      for (var key in obj) {
	        if (!this.isUndefined(obj[key])) {
	          target[key] = obj[key];
	        }
	      }
	    }, this);
	
	    return target;
	  },
	
	  defaults: function defaults(target) {
	    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
	      for (var key in obj) {
	        if (this.isUndefined(target[key])) {
	          target[key] = obj[key];
	        }
	      }
	    }, this);
	
	    return target;
	  },
	
	  compose: function compose() {
	    var toCall = ARR_SLICE.call(arguments);
	    return function () {
	      var args = ARR_SLICE.call(arguments);
	      for (var i = toCall.length - 1; i >= 0; i--) {
	        args = [toCall[i].apply(this, args)];
	      }
	      return args[0];
	    };
	  },
	
	  each: function each(obj, itr, scope) {
	    if (!obj) {
	      return;
	    }
	
	    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
	      obj.forEach(itr, scope);
	    } else if (obj.length === obj.length + 0) {
	      // Is number but not NaN
	      var key = undefined;
	      var l = undefined;
	      for (key = 0, l = obj.length; key < l; key++) {
	        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
	          return;
	        }
	      }
	    } else {
	      for (var key in obj) {
	        if (itr.call(scope, obj[key], key) === this.BREAK) {
	          return;
	        }
	      }
	    }
	  },
	
	  defer: function defer(fnc) {
	    setTimeout(fnc, 0);
	  },
	
	  toArray: function toArray(obj) {
	    if (obj.toArray) return obj.toArray();
	    return ARR_SLICE.call(obj);
	  },
	
	  isUndefined: function isUndefined(obj) {
	    return obj === undefined;
	  },
	
	  isNull: function isNull(obj) {
	    return obj === null;
	  },
	
	  isNaN: (function (_isNaN) {
	    function isNaN(_x) {
	      return _isNaN.apply(this, arguments);
	    }
	
	    isNaN.toString = function () {
	      return _isNaN.toString();
	    };
	
	    return isNaN;
	  })(function (obj) {
	    return isNaN(obj);
	  }),
	
	  isArray: Array.isArray || function (obj) {
	    return obj.constructor === Array;
	  },
	
	  isObject: function isObject(obj) {
	    return obj === Object(obj);
	  },
	
	  isNumber: function isNumber(obj) {
	    return obj === obj + 0;
	  },
	
	  isString: function isString(obj) {
	    return obj === obj + '';
	  },
	
	  isBoolean: function isBoolean(obj) {
	    return obj === false || obj === true;
	  },
	
	  isFunction: function isFunction(obj) {
	    return Object.prototype.toString.call(obj) === '[object Function]';
	  }
	
	};
	
	exports['default'] = Common;
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	"use strict";
	
	exports.__esModule = true;
	var tmpComponent = undefined;
	
	var ColorMath = {
	  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
	    var hi = Math.floor(h / 60) % 6;
	
	    var f = h / 60 - Math.floor(h / 60);
	    var p = v * (1.0 - s);
	    var q = v * (1.0 - f * s);
	    var t = v * (1.0 - (1.0 - f) * s);
	
	    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
	
	    return {
	      r: c[0] * 255,
	      g: c[1] * 255,
	      b: c[2] * 255
	    };
	  },
	
	  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
	    var min = Math.min(r, g, b);
	    var max = Math.max(r, g, b);
	    var delta = max - min;
	    var h = undefined;
	    var s = undefined;
	
	    if (max !== 0) {
	      s = delta / max;
	    } else {
	      return {
	        h: NaN,
	        s: 0,
	        v: 0
	      };
	    }
	
	    if (r === max) {
	      h = (g - b) / delta;
	    } else if (g === max) {
	      h = 2 + (b - r) / delta;
	    } else {
	      h = 4 + (r - g) / delta;
	    }
	    h /= 6;
	    if (h < 0) {
	      h += 1;
	    }
	
	    return {
	      h: h * 360,
	      s: s,
	      v: max / 255
	    };
	  },
	
	  rgb_to_hex: function rgb_to_hex(r, g, b) {
	    var hex = this.hex_with_component(0, 2, r);
	    hex = this.hex_with_component(hex, 1, g);
	    hex = this.hex_with_component(hex, 0, b);
	    return hex;
	  },
	
	  component_from_hex: function component_from_hex(hex, componentIndex) {
	    return hex >> componentIndex * 8 & 0xFF;
	  },
	
	  hex_with_component: function hex_with_component(hex, componentIndex, value) {
	    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
	  }
	};
	
	exports["default"] = ColorMath;
	module.exports = exports["default"];

/***/ },
/* 199 */
/***/ function(module, exports) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	/**
	 * @class An "abstract" class that represents a given property of an object.
	 *
	 * @param {Object} object The object to be manipulated
	 * @param {string} property The name of the property to be manipulated
	 *
	 * @member dat.controllers
	 */
	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Controller = (function () {
	  function Controller(object, property) {
	    _classCallCheck(this, Controller);
	
	    this.initialValue = object[property];
	
	    /**
	     * Those who extend this class will put their DOM elements in here.
	     * @type {DOMElement}
	     */
	    this.domElement = document.createElement('div');
	
	    /**
	     * The object to manipulate
	     * @type {Object}
	     */
	    this.object = object;
	
	    /**
	     * The name of the property to manipulate
	     * @type {String}
	     */
	    this.property = property;
	
	    /**
	     * The function to be called on change.
	     * @type {Function}
	     * @ignore
	     */
	    this.__onChange = undefined;
	
	    /**
	     * The function to be called on finishing change.
	     * @type {Function}
	     * @ignore
	     */
	    this.__onFinishChange = undefined;
	  }
	
	  /**
	   * Specify that a function fire every time someone changes the value with
	   * this Controller.
	   *
	   * @param {Function} fnc This function will be called whenever the value
	   * is modified via this Controller.
	   * @returns {Controller} this
	   */
	
	  Controller.prototype.onChange = function onChange(fnc) {
	    this.__onChange = fnc;
	    return this;
	  };
	
	  /**
	   * Specify that a function fire every time someone "finishes" changing
	   * the value wih this Controller. Useful for values that change
	   * incrementally like numbers or strings.
	   *
	   * @param {Function} fnc This function will be called whenever
	   * someone "finishes" changing the value via this Controller.
	   * @returns {Controller} this
	   */
	
	  Controller.prototype.onFinishChange = function onFinishChange(fnc) {
	    this.__onFinishChange = fnc;
	    return this;
	  };
	
	  /**
	   * Change the value of <code>object[property]</code>
	   *
	   * @param {Object} newValue The new value of <code>object[property]</code>
	   */
	
	  Controller.prototype.setValue = function setValue(newValue) {
	    this.object[this.property] = newValue;
	    if (this.__onChange) {
	      this.__onChange.call(this, newValue);
	    }
	
	    this.updateDisplay();
	    return this;
	  };
	
	  /**
	   * Gets the value of <code>object[property]</code>
	   *
	   * @returns {Object} The current value of <code>object[property]</code>
	   */
	
	  Controller.prototype.getValue = function getValue() {
	    return this.object[this.property];
	  };
	
	  /**
	   * Refreshes the visual display of a Controller in order to keep sync
	   * with the object's current value.
	   * @returns {Controller} this
	   */
	
	  Controller.prototype.updateDisplay = function updateDisplay() {
	    return this;
	  };
	
	  /**
	   * @returns {Boolean} true if the value has deviated from initialValue
	   */
	
	  Controller.prototype.isModified = function isModified() {
	    return this.initialValue !== this.getValue();
	  };
	
	  return Controller;
	})();
	
	exports['default'] = Controller;
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Controller2 = __webpack_require__(199);
	
	var _Controller3 = _interopRequireDefault(_Controller2);
	
	var _domDom = __webpack_require__(201);
	
	var _domDom2 = _interopRequireDefault(_domDom);
	
	/**
	 * @class Provides a checkbox input to alter the boolean property of an object.
	 * @extends dat.controllers.Controller
	 *
	 * @param {Object} object The object to be manipulated
	 * @param {string} property The name of the property to be manipulated
	 *
	 * @member dat.controllers
	 */
	
	var BooleanController = (function (_Controller) {
	  _inherits(BooleanController, _Controller);
	
	  function BooleanController(object, property) {
	    _classCallCheck(this, BooleanController);
	
	    _Controller.call(this, object, property);
	
	    var _this = this;
	    this.__prev = this.getValue();
	
	    this.__checkbox = document.createElement('input');
	    this.__checkbox.setAttribute('type', 'checkbox');
	
	    function onChange() {
	      _this.setValue(!_this.__prev);
	    }
	
	    _domDom2['default'].bind(this.__checkbox, 'change', onChange, false);
	
	    this.domElement.appendChild(this.__checkbox);
	
	    // Match original value
	    this.updateDisplay();
	  }
	
	  BooleanController.prototype.setValue = function setValue(v) {
	    var toReturn = _Controller.prototype.setValue.call(this, v);
	    if (this.__onFinishChange) {
	      this.__onFinishChange.call(this, this.getValue());
	    }
	    this.__prev = this.getValue();
	    return toReturn;
	  };
	
	  BooleanController.prototype.updateDisplay = function updateDisplay() {
	    if (this.getValue() === true) {
	      this.__checkbox.setAttribute('checked', 'checked');
	      this.__checkbox.checked = true;
	    } else {
	      this.__checkbox.checked = false;
	    }
	
	    return _Controller.prototype.updateDisplay.call(this);
	  };
	
	  return BooleanController;
	})(_Controller3['default']);
	
	exports['default'] = BooleanController;
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	var EVENT_MAP = {
	  'HTMLEvents': ['change'],
	  'MouseEvents': ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
	  'KeyboardEvents': ['keydown']
	};
	
	var EVENT_MAP_INV = {};
	_utilsCommon2['default'].each(EVENT_MAP, function (v, k) {
	  _utilsCommon2['default'].each(v, function (e) {
	    EVENT_MAP_INV[e] = k;
	  });
	});
	
	var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
	
	function cssValueToPixels(val) {
	  if (val === '0' || _utilsCommon2['default'].isUndefined(val)) {
	    return 0;
	  }
	
	  var match = val.match(CSS_VALUE_PIXELS);
	
	  if (!_utilsCommon2['default'].isNull(match)) {
	    return parseFloat(match[1]);
	  }
	
	  // TODO ...ems? %?
	
	  return 0;
	}
	
	/**
	 * @namespace
	 * @member dat.dom
	 */
	var dom = {
	
	  /**
	   *
	   * @param elem
	   * @param selectable
	   */
	  makeSelectable: function makeSelectable(elem, selectable) {
	    if (elem === undefined || elem.style === undefined) return;
	
	    elem.onselectstart = selectable ? function () {
	      return false;
	    } : function () {};
	
	    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
	    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
	    elem.unselectable = selectable ? 'on' : 'off';
	  },
	
	  /**
	   *
	   * @param elem
	   * @param horizontal
	   * @param vert
	   */
	  makeFullscreen: function makeFullscreen(elem, hor, vert) {
	    var vertical = vert;
	    var horizontal = hor;
	
	    if (_utilsCommon2['default'].isUndefined(horizontal)) {
	      horizontal = true;
	    }
	
	    if (_utilsCommon2['default'].isUndefined(vertical)) {
	      vertical = true;
	    }
	
	    elem.style.position = 'absolute';
	
	    if (horizontal) {
	      elem.style.left = 0;
	      elem.style.right = 0;
	    }
	    if (vertical) {
	      elem.style.top = 0;
	      elem.style.bottom = 0;
	    }
	  },
	
	  /**
	   *
	   * @param elem
	   * @param eventType
	   * @param params
	   */
	  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
	    var params = pars || {};
	    var className = EVENT_MAP_INV[eventType];
	    if (!className) {
	      throw new Error('Event type ' + eventType + ' not supported.');
	    }
	    var evt = document.createEvent(className);
	    switch (className) {
	      case 'MouseEvents':
	        {
	          var clientX = params.x || params.clientX || 0;
	          var clientY = params.y || params.clientY || 0;
	          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0, // screen X
	          0, // screen Y
	          clientX, // client X
	          clientY, // client Y
	          false, false, false, false, 0, null);
	          break;
	        }
	      case 'KeyboardEvents':
	        {
	          var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
	          _utilsCommon2['default'].defaults(params, {
	            cancelable: true,
	            ctrlKey: false,
	            altKey: false,
	            shiftKey: false,
	            metaKey: false,
	            keyCode: undefined,
	            charCode: undefined
	          });
	          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
	          break;
	        }
	      default:
	        {
	          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
	          break;
	        }
	    }
	    _utilsCommon2['default'].defaults(evt, aux);
	    elem.dispatchEvent(evt);
	  },
	
	  /**
	   *
	   * @param elem
	   * @param event
	   * @param func
	   * @param bool
	   */
	  bind: function bind(elem, event, func, newBool) {
	    var bool = newBool || false;
	    if (elem.addEventListener) {
	      elem.addEventListener(event, func, bool);
	    } else if (elem.attachEvent) {
	      elem.attachEvent('on' + event, func);
	    }
	    return dom;
	  },
	
	  /**
	   *
	   * @param elem
	   * @param event
	   * @param func
	   * @param bool
	   */
	  unbind: function unbind(elem, event, func, newBool) {
	    var bool = newBool || false;
	    if (elem.removeEventListener) {
	      elem.removeEventListener(event, func, bool);
	    } else if (elem.detachEvent) {
	      elem.detachEvent('on' + event, func);
	    }
	    return dom;
	  },
	
	  /**
	   *
	   * @param elem
	   * @param className
	   */
	  addClass: function addClass(elem, className) {
	    if (elem.className === undefined) {
	      elem.className = className;
	    } else if (elem.className !== className) {
	      var classes = elem.className.split(/ +/);
	      if (classes.indexOf(className) === -1) {
	        classes.push(className);
	        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
	      }
	    }
	    return dom;
	  },
	
	  /**
	   *
	   * @param elem
	   * @param className
	   */
	  removeClass: function removeClass(elem, className) {
	    if (className) {
	      if (elem.className === className) {
	        elem.removeAttribute('class');
	      } else {
	        var classes = elem.className.split(/ +/);
	        var index = classes.indexOf(className);
	        if (index !== -1) {
	          classes.splice(index, 1);
	          elem.className = classes.join(' ');
	        }
	      }
	    } else {
	      elem.className = undefined;
	    }
	    return dom;
	  },
	
	  hasClass: function hasClass(elem, className) {
	    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
	  },
	
	  /**
	   *
	   * @param elem
	   */
	  getWidth: function getWidth(elem) {
	    var style = getComputedStyle(elem);
	
	    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
	  },
	
	  /**
	   *
	   * @param elem
	   */
	  getHeight: function getHeight(elem) {
	    var style = getComputedStyle(elem);
	
	    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
	  },
	
	  /**
	   *
	   * @param el
	   */
	  getOffset: function getOffset(el) {
	    var elem = el;
	    var offset = { left: 0, top: 0 };
	    if (elem.offsetParent) {
	      do {
	        offset.left += elem.offsetLeft;
	        offset.top += elem.offsetTop;
	        elem = elem.offsetParent;
	      } while (elem);
	    }
	    return offset;
	  },
	
	  // http://stackoverflow.com/posts/2684561/revisions
	  /**
	   *
	   * @param elem
	   */
	  isActive: function isActive(elem) {
	    return elem === document.activeElement && (elem.type || elem.href);
	  }
	
	};
	
	exports['default'] = dom;
	module.exports = exports['default'];

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Controller2 = __webpack_require__(199);
	
	var _Controller3 = _interopRequireDefault(_Controller2);
	
	var _domDom = __webpack_require__(201);
	
	var _domDom2 = _interopRequireDefault(_domDom);
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	/**
	 * @class Provides a select input to alter the property of an object, using a
	 * list of accepted values.
	 *
	 * @extends dat.controllers.Controller
	 *
	 * @param {Object} object The object to be manipulated
	 * @param {string} property The name of the property to be manipulated
	 * @param {Object|string[]} options A map of labels to acceptable values, or
	 * a list of acceptable string values.
	 *
	 * @member dat.controllers
	 */
	
	var OptionController = (function (_Controller) {
	  _inherits(OptionController, _Controller);
	
	  function OptionController(object, property, opts) {
	    _classCallCheck(this, OptionController);
	
	    _Controller.call(this, object, property);
	
	    var options = opts;
	
	    var _this = this;
	
	    /**
	     * The drop down menu
	     * @ignore
	     */
	    this.__select = document.createElement('select');
	
	    if (_utilsCommon2['default'].isArray(options)) {
	      (function () {
	        var map = {};
	        _utilsCommon2['default'].each(options, function (element) {
	          map[element] = element;
	        });
	        options = map;
	      })();
	    }
	
	    _utilsCommon2['default'].each(options, function (value, key) {
	      var opt = document.createElement('option');
	      opt.innerHTML = key;
	      opt.setAttribute('value', value);
	      _this.__select.appendChild(opt);
	    });
	
	    // Acknowledge original value
	    this.updateDisplay();
	
	    _domDom2['default'].bind(this.__select, 'change', function () {
	      var desiredValue = this.options[this.selectedIndex].value;
	      _this.setValue(desiredValue);
	    });
	
	    this.domElement.appendChild(this.__select);
	  }
	
	  OptionController.prototype.setValue = function setValue(v) {
	    var toReturn = _Controller.prototype.setValue.call(this, v);
	
	    if (this.__onFinishChange) {
	      this.__onFinishChange.call(this, this.getValue());
	    }
	    return toReturn;
	  };
	
	  OptionController.prototype.updateDisplay = function updateDisplay() {
	    if (_domDom2['default'].isActive(this.__select)) return this; // prevent number from updating if user is trying to manually update
	    this.__select.value = this.getValue();
	    return _Controller.prototype.updateDisplay.call(this);
	  };
	
	  return OptionController;
	})(_Controller3['default']);
	
	exports['default'] = OptionController;
	module.exports = exports['default'];

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Controller2 = __webpack_require__(199);
	
	var _Controller3 = _interopRequireDefault(_Controller2);
	
	var _domDom = __webpack_require__(201);
	
	var _domDom2 = _interopRequireDefault(_domDom);
	
	/**
	 * @class Provides a text input to alter the string property of an object.
	 *
	 * @extends dat.controllers.Controller
	 *
	 * @param {Object} object The object to be manipulated
	 * @param {string} property The name of the property to be manipulated
	 *
	 * @member dat.controllers
	 */
	
	var StringController = (function (_Controller) {
	  _inherits(StringController, _Controller);
	
	  function StringController(object, property) {
	    _classCallCheck(this, StringController);
	
	    _Controller.call(this, object, property);
	
	    var _this = this;
	
	    function onChange() {
	      _this.setValue(_this.__input.value);
	    }
	
	    function onBlur() {
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	
	    this.__input = document.createElement('input');
	    this.__input.setAttribute('type', 'text');
	
	    _domDom2['default'].bind(this.__input, 'keyup', onChange);
	    _domDom2['default'].bind(this.__input, 'change', onChange);
	    _domDom2['default'].bind(this.__input, 'blur', onBlur);
	    _domDom2['default'].bind(this.__input, 'keydown', function (e) {
	      if (e.keyCode === 13) {
	        this.blur();
	      }
	    });
	
	    this.updateDisplay();
	
	    this.domElement.appendChild(this.__input);
	  }
	
	  StringController.prototype.updateDisplay = function updateDisplay() {
	    // Stops the caret from moving on account of:
	    // keyup -> setValue -> updateDisplay
	    if (!_domDom2['default'].isActive(this.__input)) {
	      this.__input.value = this.getValue();
	    }
	    return _Controller.prototype.updateDisplay.call(this);
	  };
	
	  return StringController;
	})(_Controller3['default']);
	
	exports['default'] = StringController;
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Controller2 = __webpack_require__(199);
	
	var _Controller3 = _interopRequireDefault(_Controller2);
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	function numDecimals(x) {
	  var _x = x.toString();
	  if (_x.indexOf('.') > -1) {
	    return _x.length - _x.indexOf('.') - 1;
	  }
	
	  return 0;
	}
	
	/**
	 * @class Represents a given property of an object that is a number.
	 *
	 * @extends dat.controllers.Controller
	 *
	 * @param {Object} object The object to be manipulated
	 * @param {string} property The name of the property to be manipulated
	 * @param {Object} [params] Optional parameters
	 * @param {Number} [params.min] Minimum allowed value
	 * @param {Number} [params.max] Maximum allowed value
	 * @param {Number} [params.step] Increment by which to change value
	 *
	 * @member dat.controllers
	 */
	
	var NumberController = (function (_Controller) {
	  _inherits(NumberController, _Controller);
	
	  function NumberController(object, property, params) {
	    _classCallCheck(this, NumberController);
	
	    _Controller.call(this, object, property);
	
	    var _params = params || {};
	
	    this.__min = _params.min;
	    this.__max = _params.max;
	    this.__step = _params.step;
	
	    if (_utilsCommon2['default'].isUndefined(this.__step)) {
	      if (this.initialValue === 0) {
	        this.__impliedStep = 1; // What are we, psychics?
	      } else {
	          // Hey Doug, check this out.
	          this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(this.initialValue)) / Math.LN10)) / 10;
	        }
	    } else {
	      this.__impliedStep = this.__step;
	    }
	
	    this.__precision = numDecimals(this.__impliedStep);
	  }
	
	  NumberController.prototype.setValue = function setValue(v) {
	    var _v = v;
	
	    if (this.__min !== undefined && _v < this.__min) {
	      _v = this.__min;
	    } else if (this.__max !== undefined && _v > this.__max) {
	      _v = this.__max;
	    }
	
	    if (this.__step !== undefined && _v % this.__step !== 0) {
	      _v = Math.round(_v / this.__step) * this.__step;
	    }
	
	    return _Controller.prototype.setValue.call(this, _v);
	  };
	
	  /**
	   * Specify a minimum value for <code>object[property]</code>.
	   *
	   * @param {Number} minValue The minimum value for
	   * <code>object[property]</code>
	   * @returns {dat.controllers.NumberController} this
	   */
	
	  NumberController.prototype.min = function min(v) {
	    this.__min = v;
	    return this;
	  };
	
	  /**
	   * Specify a maximum value for <code>object[property]</code>.
	   *
	   * @param {Number} maxValue The maximum value for
	   * <code>object[property]</code>
	   * @returns {dat.controllers.NumberController} this
	   */
	
	  NumberController.prototype.max = function max(v) {
	    this.__max = v;
	    return this;
	  };
	
	  /**
	   * Specify a step value that dat.controllers.NumberController
	   * increments by.
	   *
	   * @param {Number} stepValue The step value for
	   * dat.controllers.NumberController
	   * @default if minimum and maximum specified increment is 1% of the
	   * difference otherwise stepValue is 1
	   * @returns {dat.controllers.NumberController} this
	   */
	
	  NumberController.prototype.step = function step(v) {
	    this.__step = v;
	    this.__impliedStep = v;
	    this.__precision = numDecimals(v);
	    return this;
	  };
	
	  return NumberController;
	})(_Controller3['default']);
	
	exports['default'] = NumberController;
	module.exports = exports['default'];

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _NumberController2 = __webpack_require__(204);
	
	var _NumberController3 = _interopRequireDefault(_NumberController2);
	
	var _domDom = __webpack_require__(201);
	
	var _domDom2 = _interopRequireDefault(_domDom);
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	function roundToDecimal(value, decimals) {
	  var tenTo = Math.pow(10, decimals);
	  return Math.round(value * tenTo) / tenTo;
	}
	
	/**
	 * @class Represents a given property of an object that is a number and
	 * provides an input element with which to manipulate it.
	 *
	 * @extends dat.controllers.Controller
	 * @extends dat.controllers.NumberController
	 *
	 * @param {Object} object The object to be manipulated
	 * @param {string} property The name of the property to be manipulated
	 * @param {Object} [params] Optional parameters
	 * @param {Number} [params.min] Minimum allowed value
	 * @param {Number} [params.max] Maximum allowed value
	 * @param {Number} [params.step] Increment by which to change value
	 *
	 * @member dat.controllers
	 */
	
	var NumberControllerBox = (function (_NumberController) {
	  _inherits(NumberControllerBox, _NumberController);
	
	  function NumberControllerBox(object, property, params) {
	    _classCallCheck(this, NumberControllerBox);
	
	    _NumberController.call(this, object, property, params);
	
	    this.__truncationSuspended = false;
	
	    var _this = this;
	
	    /**
	     * {Number} Previous mouse y position
	     * @ignore
	     */
	    var prevY = undefined;
	
	    function onChange() {
	      var attempted = parseFloat(_this.__input.value);
	      if (!_utilsCommon2['default'].isNaN(attempted)) {
	        _this.setValue(attempted);
	      }
	    }
	
	    function onBlur() {
	      onChange();
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	
	    function onMouseDrag(e) {
	      document.activeElement.blur();
	
	      var diff = prevY - e.clientY;
	      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
	
	      prevY = e.clientY;
	    }
	
	    function onMouseUp() {
	      _domDom2['default'].unbind(window, 'mousemove', onMouseDrag);
	      _domDom2['default'].unbind(window, 'mouseup', onMouseUp);
	    }
	
	    function onMouseDown(e) {
	      _domDom2['default'].bind(window, 'mousemove', onMouseDrag);
	      _domDom2['default'].bind(window, 'mouseup', onMouseUp);
	      prevY = e.clientY;
	    }
	
	    this.__input = document.createElement('input');
	    this.__input.setAttribute('type', 'text');
	
	    // Makes it so manually specified values are not truncated.
	
	    _domDom2['default'].bind(this.__input, 'change', onChange);
	    _domDom2['default'].bind(this.__input, 'blur', onBlur);
	    _domDom2['default'].bind(this.__input, 'mousedown', onMouseDown);
	    _domDom2['default'].bind(this.__input, 'keydown', function (e) {
	      // When pressing entire, you can be as precise as you want.
	      if (e.keyCode === 13) {
	        _this.__truncationSuspended = true;
	        this.blur();
	        _this.__truncationSuspended = false;
	      }
	    });
	
	    this.updateDisplay();
	
	    this.domElement.appendChild(this.__input);
	  }
	
	  NumberControllerBox.prototype.updateDisplay = function updateDisplay() {
	    if (_domDom2['default'].isActive(this.__input)) return this; // prevent number from updating if user is trying to manually update
	    this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
	    return _NumberController.prototype.updateDisplay.call(this);
	  };
	
	  return NumberControllerBox;
	})(_NumberController3['default']);
	
	exports['default'] = NumberControllerBox;
	module.exports = exports['default'];

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _NumberController2 = __webpack_require__(204);
	
	var _NumberController3 = _interopRequireDefault(_NumberController2);
	
	var _domDom = __webpack_require__(201);
	
	var _domDom2 = _interopRequireDefault(_domDom);
	
	var _utilsCss = __webpack_require__(207);
	
	var _utilsCss2 = _interopRequireDefault(_utilsCss);
	
	var _cssSassNumberControllerSliderScss = __webpack_require__(208);
	
	var _cssSassNumberControllerSliderScss2 = _interopRequireDefault(_cssSassNumberControllerSliderScss);
	
	function map(v, i1, i2, o1, o2) {
	  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
	}
	
	/**
	 * @class Represents a given property of an object that is a number, contains
	 * a minimum and maximum, and provides a slider element with which to
	 * manipulate it. It should be noted that the slider element is made up of
	 * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
	 * <code>&lt;slider&gt;</code> element.
	 *
	 * @extends dat.controllers.Controller
	 * @extends dat.controllers.NumberController
	 *
	 * @param {Object} object The object to be manipulated
	 * @param {string} property The name of the property to be manipulated
	 * @param {Number} minValue Minimum allowed value
	 * @param {Number} maxValue Maximum allowed value
	 * @param {Number} stepValue Increment by which to change value
	 *
	 * @member dat.controllers
	 */
	
	var NumberControllerSlider = (function (_NumberController) {
	  _inherits(NumberControllerSlider, _NumberController);
	
	  function NumberControllerSlider(object, property, min, max, step) {
	    _classCallCheck(this, NumberControllerSlider);
	
	    _NumberController.call(this, object, property, { min: min, max: max, step: step });
	
	    var _this = this;
	
	    this.__background = document.createElement('div');
	    this.__foreground = document.createElement('div');
	
	    _domDom2['default'].bind(this.__background, 'mousedown', onMouseDown);
	
	    _domDom2['default'].addClass(this.__background, 'slider');
	    _domDom2['default'].addClass(this.__foreground, 'slider-fg');
	
	    function onMouseDown(e) {
	      document.activeElement.blur();
	
	      _domDom2['default'].bind(window, 'mousemove', onMouseDrag);
	      _domDom2['default'].bind(window, 'mouseup', onMouseUp);
	
	      onMouseDrag(e);
	    }
	
	    function onMouseDrag(e) {
	      e.preventDefault();
	
	      var offset = _domDom2['default'].getOffset(_this.__background);
	      var width = _domDom2['default'].getWidth(_this.__background);
	
	      _this.setValue(map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max));
	
	      return false;
	    }
	
	    function onMouseUp() {
	      _domDom2['default'].unbind(window, 'mousemove', onMouseDrag);
	      _domDom2['default'].unbind(window, 'mouseup', onMouseUp);
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	
	    this.updateDisplay();
	
	    this.__background.appendChild(this.__foreground);
	    this.domElement.appendChild(this.__background);
	  }
	
	  /**
	   * Injects default stylesheet for slider elements.
	   */
	
	  NumberControllerSlider.prototype.updateDisplay = function updateDisplay() {
	    var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
	    this.__foreground.style.width = pct * 100 + '%';
	    return _NumberController.prototype.updateDisplay.call(this);
	  };
	
	  return NumberControllerSlider;
	})(_NumberController3['default']);
	
	NumberControllerSlider.useDefaultStyles = function () {
	  _utilsCss2['default'].inject(_cssSassNumberControllerSliderScss2['default'].toString());
	};
	
	exports['default'] = NumberControllerSlider;
	module.exports = exports['default'];

/***/ },
/* 207 */
/***/ function(module, exports) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	module.exports = {
	  load: function load(url, indoc) {
	    var doc = indoc || document;
	    var link = doc.createElement('link');
	    link.type = 'text/css';
	    link.rel = 'stylesheet';
	    link.href = url;
	    doc.getElementsByTagName('head')[0].appendChild(link);
	  },
	
	  inject: function inject(css, indoc) {
	    var doc = indoc || document;
	    var injected = document.createElement('style');
	    injected.type = 'text/css';
	    injected.innerHTML = css;
	    doc.getElementsByTagName('head')[0].appendChild(injected);
	  }
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(209)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n  height: 1em;\n  border-radius: 1em 0 0 1em;\n  background-color: #eee; }\n\n.slider-fg {\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  border-radius: 1em 0 0 1em; }\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border: 1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -0.5em;\n  margin-top: 3px;\n  height: 0.9em;\n  width: 0.9em; }\n", ""]);
	
	// exports


/***/ },
/* 209 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Controller2 = __webpack_require__(199);
	
	var _Controller3 = _interopRequireDefault(_Controller2);
	
	var _domDom = __webpack_require__(201);
	
	var _domDom2 = _interopRequireDefault(_domDom);
	
	/**
	 * @class Provides a GUI interface to fire a specified method, a property of an object.
	 *
	 * @extends dat.controllers.Controller
	 *
	 * @param {Object} object The object to be manipulated
	 * @param {string} property The name of the property to be manipulated
	 *
	 * @member dat.controllers
	 */
	
	var FunctionController = (function (_Controller) {
	  _inherits(FunctionController, _Controller);
	
	  function FunctionController(object, property, text) {
	    _classCallCheck(this, FunctionController);
	
	    _Controller.call(this, object, property);
	
	    var _this = this;
	
	    this.__button = document.createElement('div');
	    this.__button.innerHTML = text === undefined ? 'Fire' : text;
	
	    _domDom2['default'].bind(this.__button, 'click', function (e) {
	      e.preventDefault();
	      _this.fire();
	      return false;
	    });
	
	    _domDom2['default'].addClass(this.__button, 'button');
	
	    this.domElement.appendChild(this.__button);
	  }
	
	  FunctionController.prototype.fire = function fire() {
	    if (this.__onChange) {
	      this.__onChange.call(this);
	    }
	    this.getValue().call(this.object);
	    if (this.__onFinishChange) {
	      this.__onFinishChange.call(this, this.getValue());
	    }
	  };
	
	  return FunctionController;
	})(_Controller3['default']);
	
	exports['default'] = FunctionController;
	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Controller2 = __webpack_require__(199);
	
	var _Controller3 = _interopRequireDefault(_Controller2);
	
	var _domDom = __webpack_require__(201);
	
	var _domDom2 = _interopRequireDefault(_domDom);
	
	var _colorColor = __webpack_require__(194);
	
	var _colorColor2 = _interopRequireDefault(_colorColor);
	
	var _colorInterpret = __webpack_require__(195);
	
	var _colorInterpret2 = _interopRequireDefault(_colorInterpret);
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	var ColorController = (function (_Controller) {
	  _inherits(ColorController, _Controller);
	
	  function ColorController(object, property) {
	    _classCallCheck(this, ColorController);
	
	    _Controller.call(this, object, property);
	
	    this.__color = new _colorColor2['default'](this.getValue());
	    this.__temp = new _colorColor2['default'](0);
	
	    var _this = this;
	
	    this.domElement = document.createElement('div');
	
	    _domDom2['default'].makeSelectable(this.domElement, false);
	
	    this.__selector = document.createElement('div');
	    this.__selector.className = 'selector';
	
	    this.__saturation_field = document.createElement('div');
	    this.__saturation_field.className = 'saturation-field';
	
	    this.__field_knob = document.createElement('div');
	    this.__field_knob.className = 'field-knob';
	    this.__field_knob_border = '2px solid ';
	
	    this.__hue_knob = document.createElement('div');
	    this.__hue_knob.className = 'hue-knob';
	
	    this.__hue_field = document.createElement('div');
	    this.__hue_field.className = 'hue-field';
	
	    this.__input = document.createElement('input');
	    this.__input.type = 'text';
	    this.__input_textShadow = '0 1px 1px ';
	
	    _domDom2['default'].bind(this.__input, 'keydown', function (e) {
	      if (e.keyCode === 13) {
	        // on enter
	        onBlur.call(this);
	      }
	    });
	
	    _domDom2['default'].bind(this.__input, 'blur', onBlur);
	
	    _domDom2['default'].bind(this.__selector, 'mousedown', function () /* e */{
	      _domDom2['default'].addClass(this, 'drag').bind(window, 'mouseup', function () /* e */{
	        _domDom2['default'].removeClass(_this.__selector, 'drag');
	      });
	    });
	
	    var valueField = document.createElement('div');
	
	    _utilsCommon2['default'].extend(this.__selector.style, {
	      width: '122px',
	      height: '102px',
	      padding: '3px',
	      backgroundColor: '#222',
	      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
	    });
	
	    _utilsCommon2['default'].extend(this.__field_knob.style, {
	      position: 'absolute',
	      width: '12px',
	      height: '12px',
	      border: this.__field_knob_border + (this.__color.v < 0.5 ? '#fff' : '#000'),
	      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
	      borderRadius: '12px',
	      zIndex: 1
	    });
	
	    _utilsCommon2['default'].extend(this.__hue_knob.style, {
	      position: 'absolute',
	      width: '15px',
	      height: '2px',
	      borderRight: '4px solid #fff',
	      zIndex: 1
	    });
	
	    _utilsCommon2['default'].extend(this.__saturation_field.style, {
	      width: '100px',
	      height: '100px',
	      border: '1px solid #555',
	      marginRight: '3px',
	      display: 'inline-block',
	      cursor: 'pointer'
	    });
	
	    _utilsCommon2['default'].extend(valueField.style, {
	      width: '100%',
	      height: '100%',
	      background: 'none'
	    });
	
	    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
	
	    _utilsCommon2['default'].extend(this.__hue_field.style, {
	      width: '15px',
	      height: '100px',
	      border: '1px solid #555',
	      cursor: 'ns-resize',
	      position: 'absolute',
	      top: '3px',
	      right: '3px'
	    });
	
	    hueGradient(this.__hue_field);
	
	    _utilsCommon2['default'].extend(this.__input.style, {
	      outline: 'none',
	      //      width: '120px',
	      textAlign: 'center',
	      //      padding: '4px',
	      //      marginBottom: '6px',
	      color: '#fff',
	      border: 0,
	      fontWeight: 'bold',
	      textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
	    });
	
	    _domDom2['default'].bind(this.__saturation_field, 'mousedown', fieldDown);
	    _domDom2['default'].bind(this.__field_knob, 'mousedown', fieldDown);
	
	    _domDom2['default'].bind(this.__hue_field, 'mousedown', function (e) {
	      setH(e);
	      _domDom2['default'].bind(window, 'mousemove', setH);
	      _domDom2['default'].bind(window, 'mouseup', fieldUpH);
	    });
	
	    function fieldDown(e) {
	      setSV(e);
	      // document.body.style.cursor = 'none';
	      _domDom2['default'].bind(window, 'mousemove', setSV);
	      _domDom2['default'].bind(window, 'mouseup', fieldUpSV);
	    }
	
	    function fieldUpSV() {
	      _domDom2['default'].unbind(window, 'mousemove', setSV);
	      _domDom2['default'].unbind(window, 'mouseup', fieldUpSV);
	      // document.body.style.cursor = 'default';
	      onFinish();
	    }
	
	    function onBlur() {
	      var i = _colorInterpret2['default'](this.value);
	      if (i !== false) {
	        _this.__color.__state = i;
	        _this.setValue(_this.__color.toOriginal());
	      } else {
	        this.value = _this.__color.toString();
	      }
	    }
	
	    function fieldUpH() {
	      _domDom2['default'].unbind(window, 'mousemove', setH);
	      _domDom2['default'].unbind(window, 'mouseup', fieldUpH);
	      onFinish();
	    }
	
	    function onFinish() {
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.__color.toString());
	      }
	    }
	
	    this.__saturation_field.appendChild(valueField);
	    this.__selector.appendChild(this.__field_knob);
	    this.__selector.appendChild(this.__saturation_field);
	    this.__selector.appendChild(this.__hue_field);
	    this.__hue_field.appendChild(this.__hue_knob);
	
	    this.domElement.appendChild(this.__input);
	    this.domElement.appendChild(this.__selector);
	
	    this.updateDisplay();
	
	    function setSV(e) {
	      e.preventDefault();
	
	      var w = _domDom2['default'].getWidth(_this.__saturation_field);
	      var o = _domDom2['default'].getOffset(_this.__saturation_field);
	      var s = (e.clientX - o.left + document.body.scrollLeft) / w;
	      var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;
	
	      if (v > 1) {
	        v = 1;
	      } else if (v < 0) {
	        v = 0;
	      }
	
	      if (s > 1) {
	        s = 1;
	      } else if (s < 0) {
	        s = 0;
	      }
	
	      _this.__color.v = v;
	      _this.__color.s = s;
	
	      _this.setValue(_this.__color.toOriginal());
	
	      return false;
	    }
	
	    function setH(e) {
	      e.preventDefault();
	
	      var s = _domDom2['default'].getHeight(_this.__hue_field);
	      var o = _domDom2['default'].getOffset(_this.__hue_field);
	      var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;
	
	      if (h > 1) {
	        h = 1;
	      } else if (h < 0) {
	        h = 0;
	      }
	
	      _this.__color.h = h * 360;
	
	      _this.setValue(_this.__color.toOriginal());
	
	      return false;
	    }
	  }
	
	  ColorController.prototype.updateDisplay = function updateDisplay() {
	    var i = _colorInterpret2['default'](this.getValue());
	
	    if (i !== false) {
	      var mismatch = false;
	
	      // Check for mismatch on the interpreted value.
	
	      _utilsCommon2['default'].each(_colorColor2['default'].COMPONENTS, function (component) {
	        if (!_utilsCommon2['default'].isUndefined(i[component]) && !_utilsCommon2['default'].isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
	          mismatch = true;
	          return {}; // break
	        }
	      }, this);
	
	      // If nothing diverges, we keep our previous values
	      // for statefulness, otherwise we recalculate fresh
	      if (mismatch) {
	        _utilsCommon2['default'].extend(this.__color.__state, i);
	      }
	    }
	
	    _utilsCommon2['default'].extend(this.__temp.__state, this.__color.__state);
	
	    this.__temp.a = 1;
	
	    var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
	    var _flip = 255 - flip;
	
	    _utilsCommon2['default'].extend(this.__field_knob.style, {
	      marginLeft: 100 * this.__color.s - 7 + 'px',
	      marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
	      backgroundColor: this.__temp.toString(),
	      border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
	    });
	
	    this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
	
	    this.__temp.s = 1;
	    this.__temp.v = 1;
	
	    linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());
	
	    _utilsCommon2['default'].extend(this.__input.style, {
	      backgroundColor: this.__input.value = this.__color.toString(),
	      color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
	      textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
	    });
	  };
	
	  return ColorController;
	})(_Controller3['default']);
	
	var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
	
	function linearGradient(elem, x, a, b) {
	  elem.style.background = '';
	  _utilsCommon2['default'].each(vendors, function (vendor) {
	    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
	  });
	}
	
	function hueGradient(elem) {
	  elem.style.background = '';
	  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
	  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
	  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
	  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
	  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
	}
	
	exports['default'] = ColorController;
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsCss = __webpack_require__(207);
	
	var _utilsCss2 = _interopRequireDefault(_utilsCss);
	
	var _htmlSaveDialogueHtml = __webpack_require__(213);
	
	var _htmlSaveDialogueHtml2 = _interopRequireDefault(_htmlSaveDialogueHtml);
	
	var _styleCssSassStyleScss = __webpack_require__(214);
	
	var _styleCssSassStyleScss2 = _interopRequireDefault(_styleCssSassStyleScss);
	
	var _controllersControllerFactory = __webpack_require__(217);
	
	var _controllersControllerFactory2 = _interopRequireDefault(_controllersControllerFactory);
	
	var _controllersController = __webpack_require__(199);
	
	var _controllersController2 = _interopRequireDefault(_controllersController);
	
	var _controllersBooleanController = __webpack_require__(200);
	
	var _controllersBooleanController2 = _interopRequireDefault(_controllersBooleanController);
	
	var _controllersFunctionController = __webpack_require__(210);
	
	var _controllersFunctionController2 = _interopRequireDefault(_controllersFunctionController);
	
	var _controllersNumberControllerBox = __webpack_require__(205);
	
	var _controllersNumberControllerBox2 = _interopRequireDefault(_controllersNumberControllerBox);
	
	var _controllersNumberControllerSlider = __webpack_require__(206);
	
	var _controllersNumberControllerSlider2 = _interopRequireDefault(_controllersNumberControllerSlider);
	
	var _controllersColorController = __webpack_require__(211);
	
	var _controllersColorController2 = _interopRequireDefault(_controllersColorController);
	
	var _utilsRequestAnimationFrame = __webpack_require__(218);
	
	var _utilsRequestAnimationFrame2 = _interopRequireDefault(_utilsRequestAnimationFrame);
	
	var _domCenteredDiv = __webpack_require__(219);
	
	var _domCenteredDiv2 = _interopRequireDefault(_domCenteredDiv);
	
	var _domDom = __webpack_require__(201);
	
	var _domDom2 = _interopRequireDefault(_domDom);
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	_utilsCss2['default'].inject(_styleCssSassStyleScss2['default']);
	
	/** Outer-most className for GUI's */
	var CSS_NAMESPACE = 'dg';
	
	var HIDE_KEY_CODE = 72;
	
	/** The only value shared between the JS and SCSS. Use caution. */
	var CLOSE_BUTTON_HEIGHT = 20;
	
	var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
	
	var SUPPORTS_LOCAL_STORAGE = (function () {
	  try {
	    return 'localStorage' in window && window.localStorage !== null;
	  } catch (e) {
	    return false;
	  }
	})();
	
	var SAVE_DIALOGUE = undefined;
	
	/** Have we yet to create an autoPlace GUI? */
	var autoPlaceVirgin = true;
	
	/** Fixed position div that auto place GUI's go inside */
	var autoPlaceContainer = undefined;
	
	/** Are we hiding the GUI's ? */
	var hide = false;
	
	/** GUI's which should be hidden */
	var hideableGuis = [];
	
	/**
	 * A lightweight controller library for JavaScript. It allows you to easily
	 * manipulate variables and fire functions on the fly.
	 * @class
	 *
	 * @member dat.gui
	 *
	 * @param {Object} [params]
	 * @param {String} [params.name] The name of this GUI.
	 * @param {Object} [params.load] JSON object representing the saved state of
	 * this GUI.
	 * @param {Boolean} [params.auto=true]
	 * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
	 * @param {Boolean} [params.closed] If true, starts closed
	 */
	var GUI = function GUI(pars) {
	  var _this = this;
	
	  var params = pars || {};
	
	  /**
	   * Outermost DOM Element
	   * @type DOMElement
	   */
	  this.domElement = document.createElement('div');
	  this.__ul = document.createElement('ul');
	  this.domElement.appendChild(this.__ul);
	
	  _domDom2['default'].addClass(this.domElement, CSS_NAMESPACE);
	
	  /**
	   * Nested GUI's by name
	   * @ignore
	   */
	  this.__folders = {};
	
	  this.__controllers = [];
	
	  /**
	   * List of objects I'm remembering for save, only used in top level GUI
	   * @ignore
	   */
	  this.__rememberedObjects = [];
	
	  /**
	   * Maps the index of remembered objects to a map of controllers, only used
	   * in top level GUI.
	   *
	   * @private
	   * @ignore
	   *
	   * @example
	   * [
	   *  {
	     *    propertyName: Controller,
	     *    anotherPropertyName: Controller
	     *  },
	   *  {
	     *    propertyName: Controller
	     *  }
	   * ]
	   */
	  this.__rememberedObjectIndecesToControllers = [];
	
	  this.__listening = [];
	
	  // Default parameters
	  params = _utilsCommon2['default'].defaults(params, {
	    autoPlace: true,
	    width: GUI.DEFAULT_WIDTH
	  });
	
	  params = _utilsCommon2['default'].defaults(params, {
	    resizable: params.autoPlace,
	    hideable: params.autoPlace
	  });
	
	  if (!_utilsCommon2['default'].isUndefined(params.load)) {
	    // Explicit preset
	    if (params.preset) {
	      params.load.preset = params.preset;
	    }
	  } else {
	    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
	  }
	
	  if (_utilsCommon2['default'].isUndefined(params.parent) && params.hideable) {
	    hideableGuis.push(this);
	  }
	
	  // Only root level GUI's are resizable.
	  params.resizable = _utilsCommon2['default'].isUndefined(params.parent) && params.resizable;
	
	  if (params.autoPlace && _utilsCommon2['default'].isUndefined(params.scrollable)) {
	    params.scrollable = true;
	  }
	  //    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;
	
	  // Not part of params because I don't want people passing this in via
	  // constructor. Should be a 'remembered' value.
	  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
	
	  var saveToLocalStorage = undefined;
	
	  Object.defineProperties(this,
	  /** @lends dat.gui.GUI.prototype */
	  {
	    /**
	     * The parent <code>GUI</code>
	     * @type dat.gui.GUI
	     */
	    parent: {
	      get: function get() {
	        return params.parent;
	      }
	    },
	
	    scrollable: {
	      get: function get() {
	        return params.scrollable;
	      }
	    },
	
	    /**
	     * Handles <code>GUI</code>'s element placement for you
	     * @type Boolean
	     */
	    autoPlace: {
	      get: function get() {
	        return params.autoPlace;
	      }
	    },
	
	    /**
	     * The identifier for a set of saved values
	     * @type String
	     */
	    preset: {
	      get: function get() {
	        if (_this.parent) {
	          return _this.getRoot().preset;
	        }
	
	        return params.load.preset;
	      },
	
	      set: function set(v) {
	        if (_this.parent) {
	          _this.getRoot().preset = v;
	        } else {
	          params.load.preset = v;
	        }
	        setPresetSelectIndex(this);
	        _this.revert();
	      }
	    },
	
	    /**
	     * The width of <code>GUI</code> element
	     * @type Number
	     */
	    width: {
	      get: function get() {
	        return params.width;
	      },
	      set: function set(v) {
	        params.width = v;
	        setWidth(_this, v);
	      }
	    },
	
	    /**
	     * The name of <code>GUI</code>. Used for folders. i.e
	     * a folder's name
	     * @type String
	     */
	    name: {
	      get: function get() {
	        return params.name;
	      },
	      set: function set(v) {
	        // TODO Check for collisions among sibling folders
	        params.name = v;
	        if (titleRowName) {
	          titleRowName.innerHTML = params.name;
	        }
	      }
	    },
	
	    /**
	     * Whether the <code>GUI</code> is collapsed or not
	     * @type Boolean
	     */
	    closed: {
	      get: function get() {
	        return params.closed;
	      },
	      set: function set(v) {
	        params.closed = v;
	        if (params.closed) {
	          _domDom2['default'].addClass(_this.__ul, GUI.CLASS_CLOSED);
	        } else {
	          _domDom2['default'].removeClass(_this.__ul, GUI.CLASS_CLOSED);
	        }
	        // For browsers that aren't going to respect the CSS transition,
	        // Lets just check our height against the window height right off
	        // the bat.
	        this.onResize();
	
	        if (_this.__closeButton) {
	          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
	        }
	      }
	    },
	
	    /**
	     * Contains all presets
	     * @type Object
	     */
	    load: {
	      get: function get() {
	        return params.load;
	      }
	    },
	
	    /**
	     * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
	     * <code>remember</code>ing
	     * @type Boolean
	     */
	    useLocalStorage: {
	
	      get: function get() {
	        return useLocalStorage;
	      },
	      set: function set(bool) {
	        if (SUPPORTS_LOCAL_STORAGE) {
	          useLocalStorage = bool;
	          if (bool) {
	            _domDom2['default'].bind(window, 'unload', saveToLocalStorage);
	          } else {
	            _domDom2['default'].unbind(window, 'unload', saveToLocalStorage);
	          }
	          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
	        }
	      }
	    }
	  });
	
	  // Are we a root level GUI?
	  if (_utilsCommon2['default'].isUndefined(params.parent)) {
	    params.closed = false;
	
	    _domDom2['default'].addClass(this.domElement, GUI.CLASS_MAIN);
	    _domDom2['default'].makeSelectable(this.domElement, false);
	
	    // Are we supposed to be loading locally?
	    if (SUPPORTS_LOCAL_STORAGE) {
	      if (useLocalStorage) {
	        _this.useLocalStorage = true;
	
	        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
	
	        if (savedGui) {
	          params.load = JSON.parse(savedGui);
	        }
	      }
	    }
	
	    this.__closeButton = document.createElement('div');
	    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
	    _domDom2['default'].addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
	    this.domElement.appendChild(this.__closeButton);
	
	    _domDom2['default'].bind(this.__closeButton, 'click', function () {
	      _this.closed = !_this.closed;
	    });
	    // Oh, you're a nested GUI!
	  } else {
	      if (params.closed === undefined) {
	        params.closed = true;
	      }
	
	      var _titleRowName = document.createTextNode(params.name);
	      _domDom2['default'].addClass(_titleRowName, 'controller-name');
	
	      var titleRow = addRow(_this, _titleRowName);
	
	      var onClickTitle = function onClickTitle(e) {
	        e.preventDefault();
	        _this.closed = !_this.closed;
	        return false;
	      };
	
	      _domDom2['default'].addClass(this.__ul, GUI.CLASS_CLOSED);
	
	      _domDom2['default'].addClass(titleRow, 'title');
	      _domDom2['default'].bind(titleRow, 'click', onClickTitle);
	
	      if (!params.closed) {
	        this.closed = false;
	      }
	    }
	
	  if (params.autoPlace) {
	    if (_utilsCommon2['default'].isUndefined(params.parent)) {
	      if (autoPlaceVirgin) {
	        autoPlaceContainer = document.createElement('div');
	        _domDom2['default'].addClass(autoPlaceContainer, CSS_NAMESPACE);
	        _domDom2['default'].addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
	        document.body.appendChild(autoPlaceContainer);
	        autoPlaceVirgin = false;
	      }
	
	      // Put it in the dom for you.
	      autoPlaceContainer.appendChild(this.domElement);
	
	      // Apply the auto styles
	      _domDom2['default'].addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
	    }
	
	    // Make it not elastic.
	    if (!this.parent) {
	      setWidth(_this, params.width);
	    }
	  }
	
	  _domDom2['default'].bind(window, 'resize', function () {
	    _this.onResize();
	  });
	  _domDom2['default'].bind(this.__ul, 'webkitTransitionEnd', function () {
	    _this.onResize();
	  });
	  _domDom2['default'].bind(this.__ul, 'transitionend', function () {
	    _this.onResize();
	  });
	  _domDom2['default'].bind(this.__ul, 'oTransitionEnd', function () {
	    _this.onResize();
	  });
	  this.onResize();
	
	  if (params.resizable) {
	    addResizeHandle(this);
	  }
	
	  saveToLocalStorage = function () {
	    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
	      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
	    }
	  };
	
	  // expose this method publicly
	  this.saveToLocalStorageIfPossible = saveToLocalStorage;
	
	  function resetWidth() {
	    var root = _this.getRoot();
	    root.width += 1;
	    _utilsCommon2['default'].defer(function () {
	      root.width -= 1;
	    });
	  }
	
	  if (!params.parent) {
	    resetWidth();
	  }
	};
	
	GUI.toggleHide = function () {
	  hide = !hide;
	  _utilsCommon2['default'].each(hideableGuis, function (gui) {
	    gui.domElement.style.display = hide ? 'none' : '';
	  });
	};
	
	GUI.CLASS_AUTO_PLACE = 'a';
	GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
	GUI.CLASS_MAIN = 'main';
	GUI.CLASS_CONTROLLER_ROW = 'cr';
	GUI.CLASS_TOO_TALL = 'taller-than-window';
	GUI.CLASS_CLOSED = 'closed';
	GUI.CLASS_CLOSE_BUTTON = 'close-button';
	GUI.CLASS_DRAG = 'drag';
	
	GUI.DEFAULT_WIDTH = 245;
	GUI.TEXT_CLOSED = 'Close Controls';
	GUI.TEXT_OPEN = 'Open Controls';
	
	_domDom2['default'].bind(window, 'keydown', function (e) {
	  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
	    GUI.toggleHide();
	  }
	}, false);
	
	_utilsCommon2['default'].extend(GUI.prototype,
	
	/** @lends dat.gui.GUI */
	{
	
	  /**
	   * @param object
	   * @param property
	   * @returns {dat.controllers.Controller} The new controller that was added.
	   * @instance
	   */
	  add: function add(object, property) {
	    return _add(this, object, property, {
	      factoryArgs: Array.prototype.slice.call(arguments, 2)
	    });
	  },
	
	  /**
	   * @param object
	   * @param property
	   * @returns {dat.controllers.ColorController} The new controller that was added.
	   * @instance
	   */
	  addColor: function addColor(object, property) {
	    return _add(this, object, property, {
	      color: true
	    });
	  },
	
	  /**
	   * @param controller
	   * @instance
	   */
	  remove: function remove(controller) {
	    // TODO listening?
	    this.__ul.removeChild(controller.__li);
	    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
	    var _this = this;
	    _utilsCommon2['default'].defer(function () {
	      _this.onResize();
	    });
	  },
	
	  destroy: function destroy() {
	    if (this.autoPlace) {
	      autoPlaceContainer.removeChild(this.domElement);
	    }
	  },
	
	  /**
	   * @param name
	   * @returns {dat.gui.GUI} The new folder.
	   * @throws {Error} if this GUI already has a folder by the specified
	   * name
	   * @instance
	   */
	  addFolder: function addFolder(name) {
	    // We have to prevent collisions on names in order to have a key
	    // by which to remember saved values
	    if (this.__folders[name] !== undefined) {
	      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
	    }
	
	    var newGuiParams = { name: name, parent: this };
	
	    // We need to pass down the autoPlace trait so that we can
	    // attach event listeners to open/close folder actions to
	    // ensure that a scrollbar appears if the window is too short.
	    newGuiParams.autoPlace = this.autoPlace;
	
	    // Do we have saved appearance data for this folder?
	
	    if (this.load && // Anything loaded?
	    this.load.folders && // Was my parent a dead-end?
	    this.load.folders[name]) {
	      // Did daddy remember me?
	
	      // Start me closed if I was closed
	      newGuiParams.closed = this.load.folders[name].closed;
	
	      // Pass down the loaded data
	      newGuiParams.load = this.load.folders[name];
	    }
	
	    var gui = new GUI(newGuiParams);
	    this.__folders[name] = gui;
	
	    var li = addRow(this, gui.domElement);
	    _domDom2['default'].addClass(li, 'folder');
	    return gui;
	  },
	
	  open: function open() {
	    this.closed = false;
	  },
	
	  close: function close() {
	    this.closed = true;
	  },
	
	  onResize: function onResize() {
	    var root = this.getRoot();
	    if (root.scrollable) {
	      var _top = _domDom2['default'].getOffset(root.__ul).top;
	      var h = 0;
	
	      _utilsCommon2['default'].each(root.__ul.childNodes, function (node) {
	        if (!(root.autoPlace && node === root.__save_row)) {
	          h += _domDom2['default'].getHeight(node);
	        }
	      });
	
	      if (window.innerHeight - _top - CLOSE_BUTTON_HEIGHT < h) {
	        _domDom2['default'].addClass(root.domElement, GUI.CLASS_TOO_TALL);
	        root.__ul.style.height = window.innerHeight - _top - CLOSE_BUTTON_HEIGHT + 'px';
	      } else {
	        _domDom2['default'].removeClass(root.domElement, GUI.CLASS_TOO_TALL);
	        root.__ul.style.height = 'auto';
	      }
	    }
	
	    if (root.__resize_handle) {
	      _utilsCommon2['default'].defer(function () {
	        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
	      });
	    }
	
	    if (root.__closeButton) {
	      root.__closeButton.style.width = root.width + 'px';
	    }
	  },
	
	  /**
	   * Mark objects for saving. The order of these objects cannot change as
	   * the GUI grows. When remembering new objects, append them to the end
	   * of the list.
	   *
	   * @param {Object...} objects
	   * @throws {Error} if not called on a top level GUI.
	   * @instance
	   */
	  remember: function remember() {
	    if (_utilsCommon2['default'].isUndefined(SAVE_DIALOGUE)) {
	      SAVE_DIALOGUE = new _domCenteredDiv2['default']();
	      SAVE_DIALOGUE.domElement.innerHTML = _htmlSaveDialogueHtml2['default'];
	    }
	
	    if (this.parent) {
	      throw new Error('You can only call remember on a top level GUI.');
	    }
	
	    var _this = this;
	
	    _utilsCommon2['default'].each(Array.prototype.slice.call(arguments), function (object) {
	      if (_this.__rememberedObjects.length === 0) {
	        addSaveMenu(_this);
	      }
	      if (_this.__rememberedObjects.indexOf(object) === -1) {
	        _this.__rememberedObjects.push(object);
	      }
	    });
	
	    if (this.autoPlace) {
	      // Set save row width
	      setWidth(this, this.width);
	    }
	  },
	
	  /**
	   * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
	   * @instance
	   */
	  getRoot: function getRoot() {
	    var gui = this;
	    while (gui.parent) {
	      gui = gui.parent;
	    }
	    return gui;
	  },
	
	  /**
	   * @returns {Object} a JSON object representing the current state of
	   * this GUI as well as its remembered properties.
	   * @instance
	   */
	  getSaveObject: function getSaveObject() {
	    var toReturn = this.load;
	    toReturn.closed = this.closed;
	
	    // Am I remembering any values?
	    if (this.__rememberedObjects.length > 0) {
	      toReturn.preset = this.preset;
	
	      if (!toReturn.remembered) {
	        toReturn.remembered = {};
	      }
	
	      toReturn.remembered[this.preset] = getCurrentPreset(this);
	    }
	
	    toReturn.folders = {};
	    _utilsCommon2['default'].each(this.__folders, function (element, key) {
	      toReturn.folders[key] = element.getSaveObject();
	    });
	
	    return toReturn;
	  },
	
	  save: function save() {
	    if (!this.load.remembered) {
	      this.load.remembered = {};
	    }
	
	    this.load.remembered[this.preset] = getCurrentPreset(this);
	    markPresetModified(this, false);
	    this.saveToLocalStorageIfPossible();
	  },
	
	  saveAs: function saveAs(presetName) {
	    if (!this.load.remembered) {
	      // Retain default values upon first save
	      this.load.remembered = {};
	      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
	    }
	
	    this.load.remembered[presetName] = getCurrentPreset(this);
	    this.preset = presetName;
	    addPresetOption(this, presetName, true);
	    this.saveToLocalStorageIfPossible();
	  },
	
	  revert: function revert(gui) {
	    _utilsCommon2['default'].each(this.__controllers, function (controller) {
	      // Make revert work on Default.
	      if (!this.getRoot().load.remembered) {
	        controller.setValue(controller.initialValue);
	      } else {
	        recallSavedValue(gui || this.getRoot(), controller);
	      }
	
	      // fire onFinishChange callback
	      if (controller.__onFinishChange) {
	        controller.__onFinishChange.call(controller, controller.getValue());
	      }
	    }, this);
	
	    _utilsCommon2['default'].each(this.__folders, function (folder) {
	      folder.revert(folder);
	    });
	
	    if (!gui) {
	      markPresetModified(this.getRoot(), false);
	    }
	  },
	
	  listen: function listen(controller) {
	    var init = this.__listening.length === 0;
	    this.__listening.push(controller);
	    if (init) {
	      updateDisplays(this.__listening);
	    }
	  }
	});
	
	/**
	 * Add a row to the end of the GUI or before another row.
	 *
	 * @param gui
	 * @param [newDom] If specified, inserts the dom content in the new row
	 * @param [liBefore] If specified, places the new row before another row
	 */
	function addRow(gui, newDom, liBefore) {
	  var li = document.createElement('li');
	  if (newDom) {
	    li.appendChild(newDom);
	  }
	
	  if (liBefore) {
	    gui.__ul.insertBefore(li, liBefore);
	  } else {
	    gui.__ul.appendChild(li);
	  }
	  gui.onResize();
	  return li;
	}
	
	function markPresetModified(gui, modified) {
	  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
	
	  // console.log('mark', modified, opt);
	  if (modified) {
	    opt.innerHTML = opt.value + '*';
	  } else {
	    opt.innerHTML = opt.value;
	  }
	}
	
	function augmentController(gui, li, controller) {
	  controller.__li = li;
	  controller.__gui = gui;
	
	  _utilsCommon2['default'].extend(controller, {
	    options: function options(_options) {
	      if (arguments.length > 1) {
	        var nextSibling = controller.__li.nextElementSibling;
	        controller.remove();
	
	        return _add(gui, controller.object, controller.property, {
	          before: nextSibling,
	          factoryArgs: [_utilsCommon2['default'].toArray(arguments)]
	        });
	      }
	
	      if (_utilsCommon2['default'].isArray(_options) || _utilsCommon2['default'].isObject(_options)) {
	        var nextSibling = controller.__li.nextElementSibling;
	        controller.remove();
	
	        return _add(gui, controller.object, controller.property, {
	          before: nextSibling,
	          factoryArgs: [_options]
	        });
	      }
	    },
	
	    name: function name(v) {
	      controller.__li.firstElementChild.firstElementChild.innerHTML = v;
	      return controller;
	    },
	
	    listen: function listen() {
	      controller.__gui.listen(controller);
	      return controller;
	    },
	
	    remove: function remove() {
	      controller.__gui.remove(controller);
	      return controller;
	    }
	  });
	
	  // All sliders should be accompanied by a box.
	  if (controller instanceof _controllersNumberControllerSlider2['default']) {
	    (function () {
	      var box = new _controllersNumberControllerBox2['default'](controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
	
	      _utilsCommon2['default'].each(['updateDisplay', 'onChange', 'onFinishChange', 'step'], function (method) {
	        var pc = controller[method];
	        var pb = box[method];
	        controller[method] = box[method] = function () {
	          var args = Array.prototype.slice.call(arguments);
	          pb.apply(box, args);
	          return pc.apply(controller, args);
	        };
	      });
	
	      _domDom2['default'].addClass(li, 'has-slider');
	      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
	    })();
	  } else if (controller instanceof _controllersNumberControllerBox2['default']) {
	    var r = function r(returned) {
	      // Have we defined both boundaries?
	      if (_utilsCommon2['default'].isNumber(controller.__min) && _utilsCommon2['default'].isNumber(controller.__max)) {
	        // Well, then lets just replace this with a slider.
	        controller.remove();
	        return _add(gui, controller.object, controller.property, {
	          before: controller.__li.nextElementSibling,
	          factoryArgs: [controller.__min, controller.__max, controller.__step]
	        });
	      }
	
	      return returned;
	    };
	
	    controller.min = _utilsCommon2['default'].compose(r, controller.min);
	    controller.max = _utilsCommon2['default'].compose(r, controller.max);
	  } else if (controller instanceof _controllersBooleanController2['default']) {
	    _domDom2['default'].bind(li, 'click', function () {
	      _domDom2['default'].fakeEvent(controller.__checkbox, 'click');
	    });
	
	    _domDom2['default'].bind(controller.__checkbox, 'click', function (e) {
	      e.stopPropagation(); // Prevents double-toggle
	    });
	  } else if (controller instanceof _controllersFunctionController2['default']) {
	      _domDom2['default'].bind(li, 'click', function () {
	        _domDom2['default'].fakeEvent(controller.__button, 'click');
	      });
	
	      _domDom2['default'].bind(li, 'mouseover', function () {
	        _domDom2['default'].addClass(controller.__button, 'hover');
	      });
	
	      _domDom2['default'].bind(li, 'mouseout', function () {
	        _domDom2['default'].removeClass(controller.__button, 'hover');
	      });
	    } else if (controller instanceof _controllersColorController2['default']) {
	      _domDom2['default'].addClass(li, 'color');
	      controller.updateDisplay = _utilsCommon2['default'].compose(function (val) {
	        li.style.borderLeftColor = controller.__color.toString();
	        return val;
	      }, controller.updateDisplay);
	
	      controller.updateDisplay();
	    }
	
	  controller.setValue = _utilsCommon2['default'].compose(function (val) {
	    if (gui.getRoot().__preset_select && controller.isModified()) {
	      markPresetModified(gui.getRoot(), true);
	    }
	
	    return val;
	  }, controller.setValue);
	}
	
	function recallSavedValue(gui, controller) {
	  // Find the topmost GUI, that's where remembered objects live.
	  var root = gui.getRoot();
	
	  // Does the object we're controlling match anything we've been told to
	  // remember?
	  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
	
	  // Why yes, it does!
	  if (matchedIndex !== -1) {
	    // Let me fetch a map of controllers for thcommon.isObject.
	    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
	
	    // Ohp, I believe this is the first controller we've created for this
	    // object. Lets make the map fresh.
	    if (controllerMap === undefined) {
	      controllerMap = {};
	      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
	    }
	
	    // Keep track of this controller
	    controllerMap[controller.property] = controller;
	
	    // Okay, now have we saved any values for this controller?
	    if (root.load && root.load.remembered) {
	      var presetMap = root.load.remembered;
	
	      // Which preset are we trying to load?
	      var preset = undefined;
	
	      if (presetMap[gui.preset]) {
	        preset = presetMap[gui.preset];
	      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
	        // Uhh, you can have the default instead?
	        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
	      } else {
	        // Nada.
	        return;
	      }
	
	      // Did the loaded object remember thcommon.isObject? &&  Did we remember this particular property?
	      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
	        // We did remember something for this guy ...
	        var value = preset[matchedIndex][controller.property];
	
	        // And that's what it is.
	        controller.initialValue = value;
	        controller.setValue(value);
	      }
	    }
	  }
	}
	
	function _add(gui, object, property, params) {
	  if (object[property] === undefined) {
	    throw new Error('Object "' + object + '" has no property "' + property + '"');
	  }
	
	  var controller = undefined;
	
	  if (params.color) {
	    controller = new _controllersColorController2['default'](object, property);
	  } else {
	    var factoryArgs = [object, property].concat(params.factoryArgs);
	    controller = _controllersControllerFactory2['default'].apply(gui, factoryArgs);
	  }
	
	  if (params.before instanceof _controllersController2['default']) {
	    params.before = params.before.__li;
	  }
	
	  recallSavedValue(gui, controller);
	
	  _domDom2['default'].addClass(controller.domElement, 'c');
	
	  var name = document.createElement('span');
	  _domDom2['default'].addClass(name, 'property-name');
	  name.innerHTML = controller.property;
	
	  var container = document.createElement('div');
	  container.appendChild(name);
	  container.appendChild(controller.domElement);
	
	  var li = addRow(gui, container, params.before);
	
	  _domDom2['default'].addClass(li, GUI.CLASS_CONTROLLER_ROW);
	  if (controller instanceof _controllersColorController2['default']) {
	    _domDom2['default'].addClass(li, 'color');
	  } else {
	    _domDom2['default'].addClass(li, typeof controller.getValue());
	  }
	
	  augmentController(gui, li, controller);
	
	  gui.__controllers.push(controller);
	
	  return controller;
	}
	
	function getLocalStorageHash(gui, key) {
	  // TODO how does this deal with multiple GUI's?
	  return document.location.href + '.' + key;
	}
	
	function addPresetOption(gui, name, setSelected) {
	  var opt = document.createElement('option');
	  opt.innerHTML = name;
	  opt.value = name;
	  gui.__preset_select.appendChild(opt);
	  if (setSelected) {
	    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
	  }
	}
	
	function showHideExplain(gui, explain) {
	  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
	}
	
	function addSaveMenu(gui) {
	  var div = gui.__save_row = document.createElement('li');
	
	  _domDom2['default'].addClass(gui.domElement, 'has-save');
	
	  gui.__ul.insertBefore(div, gui.__ul.firstChild);
	
	  _domDom2['default'].addClass(div, 'save-row');
	
	  var gears = document.createElement('span');
	  gears.innerHTML = '&nbsp;';
	  _domDom2['default'].addClass(gears, 'button gears');
	
	  // TODO replace with FunctionController
	  var button = document.createElement('span');
	  button.innerHTML = 'Save';
	  _domDom2['default'].addClass(button, 'button');
	  _domDom2['default'].addClass(button, 'save');
	
	  var button2 = document.createElement('span');
	  button2.innerHTML = 'New';
	  _domDom2['default'].addClass(button2, 'button');
	  _domDom2['default'].addClass(button2, 'save-as');
	
	  var button3 = document.createElement('span');
	  button3.innerHTML = 'Revert';
	  _domDom2['default'].addClass(button3, 'button');
	  _domDom2['default'].addClass(button3, 'revert');
	
	  var select = gui.__preset_select = document.createElement('select');
	
	  if (gui.load && gui.load.remembered) {
	    _utilsCommon2['default'].each(gui.load.remembered, function (value, key) {
	      addPresetOption(gui, key, key === gui.preset);
	    });
	  } else {
	    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
	  }
	
	  _domDom2['default'].bind(select, 'change', function () {
	    for (var index = 0; index < gui.__preset_select.length; index++) {
	      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
	    }
	
	    gui.preset = this.value;
	  });
	
	  div.appendChild(select);
	  div.appendChild(gears);
	  div.appendChild(button);
	  div.appendChild(button2);
	  div.appendChild(button3);
	
	  if (SUPPORTS_LOCAL_STORAGE) {
	    (function () {
	      var explain = document.getElementById('dg-local-explain');
	      var localStorageCheckBox = document.getElementById('dg-local-storage');
	      var saveLocally = document.getElementById('dg-save-locally');
	
	      saveLocally.style.display = 'block';
	
	      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
	        localStorageCheckBox.setAttribute('checked', 'checked');
	      }
	
	      showHideExplain(gui, explain);
	
	      // TODO: Use a boolean controller, fool!
	      _domDom2['default'].bind(localStorageCheckBox, 'change', function () {
	        gui.useLocalStorage = !gui.useLocalStorage;
	        showHideExplain(gui, explain);
	      });
	    })();
	  }
	
	  var newConstructorTextArea = document.getElementById('dg-new-constructor');
	
	  _domDom2['default'].bind(newConstructorTextArea, 'keydown', function (e) {
	    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
	      SAVE_DIALOGUE.hide();
	    }
	  });
	
	  _domDom2['default'].bind(gears, 'click', function () {
	    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
	    SAVE_DIALOGUE.show();
	    newConstructorTextArea.focus();
	    newConstructorTextArea.select();
	  });
	
	  _domDom2['default'].bind(button, 'click', function () {
	    gui.save();
	  });
	
	  _domDom2['default'].bind(button2, 'click', function () {
	    var presetName = prompt('Enter a new preset name.');
	    if (presetName) {
	      gui.saveAs(presetName);
	    }
	  });
	
	  _domDom2['default'].bind(button3, 'click', function () {
	    gui.revert();
	  });
	
	  // div.appendChild(button2);
	}
	
	function addResizeHandle(gui) {
	  var pmouseX = undefined;
	
	  gui.__resize_handle = document.createElement('div');
	
	  _utilsCommon2['default'].extend(gui.__resize_handle.style, {
	
	    width: '6px',
	    marginLeft: '-3px',
	    height: '200px',
	    cursor: 'ew-resize',
	    position: 'absolute'
	    // border: '1px solid blue'
	
	  });
	
	  function drag(e) {
	    e.preventDefault();
	
	    gui.width += pmouseX - e.clientX;
	    gui.onResize();
	    pmouseX = e.clientX;
	
	    return false;
	  }
	
	  function dragStop() {
	    _domDom2['default'].removeClass(gui.__closeButton, GUI.CLASS_DRAG);
	    _domDom2['default'].unbind(window, 'mousemove', drag);
	    _domDom2['default'].unbind(window, 'mouseup', dragStop);
	  }
	
	  function dragStart(e) {
	    e.preventDefault();
	
	    pmouseX = e.clientX;
	
	    _domDom2['default'].addClass(gui.__closeButton, GUI.CLASS_DRAG);
	    _domDom2['default'].bind(window, 'mousemove', drag);
	    _domDom2['default'].bind(window, 'mouseup', dragStop);
	
	    return false;
	  }
	
	  _domDom2['default'].bind(gui.__resize_handle, 'mousedown', dragStart);
	  _domDom2['default'].bind(gui.__closeButton, 'mousedown', dragStart);
	
	  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
	}
	
	function setWidth(gui, w) {
	  gui.domElement.style.width = w + 'px';
	  // Auto placed save-rows are position fixed, so we have to
	  // set the width manually if we want it to bleed to the edge
	  if (gui.__save_row && gui.autoPlace) {
	    gui.__save_row.style.width = w + 'px';
	  }
	  if (gui.__closeButton) {
	    gui.__closeButton.style.width = w + 'px';
	  }
	}
	
	function getCurrentPreset(gui, useInitialValues) {
	  var toReturn = {};
	
	  // For each object I'm remembering
	  _utilsCommon2['default'].each(gui.__rememberedObjects, function (val, index) {
	    var savedValues = {};
	
	    // The controllers I've made for thcommon.isObject by property
	    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
	
	    // Remember each value for each property
	    _utilsCommon2['default'].each(controllerMap, function (controller, property) {
	      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
	    });
	
	    // Save the values for thcommon.isObject
	    toReturn[index] = savedValues;
	  });
	
	  return toReturn;
	}
	
	function setPresetSelectIndex(gui) {
	  for (var index = 0; index < gui.__preset_select.length; index++) {
	    if (gui.__preset_select[index].value === gui.preset) {
	      gui.__preset_select.selectedIndex = index;
	    }
	  }
	}
	
	function updateDisplays(controllerArray) {
	  if (controllerArray.length !== 0) {
	    _utilsRequestAnimationFrame2['default'].call(window, function () {
	      updateDisplays(controllerArray);
	    });
	  }
	
	  _utilsCommon2['default'].each(controllerArray, function (c) {
	    c.updateDisplay();
	  });
	}
	
	module.exports = GUI;

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(215);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(216)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(209)();
	// imports
	
	
	// module
	exports.push([module.id, ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid transparent; }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: #000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.color {\n    border-left: 3px solid; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2FA1D6; }\n    .dg .cr.number input[type=text] {\n      color: #2FA1D6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2FA1D6;\n    max-width: 100%; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", ""]);
	
	// exports


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _OptionController = __webpack_require__(202);
	
	var _OptionController2 = _interopRequireDefault(_OptionController);
	
	var _NumberControllerBox = __webpack_require__(205);
	
	var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);
	
	var _NumberControllerSlider = __webpack_require__(206);
	
	var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);
	
	var _StringController = __webpack_require__(203);
	
	var _StringController2 = _interopRequireDefault(_StringController);
	
	var _FunctionController = __webpack_require__(210);
	
	var _FunctionController2 = _interopRequireDefault(_FunctionController);
	
	var _BooleanController = __webpack_require__(200);
	
	var _BooleanController2 = _interopRequireDefault(_BooleanController);
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	var ControllerFactory = function ControllerFactory(object, property) {
	  var initialValue = object[property];
	
	  // Providing options?
	  if (_utilsCommon2['default'].isArray(arguments[2]) || _utilsCommon2['default'].isObject(arguments[2])) {
	    return new _OptionController2['default'](object, property, arguments[2]);
	  }
	
	  // Providing a map?
	  if (_utilsCommon2['default'].isNumber(initialValue)) {
	    // Has min and max? (slider)
	    if (_utilsCommon2['default'].isNumber(arguments[2]) && _utilsCommon2['default'].isNumber(arguments[3])) {
	      // has step?
	      if (_utilsCommon2['default'].isNumber(arguments[4])) {
	        return new _NumberControllerSlider2['default'](object, property, arguments[2], arguments[3], arguments[4]);
	      }
	
	      return new _NumberControllerSlider2['default'](object, property, arguments[2], arguments[3]);
	    }
	
	    // number box
	    if (_utilsCommon2['default'].isNumber(arguments[4])) {
	      // has step
	      return new _NumberControllerBox2['default'](object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
	    }
	    return new _NumberControllerBox2['default'](object, property, { min: arguments[2], max: arguments[3] });
	  }
	
	  if (_utilsCommon2['default'].isString(initialValue)) {
	    return new _StringController2['default'](object, property);
	  }
	
	  if (_utilsCommon2['default'].isFunction(initialValue)) {
	    return new _FunctionController2['default'](object, property, '');
	  }
	
	  if (_utilsCommon2['default'].isBoolean(initialValue)) {
	    return new _BooleanController2['default'](object, property);
	  }
	};
	
	exports['default'] = ControllerFactory;
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	"use strict";
	
	exports.__esModule = true;
	function requestAnimationFrame(callback) {
	  setTimeout(callback, 1000 / 60);
	}
	
	exports["default"] = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;
	module.exports = exports["default"];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _domDom = __webpack_require__(201);
	
	var _domDom2 = _interopRequireDefault(_domDom);
	
	var _utilsCommon = __webpack_require__(197);
	
	var _utilsCommon2 = _interopRequireDefault(_utilsCommon);
	
	var CenteredDiv = (function () {
	  function CenteredDiv() {
	    _classCallCheck(this, CenteredDiv);
	
	    this.backgroundElement = document.createElement('div');
	    _utilsCommon2['default'].extend(this.backgroundElement.style, {
	      backgroundColor: 'rgba(0,0,0,0.8)',
	      top: 0,
	      left: 0,
	      display: 'none',
	      zIndex: '1000',
	      opacity: 0,
	      WebkitTransition: 'opacity 0.2s linear',
	      transition: 'opacity 0.2s linear'
	    });
	
	    _domDom2['default'].makeFullscreen(this.backgroundElement);
	    this.backgroundElement.style.position = 'fixed';
	
	    this.domElement = document.createElement('div');
	    _utilsCommon2['default'].extend(this.domElement.style, {
	      position: 'fixed',
	      display: 'none',
	      zIndex: '1001',
	      opacity: 0,
	      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
	      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
	    });
	
	    document.body.appendChild(this.backgroundElement);
	    document.body.appendChild(this.domElement);
	
	    var _this = this;
	    _domDom2['default'].bind(this.backgroundElement, 'click', function () {
	      _this.hide();
	    });
	  }
	
	  CenteredDiv.prototype.show = function show() {
	    var _this = this;
	
	    this.backgroundElement.style.display = 'block';
	
	    this.domElement.style.display = 'block';
	    this.domElement.style.opacity = 0;
	    //    this.domElement.style.top = '52%';
	    this.domElement.style.webkitTransform = 'scale(1.1)';
	
	    this.layout();
	
	    _utilsCommon2['default'].defer(function () {
	      _this.backgroundElement.style.opacity = 1;
	      _this.domElement.style.opacity = 1;
	      _this.domElement.style.webkitTransform = 'scale(1)';
	    });
	  };
	
	  /**
	   * Hide centered div
	   */
	
	  CenteredDiv.prototype.hide = function hide() {
	    var _this = this;
	
	    var hide = function hide() {
	      _this.domElement.style.display = 'none';
	      _this.backgroundElement.style.display = 'none';
	
	      _domDom2['default'].unbind(_this.domElement, 'webkitTransitionEnd', hide);
	      _domDom2['default'].unbind(_this.domElement, 'transitionend', hide);
	      _domDom2['default'].unbind(_this.domElement, 'oTransitionEnd', hide);
	    };
	
	    _domDom2['default'].bind(this.domElement, 'webkitTransitionEnd', hide);
	    _domDom2['default'].bind(this.domElement, 'transitionend', hide);
	    _domDom2['default'].bind(this.domElement, 'oTransitionEnd', hide);
	
	    this.backgroundElement.style.opacity = 0;
	    //    this.domElement.style.top = '48%';
	    this.domElement.style.opacity = 0;
	    this.domElement.style.webkitTransform = 'scale(1.1)';
	  };
	
	  CenteredDiv.prototype.layout = function layout() {
	    this.domElement.style.left = window.innerWidth / 2 - _domDom2['default'].getWidth(this.domElement) / 2 + 'px';
	    this.domElement.style.top = window.innerHeight / 2 - _domDom2['default'].getHeight(this.domElement) / 2 + 'px';
	  };
	
	  return CenteredDiv;
	})();
	
	exports['default'] = CenteredDiv;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=dat.gui.js.map