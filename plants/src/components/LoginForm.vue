<template>
  <div class="splitter flex justify-center">
    <q-splitter class="mt-sm bordered" v-model="splitterModel" style="height: 100%; width: 100%;">

      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-white">
          <q-tab name="mails" icon="password" label="Entrar" />
          <q-tab name="alarms" icon="how_to_reg" label="Registrarse" />
          <q-tab name="admin" icon="how_to_reg" label="Admin" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
          <q-tab-panel name="mails">
            <q-form @submit="validate()" class="q-gutter-md">
              <q-input standout v-model="email" type="email" prefix="Email:" hint="Campo para correo electronico">
                <template v-slot:prepend>
                  <q-icon name="mail" color="green-10" />
                </template>
              </q-input>
              <q-input standout v-model="pasword" :type="isPwd ? 'password' : 'text'" hint="Campo para contrasenia"
                prefix="Contrasenia:">
                <template v-slot:prepend>
                  <q-icon name="password" color="green-10" />
                </template>
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"
                    color="green-10" />
                </template>
              </q-input>

              <div class="flex justify-center flat bordered">
                <q-btn label="Entrar" type="submit" color="green-10" class="q-ml-sm" square />
              </div>
            </q-form>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <q-form @submit="register()" class="q-gutter-md">
              <q-input standout v-model="email" type="email" prefix="Email:" hint="Campo para correo electronico">
                <template v-slot:prepend>
                  <q-icon name="mail" color="green-10" />
                </template>
              </q-input>
              <q-input standout v-model="pasword" :type="isPwd ? 'password' : 'text'" hint="Campo para contrasenia"
                prefix="Contrasenia:">
                <template v-slot:prepend>
                  <q-icon name="password" color="green-10" />
                </template>
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"
                    color="green-10" />
                </template>
              </q-input>

              <div class="flex justify-center flat bordered">
                <q-btn label="Registrarse" type="submit" color="green-10" class="q-ml-sm" square />
              </div>
            </q-form>
          </q-tab-panel>

          <q-tab-panel name="admin">
            <q-form @submit="admin()" class="q-gutter-md">
              <q-input standout v-model="email" type="email" prefix="Email:" hint="Campo para correo electronico">
                <template v-slot:prepend>
                  <q-icon name="mail" color="green-10" />
                </template>
              </q-input>
              <q-input standout v-model="pasword" :type="isPwd ? 'password' : 'text'" hint="Campo para contrasenia"
                prefix="Contrasenia:">
                <template v-slot:prepend>
                  <q-icon name="password" color="green-10" />
                </template>
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"
                    color="green-10" />
                </template>
              </q-input>

              <div class="flex justify-center flat bordered">
                <q-btn label="Administrar" type="submit" color="green-10" class="q-ml-sm" square />
              </div>
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const router = useRouter()
const email = ref('')
const number = ref(null)
const text = ref('')
const pasword = ref('')
const isPwd = ref(true)
const tab = ref('mails')
const splitterModel = ref(20)

const clean = () => {
  email.value = ""
  pasword.value = ""
}

const notify = () => {
  toast.error("Datos incorrectos!", { autoClose: 1000 })// ToastOptions
}

// LOGIN
// Get admins list and their credentials
const get = async () => {
  const query = await fetch('https://immika.pythonanywhere.com/api/usuarios/')
  return await query.json()
}

// Validate Credentials at login
const validate = async () => {
  const data = await get()
  for (let i = 0; i < data.length; i += 1) {
    const user = data[i]
    if (user.email === email.value && user.password === pasword.value) {
      router.push('index')
      return true
    }
  }
  notify()
  clean()
}

// Validate Credentials at admin login
const admin = async () => {
  if (email.value === "admin@gmail.com" && pasword.value === "admin") {
    router.push('admin')
    return true
  }
  notify()
  clean()
}

// Validate Credentials at login
const register = async () => {
  const data = {
    email: email.value,
    password: pasword.value
  }
  const query = await fetch(
    'https://immika.pythonanywhere.com/api/usuarios/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  if (query.status === 201) {
    toast.success("Registrado con exito!", { autoClose: 1000 })// ToastOptions
  } else {
    toast.error("Ha ocurrido un error!", { autoClose: 1000 })// ToastOptions
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
