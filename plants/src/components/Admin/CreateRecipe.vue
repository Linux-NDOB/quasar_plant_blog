<template lang="pug">
Form(:validation-schema='schema' @submit="createRecipe()")
    h2 Crear Receta
    ClearableInput(:name="'title'" v-model='fields.title' prefix="Titulo:")
    TextAreaInput(:name="'content'" v-model='fields.content' label="Contenido")
    TextAreaInput(:name="'image'" v-model="fields.image" label="Link: Imagen")

    q-btn(type="submit" color="orange" label="Crear Receta" class="q-mb-xl")
</template>

<script setup>
import { ref } from 'vue'
import ClearableInput from '../Inputs/ClearableInput.vue'
import TextAreaInput from '../Inputs/TextAreaInput.vue'
import * as yup from 'yup'
import { Form } from 'vee-validate'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const schema = yup.object({
  title: yup.string().required('Este campo no puede ir vacio'),
  content: yup.string().required('Este campo no puede ir vacio'),
  image: yup.string().required('Este campo no puede ir vacio')
})

const fields = ref({
  title: '',
  content: '',
  imagen: ''
})

const host = 'https://jfuton.pythonanywhere.com/'

// Validate Credentials at login
const createRecipe = async () => {
  const query = await fetch(
    host + 'api/recipes/',
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
