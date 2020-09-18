import Model, { attr, belongsTo } from '@ember-data/model';
import { validator, buildValidations } from '@summit-electric-supply/ember-cp-validations';

const Validations = buildValidations(
  {
    order: {
      description: 'Order',
      validators: [validator('ds-error'), validator('presence', true)]
    },
    selection: {
      description: 'Order Selection',
      validators: [validator('ds-error'), validator('presence', true)]
    },
    text: {
      description: 'Question Text',
      validators: [validator('ds-error'), validator('presence', true)]
    }
  },
  {
    debounce: 10
  }
);

export default class OrderSelectionQuestionModel extends Model.extend(Validations) {
  @attr('string') text;

  @belongsTo('order') order;
  @belongsTo('order-selection') selection;
}
