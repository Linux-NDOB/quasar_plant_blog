<template>
  <div class="q-pa-md row items-start q-gutter-md q-mb-xl">
    <q-card class="my-card justify-center text-center" flat bordered>
      <q-card-section>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Planta alimenticia</div>
          <div class="text-h4 q-mt-sm q-mb-xs col-5 flex flex-center text-green">Jengibre</div>
        </q-card-section>

        <q-card-section class="col-3">
          <q-img
            class="rounded-borders my-image"
            src="https://images.pexels.com/photos/1337585/pexels-photo-1337585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :fit="mode"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round :icon="symOutlinedSignature" />
        <q-btn flat>
          Nombre comun:
        </q-btn>
        <q-btn flat>Jengibre </q-btn>
      </q-card-actions>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="badge" />
        <q-btn flat>
          Nombre cientifico:
        </q-btn>
        <q-btn flat>
          Zingiber officinale
        </q-btn>
      </q-card-actions>
       <q-separator />
      <q-card-actions>
        <q-btn flat round icon="diversity_2" />
        <q-btn flat>
          Familia botanica:
        </q-btn>
        <q-btn flat>
          Zingiberaceae
        </q-btn>
      </q-card-actions>
       <q-separator />
       <q-separator />
    </q-card>
    <q-separator />
    <q-card horizontal class="flex row justify-center text-center">
        <q-card-section>
        <q-btn flat round icon="nature_people" />
        <q-btn flat>
          Descripcion botanica:
        </q-btn>
        <p>El jengibre es una planta herbácea perenne que alcanza una altura de aproximadamente 1 metro. Tiene hojas lanceoladas y flores amarillas con manchas rojas.</p>
        </q-card-section>
    </q-card>
    <q-separator />
    <q-card horizontal class="flex row justify-center text-center">
        <q-card-section>
        <q-btn flat round icon="signpost" />
        <q-btn flat>
          Origen y distribucion:
        </q-btn>
        <p>El jengibre es una planta herbácea perenne que alcanza una altura de aproximadamente 1 metro. Tiene hojas lanceoladas y flores amarillas con manchas rojas.</p>
        </q-card-section>
    </q-card>
    <q-separator />
    <q-card horizontal class="flex row justify-center text-center">
        <q-card-section>
        <q-btn flat round icon="forest" />
        <q-btn flat>
          Habitat natural:
        </q-btn>
        <p>El jengibre es una planta herbácea perenne que alcanza una altura de aproximadamente 1 metro. Tiene hojas lanceoladas y flores amarillas con manchas rojas.</p>
        </q-card-section>
    </q-card>
    <q-separator />
    <q-card horizontal class="flex row justify-center text-center">
        <q-card-section>
        <q-btn flat round :icon="symOutlinedCooking" />
        <q-btn flat>
          Usos culinarios:
        </q-btn>
        <p>El jengibre es una planta herbácea perenne que alcanza una altura de aproximadamente 1 metro. Tiene hojas lanceoladas y flores amarillas con manchas rojas.</p>
        </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { symOutlinedSignature, symOutlinedCooking } from '@quasar/extras/material-symbols-outlined'
const lorem = ""
const mode = "contain"
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1000px
  height: 500px
  max-height: 100%
.my-image
  max-height: 150px
</style>
