(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat"],{

/***/ 112:
/*!***********************************************************!*\
  !*** D:/仿微信wechat/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat.vue */ 113));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 113:
/*!****************************************!*\
  !*** D:/仿微信wechat/pages/chat/chat.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=bf16e7f4&scoped=true& */ 114);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 120);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_id_bf16e7f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&id=bf16e7f4&lang=scss&scoped=true& */ 122);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bf16e7f4",
  null,
  false,
  _chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 114:
/*!***********************************************************************************!*\
  !*** D:/仿微信wechat/pages/chat/chat.vue?vue&type=template&id=bf16e7f4&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=bf16e7f4&scoped=true& */ 115);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 115:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/仿微信wechat/pages/chat/chat.vue?vue&type=template&id=bf16e7f4&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uAvatar: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-avatar/u-avatar */ "node-modules/uview-ui/components/u-avatar/u-avatar").then(__webpack_require__.bind(null, /*! uview-ui/components/u-avatar/u-avatar.vue */ 252))
    },
    uImage: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-image/u-image */ "node-modules/uview-ui/components/u-image/u-image").then(__webpack_require__.bind(null, /*! uview-ui/components/u-image/u-image.vue */ 259))
    },
    uButton: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-button/u-button */ "node-modules/uview-ui/components/u-button/u-button").then(__webpack_require__.bind(null, /*! uview-ui/components/u-button/u-button.vue */ 266))
    },
    uGrid: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-grid/u-grid */ "node-modules/uview-ui/components/u-grid/u-grid").then(__webpack_require__.bind(null, /*! uview-ui/components/u-grid/u-grid.vue */ 273))
    },
    uGridItem: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-grid-item/u-grid-item */ "node-modules/uview-ui/components/u-grid-item/u-grid-item").then(__webpack_require__.bind(null, /*! uview-ui/components/u-grid-item/u-grid-item.vue */ 280))
    },
    uIcon: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */ "node-modules/uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 238))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.chatType === "voice" ? __webpack_require__(/*! @/static/voice.png */ 116) : null
  var m1 = _vm.chatType === "keyboard" ? __webpack_require__(/*! @/static/keyboard.png */ 117) : null
  var m2 = __webpack_require__(/*! @/static/face.png */ 118)
  var m3 = __webpack_require__(/*! @/static/add.png */ 119)
  var g0 = _vm.$u.trim(this.formData.content)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
        m2: m2,
        m3: m3,
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 120:
/*!*****************************************************************!*\
  !*** D:/仿微信wechat/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 121);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 121:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/仿微信wechat/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 41));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _env = __webpack_require__(/*! ../../env */ 67);
var _socket = _interopRequireDefault(__webpack_require__(/*! @/socket.js */ 77));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var OrderPopup = function OrderPopup() {
  __webpack_require__.e(/*! require.ensure | components/popup */ "components/popup").then((function () {
    return resolve(__webpack_require__(/*! @/components/popup.vue */ 287));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var customer = function customer() {
  __webpack_require__.e(/*! require.ensure | components/customer */ "components/customer").then((function () {
    return resolve(__webpack_require__(/*! @/components/customer.vue */ 294));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var QuickReply = function QuickReply() {
  __webpack_require__.e(/*! require.ensure | components/QuickReply */ "components/QuickReply").then((function () {
    return resolve(__webpack_require__(/*! @/components/QuickReply.vue */ 301));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    var _ref;
    return _ref = {
      showQuickReply: false,
      selectedQuickReplyItem: null,
      roomType: '',
      info: {},
      kjList: [],
      isHistoryLoading: false,
      scrollAnimation: false,
      scrollTop: 0,
      scrollToView: '',
      windowHeight: 0,
      // 动态计算高度
      emojData: [
      // 分类1：笑脸与开心表情（33个）
      ['😀', '😃', '😄', '😁', '😆', '😊', '😇', '🙂', '😋', '😎', '🥳', '🤩', '🤗', '😺', '😸', '😹', '😻', '😼', '😽', '🙌', '👏', '👍', '🎉', '✨', '🌟', '💫', '❤️', '💯', '✅', '🌈', '🚀', '😌'],
      // 分类2：爱心与浪漫（33个）
      ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '💌', '😍', '🥰', '😘', '😗', '😙', '😚', '😻', '💋', '️👨', '💏', '👦', '💐'],
      // 分类3：搞怪与顽皮（33个）
      ['😜', '😝', '😛', '🤪', '😏', '😒', '😔', '😫', '😩', '😤', '😠', '😡', '🤬', '😈', '👿', '💀', '👻', '👽', '🤖', '🎃', '😺', '😸', '😹', '👀', '👅', '👄', '🦷', '👂', '👃', '🤡', '👺', '💩'],
      // 分类4：动物与自然（33个）
      ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🦄', '🐴', '🐦', '🐧', '🐔', '🐙', '🦑', '🐠', '🐳', '🌲', '🌳', '🌴', '🌵', '🌻', '🌸', '🦜', '🦢'],
      // 分类5：动作与物品（33个）
      ['✌️', '🤞', '🤟', '🤘', '🤙', '👌', '👈', '👉', '👆', '👇', '🖐️', '✋', '👊', '🤛', '🤜', '🤚', '👋', '🖖', '💪', '🎈', '🎁', '🎂', '📱', '💻', '⌚', '📷', '🎮', '💰', '🔑', '🚗', '🛒', '🎒']],
      swiperIndex: 0,
      // 初始 swiper 索引
      selectedEmoji: null,
      // 用于保存用户选择的表情
      msgImgList: [],
      historyList: [],
      fromUserInfo: {},
      formData: {
        content: '',
        limit: 20,
        index: 1
      },
      showOrderPopup: false,
      showcustomer: false,
      ws: null,
      hosId: '',
      loading: true,
      //标识是否正在获取数据
      hosType: '',
      status: 'disconnected',
      messageList: [],
      popTile: '',
      jkId: '',
      infoLeft: {}
    }, (0, _defineProperty2.default)(_ref, "loading", true), (0, _defineProperty2.default)(_ref, "imgHeight", '1000px'), (0, _defineProperty2.default)(_ref, "mpInputMargin", false), (0, _defineProperty2.default)(_ref, "chatType", "voice"), (0, _defineProperty2.default)(_ref, "voiceTitle", '按住 说话'), (0, _defineProperty2.default)(_ref, "commonList", []), (0, _defineProperty2.default)(_ref, "Recorder", uni.getRecorderManager()), (0, _defineProperty2.default)(_ref, "Audio", uni.createInnerAudioContext()), (0, _defineProperty2.default)(_ref, "recording", false), (0, _defineProperty2.default)(_ref, "isStopVoice", false), (0, _defineProperty2.default)(_ref, "voiceInterval", null), (0, _defineProperty2.default)(_ref, "voiceTime", 0), (0, _defineProperty2.default)(_ref, "canSend", true), (0, _defineProperty2.default)(_ref, "PointY", 0), (0, _defineProperty2.default)(_ref, "voiceIconText", "正在录音..."), (0, _defineProperty2.default)(_ref, "showFunBtn", false), (0, _defineProperty2.default)(_ref, "emogiBox", false), (0, _defineProperty2.default)(_ref, "AudioExam", null), (0, _defineProperty2.default)(_ref, "selectedQuickReplyIndex", null), (0, _defineProperty2.default)(_ref, "funList", [{
      icon: "photo-fill",
      title: "照片",
      uploadType: ["album"]
    }, {
      icon: "camera-fill",
      title: "拍摄",
      uploadType: ["camera"]
    }, {
      icon: "order",
      title: "订单"
    }, {
      icon: "bag-fill",
      title: "商品"
    }, {
      icon: "kefu-ermai",
      title: "客服"
    }]), (0, _defineProperty2.default)(_ref, "infoData", {}), _ref;
  },
  components: {
    OrderPopup: OrderPopup,
    customer: customer,
    QuickReply: QuickReply
  },
  watch: {
    // 取消选中
    showQuickReply: function showQuickReply(val) {
      if (!val) {
        this.selectedQuickReplyIndex = null;
      }
    }
  },
  methods: {
    //获取传递的文字
    dataContent: function dataContent(data) {
      console.log(data);
    },
    //获取分类
    getList: function getList(val) {
      var _this = this;
      console.log(val);
      return new Promise(function (resolve, reject) {
        _this.$api('getCateList', {
          client_id: val
        }).then(function (res) {
          if (res.status == 200) {
            _this.kjList = res.data.common_list;
            _this.commonList = res.data.cate_list;
            console.log(_this.commonList);
          }
          resolve(true);
        }).catch(function (e) {
          resolve(false);
          // console.log(e);
        });
      });
    },
    scrollBool: function scrollBool() {
      this.showQuickReply = false;
    },
    handleQuickReplyClick: function handleQuickReplyClick(item, index) {
      this.emogiBox = false;
      this.showFunBtn = false;
      this.scrollToView = 'msg-0';
      if (index === 0) {
        if (this.selectedQuickReplyIndex === index) {
          this.selectedQuickReplyIndex = null;
          this.showQuickReply = false;
        } else {
          this.selectedQuickReplyIndex = index;
          this.selectedQuickReplyItem = item;
          this.showQuickReply = true;
        }
      } else {
        this.formData.content = item.content;
        this.selectedQuickReplyIndex = null; // 点击其他项时不高亮
      }
    },
    del: function del() {
      var arr = Array.from(this.formData.content); // 按字符拆分为数组
      arr = arr.slice(0, -1); // 删除最后一个字符
      this.formData.content = arr.join('');
      console.log(this.formData.content);
    },
    //触发滑动到顶部(加载历史信息记录)
    loadHistory: function loadHistory(e) {
      var _this2 = this;
      console.log(e);
      if (this.isHistoryLoading) {
        return;
      }
      this.isHistoryLoading = true; //参数作为进入请求标识，防止重复请求
      this.scrollAnimation = false; //关闭滑动动画
      // let Viewid = this.messageList[0].msg.id;//记住第一个信息ID
      //本地模拟请求历史记录效果
      setTimeout(function () {
        // 消息列表

        console.log(_this2.historyList);
        // 获取消息中的图片,并处理显示尺寸
        for (var i = 0; i < _this2.historyList.length; i++) {
          _this2.historyList[i].hasBeenSentId = Math.floor(Math.random() * 1000 + 1);
          _this2.messageList.unshift(_this2.historyList[i]);
        }
        //这段代码很重要，不然每次加载历史数据都会跳到顶部
        _this2.$nextTick(function () {
          this.scrollToView = 'msg-19';
          this.$nextTick(function () {
            this.scrollAnimation = true; //恢复滚动动画
          });
        });

        _this2.isHistoryLoading = false;
      }, 1000);
    },
    //处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
    setPicSize: function setPicSize(content) {
      // 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。
      var maxW = uni.upx2px(350); //350是定义消息图片最大宽度
      var maxH = uni.upx2px(350); //350是定义消息图片最大高度
      if (content.w > maxW || content.h > maxH) {
        var scale = content.w / content.h;
        content.w = scale > 1 ? maxW : maxH * scale;
        content.h = scale > 1 ? maxW / scale : maxH;
      }
      return content;
    },
    //选中订单
    handleSelectOrder: function handleSelectOrder(item) {
      this.sendMsg(item);

      // 跳转到订单详情页或其他操作
    },
    //转接客服
    handleSelect: function handleSelect(item) {},
    //关闭
    closeBox: function closeBox(data) {
      this.showOrderPopup = data;
    },
    closeKf: function closeKf(data) {
      this.showcustomer = data;
    },
    init: function init(data) {
      var _this3 = this;
      // 初始化 WebSocket
      this.ws = new _socket.default('wss://192.168.0.119:8088/ws/', {
        maxReconnect: 5,
        // 最大重连次数
        reconnectDelay: 2000,
        // 重连间隔
        heartbeatInterval: 100000 // 心跳间隔
      });

      // 监听事件
      this.ws.on('open', function () {
        _this3.status = 'connected';
      });
      this.ws.send(data);
      this.ws.startHeartbeat(data);
      this.ws.on('close', function () {
        return _this3.status = 'disconnected';
      });
      this.ws.on('error', function (err) {
        return console.error('发生错误:', err);
      });
      this.ws.on('message', function (res) {
        console.log(res);
        if (res.type == 'onConnect') {
          _this3.jkId = res.data.client_id;
          _this3.gethistoryList(_this3.jkId);
        }
        if (res.type == 'login') {
          _this3.messageList = res.data.list;
          _this3.info = res.data.sender_info;
          _this3.messageList.map(function (i, index) {
            i.path = i.content;
            i.hasBeenSentId = _this3.messageList.length - 1 - index;
            if (i.is_me) {
              i.is_me = true;
            } else {
              i.is_me = false;
            }
          });
        }
        _this3.$nextTick(function () {
          //进入页面滚动到底部
          this.scrollTop = 99999999999;
          this.$nextTick(function () {
            this.scrollAnimation = true;
          });
        });
      });
    },
    // 加载历史消息
    gethistoryList: function gethistoryList(page) {
      var _this4 = this;
      return new Promise(function (resolve, reject) {
        _this4.$api('history', {
          client_id: page
        }).then(function (res) {
          if (res.status == 200) {
            _this4.historyList = res.data.list;
          }
          resolve(true);
        }).catch(function (e) {
          resolve(false);
          // console.log(e);
        });
      });
    },
    //切换语音或者键盘方式
    switchChatType: function switchChatType(type) {
      this.chatType = type;
      this.showFunBtn = false;
    },
    //打开表情选项
    emogiFun: function emogiFun() {
      this.chatType = 'voice';
      this.emogiBox = !this.emogiBox;
      this.showFunBtn = false;
      this.showQuickReply = false;
      this.scrollToView = 'msg-0';
      uni.hideKeyboard();
      // this.scrollToView = 'msg-0';
    },
    //切换功能性按钮
    switchFun: function switchFun() {
      this.chatType = 'voice';
      this.showFunBtn = !this.showFunBtn;
      this.emogiBox = false;
      this.showQuickReply = false;
      uni.hideKeyboard();
    },
    tuchEmoj: function tuchEmoj(item) {
      this.formData.content += item;
    },
    swiperChange: function swiperChange(e) {
      this.swiperIndex = e.detail.current;
    },
    //发送消息
    sendMsg: function sendMsg(data) {
      var _this5 = this;
      var sedData = {
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk",
        type: 'dialog',
        shop_id: null,
        user_id: null,
        content_type: 1,
        content: this.formData.content,
        room_type: this.hosType
      };
      if (this.hosType === 1 || this.hosType === 2 || this.hosType === 3) {
        sedData.shop_id = this.hosId;
      } else {
        sedData.user_id = this.hosId;
      }
      if (data) {
        if (data.contentType == 3) {
          //说明是发送视频
          sedData.path = data.path;
          sedData.content = data.content;
          sedData.content_type = data.contentType;
        } else if (data.contentType == 2) {
          //发送图片
          sedData.path = data.path;
          sedData.content = data.content;
          sedData.content_type = data.contentType;
        } else if (data.contentType == 4) {
          //商品
          sedData.content = data.id;
          sedData.content_type = data.contentType;
          sedData.thumb_url = data.thumb_url;
          sedData.title = data.title;
          sedData.price = data.price;
        } else if (data.contentType == 5) {
          //订单
          sedData.content = data.fatherId + ':' + data.id;
          sedData.content_type = data.contentType;
          sedData.thumb_url = data.thumb_url;
          sedData.title = data.title;
          sedData.price = data.price;
          sedData.order_number = data.order_number;
          sedData.order_time = data.order_time;
          sedData.shop_title = data.shop_title;
          sedData.num = data.num;
        }
      } else if (!this.$u.trim(this.formData.content)) {
        //验证输入框书否为空字符传
        return;
      }
      this.ws.send(sedData);
      sedData.is_me = true, sedData.headimgurl = this.info.headimgurl;
      this.messageList.push(sedData);
      this.messageList.map(function (i, index) {
        i.hasBeenSentId = _this5.messageList.length - 1 - index;
      });
      this.$nextTick(function () {
        _this5.formData.content = '';
        _this5.scrollToView = 'msg-0';
        if (_this5.showFunBtn) {
          _this5.showFunBtn = false;
        }
        if (sedData.contentType == 1) {
          _this5.mpInputMargin = true;
        }

        //h5浏览器并没有很好的办法控制键盘一直处于唤起状态 而且会有样式性的问题
      });
    },
    //用户触摸屏幕的时候隐藏键盘
    touchstart: function touchstart() {
      uni.hideKeyboard();
      this.showFunBtn = false;
      this.emogiBox = false;
    },
    // userid 用户id
    linkToBusinessCard: function linkToBusinessCard(userId) {
      // this.$u.route({
      // 	url: 'pages/businessCard/businessCard',
      // 	params: {
      // 		userId
      // 	}
      // });
    },
    //准备开始录音
    startVoice: function startVoice(e) {
      if (!this.Audio.paused) {
        //如果音频正在播放 先暂停。
        this.stopAudio(this.AudioExam);
      }
      this.recording = true;
      this.isStopVoice = false;
      this.canSend = true;
      this.voiceIconText = "正在录音...";
      this.PointY = e.touches[0].clientY;
      this.Recorder.start({
        format: 'mp3'
      });
    },
    //录音已经开始
    beginVoice: function beginVoice() {
      var _this6 = this;
      if (this.isStopVoice) {
        this.Recorder.stop();
        return;
      }
      this.voiceTitle = '松开 结束';
      this.voiceInterval = setInterval(function () {
        _this6.voiceTime++;
      }, 1000);
    },
    //move 正在录音中
    moveVoice: function moveVoice(e) {
      var PointY = e.touches[0].clientY;
      var slideY = this.PointY - PointY;
      if (slideY > uni.upx2px(120)) {
        this.canSend = false;
        this.voiceIconText = '松开手指 取消发送 ';
      } else if (slideY > uni.upx2px(60)) {
        this.canSend = true;
        this.voiceIconText = '手指上滑 取消发送 ';
      } else {
        this.voiceIconText = '正在录音... ';
      }
    },
    //结束录音
    endVoice: function endVoice() {
      this.isStopVoice = true; //加锁 确保已经结束录音并不会录制
      this.Recorder.stop();
      this.voiceTitle = '按住 说话';
    },
    //录音被打断
    cancelVoice: function cancelVoice(e) {
      this.voiceTime = 0;
      this.voiceTitle = '按住 说话';
      this.canSend = false;
      this.Recorder.stop();
    },
    //处理录音文件
    handleRecorder: function handleRecorder(_ref2) {
      var _this7 = this;
      var tempFilePath = _ref2.tempFilePath,
        duration = _ref2.duration;
      var contentDuration;
      this.voiceTime = 0;
      if (duration < 600) {
        this.voiceIconText = "说话时间过短";
        setTimeout(function () {
          _this7.recording = false;
        }, 200);
        return;
      }
      contentDuration = duration / 1000;
      this.recording = false;
      var params = {
        contentType: 2,
        content: tempFilePath,
        contentDuration: Math.ceil(contentDuration)
      };
      this.canSend && this.sendMsg(params);
    },
    //控制播放还是暂停音频文件
    handleAudio: function handleAudio(item) {
      this.AudioExam = item;
      this.Audio.paused ? this.playAudio(item) : this.stopAudio(item);
    },
    //播放音频
    playAudio: function playAudio(item) {
      this.Audio.src = item.content;
      this.Audio.hasBeenSentId = item.hasBeenSentId;
      this.Audio.play();
      item.anmitionPlay = true;
    },
    //停止音频
    stopAudio: function stopAudio(item) {
      item.anmitionPlay = false;
      this.Audio.src = '';
      this.Audio.stop();
    },
    //关闭动画
    closeAnmition: function closeAnmition() {
      var hasBeenSentId = this.Audio.hasBeenSentId;
      var item = this.messageList.find(function (it) {
        return it.hasBeenSentId == hasBeenSentId;
      });
      item.anmitionPlay = false;
    },
    //点击宫格时触发
    clickGrid: function clickGrid(index) {
      if (index == 0) {
        this.chooseImage(['album']);
      } else if (index == 1) {
        this.chooseImage(['camera']);
      } else if (index == 2) {
        this.showFunBtn = false;
        this.popTile = '请选择需要咨询的订单';
        this.showOrderPopup = true;
      } else if (index == 3) {
        this.showFunBtn = false;
        this.showOrderPopup = true;
        this.popTile = '发送商品';
      } else if (index == 4) {
        var parmas = {
          token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk",
          type: "cs_list",
          room_type: this.hosType
        };
        this.ws.send(parmas);
        this.showFunBtn = false;
        this.showcustomer = true;
      }
    },
    //发送图片
    chooseImage: function chooseImage(sourceType) {
      var _this8 = this;
      uni.chooseMedia({
        count: 9,
        mediaType: ['image', 'video'],
        // 允许图片和视频
        sourceType: sourceType,
        maxDuration: 15,
        success: function success(res) {
          var files = res.tempFiles;
          _this8.uploadFiles(files, res.type);
        }
      });
    },
    // 选择图片后调用此方法
    uploadFiles: function uploadFiles(tempFilePath, type) {
      // 平台判断

      this.uploadImageInMiniProgram(tempFilePath, type);
    },
    // H5 端处理
    uploadImageInH5: function uploadImageInH5(tempFilePath) {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var response, blob, file, formData, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch(tempFilePath);
              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.blob();
              case 6:
                blob = _context.sent;
                file = new File([blob], 'image.jpg', {
                  type: blob.type
                }); // 2. 构造 FormData
                formData = new FormData();
                formData.append('file', file); // 文件字段
                formData.append('userId', '123'); // 其他参数

                // 3. 发送请求（使用 uni.request 或原生 fetch）
                _context.next = 13;
                return _this9.sendFormDataRequest(formData);
              case 13:
                result = _context.sent;
                console.log('上传成功:', result);
                _context.next = 20;
                break;
              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](0);
                console.error('H5端上传失败:', _context.t0);
              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 17]]);
      }))();
    },
    // 小程序端处理
    uploadImageInMiniProgram: function uploadImageInMiniProgram(tempFilePath, type) {
      var _this10 = this;
      var uploadTasks = tempFilePath.map(function (file) {
        return new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: 'http://192.168.0.119:8080/upload/upload2Oss',
            filePath: file.tempFilePath,
            name: 'file',
            // 参数名需与后端一致
            header: {
              'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk"
            },
            formData: {
              client_id: _this10.jkId
            },
            success: function success(res) {
              if (res.statusCode === 200) {
                try {
                  var data = JSON.parse(res.data);
                  _this10.sendMsg({
                    contentType: type == 'image' ? 2 : 3,
                    content: data.data.list[0],
                    path: file.tempFilePath
                  });
                } catch (e) {
                  reject(new Error('解析响应失败'));
                }
              } else {
                reject(new Error("\u4E0A\u4F20\u5931\u8D25\uFF0C\u72B6\u6001\u7801\uFF1A".concat(res.statusCode)));
              }
            },
            fail: function fail(err) {
              reject(err);
            }
          });
        });
      });

      // 合并所有结果
      Promise.all(uploadTasks).then(function (results) {
        var allList = results.flat(); // 合并成完整路径数组
        console.log('上传成功，文件列表：', allList);
      }).catch(function (error) {
        console.error('上传出错：', error);
        uni.showToast({
          title: '上传失败',
          icon: 'none'
        });
      });
    },
    //查看大图
    viewImg: function viewImg(imgList) {
      uni.previewImage({
        urls: imgList
      });
    }
  },
  onPageScroll: function onPageScroll(e) {

    // this.messageList = [...this.historyList , ...this.messageList];
    // this.messageList.push({content:'222'})
  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap(_ref3) {
    var index = _ref3.index;
    if (index == 0) {
      //用户详情 设置
    } else if (index == 1) {
      //返回按钮
      this.$u.route({
        type: 'switchTab',
        url: 'pages/home/home'
      });
    }
  },
  //返回按钮事件
  onBackPress: function onBackPress(e) {
    //以下内容对h5不生效
    //--所以如果用浏览器自带的返回按钮进行返回的时候页面不会重定向 正在寻找合适的解决方案
    this.$u.route({
      type: 'switchTab',
      url: 'pages/home/home'
    });
    return true;
  },
  onUnload: function onUnload() {
    var params = {
      room_type: this.roomType,
      type: "logout",
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk"
    };
    this.ws.send(params);
    if (this.ws) {
      this.ws.close();
    }
  },
  onLoad: function onLoad(info) {
    var _this11 = this;
    this.$nextTick(function () {
      //进入页面滚动到底部
      this.scrollTop = 99999999999;
      this.$nextTick(function () {
        this.scrollAnimation = true;
      });
    });
    var infoData = JSON.parse(info.data);
    uni.setNavigationBarTitle({
      title: infoData.title
    });
    this.roomType = infoData.room_type;
    var params = {
      user_id: null,
      shop_id: null,
      room_type: infoData.room_type,
      type: "login",
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEzMzQ1MTUsImV4cCI6MTc0MzkyNjUxNSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJhZG1pbiIsImFkbWluX3VpZCI6MX19.fZwFbBkcbc4yv_FiGM6kSZ97L9eBNzFt7cAZZ-NR7H8"
    };
    this.hosType = infoData.room_type;
    if (infoData.room_type === 1 || infoData.room_type === 2 || infoData.room_type === 3) {
      params.shop_id = infoData.shop_id;
      this.hosId = infoData.shop_id;
    } else {
      params.user_id = infoData.user_id;
      this.hosId = infoData.user_id;
    }
    this.infoData = infoData; // 赋值 infoData

    this.init(params);
    this.$nextTick(function () {
      _this11.getList(_this11.jkId);
    });

    //录音开始事件
    this.Recorder.onStart(function (e) {
      _this11.beginVoice();
    });
    //录音结束事件
    this.Recorder.onStop(function (res) {
      clearInterval(_this11.voiceInterval);
      _this11.handleRecorder(res);
    });

    //音频停止事件
    this.Audio.onStop(function (e) {
      _this11.closeAnmition();
    });

    //音频播放结束事件
    this.Audio.onEnded(function (e) {
      _this11.closeAnmition();
    });
  },
  onReady: function onReady() {
    var _this12 = this;
    //自定义返回按钮 因为原生的返回按钮不可阻止默认事件

    uni.setNavigationBarTitle({
      title: this.fromUserInfo.fromUserName
    });
    // this.joinData();
    uni.getSystemInfo({
      success: function success(res) {
        _this12.imgHeight = res.windowHeight + 'px';
      }
    });
    uni.onKeyboardHeightChange(function (res) {
      if (res.height == 0) {
        _this12.mpInputMargin = false;
      } else {
        _this12.showFunBtn = false;
      }
    });
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 122:
/*!**************************************************************************************************!*\
  !*** D:/仿微信wechat/pages/chat/chat.vue?vue&type=style&index=0&id=bf16e7f4&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&id=bf16e7f4&lang=scss&scoped=true& */ 123);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 123:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/仿微信wechat/pages/chat/chat.vue?vue&type=style&index=0&id=bf16e7f4&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[112,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map