import userData from './../constants/userData';

const RESPONSE_EMULATION_TIME = 5000;

const emulateServerRequest = (howLong, response) => () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("No Domain Server access"), howLong);  // for error
    // setTimeout(() => resolve(response), howLong);
  });
};

export const fetchUserData = emulateServerRequest(RESPONSE_EMULATION_TIME, userData);
