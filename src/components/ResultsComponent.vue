<script>
import { store } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import MoviesResultsComponent from './MoviesResultsComponent.vue';
import TvSeriesResultsComponent from './TvSeriesResultsComponent.vue';
export default {
    name: 'ResultsComponent',
    components: {
        MoviesResultsComponent,
        TvSeriesResultsComponent,
    },

    data(){
        return {
            store,
        };
    },
    
};
</script>

<template>
    <MoviesResultsComponent/>
    <TvSeriesResultsComponent/>
</template>