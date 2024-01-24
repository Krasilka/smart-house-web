import Thermostat from './thermostatController.js';

// Thermostat
const temperature = new Thermostat('temperature');
const temperatureBtn = $('.control-button.temperature');
const switchTemperature = () => temperature.switchService();
const switchThermoWidgets = () => temperature.showThermostat();
temperatureBtn.on('click', switchTemperature);
temperatureBtn.on('click', switchThermoWidgets);

export { switchTemperature, temperatureBtn, switchThermoWidgets };
