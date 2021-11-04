export function Container(){
    const $container = document.createElement('div');
    $container.classList.add('container-app');
    $container.setAttribute('id','view-container');
    return $container;
}