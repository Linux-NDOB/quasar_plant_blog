<template lang="pug">
Form(:validation-schema='schema')
    h2 Editar Receta
    ClearableInput(:name="'title'" v-model='fields.title' prefix="Titulo:")
    TextAreaInput(:name="'content'" v-model='fields.content' label="Contenido")
    TextAreaInput(:name="'image'" v-model="fields.image" label="Link: Imagen")

    q-btn(@click="validateArticle()" color="orange" label="Editar Receta" class="q-mb-xl")
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ClearableInput from '../Inputs/ClearableInput.vue'
import TextAreaInput from '../Inputs/TextAreaInput.vue'
import * as yup from 'yup'
import { Form } from 'vee-validate'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = route.params.id

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
const editArticle = async () => {
  const query = await fetch(
    host + 'api/recipes/' + article + '/',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields.value)
    }
  )
  if (query.status >= 200 && query.status < 300) {
    toast.success('Actualizado con exito!')
  } else {
    toast.error('Ha ocurrido un error!')// ToastOptions
  }
}

const getArticle = async () => {
  const request = await fetch(`http://localhost:8000/api/recipes/${article}/`)
  const answer = await request.json()
  console.log(answer)
  fields.value = answer
}

const validateArticle = () => {
  schema.validate(fields.value).then((valid) => {
    editArticle()
  }).catch((err) => {
    toast.error('Ha ocurrido un error!', { autoClose: 1000 })// ToastOptions
    console.log(err)
  })
}

onMounted(() => {
  getArticle()
})

</script>
