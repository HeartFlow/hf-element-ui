# Heartflow Element UI theme

[Demo of the UI kit here](https://heartflow.github.io/hf-element-ui)

## Install
```shell
npm i -S github:HeartFlow/hf-element-ui
```

You can view a project example in `/kit` folder.

## Getting started
```javascript
import Vue from 'vue'

import { registerElementUIComponents } from 'hf-element-ui'
import 'hf-element-ui/lib/custom/base.css' // Custom css files containing styles for fonts, themes colors, etc..

// Helper function allows registering available components from Element UI
registerElementUIComponents()

new Vue({
  el: '#app',
  components: ...
})
```
Edit .babelrc (`babel-plugin-component` must be installed)
```javascript
{
  "plugins": [
    [
      "component", [{
        "libraryName": "element-ui",
        "styleLibraryName": "~node_modules/hf-element-ui/lib" // Allows Element-UI to use Heartflow custom theme
      }]
    ],
  ]
}
```
## Available Element UI components
Refer to [Element UI components documentation](http://element.eleme.io/2.3/#/en-US/component/installation) for more information

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

## Custom Heartflow components

### Action Button
Usage
```html
<template>
  <hf-action-button
    icon="icon-standard-refresh"
    @click="onRefreshButtonClick"
    ref="refreshButton">
  </hf-action-button>
</template>

<script>
import { ActionButton } from 'hf-element-ui'

methods: {
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
},
components: {
  'hf-action-button': ActionButton
}
</script>
```


### Collapsible

### VerticalList

### ColumnFilter

### TransferOption

## Plugins

## Developement

### Run Heartflow UI Kit
- Clone the project
- From the project root repository, run `npm install`. All NPM dependencies will be added in `node_modules` and it will also generate the Heartflow css theme under `lib` folder using `element-theme` generator.
- Run `npm run kit`
- Connect to `http://localhost:8080` to access the UI Kit

### Maintaining CSS
CSS styles are located in `lib` folder.

- If adding a new component from ElementUI, update `element-theme.components` config in `package.json` to list the component's name. Import and init the component in `registerElementUIComponents()` in `./index.js` and add the corresponding `<component_name>.scss` file(s) in `theme/src` folder picked from [ElementUI/theme-chalk](https://github.com/ElementUI/theme-chalk) with the current element-ui version of the project. Component variables in `element-variables.css` might need to be updated too.
- `npm run build` runs [the forked theme generator](https://github.com/syn-zeta/element-theme). It will compile CSS files under `theme` using `element-variables.css` and output them to `lib` that will be consumed your application. It will include that particular component's CSS.
- For generating different themes, SCSS variables and mixins defined in `theme/themes.scss` are used in style definitions.

### Updating ElementUI:

New versions of ElementUI include additions/fixes made to its default theme: `theme-chalk`.
Since that default theme has been forked and modified extensively in this project, updating ElementUI
requires careful consideration of changes made to `theme-chalk` before being merged in the copy in this project.

The changes made to `theme-chalk` every release can be tracked by the commit history at
[ElementUI/theme-chalk](https://github.com/ElementUI/theme-chalk/commits/master), and individual hunks can be
copy-pasted manually after ensuring that those changes (possibly new features/bug-fixes) are indeed desirable.

Any updates to files that are not found in this repo are for components that are not used. Those updates can be safely
ignored until the corresponding components are included, at which point the .scss file can be copied into this repo from
theme-chalk for the same version of ElementUI that is found in package.json. For example, if the Pagination component
needed to be used, and the current Element version in package.json was 2.3.3, then pagination.scss will be copied into
theme-in/src/ from theme-chalk@2.3.3 (https://github.com/ElementUI/theme-chalk/tree/v2.3.3). After that, pagination.scss
will have to be maintained and kept up-to-date whenever ElementUI's version is updated in package.json.


### Watch mode with UI Kit

`npm run watch` will allow to run the UI kit while watching the `*.scss` files under `theme` folder. Any update to those files will trigger a new build and new changes will be reflected to the UI kit. Make sure that `lib` containing the output generated css exists (created by `npm run build`)
