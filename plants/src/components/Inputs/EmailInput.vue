<template>
  <q-input standout v-model="value" type="email" prefix="Correo:" hint="Ingrese su correo" :error-message="errorMessage"
    :error="!!errorMessage">
    <template v-slot:prepend>
      <q-icon name="mail" color="green-10" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const { errorMessage, value } = useField(toRef(props, 'name'))
</script>
