module.exports.toCapitalize = (str = '') => {
  if (typeof str !== 'string' || !str) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports.toPlural = (str = '') => {
  if (typeof str !== 'string' || !str) {
    return str;
  }

  if (str.charAt(str.length - 1) === 'y') {
    str = `${str.slice(0, str.length - 1)}ies`;
  } else {
    str = `${str}s`;
  }

  return str;
};
