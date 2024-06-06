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
        };
    },
    
};
</script>

<template>
    <div class="search-section">
        <input type="text" placeholder="Cerca qui il film" @keyup_enter="$emit('search')" v-model="this.store.query">
    </div>
</template>