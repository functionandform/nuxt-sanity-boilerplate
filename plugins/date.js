import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('date',(rawtime)=>{
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
    // let date = new Date("2021-10-30T19:51:27.710Z");
    let date = new Date(rawtime);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();

    // let AmOrPm = hh >= 12 ? 'AM' : 'AM';
    // hh = (hh % 12) || 12;

    // let diffInSec = Math.floor((Date.now() - date) / 1000);
    // if(diffInSec < 30){
    //     return  'Just Now';
    // }
    // if(diffInSec < 59){
    //     return  diffInSec + ' seconds ago';
    // }
    // let diffInMin = Math.floor(diffInSec/60);
    // if(diffInMin<59){
    //     return diffInMin + ' mins ago';
    // }
   //return months[month] +' '+ day+' '+year+' , '+hh+':'+mm +' '+ AmOrPm;
    return months[month] +' '+ day+' '+year;
  });
});