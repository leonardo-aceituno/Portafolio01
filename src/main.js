import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByxaMR50rCP7HXD4ZPhkjeIA-EeBo6f5g",
  authDomain: "leonardo-aceituno.firebaseapp.com",
  projectId: "leonardo-aceituno",
  storageBucket: "leonardo-aceituno.appspot.com",
  messagingSenderId: "470115682074",
  appId: "1:470115682074:web:f31565dfff21ad73ba0ea3",
  measurementId: "G-2N5SMV6FWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
