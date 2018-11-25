import userData from './../constants/userData';

const RESPONSE_EMULATION_TIME = 3000;

const emulateServerRequest = (response) => () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => reject("No domain server access"), RESPONSE_EMULATION_TIME);  // for error emulation
    setTimeout(() => resolve(response), RESPONSE_EMULATION_TIME);
  });
};

export const fetchUserData = emulateServerRequest(userData);

export const emulateAccountUpdateServerRequest = (newBalanceSnapshot) => {
  return new Promise((resolve, reject) => {
    const RESPONSE_SUCCESS = {
      status: 200,
      message: 'User balance successfully updated',
      balance: { ...newBalanceSnapshot }
    };
    const RESPONSE_ERROR = {
      status: 500,
      message: 'Service temporary unavailable'
    };
    setTimeout(() => resolve(RESPONSE_SUCCESS), RESPONSE_EMULATION_TIME);
    // setTimeout(() => reject(RESPONSE_ERROR), RESPONSE_EMULATION_TIME)  // for error emulation
  });
};
