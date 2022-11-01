/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */

const { readdirSync } = require('fs')

const { generateReactNativeAsset } = require('./generators')
const { isSVG, removeExtension } = require('./utils')

const ICON_SOURCE_FOLDER = 'src/assets/svg'
const FONT_FOLDER = 'src/assets/fonts'
const FONT_NAME = 'weme-icon'

const icons = readdirSync(ICON_SOURCE_FOLDER).filter(isSVG).map(removeExtension)
try {
  generateReactNativeAsset(icons, {
    fontName: FONT_NAME,
    dir: ICON_SOURCE_FOLDER,
    fontDir: FONT_FOLDER,
  })
} catch (e) {
  console.error(e)
}
