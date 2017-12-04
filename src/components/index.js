import Icon from './icon/icon'
import Button from './button/button'
import Radio from './radio/radio'
import Toast from './toast/toast.js'
import Alert from './alert/alert.js'
import Input from './input/input'

export default {
   install(Vue) {
    Vue.component('Icon', Icon);
    Vue.component('Button', Button);
    Vue.component('Radio', Radio);
    Vue.component('Input', Input);

    Vue.prototype.$Toast = Toast;
    Vue.prototype.$Alert = Alert;
   }
}