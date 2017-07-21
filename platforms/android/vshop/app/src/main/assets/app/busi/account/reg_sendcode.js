// { "framework": "Vue" }
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(13)
	)
	__vue_styles__.push(__webpack_require__(14)
	)

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(25)
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
	__vue_options__.__file = "/Users/zhengjiangrong/work/weex/vshop/src/busi/account/reg_sendcode.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5d3e0398"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(5)
	)
	__vue_styles__.push(__webpack_require__(6)
	)

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
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
	__vue_options__.__file = "/Users/zhengjiangrong/work/weex/vshop/src/component/button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ccec1670"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = {
	  "bg": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "cell": {
	    "height": 100,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderRadius": 5
	  },
	  "arrow": {
	    "width": 16,
	    "height": 26
	  },
	  "font_normal": {
	    "fontSize": 30
	  },
	  "theme_color": {
	    "color": "#ff6e15"
	  },
	  "theme_bg": {
	    "color": "#ff6e15"
	  },
	  "mask": {
	    "backgroundColor": "#000000",
	    "opacity": 0.6,
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "bottom": 0,
	    "right": 0
	  }
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = {
	  "text": {
	    "color": "#ffffff",
	    "fontSize": 30
	  },
	  "text-disabled": {
	    "color": "#b4b4b4",
	    "fontSize": 30
	  },
	  "button": {
	    "height": 100,
	    "backgroundColor": "#ff4800",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#ffffff",
	    "borderRadius": 8,
	    "backgroundColor:active": "#ff1b08"
	  },
	  "button-disabled": {
	    "height": 100,
	    "backgroundColor": "#eeeeee",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#ffffff",
	    "borderRadius": 8,
	    "backgroundColor:active": "#eeeeee"
	  }
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//


	exports.default = {
	    props: {
	        text: {
	            type: String

	        },
	        color: {
	            type: String

	        },
	        disabled: {

	            default: false
	        },

	        type: {
	            type: String,
	            default: 'text'
	        },
	        font_size: {
	            default: 20
	        }

	    },
	    data: function data() {
	        return {

	            visiable: true

	        };
	    },

	    methods: {
	        oninput: function oninput(e) {

	            //                this.$emit('oninput');
	            this.$emit('oninput', e);
	            this.visiable = e.value != '';
	        },
	        onclick: function onclick() {
	            if (!this.disabled) this.$emit('onclick');
	        },
	        panstart: function panstart() {
	            if (!this.disabled) this.bgcolor = '#ff1b08';
	        },
	        panend: function panend() {
	            if (!this.disabled) this.bgcolor = '#ff4800';
	        },
	        setenable: function setenable() {},
	        onclose: function onclose() {
	            this.value = '';
	        }
	    },

	    created: function created() {

	        this.visiable = !this.value == '';
	    },
	    ready: function ready() {}
	};
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.disabled ? 'button-disabled' : 'button'],
	    on: {
	      "click": _vm.onclick
	    }
	  }, [_c('text', {
	    class: [_vm.disabled ? 'text-disabled' : 'text']
	  }, [_vm._v(_vm._s(_vm.text))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {

	    login: function login(user, pass, comp) {

	        var net = __webpack_require__(10);
	        net.post('login.json', { username: user, password: pass }, function (e) {

	            var st = weex.requireModule('static');

	            st.set('user', e.user);
	            comp(e);
	        });
	    },
	    checkDo: function checkDo(success) {
	        var navigator = weex.requireModule('navigator');
	        navigator.present('root:busi/account/login.js', {}, 'transparent', true, function () {
	            success();
	        }, true);
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// var host='http://127.0.0.1:8080/api/'
	var host = 'http://192.168.2.117:8080/api/';

	exports.default = {

	    postShort: function postShort(weg, param, header, start, success, compelete) {
	        var modal = weex.requireModule("modal");
	        this.postFull(weg, param, header, start, success, function (res) {
	            //fail
	            modal.toast({ message: e.res.msg });
	        }, function () {
	            //exception
	            modal.toast({ message: '网络异常！' });
	        }, function () {
	            //compelete

	            compelete();
	        });
	    },

	    postFull: function postFull(weg, param, header, start, success, fail, exception, compelete) {
	        var net = weex.requireModule("net");
	        var modal = weex.requireModule("modal");

	        var url = host + weg;

	        net.get(url, param, {}, function () {
	            //start
	            start();
	        }, function (e) {
	            //success
	            // modal.toast({message:e.res.err})
	            if (e.res.err == 0) {

	                success(e.res);
	            } else {
	                // modal.toast({message:e.res.msg})
	                fail(e.res);
	            }
	        }, function (e) {
	            //compelete
	            // modal.toast({message:'网络异常！'})
	            modal.toast({ message: '完成!', duration: 1000 });
	            compelete();
	        }, function (e) {
	            // exception
	            exception();
	        });
	    },

	    post: function post(weg, param, success) {
	        var progress = weex.requireModule("progress");
	        this.postShort(weg, param, {}, function () {
	            progress.show();
	        }, success, function () {
	            progress.dismiss();
	        });
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	var host = 'http://191.168.2.117:8080/';
	function getScreenHeight() {

	    return 750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight;
	}

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

	module.exports = {
	  "bg": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "cell": {
	    "height": 100,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderRadius": 5
	  },
	  "arrow": {
	    "width": 16,
	    "height": 26
	  },
	  "font_normal": {
	    "fontSize": 30
	  },
	  "theme_color": {
	    "color": "#ff6e15"
	  },
	  "theme_bg": {
	    "color": "#ff6e15"
	  },
	  "mask": {
	    "backgroundColor": "#000000",
	    "opacity": 0.6,
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "bottom": 0,
	    "right": 0
	  }
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = {
	  "inputclass": {
	    "color": "#FF0000",
	    "paddingLeft": 10
	  },
	  "next": {
	    "height": 100,
	    "backgroundColor": "#ffcd16",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#ffffff",
	    "borderRadius": 8,
	    "textAlign": "center",
	    "backgroundColor:disabled": "#eeeeee",
	    "color:disabled": "#d3d3d3"
	  },
	  "text": {
	    "color": "#929292",
	    "fontSize": 30,
	    "color:active": "#000000"
	  },
	  "input": {
	    "height": 105,
	    "flex": 1,
	    "paddingLeft": 30,
	    "fontSize": 30
	  },
	  "title": {
	    "fontSize": 33
	  }
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	//
	//
	//
	//
	//

	var finput = __webpack_require__(16);
	var button = __webpack_require__(4);
	var sendcode = __webpack_require__(20);
	var login = __webpack_require__(9);
	var util = __webpack_require__(11);
	var net = __webpack_require__(10);
	exports.default = {
	    components: { finput: finput, button: button, sendcode: sendcode },
	    data: function data() {
	        return {
	            btn_disabled: true,
	            tel: '',
	            capId: '',
	            codeimg: 'root:img/code_loading.png',
	            phone: '',
	            tcode: '',
	            mcode: ''
	        };
	    },

	    methods: {
	        update: function update(e) {
	            this.target = 'Weex';
	            console.log('target:', this.target);
	        },
	        ableclick: function ableclick() {
	            this.btn_disabled = !this.btn_disabled;
	        },
	        ontcodechange: function ontcodechange(txt) {
	            this.tcode = txt;
	            this.oninput();
	        },
	        onmcodechange: function onmcodechange(txt) {
	            this.mcode = txt;
	            this.oninput();
	        },
	        oninput: function oninput(e) {
	            //            console.log('phone='+this.phone)
	            //            console.log('phone='+this.code)
	            if (this.phone != '') {
	                if (this.mcode != '') {
	                    this.btn_disabled = false;
	                    return;
	                }
	            }
	            this.btn_disabled = true;
	        },

	        sendCode: function sendCode() {

	            var modal = weex.requireModule("modal");
	            if (this.phone == '') {
	                modal.toast({ message: '请输入手机号!' });
	                return;
	            }
	            if (this.tcode == '') {
	                modal.toast({ message: '请输入图形验证码!' });
	                return;
	            }
	            this.$refs.send.send('2', this.phone, this.capId, this.tcode);
	        },

	        getCode: function getCode() {
	            var self = this;
	            net.post('captcha/get.json', { type: '2' }, function (res) {

	                self.capId = res.id;
	                self.codeimg = res.url;
	            });
	        },
	        checkCode: function checkCode() {
	            var self = this;
	        },
	        sendMsg: function sendMsg(type, id) {
	            net.post('captcha/check.json', { type: '2', id: this.capId, code: this.tcode }, function (res) {});
	        },
	        submit: function submit() {
	            var sefl = this;
	            net.post('msg/checkCode.json', { phone: this.phone, code: this.mcode }, function (res) {

	                var navigator = weex.requireModule('navigator');
	                navigator.pushParam('regist.js', { phone: sefl.phone });
	            });
	        }

	    },

	    created: function created() {

	        this.getCode();
	        var self = this;
	        var globalEvent = weex.requireModule('globalEvent');
	        var navigator = weex.requireModule('navigator');
	        globalEvent.addEventListener("onPageInit", function (e) {

	            var nav = weex.requireModule('navbar');
	            nav.setTitle('注册');
	            nav.setBack(true, 'black');
	            nav.setBackgroundColor("#ffffff");
	            nav.setTitleColor('#313133');
	            nav.setStatusBarStyle('black');
	            nav.hideBottomLine(false);
	        });

	        globalEvent.addEventListener("viewWillAppear", function (e) {

	            var nav = weex.requireModule('navbar');
	            //              nav.hideBottomLine(true);
	            nav.setBackgroundColor("#ffffff");
	            //              nav.makeUnTransparent();
	        });

	        globalEvent.addEventListener("viewWillDisappear", function (e) {

	            var nav = weex.requireModule('navbar');
	            //              nav.makeUnTransparent();
	            //              nav.hideBottomLine(false);
	            //              nav.setBackgroundColor("#eeeeee");

	        });
	    },
	    mounted: function mounted() {
	        //          this.getCode();
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(17)
	)

	/* script */
	__vue_exports__ = __webpack_require__(18)

	/* template */
	var __vue_template__ = __webpack_require__(19)
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
	__vue_options__.__file = "/Users/zhengjiangrong/work/weex/vshop/src/component/input.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a7fcccb8"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = {
	  "text": {
	    "fontSize": 50,
	    "textAlign": "center",
	    "color": "#41B883"
	  }
	}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = {
	    props: {
	        placeholder: {
	            type: String

	        },
	        placeholder_color: {
	            default: '#ffffff'

	        },
	        color: {
	            default: '#000000'

	        },
	        value: {
	            default: ''
	        },

	        type: {
	            type: String,
	            default: 'text'
	        },
	        font_size: {
	            default: 20
	        },
	        autofocus: {
	            default: false
	        },
	        return_key_type: {
	            default: 'defalut'
	        }

	    },
	    data: function data() {
	        return {

	            pulldistance: 180,
	            visiable: true

	        };
	    },

	    methods: {
	        onchange: function onchange(event) {
	            this.visiable = !event.value == '';
	            //                this.$emit('onchange',event.value);
	            this.value = event.value;
	            //                this.name="xxx"
	        },
	        focus: function focus() {
	            this.$emit('focus');
	        },
	        blur: function blur() {
	            this.$refs.input.blur();
	            this.$emit('blur');
	        },
	        oninput: function oninput(e) {

	            //                this.$emit('oninput');
	            this.value = e.value;
	            this.visiable = e.value != '';
	            this.$emit('onchange', e.value);
	        },
	        onreturn: function onreturn(e) {
	            this.$emit('return', e);
	        },
	        onclose: function onclose() {
	            this.value = '';
	            this.visiable = false;
	            this.$emit('onchange', '');
	        }
	    },

	    created: function created() {
	        var globalEvent = weex.requireModule('globalEvent');
	        globalEvent.addEventListener("onPageInit", function (e) {});

	        this.visiable = !this.value == '';
	    },
	    ready: function ready() {}
	};
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      height: "100",
	      alignItems: "center"
	    }
	  }, [_c('input', {
	    ref: "input",
	    staticStyle: {
	      flex: "1",
	      paddingLeft: "20",
	      height: "100"
	    },
	    style: {
	      'color': _vm.color,
	      'placeholder-color': _vm.placeholder_color
	    },
	    attrs: {
	      "returnKeyType": _vm.return_key_type,
	      "autofocus": _vm.autofocus,
	      "placeholder": _vm.placeholder,
	      "type": _vm.type,
	      "value": (_vm.value)
	    },
	    on: {
	      "return": _vm.onreturn,
	      "focus": _vm.focus,
	      "change": _vm.onchange,
	      "input": [function($event) {
	        _vm.value = $event.target.attr.value
	      }, _vm.oninput]
	    }
	  }), (_vm.visiable) ? _c('div', {
	    staticStyle: {
	      width: "50px",
	      height: "100px",
	      marginRight: "10",
	      alignItems: "center",
	      justifyContent: "center"
	    },
	    on: {
	      "click": function($event) {
	        _vm.onclose()
	      }
	    }
	  }, [_c('image', {
	    staticStyle: {
	      width: "30px",
	      height: "30px"
	    },
	    attrs: {
	      "src": "root:img/delete.png"
	    }
	  })]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(21)
	)
	__vue_styles__.push(__webpack_require__(22)
	)

	/* script */
	__vue_exports__ = __webpack_require__(23)

	/* template */
	var __vue_template__ = __webpack_require__(24)
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
	__vue_options__.__file = "/Users/zhengjiangrong/work/weex/vshop/src/component/sendCode.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4aa9ca2b"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = {
	  "bg": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "cell": {
	    "height": 100,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderRadius": 5
	  },
	  "arrow": {
	    "width": 16,
	    "height": 26
	  },
	  "font_normal": {
	    "fontSize": 30
	  },
	  "theme_color": {
	    "color": "#ff6e15"
	  },
	  "theme_bg": {
	    "color": "#ff6e15"
	  },
	  "mask": {
	    "backgroundColor": "#000000",
	    "opacity": 0.6,
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "bottom": 0,
	    "right": 0
	  }
	}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = {
	  "text": {
	    "color": "#ffffff",
	    "fontSize": 30
	  },
	  "text-disabled": {
	    "color": "#b4b4b4",
	    "fontSize": 30
	  },
	  "button": {
	    "height": 100,
	    "backgroundColor": "#ff4800",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#ffffff",
	    "borderRadius": 8,
	    "backgroundColor:active": "#ff1b08"
	  },
	  "button-disabled": {
	    "height": 100,
	    "backgroundColor": "#eeeeee",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#ffffff",
	    "borderRadius": 8,
	    "backgroundColor:active": "#eeeeee"
	  }
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	var net = __webpack_require__(10);
	exports.default = {
	    props: {

	        isEnable: {

	            default: true
	        }

	    },
	    data: function data() {
	        return {

	            visiable: true,
	            text: '点击发送',
	            count: 60

	        };
	    },

	    methods: {
	        send: function send(type, phone, id, code) {

	            if (this.isEnable) {
	                var self = this;
	                net.postFull('msg/sendCode.json', { type: '2', phone: phone, id: id, code: code }, {}, function () {}, function (res) {

	                    var modal = weex.requireModule("modal");
	                    modal.toast({ message: '短信已发送，请查收!' });
	                    self.counting();
	                }, function () {});
	            }
	        },
	        counting: function counting() {
	            var self = this;
	            var it = setInterval(function () {

	                if (self.count > 0) {
	                    self.count--;
	                    self.text = self.count + "后可发送";
	                } else {
	                    self.text = '点击发送';
	                    clearInterval(it);
	                }
	                self.isEnable = self.count == 0;
	            }, 1000);
	        }
	    },

	    created: function created() {

	        this.visiable = !this.value == '';
	    },
	    ready: function ready() {}
	};
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('text', {
	    staticStyle: {
	      color: "black",
	      fontSize: "30"
	    }
	  }, [_vm._v(_vm._s(_vm.text))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["bg"]
	  }, [_c('div', {
	    staticClass: ["bg"]
	  }, [_c('div', {
	    staticStyle: {
	      height: "550",
	      marginTop: "110",
	      marginLeft: "50",
	      marginRight: "50"
	    }
	  }, [_c('div', {
	    staticClass: ["cell"]
	  }, [_c('text', {
	    staticStyle: {
	      marginLeft: "20"
	    }
	  }, [_vm._v("+86")]), _c('input', {
	    staticStyle: {
	      flex: "1",
	      marginLeft: "20",
	      height: "100"
	    },
	    attrs: {
	      "type": "tel",
	      "placeholder": "请输入手机号",
	      "value": (_vm.phone)
	    },
	    on: {
	      "input": [function($event) {
	        _vm.phone = $event.target.attr.value
	      }, _vm.oninput]
	    }
	  })]), _c('div', {
	    staticClass: ["cell"],
	    staticStyle: {
	      marginTop: "30"
	    }
	  }, [_c('finput', {
	    staticStyle: {
	      flex: "1"
	    },
	    attrs: {
	      "placeholder": "请输入右侧验证码",
	      "value": _vm.tcode
	    },
	    on: {
	      "onchange": _vm.ontcodechange
	    }
	  }), _c('div', {
	    staticStyle: {
	      height: "70",
	      width: "2",
	      backgroundColor: "#f2f2f2"
	    }
	  }), _c('div', {
	    staticStyle: {
	      width: "200",
	      alignItems: "center",
	      justifyContent: "center"
	    },
	    on: {
	      "click": _vm.getCode
	    }
	  }, [_c('image', {
	    staticStyle: {
	      width: "180",
	      height: "80"
	    },
	    attrs: {
	      "src": _vm.codeimg,
	      "placeholder": "root:img/code_loading.png"
	    }
	  })])], 1), _c('div', {
	    staticClass: ["cell"],
	    staticStyle: {
	      marginTop: "30"
	    }
	  }, [_c('finput', {
	    staticStyle: {
	      flex: "1"
	    },
	    attrs: {
	      "placeholder": "请输入短信验证码",
	      "value": _vm.mcode
	    },
	    on: {
	      "onchange": _vm.onmcodechange
	    }
	  }), _c('div', {
	    staticStyle: {
	      height: "70",
	      width: "2",
	      backgroundColor: "#f2f2f2"
	    }
	  }), _c('div', {
	    staticStyle: {
	      minWidth: "200",
	      alignItems: "center",
	      justifyContent: "center"
	    },
	    on: {
	      "click": _vm.sendCode
	    }
	  }, [_c('sendcode', {
	    ref: "send"
	  })], 1)], 1), _vm._m(0), _c('button', {
	    staticStyle: {
	      marginTop: "120"
	    },
	    attrs: {
	      "text": "下一步",
	      "disabled": _vm.btn_disabled
	    },
	    on: {
	      "onclick": _vm.submit
	    }
	  })], 1)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      marginTop: "20",
	      alignItems: "center"
	    }
	  }, [_c('image', {
	    staticStyle: {
	      width: "30",
	      height: "30"
	    },
	    attrs: {
	      "src": "root:img/check.png"
	    }
	  }), _c('text', {
	    staticStyle: {
	      color: "#b1b1b1",
	      fontSize: "30"
	    }
	  }, [_vm._v("同意")]), _c('text', {
	    staticStyle: {
	      color: "#000000",
	      fontSize: "30"
	    }
	  }, [_vm._v("用户注册协议")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);