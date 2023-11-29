<template>
  <div class="q-pa-md">
    <q-table grid grid-header flat bordered title="Plantas Medicinales" :rows="rows.reverse()" :columns="columns"
      row-key="name" :filter="filter" hide-header class="lato-bold-italic">
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-md col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''">
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="food-card" flat bordered>
              <q-img :src="props.row.image" class="my-image" />

              <q-card-section>
                <div class="text-overline text-orange-9">{{ props.row.category }}</div>
                <div class="tex-bold q-mt-sm">Planta: {{ props.row.plant }}</div>
              </q-card-section>

              <q-card-actions>
                <router-link :to="{ name: '/read-article/', params: { id: props.row.article_id } }"> <q-btn flat
                    color="primary" label="Leer" /> </router-link>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </template>

    </q-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const expanded = ref(false)
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const host = 'https://jfuton.pythonanywhere.com/'

const get = async () => {
  const query = await fetch(host + 'api/categories/Medicinales')
  return await query.json()
}

const filter = ref('')

const columns = [
  { name: 'fat', label: 'Planta', field: 'plant', align: 'left' },
  { name: 'carbs', label: 'Categoria', field: 'category' }
]

interface IRows {
  index?: number | string,
  article_id?: string | number,
  plant: number | string,
  stf_name: number | string,
  category: string,
  description: string,
  origin: string,
  use: string,
  habitat: string,
  image: string
}

const rows = ref<IRows[]>([])

const fillRows = async () => {
  const data = await get()
  let index = 0
  data.forEach((row: IRows) => {
    const newRow: IRows = {
      index,
      article_id: row.article_id,
      plant: row.plant,
      stf_name: row.stf_name,
      category: row.category,
      description: row.description,
      origin: row.origin,
      use: row.use,
      habitat: row.habitat,
      image: row.image
    }
    rows.value.push(newRow)
    index += 1
  })
}

onMounted(() => fillRows())
</script>

<style lang="sass" scoped>
</style>
