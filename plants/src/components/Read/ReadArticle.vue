<template>
  <div class="q-pa-md row items-start q-gutter-md q-pa-xl">
    <q-card class="article-card">
      <q-img :src="parts.image" class="article-image">
        <div class="absolute-bottom">
          <div class="text-h6 lato-bold-italic">{{ parts.plant }}</div>
          <div class="text-subtitle2">{{ parts.stf_name }}</div>
          <div class="text-subtitle2"></div>
        </div>
      </q-img>
      <q-card-section class="">
        <q-card-section>
          <p class="text-h6 lato-light text-bold">Descripcion</p>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <p class="text-body1 lato-light">
            {{ parts.description }}
          </p>
        </q-card-section>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-card-section>
          <p class="text-h6 lato-light text-bold">Origen</p>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <p class="text-body1 lato-light">
            {{ parts.origin }}
          </p>
        </q-card-section>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-card-section>
          <p class="text-h6 lato-light text-bold">Habitat</p>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <p class="text-body1 lato-light">
            {{ parts.habitat }}
          </p>
        </q-card-section>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-card-section>
          <p class="text-h6 lato-light text-bold">Usos</p>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <p class="text-body1 lato-light">
            {{ parts.use }}
          </p>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>

  <div class="q-pa-xl">
    <q-card class="article-card">
      <q-video class="video" src="https://www.youtube.com/watch?v=3agC6do-624&list=RDbFQCgcw3H4w&index=6" />
      <q-card-section>
        <div class="text-h6 text-left lato-light text-bold">Video sobre la: {{ parts.plant }}</div>
        <div class="text-subtitle">{{ parts.stf_name }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <p class="lato-light text-body1">
          {{ parts.description }}
        </p>
      </q-card-section>
    </q-card>

    <div class="qpa-xl q-mt-xl">
      <q-card>
        <q-card-section>
          <div class="text-h6 q-mb-none">Nos importa tu opinion!</div>
          <div class="text-subtitle2 q-mb-sm">Dejanos un comentario.</div>
          <Form :validation-schema='schema'>
            <CommentInput name="comment" v-model="field.comment" />
            <div class="flex justify-left">
              <q-btn color="green" label="Comentar" @click="validateArticle()" />
            </div>
          </Form>
        </q-card-section>
      </q-card>
    </div>

    <q-card class="article-card q-mb-md q-mt-xl">
      <q-card-section>
        <div class="text-h6 q-mb-none">Comentarios</div>
      </q-card-section>
      <q-separator inset />
      <div class="comments" v-for="c in commentList" :key="c.comment_id">
        <q-card-section>
          <div class="text-h6 text-left lato-light text-bold">Usuario {{ c.user_id }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p class="lato-light text-body1">
            {{ c.content }}
          </p>
        </q-card-section>
        <q-separator inset />
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Form } from 'vee-validate'
import * as yup from 'yup'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import CommentInput from 'src/components/Inputs/CommentInput.vue'
import { mainStore } from 'src/stores/main-store'

const store = mainStore()
const route = useRoute()
const id = route.params.id
const host = 'https://jfuton.pythonanywhere.com/'
const parts = ref({})
const commentList = ref({})
const field = ref({
  comment: ''
})

const schema = yup.object({
  comment: yup.string().required('Este campo no puede ir vacio')
    .min(5, 'Minimo 5 caracteres')
    .max(500, 'Maximo 500 caracteres')
})

const get = async () => {
  const query = await fetch(host + 'api/articles/' + id + '/')
  const answer = await query.json()
  parts.value = answer

  const query2 = await fetch(host + 'api/idcomments/' + id)
  const answer2 = await query2.json()
  commentList.value = answer2

  console.log(commentList.value)
}
const fields = ref({
  article_id: id,
  user_id: store.userId,
  content: ''
})

const postComment = async () => {
  fields.value.content = field.value.comment
  const query = await fetch(
    host + 'api/comments/',
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
    const query2 = await fetch(host + 'api/idcomments/' + id)
    const answer2 = await query2.json()
    commentList.value = []
    commentList.value = answer2
  } else {
    toast.error('Ha ocurrido un error!')// ToastOptions
  }
}

const validateArticle = () => {
  schema.validate(field.value).then((valid) => {
    postComment()
    field.value.comment = ''
  }).catch((err) => {
    toast.error('Rellene los campos!', { autoClose: 1000 })// ToastOptions
    console.log(err)
  })
}

onMounted(() => get())
</script>
