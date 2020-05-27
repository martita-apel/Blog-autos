<template>
  <div class="inicio">
    <div class="encabezado ">
      <h1 class="titulo">
        Chevrolet <br />
        presenta la <br />
        totalmente <br />
        nueva Blazer
      </h1>
      <h5 class="v8">V8 | Noticias y reseñas de automóviles</h5>
    </div>

    <div class="azul">
      <router-link to="/blog/1">
        <h3 class="bajada col-xs-6 col-sm-8 col-md-10 col-xl-8">
          El nuevo automóvil de Chevrolet llega como la primera SUV deportiva de
          la marca
        </h3></router-link
      >

      <footer>
        <div>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-linkedin"></i>
        </div>
        <p class="copyright">Copyright © V8 - 2018</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style scoped>
.inicio {
  background-image: url("../assets/img/highway.jpg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position-y: top;
  background-position-x: left;
}
.encabezado {
  text-align: left;
  text-decoration: none;
  width: fit-content;
  box-sizing: border-box;
  padding: 20px;
  margin-left: auto;
}

.titulo {
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: white;
  font-size: 90px;
  line-height: 80px;
  padding: 30px 20px 0 20px;
}
.v8 {
  color: #1a1718;
  padding-left: 20px;
  letter-spacing: 1px;
  font-size: 23px;
  margin: 15px 0 0px 0;
}
.bajada {
  letter-spacing: 2px;
  color: white;
  margin: auto;
  padding-top: 30px;
}

/* hr {
  margin: 20px auto;
  border: 0.5px solid white;
} */

.azul {
  background-color: #0e93e4;
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

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 1200px) {
  .v8 {
    padding-left: 120px;
    font-size: 22px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 992px) {
  .titulo {
    font-size: 65px;
    line-height: 60px;
  }
  .v8 {
    font-size: 16px;
    padding-left: 80px;
  }
  .bajada {
    font-size: 25px;
  }
  .encabezado {
    margin-left: auto;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 768px) {
  .titulo {
    font-size: 70px;
    line-height: 65px;
    text-align: center;
    padding: 20px;
    padding-bottom: 0;
  }
  .v8 {
    font-size: 17px;
    text-align: center;
    padding-left: 0px;
    color: white;
  }
  .inicio {
    background-size: 100%;
  }
  .bajada {
    font-size: 20px;
  }
  .encabezado {
    margin: auto;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .titulo {
    font-size: 55px;
    line-height: 50px;
    padding-bottom: 0;
  }
  .bajada {
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media only screen and (max-width: 400px) {
  .titulo {
    font-size: 45px;
    line-height: 40px;
  }
  .v8 {
    font-size: 14px;
  }
  .bajada {
    font-size: 18px;
  }
}
</style>
