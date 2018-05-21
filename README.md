# Heartflow Element UI

## Install
```shell
npm install github:MrLyfing/hf-element-ui -S
```

## Prerequisites
- Webpack (Please refer to this [configuration](https://github.com/MrLyfing/hf-element-ui/blob/master/webpack.config.js))
  - babel-loader
  - css-loader
  - file-loader (configured for loading fonts)
  - vue-loader
  - [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)

## Getting started
Install `hf-element-ui` and import `base.css`
``` javascript
import Vue from 'vue'
import HfElementUI from 'hf-element-ui'

import 'hf-element-ui/lib/custom/base.css'

import App from './components/App'

Vue.use(HfElementUI)

new Vue({
  el: '#app',
  components: { App }
})
```
Edit .babelrc (`babel-plugin-component` must be installed)
```javascript
{
  "plugins": [
    [
      "component", [{
        "libraryName": "element-ui",
        "styleLibraryName": "~node_modules/hf-element-ui/lib"
      }]
    ],
  ]
}
```
## Available Element UI components
Refer to [Element UI components documentation](http://element.eleme.io/#/en-US/component/installation) for more information
- autocomplete
- breadcrumb
- breadcrumb-item
- button
- checkbox
- checkbox-group
- col
- collapse
- collapse-item
- date-picker
- dialog
- dropdown
- dropdown-item
- dropdown-menu
- form
- form-item
- input
- input-number
- message
- notification
- option
- option-group
- popover
- radio
- radio-button
- radio-group
- row
- select
- spinner
- switch
- table
- table-column
- tooltip
- transfer

Notes: Prefix by `<el-[component-name]>` to use the component in the HTML template

## Custom components

### Action Button
Name: `hf-action-button`

Usage
```html
<hf-action-button 
  icon="icon-standard-refresh" 
  @click="onRefreshButtonClick"
  ref="refreshButton">
</hf-action-button>
```

```javascript
onRefreshButtonClick() {
  setTimeout(() => {
    /*
       refreshButton.$emit([eventName], [actionType], [callback])
       @param {String} eventName -> 'update'
       @param {String} actionType -> 'success' | 'failure' | 'reset' | 'complete'
       @param {Function} callback Function called when spinning animation is finished
    */
    this.$refs.refreshButton.$emit('update', 'success', () => {
      // Do something
    })
  }, 200)
}
```


### Collapsible

### VerticalList

### ColumnFilter

### TransferOption

## Directives
In progress..
## Plugins
In progress..

## Developement

### Run Heartflow UI Kit
- From the project root repository, run `npm install`. It will add all NPM dependencies in `node_modules` for the kit and will also generate the Heartflow theme css stylesheets in `./lib` folder
- Run `npm run kit`
- Connect to `http://localhost:8080` to access the UI Kit

### Add/Modify components style


### Watch mode


###

## Links

