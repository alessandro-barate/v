<script>
import { store } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'MoviesResultsComponent',

    data(){
        return {
            store,
            hover: null,
        };
    },

    computed: {
        getIntVote(){
            this.store.starVote = Math.round(this.store.movieResults.vote_average / 2);
            console.log(this.store.starVote);
            return this.store.starVote;
        },
    },

    methods: {
        getStars(vote, index){
            if (index <= vote) {
                return 'full';
            } else if (index - vote <= 0.5) {
                return 'half';
            } else {
                return 'empty';
            }
        },
    },
    
};
</script>

<template>

    <!-- Movies section -->
    <div v-show="this.store.showTitles" class="show-section-title margin-t">
        <h2>Movie</h2>
    </div>
    <div v-for="(movie, index) in this.store.movieResults" :key="movie.id" class="col" @mouseover="hover = index" @mouseleave="hover = null">
        <div class="image-card">
            <img v-if="movie.backdrop_path && hover !== index" :src="this.store.endpoints.baseImageUrl + movie.poster_path" alt="">
            <div v-else-if="!movie.backdrop_path && hover !== index" alt="Nessuna immagine da visualizzare">
            <p>Nessuna immagine di copertina disponibile</p>
            </div>
            <ul v-if="hover === index">
                <li><span>Titolo: </span>{{ movie.title }}</li>
                <li><span>Titolo originale: </span>{{ movie.original_title }}</li>
                <li><span>Nazionalità: </span>
                    <img v-if="movie.original_language === 'it'" src="../assets/img/flags/italy-flag.png" alt="Bandiera Italia" class="flag">
                    <img v-else-if="movie.original_language === 'en'" src="../assets/img/flags/uk-flag.svg" alt="Bandiera Regno Unito" class="flag">
                    <img v-else-if="movie.original_language === 'de'" src="../assets/img/flags/germany-flag.png" alt="Bandiera Germania" class="flag">
                    <img v-else-if="movie.original_language === 'fr'" src="../assets/img/flags/france-flag.svg" alt="Bandiera Francia" class="flag">
                    <img v-else-if="movie.original_language === 'es'" src="../assets/img/flags/spain-flag.png" alt="Bandiera Spagna" class="flag">
                    <img v-else-if="movie.original_language === 'pt'" src="../assets/img/flags/portugal-flag.png" alt="Bandiera Portogallo" class="flag">
                    <img v-else-if="movie.original_language === 'fi'" src="../assets/img/flags/finland-flag.png" alt="Bandiera Finlandia" class="flag">
                    <img v-else-if="movie.original_language === 'ja'" src="../assets/img/flags/japan-flag.png" alt="Bandiera Giappone" class="flag">                        <img v-else-if="movie.original_language === 'ch'" src="../assets/img/flags/china-flag.png" alt="Bandiera Cina" class="flag">
                    <img v-else-if="movie.original_language === 'zh'" src="../assets/img/flags/switzerland-flag.png" alt="Bandiera Svizzera" class="flag">
                    <p v-else>{{ movie.original_language }}</p>
                </li>
                <li>
                     <span>Voto: </span>                       <!--  {{ this.store.starVote }} -->
                    <span v-for="n in 5" :key="n">
                        <i v-if="this.getStars(movie.starVote, n) === 'full'" :icon="['fas', 'fa-star']"></i>
                        <i v-if="this.getStars(movie.starVote, n) === 'half'" :icon="['fas', 'fa-star-half']"></i>
                        <i v-if="this.getStars(movie.starVote, n) === 'empty'" :icon="[]"></i>
                    </span>
                </li>
                <li>
                    <p v-if="movie.overview === ''"><span>Overview: </span>Nessuna overview disponibile</p>
                    <p v-else><span>Overview: </span>{{ movie.overview }}</p>
                </li>
            </ul>
        </div> 
    </div>
    <!-- FINE Movies section -->
     
</template>