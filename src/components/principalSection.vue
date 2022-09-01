<template>
  <div class="row flex flex-center" style="height: 92vh" id="home">
    <div class="col-1 column flex">
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
    <div class="col-6 full-height flex justify-around column q-py-xl">
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
        <div class="col-6">
          <q-btn
            :label="t('contactMe')"
            color="primary"
            unelevated
            class="q-px-xl q-py-md text-weight-bold"
            icon-right="fa-solid fa-paper-plane"
          />
        </div>
        <div class="col-6">
          <q-btn
            flat
            rounded
            class="q-px-xl q-py-md text-weight-bold text-white"
            :label="t('aboutMe')"
            style="border: 1px solid white"
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
    <div class="col-5 full-height">
      <div class="row full-height">
        <div
          class="col-12 parallaxHolder full-height"
          data-relative-input="true"
        >
          <div class="main">
            <img src="imgs/dru.png" class="layer" data-depth="0.1" />
          </div>
          <div class="one">
            <div class="in layer" data-depth="0.14"></div>
          </div>
          <div class="two">
            <div class="in layer" data-depth="0.18"></div>
          </div>
          <div class="three">
            <div class="in layer" data-depth="0.22"></div>
          </div>
          <div class="four">
            <div class="in layer" data-depth="0.26"></div>
          </div>
          <div class="five">
            <div class="in layer" data-depth="0.3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Parallax from "parallax-js";
import { useI18n } from "vue-i18n";
export default {
  setup() {
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
      // const paraInstance = new Parallax(
      //   document.querySelector(".parallaxHolder"),
      //   {
      //     relativeInput: true,
      //     speed: 0.2,
      //     onInit: (instance) => {
      //       console.log("Parallax initialized", instance);
      //     },
      //   }
      // );
      // console.log("paraInstance", paraInstance);
    });
    return {
      skills,
      refSkills,
      t,
      locale,
      skillsEN,
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
  width: 100%;
}
.parallaxHolder .one {
  position: absolute;
  top: 150px;
  bottom: 150px;
  right: -55px;
  width: 380px;
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
  top: 235px;
  left: -110px;
  width: 80px;
  height: 110px;
  z-index: 2;
}
.parallaxHolder .four {
  position: absolute;
  width: 440px;
  height: 470px;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  z-index: -1;
}
.parallaxHolder .five {
  position: absolute;
  width: 50px;
  height: 70px;
  bottom: 32%;
  right: -180px;
}
</style>
