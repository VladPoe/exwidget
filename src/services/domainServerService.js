import userData from './../constants/userData';

const RESPONSE_EMULATION_TIME = 3000;

const emulateServerRequest = (howLong, response) => () => {
  return new Promise((resolve, reject) => {
    //setTimeout(() => reject("No domain server access"), howLong);  // for error
    setTimeout(() => resolve(response), howLong);
  });
};

export const fetchUserData = emulateServerRequest(RESPONSE_EMULATION_TIME, userData);
