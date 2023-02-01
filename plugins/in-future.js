import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('inFuture',(rawtime)=>{
    if (rawtime) {
      let date = new Date(rawtime);
      let now = new Date();

      return date > now;
    } else {
      return null
    }
  });
});