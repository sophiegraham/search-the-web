<template>
  <div class="app">
    <header>
      <img src="/assets/logo.png">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/dogs">Dogs</router-link>
      </nav>
    </header>

   <main>
     <router-view></router-view>
   </main>
    
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
header {
  height: 75px;
  background: lightsteelblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header img {
  height: 100%;
}
nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}
main {
  padding: 8px;
}
</style>