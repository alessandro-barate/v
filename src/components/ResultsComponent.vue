<script>
import { store } from '../store.js';
export default {
    name: 'ResultsComponent',

    data(){
        return {
            store,
        };
    },
    
};
</script>

<template>
    <ul v-for="movie in this.store.movieResults">
        <li>{{ movie.title }}</li>
        <li>{{ movie.original_title }}</li>
        <li>
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
        <li>{{ movie.vote_average }}</li>
    </ul>

    <hr>
    <hr>

    <ul v-for="movie in this.store.tvResults">
        <li>{{ movie.name }}</li>
        <li>{{ movie.original_name }}</li>
        <li>
            <img v-if="movie.original_language === 'it'" src="../assets/img/flags/italy-flag.png" alt="Bandiera Italia" class="flag">
            <img v-else-if="movie.original_language === 'en'" src="../assets/img/flags/uk-flag.svg" alt="Bandiera Regno Unito" class="flag">
            <img v-else-if="movie.original_language === 'de'" src="../assets/img/flags/germany-flag.png" alt="Bandiera Germania" class="flag">
            <img v-else-if="movie.original_language === 'fr'" src="../assets/img/flags/france-flag.svg" alt="Bandiera Francia" class="flag">
            <img v-else-if="movie.original_language === 'es'" src="../assets/img/flags/spain-flag.png" alt="Bandiera Spagna" class="flag">
            <img v-else-if="movie.original_language === 'ja'" src="../assets/img/flags/japan-flag.png" alt="Bandiera Giappone" class="flag">
            <img v-else-if="movie.original_language === 'ch'" src="../assets/img/flags/china-flag.png" alt="Bandiera Cina" class="flag">
            <img v-else-if="movie.original_language === 'zh'" src="../assets/img/flags/switzerland-flag.png" alt="Bandiera Svizzera" class="flag">
        </li>
        <li>{{ movie.vote_average }}</li>
    </ul>
</template>