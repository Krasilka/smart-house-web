import ModalController from './modalController.js';

// WIFI
const wifi = new ModalController('wifi');
const wifiBtn = $('.control-button.wifi');
console.log('WIFI', wifiBtn);
const switchWIFI = () => wifi.switchService();
wifiBtn.on('click', switchWIFI);

export { switchWIFI, wifiBtn };

// MAYBE IT SHOULD BE MOVED TO MAIN JS ?????
