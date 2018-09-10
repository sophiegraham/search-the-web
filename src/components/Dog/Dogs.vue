<template>
  <section class="dogs">
    <h2>Dogs</h2>

    <DogsSearch :onSearch="handleSearch"/>
    
    <Loader :loading="loading"/>

    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <div class="search-container">
      <ul v-if="dogs">
        <Dog v-for="dog in dogs"
          :key="dog.article"
          :dog="dog"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import api from '../../services/api.js';
import Dog from './Dog';
import DogsSearch from './DogsSearch';
import Loader from './Loader';

export default {
  data() {
    return {
      dogs: null,
      loading: false,
      error: null,
      search: '',
      total: 0
    };

  },

  components: {
    Dog,
    DogsSearch,
    Loader
  },
  created() {
    const query = this.$router.history.current.query;
    if(query) {
      this.handleSearch(query.search);
    }
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
      
      this.handleSearch(newSearch);
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchDogs();

    },
    searchDogs() {
      if(!this.search) return;

      this.loading = true;
      this.error = null;

      api.getDogs(this.search)
        .then(response => {
          this.dogs = response.results;
          this.total = response.count;
          this.loading = false;
        })
        .catch(err => {

          this.error = err.message;
          this.loading = false;
        });
            
    }
  }
};
</script>

<style>
.error {
  color: red;
}
.loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}
</style>


