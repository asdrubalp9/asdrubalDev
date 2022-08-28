<template>
  <div class="row flex flex-center bg-darker" style="height: 92vh" id="dru">
    <div class="col-4 full-height">
      <div class="imagesHolder">
        <div
          class="cuadrado moveMe bg-primary"
          data-direction="x"
          data-reverse="no"
        ></div>
        <div class="rectangulo bg-white overflow-hidden">
          <img
            class="moveMe"
            data-direction="y"
            data-reverse="yes"
            src="imgs/dru.png"
          />
        </div>
        <div class="parentBox">
          <div class="box moveMe" data-direction="x" data-reverse="yes"></div>
        </div>
      </div>
    </div>
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
        rounded
        icon-right="fa-solid fa-cloud-arrow-down"
        label="Descargar CV"
        unelevated
        class="text-weight-bold"
        style="border: 2px solid white"
      />
    </div>
    <div class="col-4 text-right self-end"></div>
  </div>
</template>

<script>
import { animateMovingElement } from "./../composables/movingEffect.js";
import { onMounted, ref } from "vue";
export default {
  setup() {
    onMounted(() => {
      animateMovingElement(".moveMe");
      animateMovingElement(".moveMe");
    });
  },
};
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
.imagesHolder {
  position: relative;
  margin-left: 150px;
  top: 49%;
}
.imagesHolder .parentBox .box {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 6px solid #db1010;
}
.imagesHolder .parentBox {
  position: absolute;
  width: 1000px;
  height: 300px;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: -145px;
  z-index: 2;
}
.imagesHolder .rectangulo {
  position: absolute;
  overflow: hidden;
  width: 232px;
  height: 309px;
  top: -53px;
  left: 95px;
  z-index: 0;
  border-radius: 1em;
}
.imagesHolder .cuadrado {
  position: absolute;
  width: 270px;
  height: 270px;
  bottom: -80px;
  left: 111px;
  z-index: 0;
  border-radius: 1em;
}
</style>
