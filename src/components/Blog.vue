<template>
  <div class="blog">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="../assets/img/about-big.jpg"
            alt="First slide"
          />
          <div id="titulo" class="carousel-caption d-none d-md-block">
            <h1>Chevrolet presenta la nueva Blazer</h1>
            <h5 class="sub">La primera SUV deportiva de la marca</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/img/chevrolet-blazer.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/img/home-bg.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Siguiente</span>
      </a>
    </div>

    <article>
      <div class="cuerpo col-md-10 col-lg-8 mx-auto">
        <h2 class="section">Diseño Deportivo</h2>
        <p>
          La marca del corbatín ha estado muy activa de novedades este 2019, y
          acaba de presentar en Chile su primer SUV deportivo, que recobra un
          conocido nombre de la marca, la Blazer, que ahora llega con mucha más
          cercanía al diseño y concepto del Camaro que el del todo terreno rudo
          que fue hace años atrás.
        </p>
        <p>
          Aterriza en nuestro país en dos versiones, ambas muy equipadas y que
          solamente varían en su look, o más deportivo o más elegante. La
          primera es la RS, que ofrece detalles deportivos en negro brillante,
          incluyendo el tradicional corbatín, mientras que la versión Premier
          ofrece un look más elegante, con muchos detalles cromados y que
          recuerda más a otros modelos de la marca. Ambas se ofrecen a un precio
          de lanzamiento de $29.990.000, incluyendo bonos de lanzamiento y de
          financiamiento (precio sin bonos es $31.990.000).
        </p>

        <hr />
        <div class="caract">
          <h4>Características</h4>
          <p class="caract-cuerpo">
            Lo primero que se aprecia es su diseño exterior, que aunque en un
            tamaño no menor de casi 4.9 metros, se ve bastante atractivo y
            elegante, con un frontal muy afilado, con una boca muy grande, luces
            diurnas LED superiores y principales abajo HID con tecnología
            Intellibeam. El lateral se ve muy estilizado, con sus llantas de 21
            pulgadas, y una parte trasera que recuerda a otros modelos
            emblemáticos del segmento, como la Nissan Murano o Lexus RX. La
            trasera ofrece un portalón con una buena caída, doble salida de
            escape y hermosas luces LED con un mini logo de la marca.
          </p>
          <p class="caract-cuerpo">
            Su equipamiento de seguridad es realmente completo, ofreciendo desde
            los siete airbags, control de estabilidad, frenos de disco en las
            cuatro ruedas, control crucero adaptativo, alerta de cambio de
            carril, alerta de tráfico cruzado, alerta de colisión frontal,
            asistente de frenado a bajas velocidades, alerta en el asiento del
            conductor, asistente activo de estacionamiento y cámara de 360°.
          </p>
          <p class="caract-cuerpo">
            El motor de ambas versiones es un V6 de 3.6 litros que entrega una
            potencia de 308 Hp y 365 Nm, que se acopla a una caja automática de
            nueve velocidades, transmitiendo al suelo esta potencia gracias a un
            sistema AWD con diferentes modos de manejo. Para mejorar algo la
            eficiencia, integra un sistema de encendido y apagado de motor
            automático Start Stop.
          </p>
        </div>
      </div>
    </article>

    <section>
      <router-link class="post" :to="{ name: 'post' }"
        >Revisa el resumen del próximo <b>POST</b></router-link
      ><router-view></router-view>
    </section>

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
  name: "Blog",
};
</script>

<style scoped>
.blog {
  background-color: white;
}
#titulo {
  margin-bottom: 40px;
}

.cuerpo {
  margin-top: 30px;
}
h2 {
  color: #1a1718;
  font-weight: bold;
}

hr {
  margin: 40px auto;
  border: 0.5px solid #1a1718;
}
.caract {
  margin-bottom: 70px;
}
.caract-cuerpo {
  font-size: 14px;
}

section {
  background-color: turquoise;
  padding: 20px;
}
.post {
  color: #011724;
  text-decoration: none;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 2px;
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
