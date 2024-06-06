<script>
import axios from 'axios';
import { store } from '../store.js';
import SearchComponent from '../components/SearchComponent.vue';
export default {
    name: 'MainComponent',
    components: {
       SearchComponent,
    },

    data(){
        return {
            store,
        };
    },

    methods: {
        getResults(){
            this.store.loading = true;

            const params = {
                url: this.store.endpoints.baseUrl,
                key: this.store.endpoints.myApi,
                query: this.store.endpoints.query,
            };

            if (this.store.endpoints.query) {
                params;
            }
            
            
            axios.get(this.store.endpoints.baseUrl + `${'movie'}` + this.store.endpoints.myApi + this.store.endpoints.query, {params}).then((response) => {
            this.store.movieResults = this.response.results;
            console.log(this.store.movieResults);
            });
            this.store.loading = false;


        // in caso aggiungere {params} prima della chiusura della parentesi nella chiamata axios
        },
    },
    
};
</script>

<template>
    <main>
        <section>
            <div class="container" v-cloak>
                <div class="row">
                    <div class="col">
                        <div class="upper-space">
                            <div class="logo">
                                <img src="../assets/img/BOOLFLIX-05-06-2024.jpg" alt="">
                            </div>
                            <SearchComponent @search="getResults"/>
                        </div>
                        <div class="lower-space">
                            <p>ciao</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>