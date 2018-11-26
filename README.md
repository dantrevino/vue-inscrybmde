# Vue-InscrybMDE
> Markdown Editor component for Vue.js. Support only vue2.x.

[![npm package](https://img.shields.io/npm/v/vue-inscrybmde.svg)](https://npmjs.org/package/vue-inscrybmde)
[![npm downloads](http://img.shields.io/npm/dm/vue-inscrybmde.svg)](https://npmjs.org/package/vue-inscrybmde)

# Use Setup

> Vue1.x is not supported

## Install

``` bash
npm install vue-inscrybmde --save
```

## Use

* Internal reference in a single component

``` vue
<template>
  <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
</template>

<script>
  import markdownEditor from 'vue-inscrybmde/src/markdown-editor'

  export default {
    components: {
      markdownEditor
    }
  }
</script>

<style>
  @import '~inscrybmde/dist/inscrybmde.min.css';
</style>
```

* Global reference

``` javascript
import Vue from 'vue'
import VueSimplemde from 'vue-inscrybmde'
import 'inscrybmde/dist/inscrybmde.min.css'

Vue.use(VueSimplemde)
```

## Props
| property | type | default | describe |
| ----| ----- | ----- | ---- |
| value | String | None | Initial value, v-model binding can be used |
| name | String | None | The name of the control. |
| preview-class | String | None | Custom preview style class |
| autoinit | Boolean | true | Automatic initialization |
| highlight | Boolean | false | Is it open to highlight |
| sanitize | Boolean | false | HTML that does not render input after opening |
| configs | Object | {} | [SimpleMDE's config](#configuration) |

## Markdown style
> e.g. use Github's markdown style

[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

### install
``` bash
$ npm install --save github-markdown-css
```

### use
``` vue
<template>
  <markdown-editor preview-class="markdown-body"></markdown-editor>
</template>

<style>
  @import '~inscrybmde/dist/inscrybmde.min.css';
  @import '~github-markdown-css';
</style>
```

## Highlight

### install
```
$ npm install --save highlight.js
```

### use
``` vue
<template>
  <markdown-editor :highlight="true"></markdown-editor>
</template>

<script>
  import hljs from 'highlight.js';

  window.hljs = hljs;
</script>

<style>
  @import '~inscrybmde/dist/inscrybmde.min.css';
  @import '~highlight.js/styles/atom-one-dark.css';
  /* Highlight theme list: https://github.com/isagalaev/highlight.js/tree/master/src/styles */
</style>
```

## Editor Theme ([inscrybmde-theme-base](https://github.com/xcatliu/inscrybmde-theme-base/wiki/List-of-themes))
> e.g. use inscrybmde-theme-base theme

### install
```
$ npm install --save inscrybmde-theme-base
```

### use
``` vue
<style>
  @import '~inscrybmde-theme-base/dist/inscrybmde-theme-base.min.css';
  /* no need import inscrybmde.min.css */
</style>
```

## Configuration
> Configuration is based on InscrybMDE [config](https://github.com/Inscryb/inscryb-markdown-editor)

* [中文](doc/configuration_zh.md)
* [English](doc/configuration_en.md)

## Examples

* [Simple Example](./examples/index.vue)
* [Nuxt Example](./examples/nuxt)
* [Demo Page](https://f-loat.github.io/vue-inscrybmde/)
* [Demo Source](https://github.com/F-loat/vue-inscrybmde/tree/gh-pages)

## Dependencies

* [SimpleMDE](https://github.com/sparksuite/inscrybmde-markdown-editor)

## Licence

vue-inscrybmde is open source and released under the MIT Licence.

Copyright (c) 2018 F-loat
