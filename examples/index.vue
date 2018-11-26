<template>
  <div>
    <!-- use v-model control value -->
    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>

    <!-- use event control value -->
    <markdown-editor :value="content" @input="handleInput"></markdown-editor>

    <!-- add config -->
    <markdown-editor :configs="configs"></markdown-editor>

    <!-- disable auto init -->
    <markdown-editor :autoinit="false"></markdown-editor>
  </div>
</template>

<script>
  import markdownEditor from 'vue-inscrybmde/src/markdown-editor'

  // Base example
  export default {
    components: {
      markdownEditor
    },
    data () {
      return {
        content: '',
        configs: {
          spellChecker: false // disable spell check
        }
      }
    }
  }

  // Complete example
  export default {
    components: {
      markdownEditor
    },
    data () {
      return {
        content: '',
        configs: {
          status: false, // disable the status bar at the bottom
          spellChecker: false // disable spell check
        }
      }
    },
    computed: {
      inscrybmde () {
        return this.$refs.markdownEditor.inscrybmde
      }
    },
    mounted () {
      console.log(this.inscrybmde)
      this.inscrybmde.togglePreview()

      // 'change' envent has bound, via @input attache an event listener
      // You can attache events in this [list](https://codemirror.net/doc/manual.html#events) yourself if necessary
      this.inscrybmde.codemirror.on('beforeChange', (instance, changeObj) => {
        // do some things
      })

      // remove SimpleMDE, when component destroy will invoke
      this.inscrybmde = null

      // some useful methods
      this.$refs.markdownEditor.initialize() // init
      this.inscrybmde.toTextArea()
      this.inscrybmde.isPreviewActive() // returns boolean
      this.inscrybmde.isSideBySideActive() // returns boolean
      this.inscrybmde.isFullscreenActive() // returns boolean
      this.inscrybmde.clearAutosavedValue() // no returned value
      this.inscrybmde.markdown(this.content) // returns parsed html
      this.inscrybmde.codemirror.refresh() // refresh codemirror
    },
    methods: {
      handleInput () {
        // do some things
      }
    }
  }
</script>

<style>
  @import '~inscrybmde/dist/inscrybmde.min.css';
</style>
