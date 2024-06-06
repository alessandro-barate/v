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

    methods: {
        getResults(){
            this.store.loading = true;

            // const params = {
            //     url: this.store.endpoints.baseUrl,
            //     key: this.store.endpoints.myApi,
            //     query: this.store.endpoints.query,
            // };

            // if (this.store.endpoints.query) {
            //     params;
            // }
            
            
            axios.get(this.store.endpoints.baseUrl + this.store.endpoints.movie + this.store.endpoints.myApi + this.store.endpoints.preQuery + this.store.endpoints.query).then((response) => {
            this.store.movieResults = response.data.results;
            console.log(this.store.movieResults);
            });
            this.store.loading = false;

            this.store.endpoints.query = '';


        // in caso aggiungere {params} prima della chiusura della parentesi nella chiamata axios
        },
    },
    
};
</script>

<template>
    <div class="search-section">
        <input type="text" placeholder="Cerca qui il film" @keyup.enter="$emit('search')" v-model="this.store.endpoints.query">
        <!-- $emit('search') -->
    </div>
</template>