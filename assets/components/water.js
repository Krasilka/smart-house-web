import ModalController from './modalController.js';

// WATER
const water = new ModalController('water');
const waterBtn = $('.control-button.water');
console.log('WATER', waterBtn);
const switchWater = () => water.switchService();
waterBtn.on('click', switchWater);

export { switchWater, waterBtn };
