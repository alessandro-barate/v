import {reactive} from 'vue';

export const store = reactive({
    endpoints: {
        baseUrl: 'https://api.themoviedb.org/3/',
        myApi: '?api_key=bda3e142a7908a93f44deceb31c6bc17',
        query: '&query=',
        
    },
    loading: true,
    movieResults: [],
    tvResults: [],
    
    
});