<template>
  <div class="tools-code-mirror">
    <div class="tcm-body" ref="tcmBody"></div>
  </div>
</template>

<script>
import CM from 'codemirror'
import 'codemirror/theme/ambiance.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'

export default {
  name: 'code-mirror',
  mounted () {
    console.log(CM)
    CM(this.$refs.tcmBody, {
      value: `function foo () {
        window.alert('foo')
      }
      `,
      mode: 'javascript'
    })
  }
}
</script>

<style lang="scss">
  .tools-code-mirror {
    text-align: left;
    .tcm-body {
      width: 300px;
      height: 100px;
    }
  }
</style>
