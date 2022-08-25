<template>
  <div class="row flex flex-center" style="height: 92vh" id="dru">
    <div class="col-4"></div>
    <div class="col-4">
      <p class="text-primary text-h5 q-ma-none">Sobre mí</p>
      <h2 class="text-h2 text-white q-mb-sm q-mt-md">
        Soy
        <span class="text-primary text-weight-bold text-h1 primary-text">
          <br />
          Asdrúbal Pérez
          <br />
        </span>
        <span class="text-white text-h3"> Desarrollador Creativo </span>
      </h2>
      <p class="text-white text-h4 q-ma-none q-mb-md">en Santiago de Chile</p>
      <p>
        ¡Hola! Mi nombre es Asdrubal. Soy desarrollador de software muy
        apasionado y dedicado a mi trabajo.
      </p>
      <p>
        Con casi 10 años de experiencia como un desarrollador he adquirido las
        habilidades y el conocimiento necesario para ayudarte a triunfar con tu
        proyecto.
      </p>
      <q-btn
        color="primary"
        icon-right="fa-solid fa-cloud-arrow-down"
        label="Descargar CV"
        unelevated
      />
    </div>
    <div class="col-4 text-right self-end">
      <img src="imgs/dru.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.hero-text {
  color: white;
}
.hero-text span.primary-font {
  color: var(--q-primary);
  display: block !important;
  line-height: 2em;
  font-size: 2em;
  font-weight: bolder;
}
</style>
