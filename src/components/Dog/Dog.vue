<template>
  <li>
    {{dog.article}} dog {{dog.article}}
  </li>
</template>

<script>
export default {
  props: {
    dog: Object
  }
};
</script>

<style>
</style>