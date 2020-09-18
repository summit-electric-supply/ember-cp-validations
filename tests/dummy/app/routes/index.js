import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return this.store.createRecord('user', {
      details: this.store.createRecord('user-detail'),
    });
  }

  setupController(controller) {
    controller.setProperties({
      didValidate: false,
      isRegistered: false,
      reset: this.reset,
      showAlert: false,
      showCode: false,
    });

    super.setupController(...arguments);
  }

  @action reset() {
    this.refresh();
  }
}
