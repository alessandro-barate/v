<script>
import { store } from '../store.js';
export default {
    name: 'SearchComponent',

    data(){
        return {
            store,
        };
    },

    methods: {
        showSearchBar(){
            this.store.showSearchBar = true;
        }
    }
    
};
</script>

<template>
    <div class="search-section">
        <ul>
            <li>
                <i @click="showSearchBar" class="fas fa-magnifying-glass font-19" id="magnifier"></i>
            </li>
            <li>
                <span>Kids</span>
            </li>
            <li>
                <i class="fas fa-bell font-19"></i>
            </li>
            <li>
                <span><i class="fas fa-user"></i> My account <i class="fas fa-angle-down"></i></span>
            </li>
        </ul>
        <input v-if="(this.store.showSearchBar)" type="text" placeholder="Cerca qui il film o la serie tv" @keyup.enter="$emit('search')" 
        v-model="this.store.endpoints.query">
    </div>
</template>