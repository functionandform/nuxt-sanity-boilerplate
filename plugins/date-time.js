import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('dateTime',(rawtime)=>{
    let date = new Date(rawtime);
    return Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'long' }).format(date).replace(':00','');
  
  });
});