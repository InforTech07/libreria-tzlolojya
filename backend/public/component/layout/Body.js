import {Container} from './Container.js'
export function Body(){
    const $body = document.createElement('main');
    $body.appendChild(Container());
    return $body;
}