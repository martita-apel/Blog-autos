<template>
  <div class="nuevopost">
    <div>
      <img src="../assets/img/yamaha.jpg" alt="Yamaha" />
      <h1>La nueva línea de <b>Yamaha Motos</b></h1>
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
  name: "NuevoPost",
};
</script>

<style scoped>
img {
  max-width: 100%;
  position: relative;
}
h1 {
  color: black;
  font-size: 50px;
  position: absolute;
  top: 100px;
  margin: auto;
  padding: 30px;
}

footer {
  background-color: #011724;
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
