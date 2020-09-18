import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from '@summit-electric-supply/ember-cp-validations';

export const Validations = buildValidations({
  name: validator('presence', { presence: true, description: 'Name' })
});

export default class CompanyModel extends Model.extend(Validations) {
  @attr('string') name;
}
