<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-dark">
        <img src="./assets/img/logo.png" alt="logo" class="navbar__logo" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#"
              ><i class="fas fa-home"></i>
              <router-link class="menu" to="/"> Inicio</router-link>
              <!-- <span class="sr-only">(current)</span> --></a
            >
            <a class="nav-item nav-link" href="#">
              <router-link class="menu" to="/blog/1">Blog</router-link>
            </a>
            <a class="nav-item nav-link" href="#">
              <router-link class="menu" to="/sobremi">Sobre mí</router-link>
            </a>
            <a class="nav-item nav-link" href="#">
              <router-link class="menu" to="/contacto">Contacto</router-link>
            </a>
          </div>
        </div>
      </nav>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
/* import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
}; */
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  background-color: #011724;
  max-width: 100%;
}

.navbar__logo {
  width: 18%;
  padding-top: 10px;
}
.navbar__toggler {
  color: white;
}
.navbar-collapse {
  text-align: right;
}
.menu {
  padding: 2px;
  color: white;
  text-decoration: none;
}
.fas {
  color: white;
}

@media screen and (max-width: 550px) {
  .navbar__logo {
    width: 40%;
  }
}
</style>
