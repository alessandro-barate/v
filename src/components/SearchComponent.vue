<script>
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
        <ul>
            <li>
                <i class="fas fa-magnifying-glass"></i>
            </li>
            <li>
                <span>Kids</span>
            </li>
            <li>
                <i class="fas fa-bell"></i>
            </li>
            <li>
                <span><i class="fas fa-user"></i>My account</span>
            </li>
        </ul>
        <input type="text" placeholder="Cerca qui il film o la serie tv" @keyup.enter="$emit('search')" v-model="this.store.endpoints.query">
    </div>
</template>