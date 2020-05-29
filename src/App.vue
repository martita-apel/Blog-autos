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
            <router-link class="menu" to="/">
              <i class="fas fa-home"></i> Inicio</router-link
            >
            <router-link class="menu" to="/blog/1">Blog</router-link>
            <router-link class="menu" to="/sobremi">Sobre mí</router-link>
            <router-link class="menu" to="/contacto">Contacto</router-link>
            <router-link class="menu" to="/administrador/simple"
              ><i id="ad" class="fas fa-user-circle"></i
            ></router-link>
          </div>
        </div>
      </nav>
    </div>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  /*  data() {
    return {
      desplegar: false,
    };
  },
  methods: {
    mostrarTransicion() {
      this.desplegar = !this.desplegar;
    },
  }, */
};
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
.navbar-nav {
  align-items: center;
}
.menu {
  padding: 10px;
  color: white;
  text-decoration: none;
}
.fas {
  color: white;
}
#ad {
  font-size: 22px;
}

/* .fade-enter,
.fade-leave-to {
  opacity: 1;
}
.fade-enter-to,
.fade-leave {
  opacity: 0;
} */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  transition-timing-function: ease;
}

@media screen and (max-width: 550px) {
  .navbar__logo {
    width: 40%;
  }
}
</style>
