import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { validator, buildValidations } from '@summit-electric-supply/ember-cp-validations';

const Validations = buildValidations({
  quantity: {
    description: 'Quantity',
    validators: [
      validator('ds-error'),
      validator('number', {
        gte: 1
      })
    ]
  },
  order: {
    description: 'Order',
    validators: [
      validator('ds-error'),
      validator('belongs-to'),
      validator('presence', true)
    ]
  },
  line: {
    description: 'Order Line',
    validators: [validator('ds-error'), validator('presence', true)]
  },
  questions: {
    description: 'Order Selection Questions',
    validators: [
      validator('ds-error'),
      validator('has-many'),
      validator('length', {
        min: 1
      })
    ]
  }
});

export default class OrderSelectionModel extends Model.extend(Validations) {
  @attr('number') quantity;

  @belongsTo('order') order;
  @belongsTo('order-line') line;

  @hasMany('order-selection-question') questions;
}
