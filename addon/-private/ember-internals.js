export function getDependentKeys(descriptorOrDecorator) {
  return descriptorOrDecorator._dependentKeys;
}

export function isDescriptor(o) {
  return (
    o && (typeof o === 'object' || typeof o === 'function') && o.isDescriptor
  );
}