<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Administrador</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Bienvenido</div>
          <div class="text-caption text-grey">
            En esta seccion podra gestionar todo lo relacionado con los articulos y las recetas.
          </div>
          <div class="text-caption text-grey">
            Podra crear nuevos articulos sobre plantas, editarlos y eliminarlos, asi mismo podra hacer con las recetas.
          </div>
          <div class="text-caption text-grey">
            En cuanto a los usuarios podra gestionalos igualmente.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="primary">
          Crear Articulo
        </q-btn>
        <q-btn flat color="primary">
          Crear Receta
        </q-btn>
        <q-btn flat color="primary">
          G.Productos
        </q-btn>
        <q-btn flat color="primary">
          G.Recetas
        </q-btn>
        <q-btn flat color="primary">
          G.Usuarios
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 80%
</style>
