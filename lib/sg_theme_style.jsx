/**
 * Style for SgHtml.
 * @constructor SgThemeStyle
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApStyle} from 'apeman-react-style'
import {ApThemeStyle} from 'apeman-react-theme'

const { MICROPHONE_TRANSITION } = require('./constants/animation_constants')

/** @lends SgThemeStyle */
const SgThemeStyle = React.createClass({
  propTypes: {
    style: types.object,
    dominant: types.string
  },
  getDefaultProps () {
    return {
      style: {},
      dominant: ApStyle.DEFAULT_HIGHLIGHT_COLOR
    }
  },
  render () {
    const s = this
    let { props } = s

    let { dominant } = props

    let style = {
      '.sg-html': {},
      '.sg-microphone': {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer'
      },
      '.sg-microphone-back': {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: dominant,
        display: 'none',
        top: '12px',
        left: '12px',
        right: '12px',
        bottom: '12px',
        transition: `transform ${MICROPHONE_TRANSITION}ms`,
        transformOrigin: '50% 50%',
        transform: 'scale(1, 1)'
      },
      '.sg-microphone-on .sg-microphone-back': {
        display: 'block'
      },
      '.sg-microphone-back-enlarged': {
        transform: 'scale(2.1, 2.1)'
      },
      '.sg-microphone-icon': {
        position: 'relative',
        zIndex: 4,
        opacity: 0.8
      },
      '.sg-microphone:hover .sg-microphone-icon': {
        opacity: 1
      },
      '.sg-microphone:active .sg-microphone-icon': {
        opacity: 0.9
      }
    }
    return (
      <ApThemeStyle { ...props }
        style={ Object.assign(style, props.style) }
      >{ props.children }</ApThemeStyle>
    )
  }
})

export default SgThemeStyle
