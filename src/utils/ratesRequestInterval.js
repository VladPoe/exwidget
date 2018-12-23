export const requestRecursively = (
  instanceReference,
  actionThunk,
  errorHandler,
  maxTry = 3,
  interval = 25000,
  retryInterval = 2000
) => {
  return function recursive(tryCounter) {
    return actionThunk()
      .then(() => {
        instanceReference.id = setTimeout(() => recursive(1), interval);
      })
      .catch(err => {
        if (tryCounter > maxTry) {
          clearTimeout(instanceReference.id);
          errorHandler(err);
          return;
        }
        instanceReference.id = setTimeout(() => recursive(++tryCounter), retryInterval)
      });
  }
};

export const abortSubscription = (instanceReference) => clearTimeout(instanceReference.id);
