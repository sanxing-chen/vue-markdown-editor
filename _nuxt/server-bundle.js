module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(30)('wks')
  , uid        = __webpack_require__(21)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 1 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("vue");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 6 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(8)
  , createDesc = __webpack_require__(19);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(4)
  , IE8_DOM_DEFINE = __webpack_require__(40)
  , toPrimitive    = __webpack_require__(33)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41)
  , defined = __webpack_require__(25);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(45)
  , enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 12 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(16)
  , hide      = __webpack_require__(7)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
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

module.exports = true;

/***/ },
/* 18 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f
  , has = __webpack_require__(6)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 21 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 25 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 27 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 28 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys')
  , uid    = __webpack_require__(21);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 31 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(17)
  , wksExt         = __webpack_require__(35)
  , defineProperty = __webpack_require__(8).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var transitionsKeys = ['name', 'mode', 'css', 'type', 'enterClass', 'leaveClass', 'enterActiveClass', 'leaveActiveClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled'];

/* harmony default export */ exports["a"] = {
  name: 'nuxt-child',
  functional: true,
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data;

    data.nuxtChild = true;

    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key];
      }
    });
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [h('router-view', data)]);
  }
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(12)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(10)(function(){
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(12);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(17)
  , $export        = __webpack_require__(13)
  , redefine       = __webpack_require__(46)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(6)
  , Iterators      = __webpack_require__(15)
  , $iterCreate    = __webpack_require__(86)
  , setToStringTag = __webpack_require__(20)
  , getPrototypeOf = __webpack_require__(96)
  , ITERATOR       = __webpack_require__(0)('iterator')
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
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
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
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(4)
  , dPs         = __webpack_require__(93)
  , enumBugKeys = __webpack_require__(27)
  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(26)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(39).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(45)
  , hiddenKeys = __webpack_require__(27).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(6)
  , toIObject    = __webpack_require__(9)
  , arrayIndexOf = __webpack_require__(79)(false)
  , IE_PROTO     = __webpack_require__(29)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(16)
  , invoke             = __webpack_require__(82)
  , html               = __webpack_require__(39)
  , cel                = __webpack_require__(26)
  , global             = __webpack_require__(1)
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
var listener = function(event){
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
  if(__webpack_require__(12)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(31)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 49 */
/***/ function(module, exports) {



/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(101)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(42)(String, 'String', function(iterated){
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(104);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(7)
  , Iterators     = __webpack_require__(15)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nuxt_child_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nuxt_link_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__App_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__App_vue__);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__router_js__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return app; });













// Component: <nuxt-child>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_5__components_nuxt_child_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_5__components_nuxt_child_js__["a" /* default */]);
// Component: <nuxt-link>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_6__components_nuxt_link_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_6__components_nuxt_link_js__["a" /* default */]);
// Component: <nuxt>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue___default.a);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

if (false) {
  // window.onNuxtReady(() => console.log('Ready')) hook
  // Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

// Includes external plugins


// root instance
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
var defaultTransition = { "name": "page", "mode": "out-in" };
var app = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
  router: __WEBPACK_IMPORTED_MODULE_4__router_js__["a" /* default */],

  _nuxt: {
    defaultTransition: defaultTransition,
    transitions: [defaultTransition],
    setTransitions: function setTransitions(transitions) {
      if (!Array.isArray(transitions)) {
        transitions = [transitions];
      }
      transitions = transitions.map(function (transition) {
        if (!transition) {
          transition = defaultTransition;
        } else if (typeof transition === 'string') {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, { name: transition });
        } else {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, transition);
        }
        return transition;
      });
      this.$options._nuxt.transitions = transitions;
      return transitions;
    },

    err: null,
    error: function error(err) {
      err = err || null;
      this.$options._nuxt.err = err;
      return err;
    }
  }
}, __WEBPACK_IMPORTED_MODULE_8__App_vue___default.a);



/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__);
/* harmony export (immutable) */ exports["b"] = getMatchedComponents;
/* unused harmony export getMatchedComponentsInstances */
/* unused harmony export flatMapComponents */
/* harmony export (immutable) */ exports["c"] = getContext;
/* harmony export (immutable) */ exports["d"] = promisify;
/* unused harmony export getLocation */
/* harmony export (immutable) */ exports["a"] = urlJoin;
/* unused harmony export compile */






function getMatchedComponents(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.instances).map(function (key) {
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function getContext(context) {
  var ctx = {
    isServer: !!context.isServer,
    isClient: !!context.isClient,
    isDev: false,

    route: context.to ? context.to : context.route,
    error: context.error,
    base: '/',
    env: {}
  };
  var next = context.next;
  ctx.params = ctx.route.params || {};
  ctx.query = ctx.route.query || {};
  ctx.redirect = function (status, path, query) {
    if (!status) return;
    // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || (typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(path)) === 'object')) {
      query = path || {};
      path = status;
      status = 302;
    }
    next({
      path: path,
      query: query,
      status: status
    });
  };
  if (context.req) ctx.req = context.req;
  if (context.res) ctx.res = context.res;
  return ctx;
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!(promise instanceof __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a)) {
    promise = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = require("querystring");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/* harmony default export */ exports["a"] = {
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var _20b7ea03 =  false ? function () {
  return System.import('C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\pages\\index.vue');
} : __webpack_require__(119);

var _0b83eb06 =  false ? function () {
  return System.import('C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\pages\\sort.vue');
} : __webpack_require__(120);

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    var position = {};
    // if no children detected
    if (to.matched.length < 2) {
      position = { x: 0, y: 0 };
    } else if (to.matched.some(function (r) {
      return r.components.default.scrollToTop || r.components.default.options && r.components.default.options.scrollToTop;
    })) {
      position = { x: 0, y: 0 };
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash };
    }
    return position;
  }
};

/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior: scrollBehavior,
  routes: [{
    path: "/",
    component: _20b7ea03,
    name: "index"
  }, {
    path: "/sort",
    component: _0b83eb06,
    name: "sort"
  }]
});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

//
//
//
//
//
//

var layouts = {

  "_app":  false ? function () {
    return System.import('C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\layouts\\app.vue');
  } : __webpack_require__(116),

  "_default":  false ? function () {
    return System.import('C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\node_modules\\nuxt\\dist\\app\\layouts\\default.vue');
  } : __webpack_require__(118)

};

/* harmony default export */ exports["default"] = {
  head: { "title": "Markdown Editor", "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }, { "hid": "description", "content": "Nuxt.js project" }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "favicon.ico" }] },
  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },
  methods: {
    setLayout: function setLayout(layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      if (typeof layouts[_layout] === 'function') {
        return this.loadLayout(_layout);
      }
      this.layout = layouts[_layout];
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(this.layout);
    },
    loadLayout: function loadLayout(_layout) {
      var _this = this;

      return layouts[_layout]().then(function (Component) {
        layouts[_layout] = Component;
        _this.layout = layouts[_layout];
        return _this.layout;
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
        console.error(e);
      });
    }
  }
};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: '#3B8070',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuxt_child__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_Users_STay_Documents_nuxt_vue_markdown_editor_layouts_error_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_Users_STay_Documents_nuxt_vue_markdown_editor_layouts_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_C_Users_STay_Documents_nuxt_vue_markdown_editor_layouts_error_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue__);
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
  name: 'nuxt',
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$nuxt = this;
    // Add this.$root.$nuxt
    this.$root.$nuxt = this;
    // Bind $nuxt.setLayout(layout) to $root.setLayout
    this.setLayout = this.$root.setLayout.bind(this.$root);
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.$root.error;
  },
  mounted: function mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    }
  },

  components: {
    NuxtChild: __WEBPACK_IMPORTED_MODULE_1__nuxt_child__["a" /* default */],
    NuxtError: __WEBPACK_IMPORTED_MODULE_2_C_Users_STay_Documents_nuxt_vue_markdown_editor_layouts_error_vue___default.a,
    NuxtLoading: __WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue___default.a
  }
};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Footer_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Footer_vue__);
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  components: {
    MyFooter: __WEBPACK_IMPORTED_MODULE_0__components_Footer_vue___default.a
  }
};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: ['error']
};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

var _ = __webpack_require__(23),
    marked = __webpack_require__(131);
/* harmony default export */ exports["default"] = {
    layout: 'app',
    data: function data() {
        return {
            message: '# Hello Vue.js \n Using by the full-featured __markdown__ parser and compiler [marked](https://github.com/chjj/marked). \n\n *** \n\trequire(\'highlight.js\')\n\tconsole.log(\'try something here\')\n'
        };
    },

    computed: {
        compiledMarkdown: function compiledMarkdown() {
            return marked(this.message, {
                sanitize: true,
                highlight: function highlight(code) {
                    return __webpack_require__(130).highlightAuto(code).value;
                }
            });
        }
    },
    methods: {
        update: _.debounce(function (e) {
            this.message = e.target.value;
        }, 200),
        addtab: function addtab(e) {
            var str = e.target.value,
                start = e.target.selectionStart,
                sel = window.getSelection();
            this.message = str.substr(0, start) + "\t" + str.substr(start);
            setTimeout(function () {
                e.target.selectionStart = e.target.selectionEnd = start + 1;
            }, 100);
            e.preventDefault();
        }
    }
};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

var _ = __webpack_require__(23);
/* harmony default export */ exports["default"] = {
    layout: 'app',
    data: function data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            i: 0,
            j: 8,
            sorted: true,
            onAutoSort: false
        };
    },
    created: function created() {
        var self = this;
        setInterval(function () {
            if (self.onAutoSort === true && self.sorted === false) self.sort();
        }, 500);
    },

    methods: {
        sort: function sort() {
            if (this.i >= 8) {
                this.sorted = true;
                this.onAutoSort = false;
                return;
            }
            for (; this.i < 8;) {
                for (; this.j > this.i;) {
                    if (this.items[this.j - 1] > this.items[this.j]) {
                        var t = this.items[this.j];
                        this.items.splice(this.j, 1, this.items[this.j - 1]);
                        this.items.splice(this.j - 1, 1, t);
                    }
                    this.j--;
                    if (this.j == this.i) {
                        this.j = 8;
                        this.i++;
                    }
                    return;
                }
            }
        },
        shuffle: function shuffle() {
            this.items = _.shuffle(this.items);
            this.sorted = false;
            this.i = 0;
            this.j = 8;
        },
        autoSort: function autoSort() {
            if (!this.sorted) this.onAutoSort = !this.onAutoSort;
        }
    }
};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(37);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(68);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(67);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

var core  = __webpack_require__(2)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(2).Object.assign;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(2).Object.keys;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(49);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(107);
module.exports = __webpack_require__(2).Promise;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(108);
__webpack_require__(49);
__webpack_require__(109);
__webpack_require__(110);
module.exports = __webpack_require__(2).Symbol;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(51);
module.exports = __webpack_require__(35).f('iterator');

/***/ },
/* 77 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 78 */
/***/ function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9)
  , toLength  = __webpack_require__(48)
  , toIndex   = __webpack_require__(102);
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
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11)
  , gOPS    = __webpack_require__(28)
  , pIE     = __webpack_require__(18);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(16)
  , call        = __webpack_require__(85)
  , isArrayIter = __webpack_require__(83)
  , anObject    = __webpack_require__(4)
  , toLength    = __webpack_require__(48)
  , getIterFn   = __webpack_require__(103)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ },
/* 82 */
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(15)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(12);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(43)
  , descriptor     = __webpack_require__(19)
  , setToStringTag = __webpack_require__(20)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
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
/* 88 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(11)
  , toIObject = __webpack_require__(9);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(21)('meta')
  , isObject = __webpack_require__(14)
  , has      = __webpack_require__(6)
  , setDesc  = __webpack_require__(8).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(10)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(47).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(12)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
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
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
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

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(11)
  , gOPS     = __webpack_require__(28)
  , pIE      = __webpack_require__(18)
  , toObject = __webpack_require__(32)
  , IObject  = __webpack_require__(41)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(8)
  , anObject = __webpack_require__(4)
  , getKeys  = __webpack_require__(11);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(18)
  , createDesc     = __webpack_require__(19)
  , toIObject      = __webpack_require__(9)
  , toPrimitive    = __webpack_require__(33)
  , has            = __webpack_require__(6)
  , IE8_DOM_DEFINE = __webpack_require__(40)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9)
  , gOPN      = __webpack_require__(44).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(6)
  , toObject    = __webpack_require__(32)
  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(13)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(10);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(2)
  , dP          = __webpack_require__(8)
  , DESCRIPTORS = __webpack_require__(5)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(4)
  , aFunction = __webpack_require__(24)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31)
  , defined   = __webpack_require__(25);
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(38)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(15);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(77)
  , step             = __webpack_require__(88)
  , Iterators        = __webpack_require__(15)
  , toIObject        = __webpack_require__(9);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(42)(Array, 'Array', function(iterated, kind){
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(92)});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32)
  , $keys    = __webpack_require__(11);

__webpack_require__(97)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(17)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(16)
  , classof            = __webpack_require__(38)
  , $export            = __webpack_require__(13)
  , isObject           = __webpack_require__(14)
  , aFunction          = __webpack_require__(24)
  , anInstance         = __webpack_require__(78)
  , forOf              = __webpack_require__(81)
  , speciesConstructor = __webpack_require__(100)
  , task               = __webpack_require__(47).set
  , microtask          = __webpack_require__(91)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
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
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(98)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(20)($Promise, PROMISE);
__webpack_require__(99)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(87)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(6)
  , DESCRIPTORS    = __webpack_require__(5)
  , $export        = __webpack_require__(13)
  , redefine       = __webpack_require__(46)
  , META           = __webpack_require__(90).KEY
  , $fails         = __webpack_require__(10)
  , shared         = __webpack_require__(30)
  , setToStringTag = __webpack_require__(20)
  , uid            = __webpack_require__(21)
  , wks            = __webpack_require__(0)
  , wksExt         = __webpack_require__(35)
  , wksDefine      = __webpack_require__(34)
  , keyOf          = __webpack_require__(89)
  , enumKeys       = __webpack_require__(80)
  , isArray        = __webpack_require__(84)
  , anObject       = __webpack_require__(4)
  , toIObject      = __webpack_require__(9)
  , toPrimitive    = __webpack_require__(33)
  , createDesc     = __webpack_require__(19)
  , _create        = __webpack_require__(43)
  , gOPNExt        = __webpack_require__(95)
  , $GOPD          = __webpack_require__(94)
  , $DP            = __webpack_require__(8)
  , $keys          = __webpack_require__(11)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
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
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(44).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(18).f  = $propertyIsEnumerable;
  __webpack_require__(28).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(17)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(34)('asyncIterator');

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(34)('observable');

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.png?ddcb7676062267970e1c6e9572b29601";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(58)

/* template */
var __vue_template__ = __webpack_require__(126)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\.nuxt\\App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(59)

/* template */
var __vue_template__ = __webpack_require__(124)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\.nuxt\\components\\nuxt-loading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-52c3d7d0"
if (__vue_options__.functional) {console.error("[vue-loader] nuxt-loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(60)

/* template */
var __vue_template__ = __webpack_require__(125)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\.nuxt\\components\\nuxt.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] nuxt.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(122)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\components\\Footer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] Footer.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(61)

/* template */
var __vue_template__ = __webpack_require__(121)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\layouts\\app.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(127)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\layouts\\error.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-65624780"
if (__vue_options__.functional) {console.error("[vue-loader] error.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(129)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\node_modules\\nuxt\\dist\\app\\layouts\\default.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] default.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(63)

/* template */
var __vue_template__ = __webpack_require__(128)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\pages\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-71ebe645"
if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(64)

/* template */
var __vue_template__ = __webpack_require__(123)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\STay\\Documents\\nuxt\\vue-markdown-editor\\pages\\sort.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] sort.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 121 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nuxt-container', [_c('nuxt'), _c('my-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 122 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', [_vm._v("\n  Powered by "), _c('a', {
    attrs: {
      "href": "https://nuxtjs.org",
      "target": "_blank"
    }
  }, [_vm._v("Nuxt")]), _vm._v("| "), _c('a', {
    attrs: {
      "href": "https://sxing.xyz"
    }
  }, [_vm._v("STay")])])
}]}
module.exports.render._withStripped = true

/***/ },
/* 123 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "demo",
    attrs: {
      "id": "flip-list-demo"
    }
  }, [_c('h1', {
    attrs: {
      "id": "eHeader"
    }
  }, [_vm._v(" Bubble Sort")]), _c('button', {
    on: {
      "click": _vm.shuffle
    }
  }, [_vm._v("Shuffle")]), _c('button', {
    attrs: {
      "disabled": _vm.sorted
    },
    on: {
      "click": _vm.autoSort
    }
  }, [_vm._v(_vm._s(_vm.onAutoSort ? 'Sorting' : 'Begin autoSort'))]), _c('button', {
    attrs: {
      "disabled": _vm.sorted
    },
    on: {
      "click": _vm.sort
    }
  }, [_vm._v("Sort once")]), _c('span', [_vm._v("i = " + _vm._s(_vm.sorted ? '--' : _vm.i))]), _c('span', [_vm._v("j = " + _vm._s(_vm.sorted ? '--' : _vm.j) + " ")]), _c('transition-group', {
    attrs: {
      "name": "flip-list",
      "tag": "ul"
    }
  }, _vm._l((_vm.items), function(item) {
    return _c('li', {
      key: item
    }, [_vm._v("\n            " + _vm._s(item) + "\n        ")])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 124 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progress",
    style: ({
      'width': _vm.percent + '%',
      'height': _vm.height,
      'background-color': _vm.canSuccess ? _vm.color : _vm.failedColor,
      'opacity': _vm.show ? 1 : 0
    })
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 125 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nuxt-loading', {
    ref: "loading"
  }), (!_vm.nuxt.err) ? _c('nuxt-child') : _vm._e(), (_vm.nuxt.err) ? _c('nuxt-error', {
    attrs: {
      "error": _vm.nuxt.err
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 126 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "__nuxt"
    }
  }, [(_vm.layout) ? _c(_vm.layout, {
    tag: "component"
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "container"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(111),
      "alt": "Nuxt.js Logo"
    }
  }), _c('h1', {
    staticClass: "title"
  }, [_vm._v("\n    " + _vm._s(_vm.error.statusCode) + "\n  ")]), _c('h2', {
    staticClass: "info"
  }, [_vm._v("\n    " + _vm._s(_vm.error.message) + "\n  ")]), (_vm.error.statusCode === 404) ? _c('nuxt-link', {
    staticClass: "button",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n    Homepage\n  ")]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 128 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "container"
  }, [_c('h1', {
    attrs: {
      "id": "eHeader"
    }
  }, [_vm._v(" Markdown Editor ")]), _c('div', {
    attrs: {
      "id": "editor"
    }
  }, [_c('div', {
    attrs: {
      "id": "cmark"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.compiledMarkdown)
    }
  }), _c('textarea', {
    attrs: {
      "rows": "40"
    },
    domProps: {
      "value": _vm.message
    },
    on: {
      "input": _vm.update,
      "keydown": function($event) {
        if (_vm._k($event.keyCode, "tab", 9)) { return; }
        $event.preventDefault();
        _vm.addtab($event)
      }
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 129 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nuxt')
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 130 */
/***/ function(module, exports) {

module.exports = require("highlight.js");

/***/ },
/* 131 */
/***/ function(module, exports) {

module.exports = require("marked");

/***/ },
/* 132 */
/***/ function(module, exports) {

module.exports = require("vue-meta");

/***/ },
/* 133 */
/***/ function(module, exports) {

module.exports = require("vue-router");

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(53);



var debug = __webpack_require__(54)('nuxt:render');
debug.color = 4; // force blue color






var isDev = false;
var _app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* app */]);

// Fix issue from vue-router Abstract mode with base (used for server-side rendering)


// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ exports["default"] = function (context) {
  // Add store to the context

  // Nuxt object
  context.nuxt = { data: [], error: null, serverRendered: true };
  // create context.next for simulate next() of beforeEach() when wanted to redirect
  context.redirected = false;
  context.next = function (opts) {
    if (!context.res) {
      context.redirected = opts;
      context.nuxt.serverRendered = false;
      return;
    }
    opts.query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_querystring__["stringify"])(opts.query);
    opts.path = opts.path + (opts.query ? '?' + opts.query : '');
    opts.path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* urlJoin */])('/', opts.path);
    context.res.writeHead(opts.status, {
      'Location': opts.path
    });
    context.res.end();
  };
  // set router's location
  __WEBPACK_IMPORTED_MODULE_4__index__["b" /* router */].push(context.url);
  // Add route to the context
  context.route = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* router */].currentRoute;
  // Add meta infos
  context.meta = _app.$meta();
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app);

  var Components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* getMatchedComponents */])(context.route);

  var promise = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve();

  return promise.then(function () {
    // Sanitize Components
    Components = Components.map(function (Component) {
      var promises = [];
      if (!Component.options) {
        Component = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(Component);
        Component._Ctor = Component;
      } else {
        Component._Ctor = Component;
        Component.extendOptions = Component.options;
      }
      return Component;
    });
    // Set layout
    return _app.setLayout(Components.length ? Components[0].options.layout : '');
  }).then(function () {
    // Call .validate()
    var isValid = true;
    Components.forEach(function (Component) {
      if (!isValid) return;
      if (typeof Component.options.validate !== 'function') return;
      isValid = Component.options.validate({
        params: context.route.params || {},
        query: context.route.query || {}
      });
    });
    if (!isValid) {
      // Don't server-render the page in generate mode
      if (context._generate) {
        context.nuxt.serverRendered = false;
      }
      // Call the 404 error by making the Components array empty
      Components = [];
      return _app;
    }
    // Call data & fetch hooks on components matched by the route.
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(Components.map(function (Component) {
      var promises = [];
      var ctx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* getContext */])(context);
      if (Component.options.data && typeof Component.options.data === 'function') {
        Component._data = Component.options.data;
        var _promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* promisify */])(Component._data, ctx);
        _promise.then(function (data) {
          Component.options.data = function () {
            return data;
          };
          Component._Ctor.options.data = Component.options.data;
        });
        promises.push(_promise);
      } else {
        promises.push(null);
      }
      if (Component.options.fetch) {
        promises.push(Component.options.fetch(ctx));
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(promises);
    }));
  }).then(function (res) {
    if (!Components.length) {
      context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.', url: context.route.path });

      return _app;
    }

    // datas are the first row of each
    context.nuxt.data = res.map(function (tab) {
      return tab[0];
    });
    context.nuxt.error = _app.$options._nuxt.err;

    return _app;
  }).catch(function (error) {
    if (error && error instanceof Error) {
      error = { statusCode: 500, message: error.message };
    }
    context.nuxt.error = context.error(error);

    return _app;
  });
};

/***/ }
/******/ ]);