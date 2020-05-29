<template>
  <div class="adm">
    <h1>{{ title() }}</h1>
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
  name: "Administrador",
  props: ["admin"],
  methods: {
    title() {
      if (this.admin == "simple") {
        return `Bienvenido a la página de Administración`;
      } else if (this.admin == "avanzado") {
        return `Esta página de administración está en construcción. Intente como administrador simple`;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: gray;
  font-size: 70px;
  margin: 40px;
}
.cuerpo {
  display: flex;
  margin: 0;
  padding: 0;
  max-width: fit-content;
}
.texto {
  width: 50%;
  text-align: left;
  padding: 30px 90px 30px 30px;
}
img {
  width: 50%;
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
@media only screen and (max-width: 768px) {
  .cuerpo {
    display: block;
  }
  img {
    width: 100%;
  }
  .texto {
    width: 100%;
    text-align: center;
    padding: 40px;
  }
}
</style>
