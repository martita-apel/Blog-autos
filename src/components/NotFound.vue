<template>
  <div class="hello">
    <div class="notfound">
      <h1>La página que buscas no existe</h1>
      <router-link to="/">Voler al Inicio</router-link>
    </div>
    <footer>
      <div>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-linkedin"></i>
      </div>
      <p class="copyright">Copyright © V8 - 2018</p>
    </footer>
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

footer {
  background-color: #011724;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.fab {
  font-size: 30px;
  padding: 20px 5px 5px 5px;
  color: white;
}
.copyright {
  margin: 0;
  color: white;
  padding: 7px 0 35px 0;
}
</style>
