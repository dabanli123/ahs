import Toast from './toast.vue';
import Vue from 'vue';

let toast = Vue.extend(Toast);

export default (msg, type) => {
   const box =  new toast({
        el: document.createElement('div')
    });

    box.msg = msg;
    box.type = type;

    document.body.appendChild(box.$el);
    setTimeout(() => {
        document.body.removeChild(box.$el);
    }, 3000);
}
