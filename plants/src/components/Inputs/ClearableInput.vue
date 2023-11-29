<template>
  <q-input standout color="purple-12" v-model="value" :prefix="prefix" :error-message="errorMessage"
    :error="!!errorMessage">
  </q-input>
</template>

<script setup lang="ts">
import { defineProps, toRef, ref } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const { errorMessage, value } = useField(toRef(props, 'name'))
const prefix = ref('')
</script>
