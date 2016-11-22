'use strict';

var dict = [];

/**
 * Adds a message to ronny
 * @param {string|[string]} keys   And array of keys to trigger the message
 * @param {string|function} The message to send or a function to return the message
 */
function add(keys, message) {
  if (typeof keys === 'string') keys = [keys];
  dict.push({
    keys: keys,
    message: message
  });
}

add('verantwortung', 'Ich hab doch die Verantwortung über 20 Leute!');
add(['verdichtet', 'kranplatz'], 'Da soll ich jetzt 60 Tonnen drauf abstellen?!');
add('norwegen', 'Darum sind die auch nicht in der EU, weil die am Leben vorbeilaufen ... diese Spinnerbande!');
add('zu hause', 'Sollen wir nach Hause fahr\'n oder wat?');
add('kann nichts', 'Junge, Junge, Junge, Junge, Junge, Junge, Junge, Junge, Junge, Junge!');
add('kokowei', require('./kokoBuilder.js').getKoko);
add(['a5', 'rhein', 'main', 'breakdance', 'club', 'feiern'], require('./chris.js').safe);

module.exports = dict;
