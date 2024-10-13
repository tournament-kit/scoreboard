import { createApp } from 'vue';
import { TooltipDirective, TooltipComponent } from 'vue3-tooltip';
import 'vue3-tooltip/tooltip.css';
import './styles.css';
import router from './router';
import App from './app/App.vue';

const app = createApp(App);

app.use(router);
app.directive('tooltip', TooltipDirective)
app.component('tooltip', TooltipComponent)

app.mount('#root');

console.log(import.meta.env.BASE_URL);
