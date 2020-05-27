<template>
  <div class="post">
    <h3>
      Conoce los últimos avances tecnológicos <br />
      en la nueva línea de
      <i>Yamaha Motos</i>
    </h3>
    <div>
      <router-link class="next" to="/nuevopost">Próximo Post</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
};
</script>

<style scoped>
h1 {
  color: black;
  font-size: 50px;
}
.next {
  font-size: 20px;
  color: white;
  text-decoration: none;
}
</style>
