import {SigInView} from './sigIn/SigInView.js';
import {NavApp} from './navs/NavApp.js';
import {Products} from './products/Products.js';
import {User} from './user/User.js';

export function Router(){
    const $container = document.getElementById('view-container');
    $container.innerHTML='';
    let {hash}=location;
    switch(hash){
        case '/':
        case '#/':
            $container.appendChild(SigInView());
            break;
        case '#/products':
            $container.appendChild(NavApp());
            $container.appendChild(Products());
            break;
        case '#/user':
            $container.appendChild(NavApp());
            $container.appendChild(User());
        default:
            $container.appendChild(SigInView());
            break;

    }
}