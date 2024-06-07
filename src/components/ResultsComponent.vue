<script>
import { store } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'ResultsComponent',

    data(){
        return {
            store,
        };
    },

    computed: {
        getIntVote(){
            this.store.starVote = Math.round(this.store.movieResults.vote_average / 2);
            console.log(this.store.starVote);
            return this.store.starVote;
        },
    },
    
};
</script>

<template>

    <div>
        <ul v-for="movie in this.store.movieResults">
            <div v-if="movie.backdrop_path" class="movie-image">
                <img :src="this.store.endpoints.baseImageUrl + movie.backdrop_path" alt="">
            </div>
            <div v-else alt="Nessuna immagine da visualizzare">
                <p>Immagine di copertina non presente</p>
            </div>
            <li>Titolo: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>Nazionalità:
                <img v-if="movie.original_language === 'it'" src="../assets/img/flags/italy-flag.png" alt="Bandiera Italia" class="flag">
                <img v-else-if="movie.original_language === 'en'" src="../assets/img/flags/uk-flag.svg" alt="Bandiera Regno Unito" class="flag">
                <img v-else-if="movie.original_language === 'de'" src="../assets/img/flags/germany-flag.png" alt="Bandiera Germania" class="flag">
                <img v-else-if="movie.original_language === 'fr'" src="../assets/img/flags/france-flag.svg" alt="Bandiera Francia" class="flag">
                <img v-else-if="movie.original_language === 'es'" src="../assets/img/flags/spain-flag.png" alt="Bandiera Spagna" class="flag">
                <img v-else-if="movie.original_language === 'ja'" src="../assets/img/flags/japan-flag.png" alt="Bandiera Giappone" class="flag">
                <img v-else-if="movie.original_language === 'ch'" src="../assets/img/flags/china-flag.png" alt="Bandiera Cina" class="flag">
                <img v-else-if="movie.original_language === 'zh'" src="../assets/img/flags/switzerland-flag.png" alt="Bandiera Svizzera" class="flag">
                <p v-else>{{ movie.original_language }}</p>
            </li>
            <li>Voto: {{ this.store.starVote }}
                <span v-for="n in 5"><i class="fas fa-star"></i></span>
            </li>
            
        </ul>
    </div>

    <hr>
    <hr>

    <div>
        <ul v-for="movie in this.store.tvResults">
            <div v-if="movie.backdrop_path" class="movie-image">
                <img :src="this.store.endpoints.baseImageUrl + movie.backdrop_path" alt="">
            </div>
            <div v-else alt="Nessuna immagine da visualizzare">
                <p>Immagine di copertina non presente</p>
            </div>
            <li>Titolo: {{ movie.name }}</li>
            <li><span>Titolo originale: </span>{{ movie.original_name }}</li>
            <li>Nazionalità: 
                <img v-if="movie.original_language === 'it'" src="../assets/img/flags/italy-flag.png" alt="Bandiera Italia" class="flag">
                <img v-else-if="movie.original_language === 'en'" src="../assets/img/flags/uk-flag.svg" alt="Bandiera Regno Unito" class="flag">
                <img v-else-if="movie.original_language === 'de'" src="../assets/img/flags/germany-flag.png" alt="Bandiera Germania" class="flag">
                <img v-else-if="movie.original_language === 'fr'" src="../assets/img/flags/france-flag.svg" alt="Bandiera Francia" class="flag">
                <img v-else-if="movie.original_language === 'es'" src="../assets/img/flags/spain-flag.png" alt="Bandiera Spagna" class="flag">
                <img v-else-if="movie.original_language === 'ja'" src="../assets/img/flags/japan-flag.png" alt="Bandiera Giappone" class="flag">
                <img v-else-if="movie.original_language === 'ch'" src="../assets/img/flags/china-flag.png" alt="Bandiera Cina" class="flag">
                <img v-else-if="movie.original_language === 'zh'" src="../assets/img/flags/switzerland-flag.png" alt="Bandiera Svizzera" class="flag">
            </li>
            <li> Voto: {{ movie.vote_average }}</li>
        </ul>
    </div>
</template>