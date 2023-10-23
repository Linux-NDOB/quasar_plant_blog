<template>
  <q-card class="q-pa-md my-card q-mt-sm q-mb-xl-lg" flat bordered>
    <div class="q-gutter-y-md column" style="max-width: 400px">
    <div class="bg-teal-9">
        <div class="flex row justify-center text-center items-center">
          <div class="">
            <img
              class="form-image"
              src="https://imgs.search.brave.com/Un5mw-A8LI1I78IEPRQYgCsf-5EOu4tvHV3UYAAPERo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9uYXR1cmUt/YW5kLWVudmlyb25t/ZW50L2Vjby1mcmll/bmRseS1pY29uLnN2/Zw.svg" >
          </div>

          <h5 class="text-white">
            Blog de plantas
          </h5>
           </div>
         </div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <q-input standout v-model="email" type="text" prefix="Usuario:" hint="Campo para nombre de usuario">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input standout v-model="email" type="email" prefix="Email:" suffix="@gmail.com" hint="Campo para correo electronico">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>
      <q-input standout v-model="password" :type="isPwd ? 'password' : 'text'" hint="Campo para contrasenia" prefix="Contrasenia:">
      <template v-slot:prepend>
          <q-icon name="password" />
        </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div class="flex justify-center flat bordered">
        <router-link to="/index" class="router-link"><q-btn label="Entrar" type="reset" color="positive" class="q-ml-sm" /></router-link>
        <router-link to="/register" class="router-link"><q-btn label="Registrarse" type="reset" color="positive" class="q-ml-sm" /></router-link>
      </div>
    </q-form>
    </div>
  </q-card>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      email: ref(''),
      number: ref(null),
      text: ref(''),
      pasword: ref(''),
      isPwd: ref(true)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
