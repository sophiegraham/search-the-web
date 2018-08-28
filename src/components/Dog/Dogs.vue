<template>
  <section class="dogs">
    <h2>Dogs</h2>

    <DogsSearch :onSearch="handleSearch"/>
    
    <!-- <Loader :loading="loading"/> -->

  </section>
</template>

<script>
import api from '../../services/api';
import Dog from './Dog';
import DogsSearch from './DogsSearch';
// import Loader from './Loader';

export default {
  data() {
    return {
      dogs: null,
    };

  },

  components: {
    DogsSearch
  },


  methods: {
    handleSearch() {
      // this.search = search;
      this.searchDogs();

    },
    searchDogs() {
      api.getDogs()
        .then(response => {

          console.log(response.articles, 'response');
        });
            
    }
  }
};
</script>


