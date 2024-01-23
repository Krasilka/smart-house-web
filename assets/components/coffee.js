import ModalController from './modalController.js';

// COFFEE
const coffee = new ModalController('coffee');
const coffeeBtn = $('.control-button.coffee');
const switchCoffee = () => coffee.switchService();
coffeeBtn.on('click', switchCoffee);


export { switchCoffee, coffeeBtn };


// MAYBE IT SHOULD BE MOVED TO MAIN JS ?????
