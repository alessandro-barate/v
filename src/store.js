import {reactive} from 'vue';

export const store = reactive({
    loading: true,
    movieResults: [],
    tvResults: [],
    starVote: '',
    endpoints: {
        baseUrl: 'https://api.themoviedb.org/3/',
        baseImageUrl: 'https://image.tmdb.org/t/p/w300/',
        myApi: '?api_key=bda3e142a7908a93f44deceb31c6bc17',
        preQuery: '&query=',
        query: '',
        movie: 'search/movie',
        tvSerie: 'search/tv',   
    },
});