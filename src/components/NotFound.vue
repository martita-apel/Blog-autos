<template>
  <div class="hello">
    <div class="notfound">
      <h1>La página que buscas no existe</h1>
      <router-link to="/">Voler al Inicio</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.notfound {
  background-color: white;
}
h1 {
  color: gray;
  font-size: 100px;
  margin: 40px;
}
h5 {
  width: 50%;
  margin: auto;
  padding-bottom: 50px;
}
</style>
