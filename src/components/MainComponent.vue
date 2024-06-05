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

    
};
</script>

<template>
    <main>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="upper-space">
                            <div class="logo">
                                <img src="../assets/img/BOOLFLIX-05-06-2024.jpg" alt="">
                            </div>
                            <SearchComponent />
                        </div>
                        <div class="lower-space">
                            <p>ciao</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>