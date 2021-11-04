import {Body} from './component/layout/Body.js';
import {Router} from './component/Router.js'
export function App(){
    const $root = document.getElementById('root');
    $root.innerHTML=null;
    $root.appendChild(Body())
    Router()
}