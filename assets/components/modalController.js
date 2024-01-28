class ModalController {
  constructor(service) {
    this.service = service;
  }

  switchService() {
    const serviceElement = $('.service-container.' + this.service);
    serviceElement.toggleClass('hidden');
    console.log(`Switch ${this.service}!`);
  }
}

export default ModalController;
