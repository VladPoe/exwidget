export const requestRecursively = (
  instanceReference,
  actionThunk,
  errorHandler,
  maxTry = 3,
  interval = 30000,
  retryInterval = 2000
) => {
  return function recursive(tryCounter) {
    console.log(tryCounter);
    console.log(instanceReference);
    return actionThunk()
      .then(() => {
        instanceReference.id = setTimeout(() => recursive(1), interval);
      })
      .catch(err => {
        if (tryCounter > maxTry) {
          clearInterval(instanceReference.id);
          errorHandler(err);
          return;
        }
        instanceReference.id = setTimeout(() => recursive(++tryCounter), retryInterval)
      });
  }
};

export const abortSubscription = (instanceReference) => clearInterval(instanceReference);
