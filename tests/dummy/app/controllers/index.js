import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';

export default class IndexController extends Controller {
  @tracked showAlert = false;
  @tracked isRegistered = false;
  @tracked showCode = false;
  @tracked didValidate = false;

  @action async validate(event) {
    event.preventDefault();

    try {
      const { validations } = await this.model.validate();

      this.didValidate = true;

      if (validations.isValid) {
        this.showAlert = false;
        this.isRegistered = true;
        this.showCode = false;
      } else {
        this.showAlert = true;
      }
    } catch (_) {
      // no-op
    }
  }

  @action toggle(property) {
    this.toggleProperty(property);
  }
}
