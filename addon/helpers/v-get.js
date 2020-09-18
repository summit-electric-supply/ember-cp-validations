import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

/**
 * Transform:
 *  (v-get model 'username' 'isValid') to (get (get (get (get model 'validations') 'attrs') 'username') 'isValid')
 * OR
 *  (v-get model 'isValid') to (get (get model 'validations') 'isValid')
 * @param  {AST.Node} node
 * @return {AST.Node}
 */
export default helper(function vGet(params) {
  const numParams = params.length;

  if (numParams < 2) {
    throw new Error('{{v-get}} requires at least two arguments');
  }

  const root = get(params[0], 'validations');

  if (numParams === 3) {
    return get(root, `attrs.${params[1]}.${params[2]}`);
  }

  return get(root, params[1]);
});
