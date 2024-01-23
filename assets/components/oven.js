import ModalController from './modalController.js';

// OVEN
const oven = new ModalController('oven');
const ovenBtn = $('.control-button.oven');
const switchOven = () => oven.switchService();
ovenBtn.on('click', switchOven);


export { switchOven, ovenBtn };