module.exports.toCapitalize = (str = '') => {
  if (typeof str !== 'string' || !str) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};
