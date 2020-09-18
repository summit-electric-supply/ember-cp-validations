// BEGIN-SNIPPET user-detail-model
import { validator, buildValidations } from '@summit-electric-supply/ember-cp-validations';
import Model, { attr } from '@ember-data/model';
import moment from 'moment';

const Validations = buildValidations(
  {
    firstName: validator('presence', true),
    lastName: validator('presence', true),
    dob: {
      description: 'Date of  birth',
      validators: [
        validator('presence', true),
        validator('date', {
          before: 'now',
          after: moment().subtract(120, 'years').format('M/D/YYYY'),
          format: 'M/D/YYYY',
          message(type, value /*, context */) {
            if (type === 'before') {
              return 'Are you from the future?';
            }
            if (type === 'after') {
              return `There is no way you are ${moment().diff(
                value,
                'years'
              )} years old`;
            }
          }
        })
      ]
    },
    phone: [
      validator('format', {
        allowBlank: true,
        type: 'phone'
      })
    ],
    url: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      })
    ]
  },
  {
    debounce: 500
  }
);

export default class UserDetailModel extends Model.extend(Validations) {
  @attr('date') dob;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') phone;
  @attr('string') url;
}
// END-SNIPPET
