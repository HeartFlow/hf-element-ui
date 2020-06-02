# HearFlow Element UI

[Demo of the UI Kit](https://heartflow.github.io/hf-element-ui)

**v1.2.0**

This project is a Vue application that showcases the Element UI components using the HearFlow theme.

It also provides:
- A custom Element UI theme which follows the HearFlow styles guidelines in `/shared/lib/`.
- A set of Vue components/plugins on top of the existing Element UI ones in `/shared/components` and `/shared/plugins`.

The HearFlow theme and its custom components can be used in your project.

## Install
```shell
npm i -S github:HearFlow/hf-element-ui#v1.2.0
```

## How to import the HearFlow theme and components in your project
```javascript
import Vue from 'vue'

// Import element ui components (see the list of available components below)
import { Button, Select } from 'element-ui'

// (Optional) Import custom element ui component
import ActionButton from 'hf-element-ui/shared/components/ActionButton'
import CollapsibleHeader from 'hf-element-ui/shared/components/CollapsibleHeader'

// Import custom stylesheet for element-ui components which also include the theming colors, HearFlow icons..
import 'hf-element-ui/shared/lib/custom/base.css'

// Register components to Vue
Vue.use(Button)
Vue.use(Select)
Vue.component('action-button', AcionButton)
Vue.component('collapsible-header', CollapsibleHeader)

new Vue({
  el: '#app',
  components: ...
})
```
In order to enable [Element UI on-demand](https://element.eleme.io/#/en-US/component/quickstart#on-demand) import components, you need to install `babel-plugin-components` and edit your `.babelrc`.
```javascript
{
  "plugins": [
    [
      "component", [{
        "libraryName": "element-ui",
        "styleLibraryName": "~node_modules/hf-element-ui/shared/lib" // Use custom HearFlow element ui theme
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

Prefix by `<el-[component-name]>` to use the component in the Vue template

## Custom
You can also use the custom components and plugins by importing directly from `hf-element-ui`

### Components
- **Action Button**
```html
<template>
  <action-button @click="onRefreshButtonClick" ref="refreshButton" />
</template>

<script>
  export default {
    methods: {
      callback() {
        // do something
      },
      onRefreshButtonClick() {
         /* @param {String} eventName -> 'update'
            @param {String} actionType -> 'success' | 'failure' | 'reset' | 'complete'
            @param {Function} callback Function called when spinning animation is finished */
        this.$refs.refreshButton.$emit('update', 'success', callback)
      }
    }
  }
},
</script>
```
- **Collapsible Panel**

Wrapper of `<collapsible>` component to use along with `<collapsible-item>` children.

Don't forget to `import { Collapse } from 'element-ui'` in your code so `babel-plugin-component` can retrieve the appropriate `collapse.css` stylesheet.

- Collapsible Header
- Vertical List
- Column Filter
- Transfer Options

### Plugins
- Retry Notification

## Development

### Run HearFlow UI Kit App
- `npm install`
- `npm run serve`
- Connect to `http://localhost:8080`

### Watch `.scss` files and see style updates reflected on the UI kit app

`npm run dev` will run the UI kit while watching the `*.scss` files under `theme` folder. Any update to those files will trigger a new build and new changes will be reflected to the UI kit.

### How to add a new existing component from ElementUI

Update `element-theme.components` config in `package.json` to list the component's name and add the corresponding `<component_name>.scss` file(s) in `theme/src` folder picked from [ElementUI/theme-chalk](https://github.com/ElementUI/theme-chalk) with the current element-ui version of the project. Component variables in `element-variables.css` might need to be updated too.

Component styles can be modified by updating `<component_name>.scss`.

Run `npm run build:theme` [the forked theme generator](https://github.com/syn-zeta/element-theme) will then compile CSS files under `theme` using `element-variables.css`, output them to `/shared/lib` (consumed by your app) and will include that particular `<component_name>.scss`.

For generating different themes, SCSS variables and mixins defined in `theme/themes.scss` are used in style definitions.

### Upgrading Element UI

New versions of ElementUI include additions/fixes made to its default theme: `theme-chalk`.
Since that default theme has been forked and modified extensively in this project, updating ElementUI
requires careful consideration of changes made to `theme-chalk` before being merged in the copy in this project.

The changes made to `theme-chalk` every release can be tracked by the commit history at
[ElementUI/theme-chalk](https://github.com/ElementUI/theme-chalk/commits/master), and individual hunks can be
copy-pasted manually after ensuring that those changes (possibly new features/bug-fixes) are indeed desirable.

Any updates to files that are not found in this repo are for components that are not used. Those updates can be safely ignored until the corresponding components are included, at which point the .scss file can be copied into this repo from `theme-chalk` for the same version of ElementUI that is found in `package.json`.

For example, if the `Pagination` component needed to be used, and the current Element version in `package.json` was 2.3.3, then `pagination.scss` will be copied into `/theme/src` from `theme-chalk@2.3.3` (https://github.com/ElementUI/theme-chalk/tree/v2.3.3).

After that, `pagination.scss` will have to be maintained and kept up-to-date whenever ElementUI's version is updated in `package.json`.

### Caveats
- If HearFlow icons font files gets re-generated, unicode values for those may possibly been updated too. In that case, css rules replacing existing icons (for example `content: '\e8a4'`) must be changed in the themes as well as in apps if any overriding were applied.


### Release new version
- `npm run build:theme` which will generate the `/shared/lib` folder containing the `.css` files for the Element UI components
- Commit and reate a tag with the release version (e.g `v1.2.0`)
- Update `README.md`, `package.json` and `package-lock.json` release version references
- Push the commit and new tag

### Deploy on Github Pagse
- `npm run deploy` will build the web app into a `dist` folder, regenerate the `css` Element UI themes files and deploy on Github Pages.

### TODO
- Showcase `CollapsiblePanel` component in the UI Kit
- Upgrade `vue-cli` from 3 to 4 as well other packages
