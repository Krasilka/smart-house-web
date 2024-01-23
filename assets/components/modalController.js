class ModalController {
  constructor(service) {
    this.service = service;
  }

  switchService() {
    console.log('IM HERE');
    console.log('ELEMENT' + this.service);
    const serviceElement = $('.service-container.' + this.service);
    serviceElement.toggleClass('hidden');
    console.log(`Switch ${this.service}!`);
  }
}

export default ModalController;
