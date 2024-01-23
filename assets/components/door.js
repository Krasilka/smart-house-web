import ModalController from './modalController.js';

// DOOR
const door = new ModalController('door');
const doorBtn = $('.control-button.door');
const switchDoor = () => door.switchService();
doorBtn.on('click', switchDoor);

export { switchDoor, doorBtn };


// MAYBE IT SHOULD BE MOVED TO MAIN JS ?????