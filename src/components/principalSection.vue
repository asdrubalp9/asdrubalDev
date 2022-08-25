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
    </div>
    <div class="col-6">
      <h1 class="hero-text text-h4">
        Hola, Soy
        <span class="primary-text"> Drú</span>
        <span> Desarrollador creativo </span>
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
            outline
            rounded
            class="q-px-xl q-py-md text-weight-bold text-white"
            label="Sobre mí"
          />
        </div>
      </div>
    </div>
    <div class="col-5 text-right self-end">
      <img src="imgs/dru.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.hero-text {
  color: white;
}
.hero-text span.primary-text {
  color: var(--q-primary);
  display: block !important;
  line-height: 2em;
  font-size: 2em;
  font-weight: bolder;
}
</style>
