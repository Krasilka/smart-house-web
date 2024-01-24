import Thermostat from './thermostatController.js';

// Thermostat
const temperature = new Thermostat('temperature');
const temperatureBtn = $('.control-button.temperature');
const switchTemperature = () => temperature.switchService();
const switchThermoWidgets = () => temperature.showThermostat();
temperatureBtn.on('click', switchTemperature);
temperatureBtn.on('click', switchThermoWidgets);

// Temperature inside
document.getElementById('slider').addEventListener('input', function () {
    const sliderValue = this.value;
    document.getElementById('tempValue').innerText = `${sliderValue}`;
  });

export { switchTemperature, temperatureBtn, switchThermoWidgets };
