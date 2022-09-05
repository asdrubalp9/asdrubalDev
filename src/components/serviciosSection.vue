<template>
  <div class="row flex justify-center q-pa-xl" id="servicios">
    <div class="col-md-11 col-lg-8">
      <div class="row">
        <div class="col-md-6">
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
        <div
          class="col-md-6 q-pa-md servicios_cardParent"
          v-for="(serv, k) in servicios"
          :key="k"
        >
          <Tilt
            :parallax="false"
            :options="options"
            :tilt="serv.tilt"
            class="full-height"
          >
            <q-card
              dark
              class="q-pa-md full-height"
              style="transform: translateZ(20px)"
            >
              <div class="row">
                <div class="col relative service_icon">
                  <q-icon
                    class="absolute-center"
                    :name="serv.icon"
                    style="font-size: 65px"
                  />
                  <img src="/imgs/service.png" class="absolute-center" />
                </div>
                <div class="col-md-9">
                  <h2 class="text-h4 text-white q-mb-sm q-mt-md tituloServicio">
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
        <div class="col-12 text-center servicios_cardParent">
          <h2 class="text-h3 text-white q-mt-md">
            {{ t("servicesContent2") }}
          </h2>
          <q-btn
            :label="t('contactMe')"
            icon-right="fa-solid fa-paper-plane"
            class="text-light q-pa-md Servicios_BtnContacto"
            outline
            color="primary"
            @click="scrollPageTo('#contactame')"
          />
        </div>
      </div>
    </div>
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
      glare: false,
      "max-glare": 0,
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
      {
        nombre: computed(() => t("service4Title")),
        descripcion: computed(() => t("service4Desc")),
        tilt: true,
        icon: "fa-regular fa-lightbulb",
      },
      {
        nombre: computed(() => t("service5Title")),
        descripcion: computed(() => t("service5Desc")),
        tilt: true,
        icon: "fa-solid fa-handshake-angle",
      },
    ]);
    return { servicios, options, options2, t, scrollPageTo };
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
#servicios {
  min-height: 92vh;
}
.service_icon {
  position: relative;
}
@media (max-width: 768px) {
  .servicios_cardParent {
    margin-top: 5em;
  }
  .service_icon {
    height: 200px;
    border-radius: 100%;
    background: #1d1d1d;
    position: absolute;
    top: -92px;
    padding: 104px;
    z-index: -1;
    width: 200px !important;
    left: 50%;
    transform: translateX(-50%);
  }
  #servicios {
    padding-top: 2em;
    padding-bottom: 2em;
    height: unset;
  }
  .tituloServicio {
    margin-top: 2em;
  }
  #servicios .tiltMe {
    margin-top: 5em;
  }
  .Servicios_BtnContacto {
    width: 100%;
  }
}
</style>
