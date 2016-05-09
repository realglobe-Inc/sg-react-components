/**
 * React components for SUGOS project.
 * @module sg-react-components
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get SgBody () { return d(require('./sg_body')) },
  get SgHeader () { return d(require('./sg_header')) },
  get SgHtml () { return d(require('./sg_html')) },
  get SgMain () { return d(require('./sg_main')) },
  get SgPage () { return d(require('./sg_page')) },
  get SgThemeStyle () { return d(require('./sg_theme_style')) }
}
