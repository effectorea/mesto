(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._selector=n,this._id=e._id,this._ownerId=e.owner._id,this._userId=r,this._handleCardClick=o,this._handleLikeClick=i,this._handleDelete=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0);return this._heartButton=e.querySelector(".element__heart"),this._counter=e.querySelector(".element__counter"),e}},{key:"deleteCardElement",value:function(){this._template.remove(),this._template=null}},{key:"setLikes",value:function(e){this._likes=e,this._counter.textContent=this._likes.length,this._updateHeartView()}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){t._id,e._ownerId}))}},{key:"_updateHeartView",value:function(){this.isLiked()?this._elementHeart.classList.add("element__heart_active"):this._elementHeart.classList.remove("element__heart_active")}},{key:"_setEventListeners",value:function(){var e=this;this._elementHeart=this._template.querySelector(".element__heart"),this._elementHeart.addEventListener("click",(function(){e._handleLikeClick(e)})),this._trasher=this._template.querySelector(".element__trasher"),this._ownerId!==this._userId?this._trasher.classList.remove("element__trasher_disabled"):this._trasher.classList.add("element__trasher_disabled"),this._trasher.addEventListener("click",(function(){e._handleDelete(e)})),this._template.querySelector(".element__image").addEventListener("click",(function(){var t={link:e._link,name:e._name};e._handleCardClick(t)}))}},{key:"generate",value:function(){this._template=this._getTemplate(),this._counter.textContent=this._likes.length,this._setEventListeners(),this._updateHeartView();var e=this._template.querySelector(".element__image");return e.src=this._link,this._template.querySelector(".element__title").textContent=this._name,e.alt=this._name,this._template}},{key:"getId",value:function(){return this._id}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inactiveButton=this._config.inactiveButtonClass,this._inputError=this._config.inputErrorClass,this._error=this._config.errorClass,this._inputs=this._form.querySelectorAll(this._config.inputSelector),this._submitButton=this._form.querySelector(this._config.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent=e.validationMessage,e.classList.add(this._inputError),t.classList.add(this._error)}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._inputError),t.classList.remove(this._error)}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputs).some((function(e){return!e.validity.valid}))}},{key:"toggleButtonError",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButton),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButton),this._submitButton.disabled=!1)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_setInputListeners",value:function(){var e=this;this.toggleButtonError(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonError()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}},{key:"clearValidation",value:function(){var e=this;this._inputs.forEach((function(t){e._hideError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup__close")&&e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageBig=t._popup.querySelector(".popup__image"),t._imageTitle=t._popup.querySelector(".popup__place-name"),t}return t=a,(n=[{key:"open",value:function(e){this._imageBig.src=e.link,this._imageTitle.textContent=e.name,this._imageBig.alt=e.name,l(_(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._config=n,r._formSubmitHandler=t,r._form=r._popup.querySelector(r._config.formSelector),r._inputs=r._form.querySelectorAll(r._config.inputSelector),r._submitButton=r._form.querySelector(r._config.submitButtonSelector),r}return t=a,(n=[{key:"open",value:function(e){m(S(a.prototype),"open",this).call(this),this._cardElement=e}},{key:"close",value:function(){m(S(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;m(S(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._formSubmitHandler(e._getInputValues()),e._formSubmitHandler(e._cardElement)}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._info=t,this._name=document.querySelector(this._info.nameSelector),this._mission=document.querySelector(this._info.missionSelector),this._inputName=document.querySelector(this._info.inputNameSelector),this._inputMission=document.querySelector(this._info.inputMissionSelector),this._avatar=document.querySelector(this._info.avatarSelector),this._inputAvatar=document.querySelector(this._info.inputAvatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._mission.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._mission.textContent=e.about}},{key:"renderUserInfo",value:function(){this._inputName.value=this._name.textContent,this._inputMission.value=this._mission.textContent}},{key:"getAvatar",value:function(){return{avatar:this._avatar.src}}},{key:"setAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"getUserId",value:function(){return this._id}},{key:"setUserId",value:function(e){this._id=e}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var L=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(P)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(P)}},{key:"setInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.heading,about:e.mission})}).then(P)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(P)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(P)}},{key:"setCardLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(P)}},{key:"removeCardLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(P)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(P)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function R(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._formSubmitHandler=t,r._config=n,r._form=r._popup.querySelector(r._config.formSelector),r}return t=a,(n=[{key:"open",value:function(e){I(x(a.prototype),"open",this).call(this),this._cardElement=e}},{key:"setEventListeners",value:function(){var e=this;I(x(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmitHandler(e._cardElement)}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},U=(document.querySelector(".elements"),document.querySelector(".profile__edit-button")),H=document.querySelector(".profile__add-button"),D=document.querySelector("#profileEditPopup"),N=D.querySelector(".popup__save-btn"),M=D.querySelector(".popup__form"),J=document.querySelector("#articleAddPopup"),G=J.querySelector(".popup__save-btn"),z=J.querySelector(".popup__form"),$=(J.querySelector("#place"),J.querySelector("#image"),document.querySelector("#articleSave-btn"),document.querySelector("#changeAvatarPopup")),F=$.querySelector(".popup__save-btn"),K=$.querySelector(".popup__form"),Q=document.querySelector(".profile_wrapper"),W=document.querySelector("#confirmationPopup").querySelector(".popup__form");function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new L({url:"https://mesto.nomoreparties.co/v1/cohort-35",headers:{authorization:"396aec5a-cf08-4342-be3f-c1c3fdb65106","Content-Type":"application/json"}}),Z=new r(V,M);Z.enableValidation();var ee=new r(V,z);ee.enableValidation();var te=new r(V,K);te.enableValidation(),new r(V,W).enableValidation();var ne=new O({nameSelector:".profile__title",missionSelector:".profile__subtitle",inputNameSelector:".popup__input_add_name",inputMissionSelector:".popup__input_add_mission",avatarSelector:".profile__avatar",inputAvatarSelector:".popup__input_change_avatar"}),re=new w("#profileEditPopup",(function(e){N.textContent="Сохранение...",Y.setInfo(e).then((function(e){ne.setUserInfo({name:e.name,about:e.about}),re.close()})).catch((function(e){console.log("Ошибка при попытке изменить данные пользователя ".concat(e))})).finally((function(){N.textContent="Сохранить"}))}),V);re.setEventListeners();var oe=new w("#changeAvatarPopup",(function(e){F.textContent="Сохранение...",Y.setUserAvatar(e).then((function(e){ne.setAvatar({avatar:e.avatar}),oe.close()})).catch((function(e){console.log("Нельзя загрузить аватар ".concat(e))})).finally((function(){F.textContent="Сохранить"}))}),V);oe.setEventListeners();var ie=new A("#confirmationPopup",(function(e){Y.deleteCard(e.getId()).then((function(){console.log(e.getId()),e.deleteCardElement(),ie.close()})).catch((function(e){console.log("Нельзя удалить карточку ".concat(e))}))}),V);function ae(e){ie.open(e)}ie.setEventListeners(),ne.getUserId();var ue=new d("#imageBigPopup");ue.setEventListeners();var ce=function(e){return ue.open(e)},se=function(e){e.isLiked()?Y.removeCardLike(e._id).then((function(t){return e.setLikes(t.likes)})):Y.setCardLike(e._id).then((function(t){return e.setLikes(t.likes)}))},le=new w("#articleAddPopup",(function(e){var t={name:e.name,link:e.link};G.textContent="Создание...",Y.addCard(t).then((function(e){fe.addItemPrepend(pe(e)),ee.toggleButtonError(),le.close()})).catch((function(e){console.log("Невозможно создать новую карточку ".concat(e))})).finally((function(){G.textContent="Создать"}))}),V);le.setEventListeners();var fe=new i({renderer:function(e){return t=e,void fe.addItem(pe(t));var t}},".elements");function pe(e){return new t(e,".item_template",ne.getUserId(),ce,se,ae).generate()}Promise.all([Y.getCards(),Y.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];fe.renderItems(o),ne.setUserInfo(i),ne.setAvatar(i),ne.setUserId(i),console.log("Данные карточек",o),console.log("Данные полбзователя",i)})),H.addEventListener("click",(function(){le.open(),ee.clearValidation(),ee.toggleButtonError()})),U.addEventListener("click",(function(){ne.renderUserInfo(),Z.toggleButtonError(),Z.clearValidation(),re.open()})),Q.addEventListener("click",(function(){te.toggleButtonError(),te.clearValidation(),oe.open()}))})();