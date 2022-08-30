<template>
  <div class="row flex flex-center q-pa-xl" style="height: 92vh" id="servicios">
    <div class="col-2"></div>
    <div class="col-8">
      <div class="row">
        <div class="col-6">
          <p class="text-primary text-h5 q-ma-none">
            {{ t("whatICanDoForyou") }}
          </p>
          <h2
            class="text-h2 primary-text text-weight-bold text-white q-mb-sm q-mt-lg"
          >
            {{ t("headServices") }}
          </h2>
          <p>
            {{ t("servicesContent") }}
          </p>
        </div>
        <div class="col-6 q-pa-md" v-for="(serv, k) in servicios" :key="k">
          <Tilt :parallax="false" :options="options" :tilt="serv.tilt">
            <q-card dark class="q-pa-md" style="transform: translateZ(20px)">
              <div class="row">
                <div
                  class="col relative service_icon"
                  style="position: relative"
                >
                  <q-icon
                    class="absolute-center"
                    :name="serv.icon"
                    style="font-size: 65px"
                  />
                  <img src="/imgs/service.png" class="absolute-center" />
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
          <h2 class="text-h3 text-white q-mt-md">
            {{ t("servicesContent2") }}
          </h2>
          <q-btn
            :label="t('contactMe')"
            icon-right="fa-solid fa-paper-plane"
            class="text-light q-pa-md"
            outline
            color="primary"
            @click="scrollPageTo('#contactame')"
          />
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
//import TiltComponent from "./../components/tilt.vue";
import Tilt from "./tiltComponent.vue";
import { useI18n } from "vue-i18n";
export default {
  componens: {
    Tilt,
  },
  setup() {
    const { t } = useI18n();
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
      glare: true,
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
    const options2 = {
      reverse: true,
      max: 35,
      startX: 0,
      startY: 0,
      perspective: 1000,
      scale: 1,
      speed: 300,
      transition: true,
      // axis: null,
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
    const scrollPageTo = (navEl) => {
      if (navEl) {
        let element = document.querySelector(`${navEl}`);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    };
    const servicios = ref([
      {
        nombre: computed(() => t("service1Title")),
        descripcion: computed(() => t("service1Desc")),
        tilt: true,
        icon: "fa-solid fa-laptop-file",
      },
      {
        nombre: computed(() => t("service2Title")),
        descripcion: computed(() => t("service2Desc")),
        tilt: true,
        icon: "fa-brands fa-searchengin",
      },
      {
        nombre: computed(() => t("service3Title")),
        descripcion: computed(() => t("service3Desc")),
        tilt: true,
        icon: "fa-brands fa-aws",
      },
      // {
      //   nombre: computed(() => t("service4Title")),
      //   descripcion: computed(() => t("service4Desc")),
      //   tilt: true,
      //   icon: "fa-solid fa-laptop-file",
      // },
    ]);
    return { servicios, options, options2, t };
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
.service_icon i {
  z-index: 5;
}
.service_icon img {
  opacity: 0.3;
  z-index: 1;
}
</style>
