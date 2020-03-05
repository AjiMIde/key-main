<template>
  <div class="edit-book">
    <div class="md-editor">
      <textarea ref="editor" name="" id="" cols="30" rows="10"></textarea>
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
  methods: {
    setValue (content) {
      this.CodeMirrorEditor.setValue(content)
    },
    getValue () {
      return this.CodeMirrorEditor.getValue()
    }
  },
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
    this.CodeMirrorEditor.setValue('...')
  }
}
</script>

<style lang="scss">
  .edit-book {
    height: 100%;
    .md-editor {
      height: 100%;
      .CodeMirror {
        height: 100%;
        font-family: Microsoft YaHei monospace;
        font-size: 13px;
        line-height: 1.6;
      }

    }
  }
</style>
