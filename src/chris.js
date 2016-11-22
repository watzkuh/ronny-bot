'use strict';

exports.safe = function() {
  var message = {
    msgString: 'Also safe?',
    params: {
      as_user: false,
      icon_emoji: ':derfickerx:',
      username: 'Chris'
    }};
  return message;
};
