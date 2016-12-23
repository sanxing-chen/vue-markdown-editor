<template>
    <section class="container">
        <h1 id="eHeader"> Markdown Editor </h1>
        <div id="editor">
            <textarea rows="40" :value="message" @input="update"></textarea>
            <div v-html="compiledMarkdown"></div>
        </div>
    </section>
</template>

<script>
    var _ = require('lodash'),
        marked = require('marked');
    export default {
        data() {
            return {
                message: '# Hello Vue.js \n Using by the full-featured __markdown__ parser and compiler [marked](https://github.com/chjj/marked).'
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.message, {
                    sanitize: true
                })
            }
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            },
            update: _.debounce(function (e) {
                this.message = e.target.value
            }, 300)
        }
    }
</script>
<style scoped>
    .container {
        padding: 30px 0;
    }
    #editor {
        margin: 0;
        height: 100%;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        color: #333;
        background-color: #f3f5f6;
    }
    
    textarea,
    #editor div {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }
    
    textarea {
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
    }
    
    code {
        color: #f66;
    }

    #editor div {
        text-align: left;
    }

    #eHeader {
        font-size: 3em;
        color: #bfbfbf;
    }

    textarea::selection {
        background: #d7d4f0 !important;
    }
</style>