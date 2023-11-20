<template>
  <q-layout view="lHh Lpr lFf" class="main-container">
    <q-header reveal elevated class="">
      <q-toolbar class="bg-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="q-mr-md q-ml-md"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <q-img class="self-center" src="../assets/white.svg" style="width: 30%; max-height: 50px;"></q-img>
        </q-toolbar-title>
        <q-toolbar-title>
          <div>Administrador</div>
        </q-toolbar-title>
        <router-link to="/" class="router-link"><q-btn class="absolute-bottom-right vertical-middle q-mr-sm q-mb-sm bg-white" flat
            round dense icon="logout" /></router-link>
         </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 0px; border-right: 1px solid #ddd">
        <q-list bordered class="rounded-borders">
          <q-item clickable v-ripple>
              <q-item-section>
                  <router-link to="/index" class="router-link text-bold"> Opciones de Administrador</router-link>
              </q-item-section>
            </q-item>

              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="description" />
              </q-item-section>

              <q-item-section>
                  <router-link to="/index" class="router-link"> Gestionar Articulos</router-link>
              </q-item-section>
            </q-item>
        <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="compost" />
              </q-item-section>

              <q-item-section>
              <router-link to="/recipes" class="router-link"> Gestionar recetas</router-link>
              </q-item-section>
            </q-item>
        <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="newspaper" />
              </q-item-section>
              <q-item-section>
              <router-link to="/article" class="router-link"> Crear articulo</router-link>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="yard" />
              </q-item-section>
              <q-item-section>
              <router-link to="/article" class="router-link"> Crear Receta</router-link>
              </q-item-section>
            </q-item>

       <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedLogout" />
              </q-item-section>
              <q-item-section><router-link to="/" class="router-link"> Abandonar sitio</router-link></q-item-section>
            </q-item>
    </q-list>
      </q-scroll-area>
    </q-drawer>

<q-footer elevated class="bg-black">
  <q-toolbar>
    <q-toolbar-title>
          <q-img class="self-center" src="../assets/white.svg" style="width: 20%; max-height: 60px;"></q-img>
        </q-toolbar-title>
      <div>Todos los derechos reservados</div>
  </q-toolbar>
</q-footer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { symOutlinedPottedPlant, symOutlinedNutrition, symOutlinedMenuBook, symOutlinedReceiptLong, symOutlinedLogout, symOutlinedSettings, symOutlinedArticle } from '@quasar/extras/material-symbols-outlined'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.main-container {
  max-width: 80%; /* Adjust as needed */
  margin: 0 auto; /* This centers the container */
}
</style>
