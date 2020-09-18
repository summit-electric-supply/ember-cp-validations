import Model, { attr, hasMany } from '@ember-data/model';
import { validator, buildValidations } from '@summit-electric-supply/ember-cp-validations';

const Validations = buildValidations({
  source: {
    description: 'Order Source',
    validators: [validator('ds-error'), validator('presence', true)]
  },
  lines: {
    description: 'Order Lines',
    validators: [
      validator('ds-error'),
      validator('has-many'),
      validator('presence', true)
    ]
  }
});

export default class OrderModel extends Model.extend(Validations) {
  @attr('string') source;

  @hasMany('order-line') lines;
}
