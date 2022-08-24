<template>
  <q-page>
    <div class="row window-height flex flex-center">
      <div class="col-1 column "> 
        <q-icon
        name="fa-brands fa-twitter"
        class="text-white q-ma-sm"
        size="md"/>
        <q-icon
        name="fa-brands fa-facebook"
        class="text-white q-ma-sm"
        size="md"/>
      </div>
      <div class="col-6">
        <h1 class="hero-text text-h4">
          Hola, Soy
          <span class="primary-font">
            Asdrúbal Perez
          </span>
          <span>
            Desarrollador creativo
          </span>
        </h1>
        <div class="row">
          <div class="col-6">
            <q-btn
              label="Escribeme"
              color="primary"
              class="q-px-xl q-py-md text-weight-bold"
              icon-right="fa-solid fa-paper-plane"
            />
          </div>
          <div class="col-6">
            <q-btn
              flat
              class="q-px-xl q-py-md text-weight-bold text-white"
              label="Sobre mí"
            />
          </div>
        </div>
      </div>
      <div class="col-5">

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
<style>
  .hero-text {
    color:white;
  }
  .hero-text span.primary-font {
    color: var(--q-primary);
    display:block!important;
    line-height: 2em;
    font-size:2em;
    font-weight: bolder;
  }
</style>