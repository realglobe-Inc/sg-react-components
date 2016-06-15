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
      // SgMicrophone
      '.sg-microphone': {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        color: 'inherit'
      },
      '.sg-microphone-back': {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: dominant,
        display: 'none',
        top: '9px',
        left: '9px',
        right: '9px',
        bottom: '9px',
        transition: `transform ${MICROPHONE_TRANSITION}ms`,
        transformOrigin: '50% 50%',
        transform: 'scale(1, 1)'
      },
      '.sg-microphone-on .sg-microphone-back': {
        display: 'block'
      },
      '.sg-microphone-on .sg-microphone-icon': {
        color: 'white',
        opacity: 0.9
      },
      '.sg-microphone-back-enlarged': {
        transform: 'scale(2, 2)'
      },
      '.sg-microphone-icon': {
        position: 'relative',
        zIndex: 4,
        opacity: 0.75
      },
      '.sg-microphone:hover .sg-microphone-icon': {
        opacity: 1
      },
      '.sg-microphone:active .sg-microphone-icon': {
        opacity: 0.9
      },
      // SgHeart
      '.sg-heart': {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        color: 'inherit'
      },
      '.sg-heart-icon': {
        color: '#D80000',
        transitionProperty: 'font-size'
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
