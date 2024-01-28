import ModalController from './modalController.js';

class Thermostat extends ModalController {
  showThermostat() {
    const thermostat = $('.thermostat');
    thermostat.toggleClass('hidden');
  }
}

export default Thermostat;
