import ModalController from './modalController.js';

class Thermostat extends ModalController {
  showThermostat() {
    console.log('INSIDE THERMOSTAT');
    console.log('Show' + this.service);
    const thermostat = $('.thermostat');
    thermostat.toggleClass('hidden');
  }
}

export default Thermostat;
