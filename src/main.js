import { createApp } from 'vue'
import App from './App.vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'

import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"

createApp(App)
	.use(VueReCaptcha, { siteKey: '6LcZEQ4rAAAAADljecwde_BwusdqUR0Vb167nt_w' })
	.mount('#app')