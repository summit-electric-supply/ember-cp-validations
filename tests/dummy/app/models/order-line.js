import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { validator, buildValidations } from '@summit-electric-supply/ember-cp-validations';

const Validations = buildValidations({
  type: {
    description: 'Order Line Type',
    validators: [validator('ds-error'), validator('presence', true)]
  },
  order: {
    description: 'Order',
    validators: [validator('ds-error'), validator('presence', true)]
  },
  selections: {
    description: 'Order Selections',
    validators: [
      validator('ds-error'),
      validator('has-many'),
      validator('presence', true)
    ]
  }
});

export default class OrderLineModel extends Model.extend(Validations) {
  @attr('string') type;

  @belongsTo('order') order;

  @hasMany('order-selection') selections;
}
