<template lang='pug'>
q-layout(view='hHh lpR fFf')
  q-header.bg-primary.text-white(reveal='' elevated='')
    q-toolbar
      q-btn(dense='' flat='' round='' icon='menu' @click='toggleLeftDrawer')
      q-toolbar-title
        | Boletin de Noticias
      | BIENVENID@, MARIBEL MANCILLAS MAYEN
      q-btn.q-ml-md(dense='' flat='' round='' icon='logout' @click='toggleLeftDrawer')
  q-drawer(show-if-above='' v-model='leftDrawerOpen' side='left' bordered)
    q-list(bordered='')
      q-expansion-item.q-mt-sm(icon='home' label='Boletines' caption='Últimos 3 boletines del dia' default-opened='')
      q-expansion-item(:content-inset-level='0.5' icon='article' label='Boletin de noticias' default-opened='')
        q-expansion-item(expand-separator='' :content-inset-level='0.5' label='Administrar' default-opened='')
          q-item(clickable='' v-ripple='')
            q-item-section Layout Portada
          q-item(clickable='' v-ripple='')
            q-item-section Layout Sección
        q-expansion-item(:content-inset-level='0.5' label='Operacion' default-opened='')
          q-item(clickable='' v-ripple='')
            q-item-section Boletin del Día
  q-page-container
    router-view
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
