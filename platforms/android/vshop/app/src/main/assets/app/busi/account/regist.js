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
	__vue_styles__.push(__webpack_require__(26)
	)
	__vue_styles__.push(__webpack_require__(27)
	)

	/* script */
	__vue_exports__ = __webpack_require__(28)

	/* template */
	var __vue_template__ = __webpack_require__(29)
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
	__vue_options__.__file = "/Users/zhengjiangrong/work/weex/vshop/src/busi/account/regist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3f2bd6ea"
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
/* 9 */,
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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

	module.exports = {
	  "img": {
	    "width": 50,
	    "height": 50,
	    "marginLeft": 20
	  },
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
/* 28 */
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

	var finput = __webpack_require__(16);
	var button = __webpack_require__(4);
	var net = __webpack_require__(10);
	exports.default = {
	    components: { finput: finput, button: button },
	    data: {
	        btn_disabled: true,
	        name: '',
	        pass: '',
	        cpass: ''

	    },
	    methods: {
	        onnamechange: function onnamechange(txt) {
	            this.name = txt;
	            this.state();
	        },
	        onpasschange: function onpasschange(txt) {
	            this.pass = txt;
	            this.state();
	        },
	        oncpasschange: function oncpasschange(txt) {

	            this.cpass = txt;
	            this.state();
	        },
	        state: function state() {
	            if (this.name != '') {
	                if (this.pass != '') {
	                    if (this.cpass != '') {
	                        this.btn_disabled = false;
	                        return;
	                    }
	                }
	            }
	            this.btn_disabled = true;
	        },
	        submit: function submit() {

	            var navigator = weex.requireModule('navigator');
	            var modal = weex.requireModule("modal");
	            if (this.cpass != this.pass) {
	                modal.toast({ message: '两次输入的密码不一致!' });
	                return;
	            }
	            net.post('register/submit.json', {
	                userName: this.name,
	                password: this.pass,
	                //                    phone:navigator.param().phone
	                phone: '15827291225'
	            }, function (res) {

	                var modal = weex.requireModule('modal');
	                modal.toast({ message: '注册成功，请登录！' });
	                navigator.backTo('login');
	            });
	        },
	        onclick: function onclick() {
	            var navigator = weex.requireModule('navigator');
	            navigator.backTo('login');
	            //            modal.toast({message:'kk'})
	        }

	    },

	    created: function created() {

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

	            //              const nav = weex.requireModule('navbar');
	            //              nav.hideBottomLine(true);
	            //              nav.setBackgroundColor("#ffffff");
	            //              nav.makeUnTransparent();

	        });

	        globalEvent.addEventListener("viewWillDisappear", function (e) {

	            //              const nav = weex.requireModule('navbar');
	            //              nav.makeUnTransparent();
	            //              nav.hideBottomLine(false);
	            //              nav.setBackgroundColor("#eeeeee");


	        });
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["bg"]
	  }, [_c('div', {
	    staticClass: ["bg"]
	  }, [_c('div', {
	    staticStyle: {
	      height: "750",
	      marginTop: "110",
	      marginLeft: "50",
	      marginRight: "50"
	    }
	  }, [_c('div', {
	    staticClass: ["cell"],
	    staticStyle: {
	      marginTop: "20"
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": "root:img/ico_user.png"
	    }
	  }), _c('finput', {
	    staticStyle: {
	      flex: "1"
	    },
	    attrs: {
	      "placeholder": "请输入用户名",
	      "value": _vm.name
	    },
	    on: {
	      "onchange": _vm.onnamechange
	    }
	  })], 1), _c('div', {
	    staticClass: ["cell"],
	    staticStyle: {
	      marginTop: "30"
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": "root:img/ico_pwd.png"
	    }
	  }), _c('finput', {
	    staticStyle: {
	      flex: "1"
	    },
	    attrs: {
	      "placeholder": "请输入密码",
	      "value": _vm.pass,
	      "type": "password"
	    },
	    on: {
	      "onchange": _vm.onpasschange
	    }
	  })], 1), _c('div', {
	    staticClass: ["cell"],
	    staticStyle: {
	      marginTop: "30"
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": "root:img/ico_pwd.png"
	    }
	  }), _c('finput', {
	    staticStyle: {
	      flex: "1"
	    },
	    attrs: {
	      "placeholder": "请再次输入密码",
	      "value": _vm.cpass,
	      "type": "password"
	    },
	    on: {
	      "onchange": _vm.oncpasschange
	    }
	  })], 1), _c('button', {
	    staticStyle: {
	      marginTop: "120"
	    },
	    attrs: {
	      "text": "提 交",
	      "disabled": _vm.btn_disabled
	    },
	    on: {
	      "onclick": _vm.submit
	    }
	  })], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);