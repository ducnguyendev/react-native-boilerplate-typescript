/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */

const isSVG = (file) => /.svg$/.test(file)

const removeExtension = (file) => {
  return String(file).split('.')[0]
}

module.exports = {
  isSVG,
  removeExtension,
}
