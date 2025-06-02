import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faVideo,
  faScissors,
  faFilm,
  faCamera,
  faVolumeUp,
  faLightbulb,
  faBullhorn,
  faBroadcastTower,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(
  faVideo,
  faScissors,
  faFilm,
  faCamera,
  faVolumeUp,
  faLightbulb,
  faBullhorn,
  faBroadcastTower,
  faEnvelope,
  faPhone,
  faInstagram,
  faFacebook,
  faYoutube
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
