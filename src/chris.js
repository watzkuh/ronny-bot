'use strict';

exports.safe = function () {
  const message = {
    msgString: 'Also safe?',
    params: {
      as_user: false,
      icon_emoji: ':derfickerx:',
      username: 'Chris'
    }
  };
  return message;
};
