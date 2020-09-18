// BEGIN-SNIPPET validated-input
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class ValidatedInputComponent extends Component {
  @tracked showValidations = this.args.showValidations ?? false;
  @tracked didValidate = this.args.didValidate ?? false;

  get value() {
    return this.args.model.get(this.args.valuePath);
  }

  get validation() {
    return this.args.model.get('validations').attrs.get(this.args.valuePath);
  }

  get notValidating() {
    return !this.validation.isValidating;
  }

  get hasContent() {
    return !isEmpty(this.value);
  }

  get hasWarnings() {
    return !isEmpty(this.validation.warnings);
  }

  get isValid() {
    return this.hasContent && this.validation.isTruelyValid;
  }

  get shouldDisplayValidations() {
    return this.showValidations || this.didValidate || this.hasContent;
  }

  get showErrorClass() {
    return this.notValidating && this.showErrorMessage && this.hasContent && this.validation;
  }

  get showErrorMessage() {
    return this.shouldDisplayValidations && this.validation.isInvalid;
  }

  get showWarningMessage() {
    return this.shouldDisplayValidations && this.hasWarnings && this.isValid;
  }

  @action onInput(event) {
    const value = event.target?.value;

    if (value) {
      return this.args.model.set(this.args.valuePath, value);
    }
  }

  @action onBlur() {
    this.showValidations = true;
  }
}
// END-SNIPPET
