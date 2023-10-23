<template>
  <q-layout view="lHh Lpr lFf" class="main-container">
    <q-header reveal elevated class="">
      <q-toolbar class="bg-teal-9">
        <div class="absolute-center flex">
          <q-avatar class="">
            <img
              src="https://imgs.search.brave.com/Un5mw-A8LI1I78IEPRQYgCsf-5EOu4tvHV3UYAAPERo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9uYXR1cmUt/YW5kLWVudmlyb25t/ZW50L2Vjby1mcmll/bmRseS1pY29uLnN2/Zw.svg">
          </q-avatar>

          <q-toolbar-title class="text-h5 lato-bold-italic">
            Blog de plantas
          </q-toolbar-title>
           </div>
           <router-link to="/" class="router-link"><q-btn class="absolute-bottom-right vertical-middle q-mr-sm q-mb-sm" flat round dense icon="home" /></router-link>
         </q-toolbar>
    </q-header>

<q-footer elevated class="bg-teal-10">
  <q-toolbar>
      <q-avatar class="q-ml-md">
        <img src="https://imgs.search.brave.com/Un5mw-A8LI1I78IEPRQYgCsf-5EOu4tvHV3UYAAPERo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9uYXR1cmUt/YW5kLWVudmlyb25t/ZW50L2Vjby1mcmll/bmRseS1pY29uLnN2/Zw.svg">
      </q-avatar>
      <q-toolbar-title class="text-h5">
        Blog de plantas
      </q-toolbar-title>
      <div>Todos los derechos reservados</div>
  </q-toolbar>
</q-footer>

    <q-page-container class="flex justify-center">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.main-container {
  max-width: 80%; /* Adjust as needed */
  margin: 0 auto; /* This centers the container */
}
</style>
