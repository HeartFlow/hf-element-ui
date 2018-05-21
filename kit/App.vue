<template>
<div>
  <div class="ui-kit-header">
    <h2>
      Heartflow UI Components based on <a target="_blank" href="https://heartflow.invisionapp.com/d/main#/projects">style guidelines</a>
    </h2>
    <el-dropdown trigger="click" @command="handleCommand">
      <span>{{ theme.selected }}<i class="el-icon-caret-bottom el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, i) in theme.options" :command="item" :key="i">{{ item }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
// Find a way to import from scss themes file
const themes = [
  'theme-default',
  'theme-black',
  'theme-gray',
  'theme-white'
]
document.body.className = themes.length && themes[0]

export default {
  data() {
    return {
      theme: {
        selected: themes.length && themes[0],
        options: themes
      },
    }
  },
  methods: {
    handleCommand(command) {
      this.theme.selected = command
      document.body.className = command
    },
  },
}
</script>
