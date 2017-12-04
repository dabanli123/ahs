import Alert from './alert.vue';
import Vue from 'vue';

let alert = Vue.extend(Alert);

export default (args) => {
   const box =  new alert({
        el: document.createElement('div')
    });
    for(let item in args){
        box[item] = args[item];
    }
    box.close = function(){
        document.body.removeChild(box.$el);
    }
    document.body.appendChild(box.$el);
    // setTimeout(() => {
    //     document.body.removeChild(box.$el);
    // }, 3000);
}
