<template lang="pug">
.splitter.flex.justify-center
  q-splitter.mt-sm.bordered(v-model="splitterModel", style="height: 100%; width: 100%")

    template(v-slot:before)
      q-tabs(v-model="tab" vertical class="text-white")
        q-tab(name="mails" icon="password" label="Entrar")
        q-tab(name="alarms" icon="how_to_reg" label="Registrarse")
        q-tab(name="admin" icon="how_to_reg" label="Admin")

    template(v-slot:after)
      q-tab-panels(v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up")
        q-tab-panel(name="mails")
          Form(:validation-schema='userSchema' @submit='validateUser()')
            EmailInput(:name="'email'" v-model='email')
            PasswordInput(:name="'password'" v-model='password')
            div.flex.justify-center
              q-btn(label="Entrar" type="submit" color="green-10" square)

        q-tab-panel(name="alarms")
          Form(:validation-schema='registerSchema' @submit='registerUser()')
            EmailInput(:name="'email'" v-model='registerEmail')
            PasswordInput(:name="'password'" v-model='registerPassword')
            div.flex.justify-center.flat.bordered.mb-4
              q-btn(label="Registrarse" type="submit" color="green-10" class="mb-sm" square)

        q-tab-panel(name="admin")
          Form(:validation-schema='adminSchema' @submit='validateAdmin()')
            EmailInput(:name="'email'" v-model='adminEmail')
            PasswordInput(:name="'password'" v-model='adminPassword')
            div.flex.justify-center.flat.bordered
              q-btn(label="Administrar" type="submit" color="green-10" class="q-ml-sm" square)
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { Form } from 'vee-validate'
import * as yup from "yup"
import EmailInput from "../components/Inputs/EmailInput.vue"
import PasswordInput from "../components/Inputs/PasswordInput.vue"
import { mainStore } from 'src/stores/main-store'

const store = mainStore()

const userSchema = yup.object({
  email: yup.string().required('Este campo no puede ir vacio')
    .email('Ingrese un email valido').min(12, 'Minimo 12 caracteres')
    .max(30, 'Maximo 30 caracteres'),
  password: yup.string().required('Este campo no puede ir vacio')
    .min(8, 'Minimo 8 caracteres')
    .max(20, 'Maximo 20 caracteres')
})

const registerSchema = yup.object({
  email: yup.string().required('Este campo no puede ir vacio')
    .email('Ingrese un email valido').min(12, 'Minimo 12 caracteres')
    .max(30, 'Maximo 30 caracteres'),
  password: yup.string().required('Este campo no puede ir vacio')
    .min(8, 'Minimo 8 caracteres')
    .max(20, 'Maximo 20 caracteres')
})

const adminSchema = yup.object({
  email: yup.string().required('Este campo no puede ir vacio')
    .email('Ingrese un email valido').min(12, 'Minimo 12 caracteres')
    .max(30, 'Maximo 30 caracteres'),
  password: yup.string().required('Este campo no puede ir vacio')
    .min(5, 'Minimo 5 caracteres')
    .max(20, 'Maximo 20 caracteres')
})

const router = useRouter()
const email = ref('')
const number = ref(null)
const text = ref('')
const password = ref('')
const isPwd = ref(true)
const tab = ref('mails')
const splitterModel = ref(20)
const registerEmail = ref('')
const adminEmail = ref('')
const registerPassword = ref('')
const adminPassword = ref('')
const host = 'https://jfuton.pythonanywhere.com/'

const clean = () => { email.value = ''; password.value = '' }

const notify = () => { toast.error("Datos incorrectos!", { autoClose: 1000 }) }
// LOGIN
const get = async () => {
  const query = await fetch(host + 'api/users/')
  return await query.json()
}

const getAdmin = async () => {
  const query = await fetch(host + 'api/admins/')
  return await query.json()
}

// Validate Credentials at login
const validateUser = async () => {
  const data = await get()
  for (let i = 0; i < data.length; i += 1) {
    const user = data[i]
    if (user.email === email.value && user.password === password.value) {
      store.setUser(user.user_id)
      router.push('index')
      return true
    }
  }
  notify()
  clean()
}

// Validate Credentials at admin login
const validateAdmin = async () => {
  const data = await getAdmin()
  for (let i = 0; i < data.length; i += 1) {
    const user = data[i]
    if (user.email === adminEmail.value && user.password === adminPassword.value) {
      router.push('admin')
      return true
    }
  }
  notify()
  clean()
}

// Validate Credentials at login
const registerUser = async () => {
  const data = {
    email: registerEmail.value,
    password: registerPassword.value
  }
  const query = await fetch(
    host + 'api/users/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  if (query.status === 201) {
    toast.success('Registrado con exito!', { autoClose: 1000 })
  } else {
    toast.error('Ha ocurrido un error!', { autoClose: 1000 })// ToastOptions
  }

  clean()
}

</script>

<style lang="sass" scoped>
.splitter
  margin-top: 9%
  margin-bottom: -5%
.my-card
  width: 150%
</style>
