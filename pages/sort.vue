<template>
    <div id="flip-list-demo" class="demo">
        <h1 id="eHeader"> Bubble Sort</h1>
        <button v-on:click="shuffle">Shuffle</button>
        <button @click="autoSort" :disabled="sorted">{{ onAutoSort ? 'Sorting' : 'Begin autoSort'}}</button>
        <button v-on:click="sort" :disabled="sorted">Sort once</button><span>i = {{ sorted? '--' : i }}</span><span>j = {{ sorted? '--' : j }} </span>
        <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" v-bind:key="item">
                {{ item }}
            </li>
        </transition-group>
    </div>
</template>
<script>
    var _ = require('lodash')
    export default {
        layout: 'app',
        data() {
            return {
                items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                i: 0,
                j: 8,
                sorted: true,
                onAutoSort: false
            }
        },
        created() {
            var self = this
            setInterval(function () {
                if (self.onAutoSort === true && self.sorted === false) self.sort()
            }, 500)
        },
        methods: {
            sort: function () {
                if (this.i >= 8) {
                    this.sorted = true
                    this.onAutoSort = false
                    return
                }
                for (; this.i < 8;) {
                    for (; this.j > this.i;) {
                        if (this.items[this.j - 1] > this.items[this.j]) {
                            let t = this.items[this.j]
                            this.items.splice(this.j, 1, this.items[this.j - 1])
                            this.items.splice(this.j - 1, 1, t)
                        }
                        this.j--
                            if (this.j == this.i) {
                                this.j = 8
                                this.i++
                            }
                        return;
                    }
                }
            },
            shuffle: function () {
                this.items = _.shuffle(this.items)
                this.sorted = false;
                this.i = 0
                this.j = 8
            },
            autoSort: function () {
                if (!this.sorted)
                    this.onAutoSort = !this.onAutoSort;
            }
        }
    }
</script>
<style>
    #eHeader {
        font-size: 2em;
        color: #bfbfbf;
    }
    
    #flip-list-demo {
        width: 20vw;
        margin: 20vh 40vw;
        font-size: 2em;
    }
    
    button {
        width: 8em;
        height: 3em;
        margin: 20px 8px;
        border: none;
        border-radius: 10px;
        background: #42b983;
        color: white;
    }
    
    button[disabled] {
        background: #f66;
    }
    
    span {
        width: 10em;
        margin: 0 2em;
        height: 20em;
    }
    
    ul {
        margin: auto
    }
    
    .flip-list-move {
        transition: transform 1s;
    }
</style>