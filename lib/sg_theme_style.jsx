/**
 * Style for SgHtml.
 * @constructor SgThemeStyle
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApStyle} from 'apeman-react-style'
import {ApThemeStyle} from 'apeman-react-theme'

/** @lends SgThemeStyle */
const SgThemeStyle = React.createClass({
  propTypes: {
    style: types.object,
    highlightColor: types.string
  },
  getDefaultProps () {
    return {
      style: {},
      highlightColor: ApStyle.DEFAULT_HIGHLIGHT_COLOR,
      backgroundColor: ApStyle.DEFAULT_BACKGROUND_COLOR
    }
  },
  render () {
    const s = this
    let { props } = s

    let { highlightColor, backgroundColor } = props

    let style = {
      '.sg-html': {}
    }
    return (
      <ApThemeStyle { ...props }
        style={ Object.assign(style, props.style) }
      >{ props.children }</ApThemeStyle>
    )
  }
})

export default SgThemeStyle
