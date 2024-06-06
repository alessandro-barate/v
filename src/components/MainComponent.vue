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

            // const params = {
            //     url: this.store.endpoints.baseUrl,
            //     type: th'is.store.endpoints.movie,
            //     key: this.store.endpoints.myApi,
            //     pre: this.store.endpoints.preQuery,
            //     query: this.store.endpoints.query,
            // };

            // if (this.store.endpoints.query) {
            //     params;
            // }
            // in caso aggiungere {params} prima della chiusura della parentesi nella chiamata axios
            
            // Movie API call 
            axios.get(this.store.endpoints.baseUrl + this.store.endpoints.movie + this.store.endpoints.myApi + this.store.endpoints.preQuery + this.store.endpoints.query).then((response) => {
            this.store.movieResults = response.data.results;
            console.log(this.store.movieResults);
            });

            // TV serie API call
            axios.get(this.store.endpoints.baseUrl + this.store.endpoints.tvSerie + this.store.endpoints.myApi + this.store.endpoints.preQuery + this.store.endpoints.query).then((response) => {
            this.store.tvResults = response.data.results;
            console.log(this.store.tvResults);
            });


            
            this.store.loading = false;

            

            this.store.endpoints.query = '';
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
                            <ul v-for="movie in this.store.movieResults">
                                <li>{{ movie.title }}</li>
                                <li>{{ movie.original_title }}</li>
                                <li>
                                    <img v-if="movie.original_language === 'it'" src="../assets/img/italy-flag.png" alt="Bandiera Italia" class="flag">
                                    <img v-else-if="movie.original_language === 'en'" src="../assets/img/uk-flag.svg" alt="Bandiera Regno Unito" class="flag">
                                    <p v-else>{{ movie.original_language }}</p>
                                </li>
                                <li>{{ movie.vote_average }}</li>
                            </ul>
                                <hr>
                                <hr>
                            <ul v-for="movie in this.store.tvResults">
                                <li>{{ movie.name }}</li>
                                <li>{{ movie.original_name }}</li>
                                <li>
                                    <img v-if="movie.original_language === 'it'" src="../assets/img/italy-flag.png" alt="Bandiera Italia" class="flag">
                                    <img v-else-if="movie.original_language === 'en'" src="../assets/img/uk-flag.svg" alt="Bandiera Regno Unito" class="flag">
                                </li>
                                <li>{{ movie.vote_average }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>