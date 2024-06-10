<script>
import { store } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'TvSeriesResultsComponent',

    data(){
        return {
            store,
            hover: null,
        };
    },

    methods: {
        getIntVote(){
            this.store.starVote = Math.round(this.store.movieResults.vote_average / 2);
            console.log(this.store.starVote);
            return this.store.starVote;
        },

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

    <!-- TV Series section -->
    <div v-show="this.store.showTitles" class="show-section-title margin-t">
        <h2>TV Serie</h2>
    </div>
    <div v-for="(tv, index) in this.store.tvResults" :key="tv.id" class="col" @mouseover="hover = index" @mouseleave="hover = null">
        <div class="image-card">
            <img v-if="tv.backdrop_path && hover !== index" :src="this.store.endpoints.baseImageUrl + tv.poster_path" alt="">
            <div v-else-if="!tv.backdrop_path && hover !== index" alt="Nessuna immagine da visualizzare">
            <p>Nessuna immagine di copertina disponibile</p>
            </div>
            <ul v-if="hover === index">
                <li><span>Titolo: </span>{{ tv.title }}</li>
                <li><span>Titolo originale: </span>{{ tv.original_title }}</li>
                <li><span>Nazionalità: </span>
                    <img v-if="tv.original_language === 'it'" src="../assets/img/flags/italy-flag.png" alt="Bandiera Italia" class="flag">
                    <img v-else-if="tv.original_language === 'en'" src="../assets/img/flags/uk-flag.svg" alt="Bandiera Regno Unito" class="flag">
                    <img v-else-if="tv.original_language === 'de'" src="../assets/img/flags/germany-flag.png" alt="Bandiera Germania" class="flag">
                    <img v-else-if="tv.original_language === 'fr'" src="../assets/img/flags/france-flag.svg" alt="Bandiera Francia" class="flag">
                    <img v-else-if="tv.original_language === 'es'" src="../assets/img/flags/spain-flag.png" alt="Bandiera Spagna" class="flag">
                    <img v-else-if="tv.original_language === 'pt'" src="../assets/img/flags/portugal-flag.png" alt="Bandiera Portogallo" class="flag">
                    <img v-else-if="tv.original_language === 'fi'" src="../assets/img/flags/finland-flag.png" alt="Bandiera Finlandia" class="flag">
                    <img v-else-if="tv.original_language === 'ja'" src="../assets/img/flags/japan-flag.png" alt="Bandiera Giappone" class="flag">                        <img v-else-if="movie.original_language === 'ch'" src="../assets/img/flags/china-flag.png" alt="Bandiera Cina" class="flag">
                    <img v-else-if="tv.original_language === 'zh'" src="../assets/img/flags/switzerland-flag.png" alt="Bandiera Svizzera" class="flag">
                    <p v-else>{{ tv.original_language }}</p>
                </li>
                <li>
                     <span>Voto: </span>                       <!--  {{ this.store.starVote }} -->
                    <span v-for="n in 5" :key="n">
                        <i v-if="this.getStars(this.getIntVote, n) === 'full'" :icon="['fas', 'fa-star']"></i>
                        <i v-if="this.getStars(this.getIntVote, n) === 'half'" :icon="['fas', 'fa-star-half']"></i>
                        <i v-if="this.getStars(this.getIntVote, n) === 'empty'" :icon="[]"></i>
                    </span>
                </li>
                <li>
                    <p v-if="tv.overview === ''"><span>Overview: </span>Nessuna overview disponibile</p>
                    <p v-else><span>Overview: </span>{{ tv.overview }}</p>
                </li>
            </ul>
        </div> 
    </div>
    <!-- FINE TV Series section -->

</template>