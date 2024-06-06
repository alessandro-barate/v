<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'SearchComponent',
    components: {
       
    },

    data(){
        return {
            store,
            title: '',
        };
    },

    methods: {
        show(){
            //console.log(this.title);
        }
    },

    
};
</script>

<template>
    <div class="search-section">
        <input type="text" placeholder="Cerca qui il film" @keyup.enter="show" v-model="title">
    </div>
</template>