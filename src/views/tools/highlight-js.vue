<template>
  <div class="highlight-js" style="text-align: left;">
    <div class="hlj-content" ref="hljsContent">
      <pre>
        <code class="javascript">
          export default {
            name: 'hljs',
            Func () {
              console.info(this.name)
            }
          }
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('javascript', javascript)

export default {
  mounted () {
    hljs.initHighlightingOnLoad()
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
