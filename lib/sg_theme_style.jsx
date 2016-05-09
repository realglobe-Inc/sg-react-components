/**
 * Style for SgHtml.
 * @constructor SgHtmlStyle
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApStyle} from 'apeman-react-style'

/** @lends SgHtmlStyle */
const SgHtmlStyle = React.createClass({
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

    let data = {
      '.sg-html': {}
    }
    let smallMediaData = {}
    let mediumMediaData = {}
    let largeMediaData = {}
    return (
      <ApStyle data={ Object.assign(data, props.style) }
               smallMediaData={ smallMediaData }
               mediumMediaData={ mediumMediaData }
               largeMediaData={ largeMediaData }
      >{ props.children }</ApStyle>
    )
  }
})

export default SgHtmlStyle
