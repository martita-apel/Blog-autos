<template>
  <div class="sobremi">
    <div class="cuerpo col-md-10 col-lg-8 mx-auto">
      <img src="../assets/img/chev.jpg" alt="autos" />
      <div class="texto">
        <h1>Sobre mí</h1>
        <h5>
          Este es un blog dedicado al mundo automotor, en el cual te mostraré
          las últimas novedades de automóviles, los lanzamientos más recientes y
          te enseñaremos algunos tips para cuidar tu vehículo.
        </h5>
        <p>
          Este es un medio independiente. Si te gusta nuestro contenido,
          ayúdanos en Patreon o haciendo una donación a través de PayPal. Te lo
          agradeceré mucho.
        </p>
      </div>
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
  name: "SobreMi",
};
</script>

<style scoped>
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
