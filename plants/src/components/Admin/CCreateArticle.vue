<template lang="pug">
Form(:validation-schema='schema' @submit="createArticle()")
  h2 Crear Articulo
  ClearableInput(:name="'plant'" v-model='fields.plant' prefix="Nombre:")
  ClearableInput(:name="'stf_name'" v-model='fields.stf_name' prefix="Nombre Cientifico:")
  <q-select clearable filled color="purple-12" v-model="fields.category" :options="options" label="Label" class="q-mb-md" :name="'category'" />
  TextAreaInput(:name="'description'" v-model='fields.description' label="Descripcion")
  TextAreaInput(:name="'origin'" v-model="fields.origin" label="Origen")
  TextAreaInput(:name="'use'" v-model="fields.use" label="Usos")
  TextAreaInput(:name="'habitat'" v-model="fields.habitat" label="Habitat")
  TextAreaInput(:name="'image'" v-model="fields.image" label="Link: Imagen")
  TextAreaInput(:name="'video'" v-model="fields.video" label="Link: Video")

  q-btn(type="submit" color="orange" label="Crear Articulo" class="q-mb-xl")
</template>

<script setup>
import { ref } from 'vue'
import ClearableInput from '../Inputs/ClearableInput.vue'
import TextAreaInput from '../Inputs/TextAreaInput.vue'
import * as yup from 'yup'
import { Form } from 'vee-validate'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const options = ['Ornamentales', 'Industriales', 'Medicinales', 'Alimenticias']

const schema = yup.object({
  plant: yup.string().required('Este campo no puede ir vacio'),
  stf_name: yup.string().required('Este campo no puede ir vacio'),
  description: yup.string().required('Este campo no puede ir vacio'),
  origin: yup.string().required('Este campo no puede ir vacio'),
  use: yup.string().required('Este campo no puede ir vacio'),
  habitat: yup.string().required('Este campo no puede ir vacio'),
  image: yup.string().required('Este campo no puede ir vacio'),
  video: yup.string().required('Este campo no puede ir vacio')
})

const fields = ref({
  plant: '',
  stf_name: '',
  category: '',
  description: '',
  origin: '',
  use: '',
  habitat: '',
  image: '',
  video: ''
})

const onItemClick = (e) => {
  fields.value.category = e
  console.log(fields.value.category)
}

const host = 'https://jfuton.pythonanywhere.com/'

// Validate Credentials at login
const createArticle = async () => {
  const query = await fetch(
    host + 'api/articles/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields.value)
    }
  )
  if (query.status === 201) {
    toast.success('Registrado con exito!')
  } else {
    toast.error('Ha ocurrido un error!')// ToastOptions
  }
}
</script>
