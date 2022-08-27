<template>
  <div class="row flex flex-center q-pa-xl" style="height: 92vh" id="servicios">
    <div class="col-2"></div>
    <div class="col-8">
      <div class="row">
        <div class="col-6">
          <p class="text-primary text-h5 q-ma-none">
            Lo que puedo hacer por tí
          </p>
          <h2
            class="text-h2 primary-text text-weight-bold text-white q-mb-sm q-mt-lg"
          >
            Mis servicios
          </h2>
          <p>
            Ofrecemos productos de alta calidad a precios competitivos. Nuestro
            principal objetivo es la satisfacción del cliente, que obtenemos a
            través de la orientación al mercado del servicio y soporte continuo.
          </p>
        </div>
        <div class="col-6 q-pa-md" v-for="(serv, k) in servicios" :key="k">
          <Tilt :parallax="true" :options="options">
            <q-card dark class="q-pa-md" style="transform: translateZ(20px)">
              <div class="row">
                <div class="col flex flex-center">
                  <q-icon :name="serv.icon" size="xl" />
                </div>
                <div class="col-9">
                  <h2 class="text-h4 text-white q-mb-sm q-mt-md">
                    {{ serv.nombre }}
                  </h2>
                  <p>
                    {{ serv.descripcion }}
                  </p>
                </div>
              </div>
            </q-card>
          </Tilt>
        </div>
        <div class="col-6 text-center">
          <h2 class="text-h3 text-white q-mt-md">¿Necesitas algo diferente?</h2>
          <q-btn
            label="Escribeme"
            icon-right="fa-solid fa-paper-plane"
            class="text-light q-pa-md"
            outline
            color="primary"
          />
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import { ref } from "vue";
//import TiltComponent from "./../components/tilt.vue";
import Tilt from "./tilt.vue";

export default {
  componens: {
    Tilt,
  },
  setup() {
    const options = {
      reverse: false,
      max: 35,
      startX: 0,
      startY: 0,
      perspective: 1000,
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      reset: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      glare: false,
      "max-glare": 1,
      "glare-prerender": false,
      // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
      "mouse-event-element": null,
      // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
    };
    const servicios = ref([
      {
        nombre: "sacarme los mocos",
        descripcion:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit architecto reprehenderit numquam vitae illum. Laborum excepturi consectetur ad quas enim esse perferendis.",
        icon: "fa-solid fa-laptop-file",
      },
      {
        nombre: "sacarme los mocos",
        descripcion:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit architecto reprehenderit numquam vitae illum. Laborum excepturi consectetur ad quas enim esse perferendis.",
        icon: "fa-solid fa-laptop-file",
      },
      {
        nombre: "sacarme los mocos",
        descripcion:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit architecto reprehenderit numquam vitae illum. Laborum excepturi consectetur ad quas enim esse perferendis.",
        icon: "fa-solid fa-laptop-file",
      },
      {
        nombre: "sacarme los mocos",
        descripcion:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit architecto reprehenderit numquam vitae illum. Laborum excepturi consectetur ad quas enim esse perferendis.",
        icon: "fa-solid fa-laptop-file",
      },
    ]);
    return { servicios, options };
  },
  components: { Tilt },
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
</style>
