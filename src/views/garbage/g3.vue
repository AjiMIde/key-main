<template>
  <div class="g3">
    <div class="md-editor">
    <textarea ref="editor" name="" id="" cols="30" rows="10"
              style="width: 800px;height: 400px;background-color:#aaaaaa;margin: 0 auto"> </textarea>
    </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/keymap/vim.js'

export default {
  name: '',
  components: {},
  data () {
    this.CodeMirrorEditor = null
    return {}
  },
  methods: {},
  mounted () {
    console.log(window.t = this)
    console.log(window.cm = CodeMirror)

    this.CodeMirrorEditor = CodeMirror.fromTextArea(this.$refs.editor, {
      mode: 'markdown',
      theme: 'monokai',
      keyMap: 'vim',
      extraKeys: { 'Ctrl': 'autocomplete' },    // ctrl可以弹出选择项
      lineNumbers: true
    })
  }
}
</script>

<style lang="scss">
  .g3 {
    .md-editor {
      width: 300px;
      .CodeMirror {
        font-family: Microsoft YaHei monospace;
        font-size: 13px;
        line-height: 1.6;
      }

    }
  }
</style>
