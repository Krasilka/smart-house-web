import ModalController from './modalController.js';

// LIGHTS
const light = new ModalController('light');
const lightBtn = $('.control-button.light');
const switchLight = () => light.switchService();
lightBtn.on('click', switchLight);

export { switchLight, lightBtn };
