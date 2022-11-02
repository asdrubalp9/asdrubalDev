<template>
  <div
    class="row flex flex-center overflow-hidden"
    style="height: 92vh"
    id="home"
  >
    <div class="col-1 column flex gt-md">
      <!--
        <q-icon
          name="fa-brands fa-twitter"
          class="text-white q-ma-sm"
          size="md"
        />
        <q-icon
          name="fa-brands fa-facebook"
          class="text-white q-ma-sm"
          size="md"
        />
      -->
      <a href="https://www.linkedin.com/in/asdrubalp09/">
        <q-icon
          name="fa-brands fa-linkedin"
          class="text-white q-ma-sm"
          size="md"
        />
      </a>
    </div>
    <div
      class="col-11 col-md-6 col-sm-11 full-height flex justify-around column q-py-xl"
    >
      <h1 class="hero-text text-h4">
        {{ t("homeTitle") }}
        <span class="primary-text"> Drú</span>
        <div class="skillzHolder rotate-1" v-show="locale === 'es'">
          <span class="cd-words-wrapper">
            <b
              ref="refSkills"
              class="q-ma-none refSkills absolute text-h2 primary-text text-h1"
              v-for="(skill, k) in skills"
              :key="k"
              :class="k === 0 ? 'is-visible' : ''"
            >
              {{ skill }}
            </b>
          </span>
        </div>
        <div class="skillzHolder rotate-1" v-show="locale === 'en-US'">
          <span class="cd-words-wrapper">
            <b
              ref="refSkills"
              class="q-ma-none refSkills absolute text-h2 primary-text text-h1"
              v-for="(skill, k) in skillsEN"
              :key="k"
              :class="k === 0 ? 'is-visible' : ''"
            >
              {{ skill }}
            </b>
          </span>
        </div>
      </h1>
      <div class="row">
        <div class="col-12 col-md-6 flex justify-center">
          <q-btn
            :label="t('contactMe')"
            color="primary"
            unelevated
            class="q-px-xl self-center q-py-md text-weight-bold contactMeBtnHome"
            icon-right="fa-solid fa-paper-plane"
            @click="scrollPageTo('#contactame')"
          />
        </div>
        <div class="col-12 col-md-6 flex justify-center">
          <q-btn
            flat
            rounded
            class="q-px-xl self-center q-py-md text-weight-bold text-white aboutMeBtnHome"
            :label="t('aboutMe')"
            style="border: 1px solid white"
            @click="scrollPageTo('#dru')"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <a
            class="text-white primary-text text-h4"
            href="mailto:asdrubaldev@gmail.com"
            style="text-decoration: none"
          >
            asdrubaldev@gmail.com
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-5 gt-sm full-height">
      <div class="row full-height">
        <div
          class="col-12 parallaxHolder full-height position-relative"
          data-relative-input="true"
        >
          <div class="main">
            <img
              src="imgs/druportrait.png"
              class="layer moveMe"
              data-direction="x"
              data-reverse="yes"
              style="width: 93%"
            />
          </div>
          <Tilt
            clases="full-width full-height absolute"
            :style="'top:0'"
            :parallax="true"
            :options="options"
          >
            <div class="one">
              <div
                class="in layer moveMe rounded-borders-lg"
                data-direction="y"
                data-reverse="no"
              ></div>
            </div>
          </Tilt>
          <Tilt
            clases="full-width full-height absolute"
            :style="'top:0'"
            :parallax="true"
            :options="options"
          >
            <div class="two">
              <div
                class="in layer moveMe rounded-borders-lg"
                data-direction="x"
                data-reverse="yes"
              ></div>
            </div>
          </Tilt>
          <Tilt
            clases="full-width full-height absolute"
            :style="'top:0;'"
            :parallax="true"
            :options="options"
          >
            <div class="three">
              <div
                class="in layer moveMe"
                data-direction="x"
                data-reverse="no"
              ></div>
            </div>
          </Tilt>
          <Tilt
            clases="full-width full-height absolute"
            :style="'top:0; z-index: 6'"
            :parallax="true"
            :options="options"
            ><div class="four">
              <div
                class="in layer moveMe rounded-borders-lg"
                data-direction="y"
                data-reverse="yes"
                style="border: 7px solid white; background-color: transparent"
              ></div></div
          ></Tilt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { animateMovingElement } from "./../composables/movingEffect.js";
import Tilt from "./tiltComponent.vue";
import { useI18n } from "vue-i18n";
import scrollPageTo from "src/composables/scrollPageTo.js";
export default {
  components: {
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
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
    };

    const { locale } = useI18n({ useScope: "global" });
    const { t } = useI18n();
    const refSkills = ref(null);
    // const skills = ref([creativeDeveloper, cloudArchitect, headlineSEO]);
    const skills = ref([
      "Desarrollador creativo",
      "Arquitecto de cloud",
      "Asesor SEO",
    ]);
    const skillsEN = ref([
      "Creative developer",
      "Cloud architect",
      "SEO consultant",
    ]);
    var animationDelay = 2500,
      //loading bar effect
      barAnimationDelay = 3800,
      barWaiting = barAnimationDelay - 3000; //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect

    function animateHeadline(headlines) {
      var duration = animationDelay;
      headlines.forEach(function (headline) {
        if (headline.classList.contains("loading-bar")) {
          duration = barAnimationDelay;
          setTimeout(function () {
            headline
              .querySelector(".cd-words-wrapper")
              .classList.add("is-loading");
          }, barWaiting);
        } else if (headline.classList.contains("clip")) {
          var spanWrapper = headline.querySelector(".cd-words-wrapper"),
            newWidth = spanWrapper.width() + 10;
          spanWrapper.css("width", newWidth);
        } else if (!headline.classList.contains("type")) {
          //assign to .cd-words-wrapper the width of its longest word
          var words = headline.querySelectorAll(".cd-words-wrapper b");

          const width = 0;
          words.forEach(function (e) {
            var wordWidth = e.innerWidth;
            if (wordWidth > width) width = wordWidth;
          });
          headline.querySelector(".cd-words-wrapper").style.width = width;
        }

        //trigger animation
        setTimeout(function () {
          hideWord(headline.querySelector(".is-visible"));
        }, duration);
      });
    }
    function hideWord(word) {
      var nextWord = takeNext(word);
      switchWord(word, nextWord);
      setTimeout(function () {
        hideWord(nextWord);
      }, 2500);
    }

    function takeNext(palabra) {
      return !(
        palabra.parentElement.children[
          palabra.parentElement.children.length - 1
        ].innerText === palabra.innerText
      )
        ? palabra.nextElementSibling
        : palabra.parentElement.children[0];
    }

    function switchWord(oldWord, newWord) {
      oldWord.classList.remove("is-visible");
      oldWord.classList.add("is-hidden");
      newWord.classList.remove("is-hidden");
      newWord.classList.add("is-visible");
    }

    onMounted(() => {
      animateHeadline(document.querySelectorAll(".skillzHolder"));
      onMounted(() => {
        animateMovingElement(".moveMe");
      });
    });
    return {
      skills,
      refSkills,
      t,
      locale,
      skillsEN,
      options,
      scrollPageTo,
    };
  },
};
</script>
<style>
.hero-text {
  color: white;
}
.skillzHolder {
  height: 40px;
  position: relative;
}
.hero-text span.primary-text {
  color: var(--q-primary);
  display: block !important;
  line-height: 2em;
  font-size: 2em;
  font-weight: bolder;
}
.parallaxHolder {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: relative;
}
.parallaxHolder .in {
  background-color: #ea4343;
  width: 100%;
  height: 100%;
}
.parallaxHolder .main {
  position: absolute;
  right: 0px;
  bottom: -10px;
  z-index: 2;
  width: 100%;
}
.one .in {
  background: #ffffff;
}
.parallaxHolder .one {
  position: absolute;
  top: 150px;
  bottom: 208px;
  right: 25%;
  width: 354px;
  z-index: -4;
}
.parallaxHolder .two {
  position: absolute;
  bottom: 80px;
  left: -70px;
  width: 180px;
  height: 180px;
  z-index: 2;
}
.parallaxHolder .three {
  position: absolute;
  top: 340px;
  left: 8%;
  width: 200px;
  height: 200px;
  z-index: 2;
}
.parallaxHolder .four {
  position: absolute;
  width: 306px;
  height: 288px;
  bottom: -13%;
  transform: translateY(-50%);
  left: 0;
  z-index: 4;
}
.parallaxHolder .five {
  position: absolute;
  width: 50px;
  height: 70px;
  bottom: 32%;
  right: -180px;
}
@media (max-width: 768px) {
  .parallaxHolder .one {
    width: 280px;
  }
  .parallaxHolder .two {
    width: 180px;
    height: 180px;
  }
  .parallaxHolder .three {
    width: 80px;
    height: 110px;
  }
  .parallaxHolder .four {
    width: 340px;
    height: 370px;
  }
  .parallaxHolder .five {
    width: 50px;
    height: 70px;
  }
  .skillzHolder {
    width: 80%;
  }
  #home a.text-h4 {
    font-size: 23px;
  }
  .contactMeBtnHome,
  .aboutMeBtnHome {
    width: 100%;
  }
  .aboutMeBtnHome {
    margin-top: 1em;
  }
}
</style>
