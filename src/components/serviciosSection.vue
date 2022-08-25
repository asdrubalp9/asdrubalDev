<template>
  <div class="row flex flex-center" style="height: 92vh" id="servicios">
    <div class="col-2"></div>
    <div class="col-8">
      <div class="row">
        <div class="col-6">
          <p class="text-primary text-h5 q-ma-none">Sobre mí</p>
          <h2
            class="text-h2 primary-text text-weight-bold text-white q-mb-sm q-mt-md"
          >
            Servicios
          </h2>
          <p>
            Ofrecemos productos de alta calidad a precios competitivos. Nuestro
            principal objetivo es la satisfacción del cliente, que obtenemos a
            través de la orientación al mercado del servicio y soporte continuo.
          </p>
        </div>
        <div class="col-6 q-pa-md" v-for="(serv, k) in servicios" :key="k">
          <q-card dark class="q-pa-md">
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
export default {
  setup() {
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
    return { servicios };
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
</style>
