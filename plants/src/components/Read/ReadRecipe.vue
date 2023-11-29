<template>
  <div class="q-pa-md row items-start q-gutter-md q-pa-xl">
    <q-card class="article-card">
      <q-img :src="parts.image" class="article-image">
        <div class="absolute-bottom">
          <div class="text-h6 lato-bold-italic">{{ parts.title }}</div>
          <div class="text-subtitle2"></div>
        </div>
      </q-img>
      <q-card-section class="">
        <q-card-section>
          <p class="text-h6 lato-light text-bold">Receta</p>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <p class="text-body1 lato-light">
            {{ parts.content }}
          </p>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Form } from 'vee-validate'
import * as yup from 'yup'

const route = useRoute()
const id = route.params.id
const host = 'https://jfuton.pythonanywhere.com/'

const parts = ref({})

const get = async () => {
  const query = await fetch(host + 'api/recipes/' + id + '/')
  const answer = await query.json()
  console.log(answer)
  parts.value = answer
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

onMounted(() => get())

</script>
