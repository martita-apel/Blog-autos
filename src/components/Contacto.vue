<template>
  <div class="contacto">
    <h1>Contacto</h1>
    <p>
      ¿Tienes dudas o sugerencias? <br />
      Déjame un mensaje y me contactaré contigo.
    </p>

    <form class="col-md-10 col-lg-8 mx-auto" novalidate="novalidate">
      <div class="form-group">
        <input class="form-control" type="text" placeholder="Nombre" />
        <input class="form-control" type="email" placeholder="Email " />
        <input class="form-control" type="tel" placeholder="Teléfono" />
        <textarea
          class="form-control"
          data-validation-required-message="Please enter a message."
          placeholder="Mensaje"
          rows="4"
        ></textarea>
      </div>

      <button class="btn btn-primary" type="submit">
        Enviar Mensaje
      </button>
    </form>

    <hr />

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
  name: "Articulo",
};
</script>

<style scoped>
.contacto {
  background-color: #011724;
}
h1 {
  color: white;
  margin: 0;
  padding-top: 30px;
}
p {
  color: white;
  margin: 0;
}
.form-control {
  margin: 20px 0;
}

hr {
  width: 40%;
  margin: 20px auto;
  border: 0.5px solid white;
  margin-top: 50px;
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
