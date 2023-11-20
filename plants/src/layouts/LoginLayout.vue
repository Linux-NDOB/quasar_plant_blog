<template>
  <q-layout view="lHh Lpr lFf" class="main-container">
    <q-header reveal elevated>
      <q-toolbar class="bg-black bottom-border">
        <q-toolbar-title>
          <q-img class="self-center" src="../assets/white.svg" style="width: 12%; max-height: 50px;"></q-img>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated class="bg-black">
      <q-toolbar>
        <q-toolbar-title>
          <q-img class="self-center" src="../assets/white.svg" style="width: 15%; max-height: 50px;"></q-img>
        </q-toolbar-title>
        <div>Todos los derechos reservados</div>
      </q-toolbar>
    </q-footer>

    <q-page-container class="flex justify-center align-items-center">
      <div class="background-image"></div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="sass">
.background-image
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-image: url('https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    background-size: fill
    background-position: center
    /* You can add more background properties as needed */
    z-index: -1 /* Ensure the background is behind the form inputs */
</style>
