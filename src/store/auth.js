import axios from 'axios'
import { respLogin } from '@/plugins/mocs.js'

const state = {
  user: {},
  error: '',
  authenticated: !!window.localStorage.getItem('ticketConsulta'),
  usrData: {}
}

const actions = {
  actionDoLogin (context, credenciales) {
    if (process.env.NODE_ENV === 'production') {
      return axios.post('/boletin-noticias/security/doLogin',
        credenciales
      )
        .then((resp) => {
          if ('data' in resp.data) {
            context.commit('doLogin', resp.data.data)
            return true
          } else {
            context.commit('doLogout', resp.data.message)
            return false
          }
        }).catch(error => {
          console.error('actionDoLogin: ' + error)
          context.commit('doLogout', 'Ocurrio un error inesperado')
          throw (error)
        })
    } else {
      console.log(credenciales)
      context.commit('doLogin', respLogin.data.data)
      return true
    }
  },
  actionDoLogout (context) {
    context.commit('doLogout', '')
  },
  actionGetUsrData (context, TicketWrapper) {
    return axios.post('/boletin-noticias/security/doConsultarDatosUsuario',
      { ticket: TicketWrapper }
    )
      .then((respt) => {
        context.commit('doSaveUsrData', respt.data.data)
      }).catch(error => {
        console.error('actionGetUsrData: ' + error)
        context.commit('doLogout', '')
      })
  }
}

const mutations = {
  doLogin (state, data) {
    window.localStorage.setItem('ticketConsulta', data.ticket)
    state.user = data
    state.authenticated = true
  },
  doLogout (state, error) {
    state.user = {}
    state.authenticated = false
    state.error = error
    window.localStorage.removeItem('ticketConsulta')
  },
  doSaveUsrData (state, data) {
    state.usrData = data
  }
}

export default {
  state,
  mutations,
  actions
}
