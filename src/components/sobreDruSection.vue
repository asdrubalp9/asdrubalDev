<template>
  <div class="row flex flex-center bg-darker" id="dru">
    <div class="col-4 full-height gt-md">
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
    <div class="col-11 col-md-4 aboutContent">
      <p class="text-primary text-h5 q-ma-none">{{ t("aboutMe") }}</p>
      <h2 class="text-h2 text-white q-mb-sm q-mt-md">
        {{ t("i") }}
        <span
          class="text-primary text-weight-bold text-h1 primary-text dru_primaryName"
        >
          <br />
          Asdrúbal Pérez
          <br />
        </span>
        <span class="text-white text-h3 Dru_title">
          {{ t("creativeDeveloper") }}
        </span>
      </h2>
      <p class="text-white text-h4 q-ma-none q-mb-md">
        {{ t("in") }} Santiago de Chile
      </p>
      <p class="aboutText">
        {{ t("aboutMeText1") }}
      </p>
      <p class="aboutText">
        {{ t("aboutMeText2") }}
      </p>
      <p class="aboutText">
        {{ t("aboutMeText3") }}
      </p>
      <q-btn
        color="primary"
        rounded
        icon-right="fa-solid fa-cloud-arrow-down"
        :label="t('headDownloadCV')"
        unelevated
        class="text-weight-bold aboutContactBtn"
        style="border: 2px solid white"
      />
    </div>
    <div class="col-4 text-right self-end hidden"></div>
  </div>
</template>

<script>
import { animateMovingElement } from "./../composables/movingEffect.js";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t } = useI18n();
    onMounted(() => {
      animateMovingElement(".moveMe");
    });
    return { t };
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
#dru {
  height: 92vh;
}
@media (max-width: 768px) {
  #dru {
    height: unset;
    padding-top: 2em;
    padding-bottom: 2em;
  }
  .aboutContent {
    padding: 1em;
  }
  #dru p {
    text-align: justify;
  }
  .dru_primaryName {
    font-size: 1em;
    line-height: 1em;
  }
  .aboutContactBtn {
    width: 100%;
    padding: 1em;
    margin-top: 1em;
  }
  .Dru_title {
    font-size: 0.7em !important;
    line-height: 0.1em;
  }
}
</style>
