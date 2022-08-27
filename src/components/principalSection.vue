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
        <div class="skillzHolder">
          <p
            ref="refSkills"
            class="skillz q-ma-none inline"
            v-for="(skill, k) in skills"
            :key="k"
          >
            {{ skill }}
          </p>
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

    // function takeNext(palabra) {
    //   return !(
    //     palabra.parentElement.children[
    //       palabra.parentElement.children.length - 1
    //     ].innerText === palabra.innerText
    //   )
    //     ? palabra.nextElementSibling
    //     : palabra.parentElement.children[0];
    // }
    // function hideWord(word) {
    //   var nextWord = takeNext(word);
    //   switchWord(word, nextWord);
    //   setTimeout(function () {
    //     hideWord(nextWord);
    //   }, 2500);
    // }
    // function switchWord(oldWord, newWord) {
    //   oldWord.classList.remove("visible");
    //   oldWord.classList.add("is-hidden");
    //   newWord.classList.remove("is-hidden");
    //   newWord.classList.add("visible");
    // }
    // function switchSkills(skills) {
    //   skills.forEach((e, k) => {
    //     hideWord(e);
    //   });
    // }
    onMounted(() => {
      // animateMovingElement(".moveMe");
      //switchSkills(refSkills.value);
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
