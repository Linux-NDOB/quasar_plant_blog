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
          <q-img class="self-center" src="../assets/white.svg" style="width: 12%; max-height: 50px;"></q-img>
        </q-toolbar-title>
        <router-link to="/index" class="router-link"><q-btn class="absolute-bottom-right vertical-middle q-mr-sm q-mb-sm bg-white" flat
            round dense icon="home" /></router-link>
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
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                  <router-link to="/index" class="router-link"> Inicio</router-link>
              </q-item-section>
            </q-item>
      <q-expansion-item
        expand-separator
        icon="compost"
        label="Categorias"
        caption="Busque las plantas clasificadas por su utilidad"
        default-opened
       :content-inset-level="0.5"
      >
      <q-card>
              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedNutrition" />
              </q-item-section>

              <q-item-section>
                <router-link to="/foods" class="router-link"> Alimenticias</router-link>
              </q-item-section>
            </q-item>
            </q-card>
      <q-card>
              <q-item clickable v-ripple>
              <q-item-section avatar class="">
                <q-icon name="medical_services" />
              </q-item-section>

              <q-item-section>
                <router-link to="/medic" class="router-link"> Medicinales</router-link>
              </q-item-section>
            </q-item>
            </q-card>
       <q-card>
              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedPottedPlant" />
              </q-item-section>

              <q-item-section>
                <router-link to="/ornamental" class="router-link"> Ornamentales</router-link>
              </q-item-section>
            </q-item>
            </q-card>
       <q-card>
              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="forest" />
              </q-item-section>

              <q-item-section>
                <router-link to="/industry" class="router-link"> Industriales</router-link>
              </q-item-section>
            </q-item>
            </q-card>
      </q-expansion-item>
        <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedReceiptLong" />
              </q-item-section>

              <q-item-section>
              <router-link to="/recipes" class="router-link"> Listado de recetas</router-link>
              </q-item-section>
            </q-item>
        <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedArticle" />
              </q-item-section>
              <q-item-section>
              <router-link to="/article" class="router-link"> Ejemplo de articulo</router-link>
              </q-item-section>
            </q-item>
        <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedSettings" />
              </q-item-section>

              <q-item-section>
                <router-link to="/settings" class="router-link"> Ajustes</router-link>
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
          <q-img class="self-center" src="../assets/white.svg" style="width: 15%; max-height: 60px;"></q-img>
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
