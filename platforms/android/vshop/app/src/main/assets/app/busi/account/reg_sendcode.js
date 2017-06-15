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
	__vue_styles__.push(__webpack_require__(10)
	)
	__vue_styles__.push(__webpack_require__(11)
	)

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(17)
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
	        onchange: function onchange(event) {
	            this.visiable = !event.value == '';
	            this.$emit('onchange', event);
	            //                this.name="xxx"
	        },
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

	module.exports = {
	  "bg": {
	    "backgroundColor": "#f5f5f5"
	  }
	}

/***/ }),
/* 11 */
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
	  "cell": {
	    "height": 100,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "alignItems": "center"
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
/* 12 */
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
	//
	//

	var finput = __webpack_require__(13);
	var button = __webpack_require__(4);
	exports.default = {
	    components: { finput: finput, button: button },
	    data: {
	        btn_disabled: false,
	        tel: ''

	    },
	    methods: {
	        update: function update(e) {
	            this.target = 'Weex';
	            console.log('target:', this.target);
	        },
	        ableclick: function ableclick() {
	            this.btn_disabled = !this.btn_disabled;
	        },
	        oninput: function oninput(e) {

	            //               this.btn_disabled=!(e.value!='');

	        },
	        change: function change() {
	            //               this.btn_disabled=!this.btn_disabled;
	        },
	        onclick: function onclick() {
	            var navigator = weex.requireModule('navigator');
	            navigator.push('regist.js');
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
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(14)
	)

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(16)
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
/* 14 */
/***/ (function(module, exports) {

	module.exports = {
	  "text": {
	    "fontSize": 50,
	    "textAlign": "center",
	    "color": "#41B883"
	  }
	}

/***/ }),
/* 15 */
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
	        color: {
	            type: String

	        },
	        value: {
	            type: String
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

	            pulldistance: 180,
	            visiable: true

	        };
	    },

	    methods: {
	        onchange: function onchange(event) {
	            this.visiable = !event.value == '';
	            this.$emit('onchange', event);
	            //                this.name="xxx"
	        },
	        oninput: function oninput(e) {

	            //                this.$emit('oninput');
	            this.$emit('oninput', e);
	            this.visiable = e.value != '';
	        },
	        onclose: function onclose() {
	            this.value = '';
	        }
	    },

	    created: function created() {
	        var globalEvent = weex.requireModule('globalEvent');
	        globalEvent.addEventListener("onPageInit", function (e) {

	            var nav = weex.requireModule('navbar');
	            nav.setTitle('注册');
	            nav.setBack(true, 'black');
	            nav.setBackgroundColor("#ffffff");
	            nav.setTitleColor('#313133');
	            nav.setStatusBarStyle('black');
	            nav.hideBottomLine(false);
	        });

	        this.visiable = !this.value == '';
	    },
	    ready: function ready() {}
	};
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      height: "100",
	      alignItems: "center"
	    }
	  }, [_c('input', {
	    staticStyle: {
	      flex: "1",
	      paddingLeft: "20",
	      height: "100"
	    },
	    style: {
	      'color': _vm.color
	    },
	    attrs: {
	      "placeholder": _vm.placeholder,
	      "type": _vm.type,
	      "value": (_vm.value)
	    },
	    on: {
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
/* 17 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bg"]
	  }, [_c('div', {
	    staticStyle: {
	      height: "550",
	      marginTop: "110",
	      marginLeft: "50",
	      marginRight: "50"
	    }
	  }, [_vm._m(0), _c('div', {
	    staticClass: ["cell"],
	    staticStyle: {
	      marginTop: "30"
	    }
	  }, [_c('finput', {
	    staticStyle: {
	      flex: "1"
	    },
	    attrs: {
	      "placeholder": "请输入验证码",
	      "value": _vm.tel
	    },
	    on: {
	      "oninput": _vm.oninput
	    }
	  }), _c('div', {
	    staticStyle: {
	      height: "70",
	      width: "2",
	      backgroundColor: "#f2f2f2"
	    }
	  }), _vm._m(1)], 1), _vm._m(2), _c('button', {
	    staticStyle: {
	      marginTop: "120"
	    },
	    attrs: {
	      "text": "下一步",
	      "disabled": _vm.btn_disabled
	    },
	    on: {
	      "onclick": _vm.onclick
	    }
	  })], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["cell"]
	  }, [_c('text', {
	    staticStyle: {
	      marginLeft: "20"
	    }
	  }, [_vm._v("+86")]), _c('input', {
	    staticStyle: {
	      flex: "1",
	      marginLeft: "20"
	    },
	    attrs: {
	      "type": "tel",
	      "placeholder": "请输入手机号"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      width: "200"
	    }
	  }, [_c('image', {
	    staticStyle: {
	      width: "100",
	      height: "100"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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