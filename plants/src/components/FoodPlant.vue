<template>
  <div class="q-pa-md">
    <q-table
      title="Listado de recetas"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="multiple"
      v-model:selected="selected"
      :filter="filter"
      grid
      hide-header
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar articulo">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''">
          <q-card bordered flat :class="props.selected ? ($q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2') : ''">
          <q-card-section>
          <q-img
          :src="props.row.image_url"
          class="rounded-borders my-image"
          />
        </q-card-section>
            <q-list dense>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
            <q-separator />
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-btn class="q-my-md q-mx-md" color="positive">Leer articulo</q-btn>
          </q-card>
        </div>
      </template>

    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue'

const columns = [
  { name: 'Nombre planta', align: 'center', label: 'Nombre planta', field: 'nombre_planta', sortable: true },
  { name: 'Nombre receta', align: 'center', label: 'Nombre receta', field: 'nombre_receta', sortable: true }
]

const rows = [
  {
    nombre_planta: "Manzanilla",
    nombre_receta: "Bebe Manzanilla en...",
    image_url: "https://pymstatic.com/102597/conversions/manzanilla-default_webp.webp"
  },
  {
    nombre_planta: "Aloe Vera",
    nombre_receta: "Aloe Vera en la ma...",
    image_url: "https://pymstatic.com/102596/conversions/aloe-default_webp.webp"
  },
  {
    nombre_planta: "Ajo",
    nombre_receta: "Haz esta mezcla de Ajo...",
    image_url: "https://pymstatic.com/102598/conversions/ajo-default_webp.webp"
  },
  {
    nombre_planta: "Jengibre",
    nombre_receta: "Esta receta de Gengibre...",
    image_url: "https://pymstatic.com/28761/conversions/jengibre-default_webp.webp"
  }
]

export default {
  setup () {
    return {
      filter: ref(''),
      selected: ref([]),
      columns,
      rows
    }
  }
}
</script>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
.my-image
  max-height: 100px
</style>
