'use strict';

function getDiglett() {
  return ':digletthead:\n:diglettdirt:\n Hoppla, ein Digda hat den Kranplatz entdichtet.';
}

function isDigglettInDisguise() {
  const rng = Math.random();
  return rng < 0.05;
}

function getKokoBody(height) {
  let exeggBody = '';
  for (let i = 0; i < height; i++) {
    const rng = Math.random();
    if (rng < 0.66) {
      exeggBody += ':kokoneck:\n';
    } else if (rng < 0.77) {
      exeggBody += ':kokokoala:\n';
    } else if (rng < 0.85) {
      exeggBody += ':kokocloud:\n';
    } else if (rng < 0.9) {
      exeggBody += ':kokotwist:\n';
    } else if (rng < 0.945) {
      exeggBody += ':kokousa:\n';
    } else if (rng < 0.98) {
      exeggBody += ':kokobear:\n';
    } else {
      exeggBody += (':kokoportal:\n');
    }
  }
  return exeggBody;
}

exports.getKoko = function () {
  if (isDigglettInDisguise()) {
    return getDiglett();
  }
  let pokemoji;
  const rng = Math.random();
  if (rng > 0.9) {
    pokemoji = ':kokomohr:\n';
  } else {
    pokemoji = ':kokohead:\n';
  }
  const nrOfNecks = Math.floor((Math.random() * 5) + 1);
  pokemoji += getKokoBody(nrOfNecks);
  pokemoji += ':kokolegs:';
  return pokemoji;
};

exports.getDatepalm = function () {
  let pokemoji;
  pokemoji = ':derficker8:\n';
  const nrOfNecks = Math.floor((Math.random() * 5) + 1);
  pokemoji += getKokoBody(nrOfNecks);
  pokemoji += ':kokolegs:';
  return pokemoji;
};
