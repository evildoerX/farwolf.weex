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
	__vue_styles__.push(__webpack_require__(1)
	)
	__vue_styles__.push(__webpack_require__(2)
	)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(12)
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
	__vue_options__.__file = "/Users/zhengjiangrong/work/weex/vshop/src/busi/account/login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2338b225"
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	  "a": {
	    "width": 200,
	    "height": 200,
	    "color": "#FF0000"
	  },
	  "cell": {
	    "height": 105,
	    "alignItems": "center",
	    "flexDirection": "row",
	    "borderBottomWidth": 1.5,
	    "borderBottomColor": "#eeeeee"
	  },
	  "text": {
	    "color": "#929292",
	    "fontSize": 30
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
/* 3 */
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

	var button = __webpack_require__(4);
	var _login = __webpack_require__(9);
	var util = __webpack_require__(11);

	exports.default = {
	    components: { button: button },
	    data: {
	        user: '13888888888',
	        pass: '123456'
	    },
	    methods: {
	        update: function update(e) {
	            this.target = 'Weex';
	            console.log('target:', this.target);
	        },

	        gotoAddress: function gotoAddress() {
	            var navigator = weex.requireModule('navigator');
	            navigator.push('../address/addAddress.js');
	        },
	        login: function login() {
	            var modal = weex.requireModule('modal');
	            var navigator = weex.requireModule('navigator');
	            var modal = weex.requireModule("modal");

	            if (this.user == '') {
	                modal.toast({ message: '请输入用户名!' });
	                return;
	            }
	            if (this.pass == '') {
	                modal.toast({ message: '请输入密码!' });
	                return;
	            }

	            var net = weex.requireModule("net");
	            var modal = weex.requireModule("modal");

	            //            var url='http://192.168.2.117:8080/api/login.json';
	            //            var net=weex.requireModule("net")
	            //            net.get(url,{username:this.user,password:this.pass},{},function(){
	            //                //start
	            //                modal.toast({message:'start'})
	            //            },function(e){
	            //                //success
	            //                 modal.toast({message:'success'})
	            //
	            //
	            //            },function(e){
	            //                //exception
	            //                 modal.toast({message:e})
	            //
	            //            },function(){
	            //                //compelete
	            //                var mx=weex.requireModule("modal")
	            //                mx.toast({message:'compelete'})
	            //            });

	            _login.login(this.user, this.pass, function (res) {

	                modal.toast({ message: '登录成功!' });
	                navigator.dismiss();
	                navigator.invokeNativeCallBack(res);
	                var notify = weex.requireModule("notify");
	                notify.send('login', res);
	                //                  navigator.push('../tab/mine.js')
	            });
	        }
	    },

	    created: function created() {

	        var self = this;
	        var globalEvent = weex.requireModule('globalEvent');
	        var navigator = weex.requireModule('navigator');
	        navigator.addBackGestureSelfControl();
	        globalEvent.addEventListener("onPageInit", function (e) {

	            var nav = weex.requireModule('navbar');
	            nav.setTitle('登录');
	            //              nav.makeTransparent();
	            nav.setTitleColor('#313133');
	            nav.setBackgroundColor("#ffffff");
	            nav.hideBottomLine(true);
	            nav.setStatusBarStyle('black');
	            nav.setLeftImage('../../img/close.png', function () {
	                navigator.dismiss();
	            });
	            var navigator = weex.requireModule('navigator');
	            navigator.setPageId('login');
	            navigator.setRoot('login_index');
	            navigator.addBackGestureSelfControl();
	        });

	        globalEvent.addEventListener("viewWillAppear", function (e) {

	            var nav = weex.requireModule('navbar');
	            nav.hideBottomLine(true);
	            //              nav.setBackgroundColor("#ffffff");
	            //              nav.makeTransparent();
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
/* 12 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#ffffff"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      height: "650",
	      marginTop: "120",
	      marginLeft: "35",
	      marginRight: "35"
	    }
	  }, [_c('div', {
	    staticClass: ["cell"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("账户")]), _c('input', {
	    staticClass: ["input"],
	    staticStyle: {
	      paddingLeft: "20"
	    },
	    attrs: {
	      "type": "text",
	      "placeholder": "用户名",
	      "value": (_vm.user)
	    },
	    on: {
	      "input": function($event) {
	        _vm.user = $event.target.attr.value
	      }
	    }
	  })]), _c('div', {
	    staticClass: ["cell"],
	    staticStyle: {
	      marginTop: "20"
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("密码")]), _c('input', {
	    staticClass: ["input"],
	    staticStyle: {
	      paddingLeft: "20"
	    },
	    attrs: {
	      "type": "password",
	      "placeholder": "请输入密码",
	      "value": (_vm.pass)
	    },
	    on: {
	      "input": function($event) {
	        _vm.pass = $event.target.attr.value
	      }
	    }
	  })]), _c('button', {
	    staticStyle: {
	      marginTop: "120"
	    },
	    attrs: {
	      "text": "登录",
	      "disabled": _vm.btn_disabled
	    },
	    on: {
	      "onclick": function($event) {
	        _vm.login()
	      }
	    }
	  }), _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      justifyContent: "center",
	      marginTop: "80"
	    }
	  }, [_c('a', {
	    staticClass: ["a"],
	    attrs: {
	      "href": "root:busi/account/reg_sendcode.js"
	    }
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v("注册")])]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": function($event) {
	        _vm.gotoAddress()
	      }
	    }
	  }, [_vm._v("忘记密码")])], 1)], 1), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      marginBottom: "30",
	      alignItems: "center",
	      justifyContent: "center"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      color: "#a2a2a2"
	    }
	  }, [_vm._v("授权声明：vjshop.com")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);