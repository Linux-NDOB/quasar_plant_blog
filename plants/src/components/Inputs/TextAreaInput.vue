<template>
  <q-input type="textarea" standout color="purple-12" v-model="value" :error-message="errorMessage"
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
</script>
