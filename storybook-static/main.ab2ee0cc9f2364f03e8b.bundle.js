(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="### Title\n\n```js\nlet a = 25\nconsole.log(a)\n```\n\nother good stuff from here\n"},384:function(module,exports,__webpack_require__){__webpack_require__(385),__webpack_require__(495),module.exports=__webpack_require__(496)},406:function(module,exports){},496:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(63),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(373),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(232),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(92),storybook_readme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(379);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_readme__WEBPACK_IMPORTED_MODULE_4__.addReadme),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo)({header:!1})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_1__.withA11y),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(899),module)}.call(this,__webpack_require__(497)(module))},687:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":331,"./nestedObjectAssign.js":331};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=687},899:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.js":900,"./1-MyInput.stories.js":920,"./2-MyButton.stories.js":919};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=899},900:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"toStorybook",(function(){return toStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(380),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(381),addSourceDecorator=(__webpack_require__(100).withSource,__webpack_require__(100).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { linkTo } from '@storybook/addon-links';\nimport { Welcome } from '@storybook/react/demo';\n\nexport default {\n  title: 'Welcome',\n};\n\nexport const toStorybook = () => <Welcome showApp={linkTo('Button')} />;\n\ntoStorybook.story = {\n  name: 'to Storybook',\n};\n",locationsMap:{"welcome--to-storybook":{startLoc:{col:27,line:9},endLoc:{col:71,line:9},startBody:{col:27,line:9},endBody:{col:71,line:9}}}}},title:"Welcome"};var toStorybook=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})}),{__STORY__:"import React from 'react';\nimport { linkTo } from '@storybook/addon-links';\nimport { Welcome } from '@storybook/react/demo';\n\nexport default {\n  title: 'Welcome',\n};\n\nexport const toStorybook = () => <Welcome showApp={linkTo('Button')} />;\n\ntoStorybook.story = {\n  name: 'to Storybook',\n};\n",__ADDS_MAP__:{"welcome--to-storybook":{startLoc:{col:27,line:9},endLoc:{col:71,line:9},startBody:{col:27,line:9},endBody:{col:71,line:9}}},__MAIN_FILE_LOCATION__:"/0-Welcome.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/Andy/too-old-to-code/practise/my-component-lib/stories",__IDS_TO_FRAMEWORKS__:{}});toStorybook.story={name:"to Storybook"}},919:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(134),prop_types=(__webpack_require__(31),__webpack_require__(38),__webpack_require__(39),__webpack_require__(10)),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(59);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  color: dodgerblue;\n  background-color: orange;\n  &:hover {\n    color: green;\n    background-color: gold;\n  }\n  ","\n  ","\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"]);return _templateObject=function(){return data},data}var theme={primary:"\n    color: dodgerblue;\n    background-color: orange;\n    &:hover {\n      color: green;\n      background-color: blue;\n    }\n  ",secondary:"\n    color: dodgerblue;\n    background-color: orange;\n    &:hover {\n      color: green;\n      background-color: gold;\n    }\n  ",default:"\n    color: dodgerblue;\n    background-color: orange;\n    &:hover {\n      color: green;\n      background-color: gold;\n    }\n  "},Button=styled_components_browser_esm.c.button(_templateObject(),(function(props){return props.primary&&props.theme.primary||props.secondary&&props.theme.secondary||props.theme.default}),(function(props){return props.disabled&&"\n      opacity: 0.25;\n      cursor: not-allowed;\n      &:hover {\n        color: inherit;\n        background-color: inherit;\n      }\n    "})),MyButton=function(props){return react_default.a.createElement(styled_components_browser_esm.a,{theme:theme},react_default.a.createElement(Button,{primary:!0,disabled:!0},props.children))};function _templateObject5(){var data=buttons_taggedTemplateLiteral(["\n  color: dodgerblue;\n  background-color: orange;\n  &:hover {\n    color: green;\n    background-color: gold;\n  }\n  border: 2px solid palevioletred;\n"]);return _templateObject5=function(){return data},data}function _templateObject4(){var data=buttons_taggedTemplateLiteral(["\n  color: white;\n  background-color: black;\n  &:hover {\n    color: green;\n    background-color: gold;\n  }\n  border: 2px solid palevioletred;\n"]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=buttons_taggedTemplateLiteral(["\n  color: dodgerblue;\n  background-color: orange;\n  &:hover {\n    color: green;\n    background-color: gold;\n  }\n  border: 2px solid palevioletred;\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=buttons_taggedTemplateLiteral(["\n      opacity: 0.5;\n    "]);return _templateObject2=function(){return data},data}function buttons_templateObject(){var data=buttons_taggedTemplateLiteral(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  ","\n"]);return buttons_templateObject=function(){return data},data}function buttons_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}MyButton.displayName="MyButton",MyButton.propTypes={children:prop_types_default.a.oneOfType([prop_types_default.a.array,prop_types_default.a.object,prop_types_default.a.string])},MyButton.__docgenInfo={description:"",methods:[],displayName:"MyButton",props:{children:{type:{name:"union",value:[{name:"array"},{name:"object"},{name:"string"}]},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Button.js"]={name:"MyButton",docgenInfo:MyButton.__docgenInfo,path:"src/atoms/Button.js"});var buttons_Button=styled_components_browser_esm.c.button(buttons_templateObject(),(function(props){return props.disabled&&Object(styled_components_browser_esm.b)(_templateObject2())})),PrimaryButton=Object(styled_components_browser_esm.c)(buttons_Button)(_templateObject3()),SecondaryButton=Object(styled_components_browser_esm.c)(buttons_Button)(_templateObject4()),addon_knobs_dist=(Object(styled_components_browser_esm.c)(buttons_Button)(_templateObject5()),__webpack_require__(92)),client=__webpack_require__(63),README=__webpack_require__(177);__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"emoji",(function(){return emoji}));__webpack_require__(100).withSource;var __SOURCE_PREFIX__="/Users/Andy/too-old-to-code/practise/my-component-lib/stories",__STORY__="import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { MyButton, RedButton } from '../src/atoms/Button';\nimport { PrimaryButton, SecondaryButton } from '../src/atoms/buttons';\nimport { text, boolean, number } from '@storybook/addon-knobs';\nimport { addParameters } from '@storybook/react';\nimport readme from '../README.md';\n\nexport default {\n  title: 'Button',\n};\n\naddParameters({\n  readme: {\n    // You can set the global code theme here.\n    codeTheme: 'duotone-sea',\n    content: readme,\n    sidebar: readme,\n\n    // You can exclude prop tables globally here.\n    // excludePropTables: [ButtonWithPropTypes],\n  },\n});\n\nexport const Text = () => (\n  <MyButton onClick={action('clicked')}>{text('Label', 'Hello Storybook')}</MyButton>\n);\n\nexport const Primary = () => (\n  <PrimaryButton disabled onClick={() => console.log('clicked')}>\n    {text('Label', 'Hello Storybook')}\n  </PrimaryButton>\n);\n\nexport const Secondary = () => (\n  <SecondaryButton disabled onClick={action('clicked')}>\n    {text('Label', 'Hello Storybook')}\n  </SecondaryButton>\n);\n\nexport const emoji = () => (\n  <RedButton onClick={action('clicked')}>\n    <span role=\"img\" aria-label=\"so cool\">\n      😀 😎 👍 💯\n    </span>\n  </RedButton>\n);\n\nText.story = {\n  name: 'MyButton',\n};\n\nemoji.story = {\n  name: 'RedButton',\n};\n",__ADDS_MAP__={"button--text":{startLoc:{col:20,line:25},endLoc:{col:1,line:27},startBody:{col:20,line:25},endBody:{col:1,line:27}},"button--primary":{startLoc:{col:23,line:29},endLoc:{col:1,line:33},startBody:{col:23,line:29},endBody:{col:1,line:33}},"button--secondary":{startLoc:{col:25,line:35},endLoc:{col:1,line:39},startBody:{col:25,line:35},endBody:{col:1,line:39}},"button--emoji":{startLoc:{col:21,line:41},endLoc:{col:1,line:47},startBody:{col:21,line:41},endBody:{col:1,line:47}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},addSourceDecorator=__webpack_require__(100).addSource;__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { MyButton, RedButton } from '../src/atoms/Button';\nimport { PrimaryButton, SecondaryButton } from '../src/atoms/buttons';\nimport { text, boolean, number } from '@storybook/addon-knobs';\nimport { addParameters } from '@storybook/react';\nimport readme from '../README.md';\n\nexport default {\n  title: 'Button',\n};\n\naddParameters({\n  readme: {\n    // You can set the global code theme here.\n    codeTheme: 'duotone-sea',\n    content: readme,\n    sidebar: readme,\n\n    // You can exclude prop tables globally here.\n    // excludePropTables: [ButtonWithPropTypes],\n  },\n});\n\nexport const Text = () => (\n  <MyButton onClick={action('clicked')}>{text('Label', 'Hello Storybook')}</MyButton>\n);\n\nexport const Primary = () => (\n  <PrimaryButton disabled onClick={() => console.log('clicked')}>\n    {text('Label', 'Hello Storybook')}\n  </PrimaryButton>\n);\n\nexport const Secondary = () => (\n  <SecondaryButton disabled onClick={action('clicked')}>\n    {text('Label', 'Hello Storybook')}\n  </SecondaryButton>\n);\n\nexport const emoji = () => (\n  <RedButton onClick={action('clicked')}>\n    <span role=\"img\" aria-label=\"so cool\">\n      😀 😎 👍 💯\n    </span>\n  </RedButton>\n);\n\nText.story = {\n  name: 'MyButton',\n};\n\nemoji.story = {\n  name: 'RedButton',\n};\n",locationsMap:{"button--text":{startLoc:{col:20,line:25},endLoc:{col:1,line:27},startBody:{col:20,line:25},endBody:{col:1,line:27}},"button--primary":{startLoc:{col:23,line:29},endLoc:{col:1,line:33},startBody:{col:23,line:29},endBody:{col:1,line:33}},"button--secondary":{startLoc:{col:25,line:35},endLoc:{col:1,line:39},startBody:{col:25,line:35},endBody:{col:1,line:39}},"button--emoji":{startLoc:{col:21,line:41},endLoc:{col:1,line:47},startBody:{col:21,line:41},endBody:{col:1,line:47}}}}},title:"Button"};Object(client.addParameters)({readme:{codeTheme:"duotone-sea",content:README.a,sidebar:README.a}});var Text=addSourceDecorator((function(){return react_default.a.createElement(MyButton,{onClick:Object(dist.action)("clicked")},Object(addon_knobs_dist.text)("Label","Hello Storybook"))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/2-MyButton.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Primary=addSourceDecorator((function(){return react_default.a.createElement(PrimaryButton,{disabled:!0,onClick:function onClick(){return console.log("clicked")}},Object(addon_knobs_dist.text)("Label","Hello Storybook"))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/2-MyButton.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Secondary=addSourceDecorator((function(){return react_default.a.createElement(SecondaryButton,{disabled:!0,onClick:Object(dist.action)("clicked")},Object(addon_knobs_dist.text)("Label","Hello Storybook"))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/2-MyButton.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref=react_default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"),emoji=addSourceDecorator((function(){return react_default.a.createElement(void 0,{onClick:Object(dist.action)("clicked")},_ref)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/2-MyButton.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});Text.story={name:"MyButton"},emoji.story={name:"RedButton"}},920:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react);__webpack_require__(134),__webpack_require__(31),__webpack_require__(38),__webpack_require__(39);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  font-size: 40px;\n"]);return _templateObject=function(){return data},data}var TextInput=__webpack_require__(59).c.input(_templateObject());__webpack_require__(92),__webpack_require__(63),__webpack_require__(177);__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"NumberInput",(function(){return NumberInput}));__webpack_require__(100).withSource;var __SOURCE_PREFIX__="/Users/Andy/too-old-to-code/practise/my-component-lib/stories",__STORY__="import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { TextInput } from '../src/atoms/inputs';\nimport { text, boolean, number } from '@storybook/addon-knobs';\nimport { addParameters } from '@storybook/react';\nimport readme from '../README.md';\n\nexport default {\n  title: 'Input',\n};\n\nexport const Text = () => <TextInput type=\"text\" maxLength=\"4\" />;\n\nexport const NumberInput = () => <TextInput type=\"number\" max=\"4\" />;\n",__ADDS_MAP__={"input--text":{startLoc:{col:20,line:12},endLoc:{col:65,line:12},startBody:{col:20,line:12},endBody:{col:65,line:12}},"input--number-input":{startLoc:{col:27,line:14},endLoc:{col:68,line:14},startBody:{col:27,line:14},endBody:{col:68,line:14}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},addSourceDecorator=__webpack_require__(100).addSource,_ref=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { TextInput } from '../src/atoms/inputs';\nimport { text, boolean, number } from '@storybook/addon-knobs';\nimport { addParameters } from '@storybook/react';\nimport readme from '../README.md';\n\nexport default {\n  title: 'Input',\n};\n\nexport const Text = () => <TextInput type=\"text\" maxLength=\"4\" />;\n\nexport const NumberInput = () => <TextInput type=\"number\" max=\"4\" />;\n",locationsMap:{"input--text":{startLoc:{col:20,line:12},endLoc:{col:65,line:12},startBody:{col:20,line:12},endBody:{col:65,line:12}},"input--number-input":{startLoc:{col:27,line:14},endLoc:{col:68,line:14},startBody:{col:27,line:14},endBody:{col:68,line:14}}}}},title:"Input"},react_default.a.createElement(TextInput,{type:"text",maxLength:"4"})),Text=addSourceDecorator((function(){return _ref}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-MyInput.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref2=react_default.a.createElement(TextInput,{type:"number",max:"4"}),NumberInput=addSourceDecorator((function(){return _ref2}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-MyInput.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})}},[[384,1,2]]]);
//# sourceMappingURL=main.ab2ee0cc9f2364f03e8b.bundle.js.map