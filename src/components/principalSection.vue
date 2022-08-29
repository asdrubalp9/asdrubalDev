<template>
  <div class="row flex flex-center" style="height: 92vh" id="home">
    <div class="col-1 column flex">
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
      <a href="https://www.linkedin.com/in/asdrubalp09/">
        <q-icon
          name="fa-brands fa-linkedin"
          class="text-white q-ma-sm"
          size="md"
        />
      </a>
    </div>
    <div class="col-6 full-height flex justify-between column q-py-xl">
      <h1 class="hero-text text-h4">
        Hola, Soy
        <span class="primary-text"> Drú</span>
        <div class="skillzHolder rotate-1">
          <span class="cd-words-wrapper">
            <b
              ref="refSkills"
              class="q-ma-none refSkills absolute text-h2"
              v-for="(skill, k) in skills"
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
            label="Escribeme"
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
            label="Sobre mí"
            style="border: 1px solid white"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <a
            class="text-white primary-text"
            href="mailto:asdrubaldev@gmail.com"
            style="text-decoration: none"
          >
            asdrubaldev@gmail.com
          </a>
        </div>
      </div>
    </div>
    <div class="col-5 text-right self-end">
      <img src="imgs/dru.png" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const refSkills = ref(null);
    const skills = ["Desarrollador Creativo", "Cloud architect", "SEO"];
    var animationDelay = 2500,
      //loading bar effect
      barAnimationDelay = 3800,
      barWaiting = barAnimationDelay - 3000; //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect

    function animateHeadline(headlines) {
      var duration = animationDelay;
      console.log("headlines", headlines);
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

    function showLetter($letter, $word, $bool, $duration) {
      $letter.classList.add("in").removeClass("out");

      if (!$letter.is(":last-child")) {
        setTimeout(function () {
          showLetter($letter.next(), $word, $bool, $duration);
        }, $duration);
      } else {
        if ($word.parents(".cd-headline").classList.contains("type")) {
          setTimeout(function () {
            $word.parents(".cd-words-wrapper").classList.add("waiting");
          }, 200);
        }
        if (!$bool) {
          setTimeout(function () {
            hideWord($word);
          }, animationDelay);
        }
      }
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

    function takePrev($word) {
      return !$word.is(":first-child")
        ? $word.prev()
        : $word.parent().children().last();
    }

    function switchWord(oldWord, newWord) {
      oldWord.classList.remove("is-visible");
      oldWord.classList.add("is-hidden");
      newWord.classList.remove("is-hidden");
      newWord.classList.add("is-visible");
    }

    onMounted(() => {
      animateHeadline(document.querySelectorAll(".skillzHolder"));
    });
    return {
      skills,
      refSkills,
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
</style>
