import Icon from './icon/icon'
import Button from './button/button'
import Radio from './radio/radio'
import Toast from './toast/toast.js'
import Alert from './alert/alert.js'
import Input from './input/input'
import popup from './popup/popup.vue';
import selectbox from './selectbox/selectbox.vue';
import switchbutton from './switchbutton/switchbutton.vue';

export default {
   install(Vue) {
    Vue.component('Icon', Icon);
    Vue.component('Button', Button);
    Vue.component('Radio', Radio);
    Vue.component('Input', Input);
    Vue.component('Popup', popup);
    Vue.component('Selectbox', selectbox);
    Vue.component('Switchbutton', switchbutton);

    Vue.prototype.$Toast = Toast;
    Vue.prototype.$Alert = Alert;
   }
}