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
</template>