<script>
import axios from 'axios';
import { store } from '../store.js';
import SearchComponent from '../components/SearchComponent.vue';
import ResultsComponent from './ResultsComponent.vue';
export default {
    name: 'MainComponent',
    components: {
       SearchComponent,
       ResultsComponent,
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
            this.store.showTitles = true;
            });

            // TV serie API call
            axios.get(this.store.endpoints.baseUrl + this.store.endpoints.tvSerie + this.store.endpoints.myApi + this.store.endpoints.preQuery + this.store.endpoints.query).then((response) => {
            this.store.tvResults = response.data.results;
            this.store.showTitles = true;
            });

            this.store.loading = false;

            this.store.endpoints.query = '';
        },
    },
    
};
</script>

<template>
    <main>
        <header>
            <div class="upper-space">
                <div class="logo">
                    <img src="../assets/img/BOOLFLIX-05-06-2024.jpg" alt="">
                </div>
                <nav>
                    <ul>
                        <li>
                            <button>Home</button>
                        </li>
                        <li>
                            <button>Movies</button>
                        </li>
                        <li>
                            <button>Tv Series</button>
                        </li>
                        <li>
                            <button>Collections</button>
                        </li>
                        <li>
                            <button>Discover</button>
                        </li>
                        <li>
                            <button>Trending</button>
                        </li>
                        <li>
                            <button>Genres</button>
                        </li>
                    </ul>
                </nav>
                <SearchComponent @search="getResults"/>
            </div>
        </header>
        <section>
            <div class="container" v-cloak>
                <div class="row">
                    <ResultsComponent/>
                </div>
            </div>
        </section>
    </main>
</template>