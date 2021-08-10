<template>
<q-page>
  <div class="row">
    <div class="col-6">
      <div class="column items-center justify-center" style="min-height: 100vh">
        <div class="text-h3 text-primary text-weight-bold">Grupo BMV</div>
        <div class="text-h2 text-white text-weight-bold">Boletin de Noticias</div>
      </div>
    </div>
    <div class="col-6">
      <div class="column items-center justify-center" style="min-height: 100vh">
        <q-card class="auth-card" style="width:100%; max-width: 500px" flat="flat">
          <q-card-section class="bg-primary text-white" v-if="!error">
            <div class="text-h6">INGRESAR</div>
          </q-card-section>
          <q-card-section class="bg-negative text-white" v-if="error">
            <div class="text-h6">
              <q-icon class="q-mr-sm" name="warning"></q-icon>{{ error }}
            </div>
          </q-card-section>
          <q-card-section class="q-col-gutter-y-md">
            <div>
              <q-input v-model="UsuarioVO.usuario" label="USUARIO" clearable="clearable" :rules="[val =&gt; !!val || 'Este campo es requerido']"></q-input>
            </div>
            <div>
              <q-input v-model="UsuarioVO.password" label="CONTRASEÑA" clearable="clearable" :type="UsuarioVO.isPwd ? 'password' : 'text'" :rules="[val =&gt; !!val || 'Este campo es requerido']">
                <template v-slot:append="">
                  <q-icon class="cursor-pointer" :name="UsuarioVO.isPwd ? 'visibility_off' : 'visibility'" @click="UsuarioVO.isPwd = !UsuarioVO.isPwd"></q-icon>
                </template>
              </q-input>
            </div>
            <div>
              <q-btn @click="login(UsuarioVO)" label="ACCEDER" size="md" icon="login" color="secondary" style="width:200px"></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</q-page>
</template>

<style lang='sass' scoped>
  .auth-card
    border-radius: 10px
</style>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { defineComponent, reactive, computed } from 'vue'
export default defineComponent({
  name: 'Login',
  setup () {
    const store = useStore()
    const router = useRouter()
    const UsuarioVO = reactive({
      usuario: process.env.DEBUG === 'local' ? 'admin' : '',
      password: process.env.DEBUG === 'local' ? 'admin' : '',
      isPwd: true
    })
    const login = (UsuarioVO) => {
      store.dispatch('actionDoLogin', UsuarioVO)
        .then((data) => {
          if (data === true) router.push({ name: 'Boletin' })
        })
    }
    return {
      error: computed(() => store.state.auth.error),
      UsuarioVO,
      login
    }
  }
})
</script>
