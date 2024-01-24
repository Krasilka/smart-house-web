import { switchCoffee, coffeeBtn } from './coffee.js';
import { switchDoor, doorBtn } from './door.js';
import { switchWIFI, wifiBtn } from './wifi.js';
import { switchWater, waterBtn } from './water.js';
import { switchLight, lightBtn } from './light.js';
import { switchOven, ovenBtn } from './oven.js';
import { switchPlayer, playerBtn } from './player.js';
import { getCurrentWeather } from './weather.js';
import {
  switchTemperature,
  temperatureBtn,
  switchThermoWidgets,
} from './temperature.js';

// MODAL
const modal = $('#menu-controller');
const openModalBtn = $('#open-modal-button');
const closeBtn = $('.close')[0];

function toggleModal() {
  modal.toggleClass('hidden');
}

function closeByBtn() {
  modal.style.display = 'none';
}

openModalBtn.on('click', toggleModal);

// iPad controller

// COFFEE
// coffeeBtn.on('click', switchCoffee);

// WIFI

export { modal, openModalBtn, closeBtn, toggleModal, closeByBtn };

// to use:
// jquery
// localStorage
// OOP
