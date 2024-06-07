<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'SearchComponent',

    data(){
        return {
            store,
        };
    },
    
};
</script>

<template>
    <div class="search-section">
        <input type="text" placeholder="Cerca qui il film o la serie tv" id="search" @keyup.enter="$emit('search')" v-model="this.store.endpoints.query">
    </div>
</template>