import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from '@summit-electric-supply/ember-cp-validations';

let Validations = buildValidations({
  name: validator('presence', true),
  acceptTerms: validator('inline', {
    validate(value) {
      return value || 'You must accept the terms.';
    }
  })
});

export default class SignupModel extends Model.extend(Validations) {
  @attr('boolean', { defaultValue: false }) acceptTerms;
  @attr('string', { defaultValue: '' }) name;
}
