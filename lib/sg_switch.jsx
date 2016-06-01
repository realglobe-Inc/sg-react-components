/**
 * SgSwitch Component
 * @class SgSwitch
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApSwitch} from 'apeman-react-switch'
import {ApStyle} from 'apeman-react-style'
import classnames from 'classnames'

/** @lends SgSwitch */
const SgSwitch = React.createClass({
  propTypes: {
    /**
     * Width(px) of a switch.
     */
    width: types.number,
    /**
     * The state of on/off.
     */
    on: types.bool,
    /**
     * Function on tap.
     */
    onTap: types.func,
    onTitle: types.string,
    offTitle: types.string,
    highlightColor: types.string,
    backgroundColor: types.string,
    borderColor: types.string,
    handleSize: types.number
  },

  getInitialState () {
    let style = this.customStyle()
    return { style }
  },
  // --------------------
  // Specs
  // --------------------

  render () {
    const s = this
    let { props, state } = s
    let { style } = state
    return (
      <div className={ classnames('sg-switch', props.className) }
        style={ Object.assign({display: 'inline-block', margin: '4px'}, props.style) } >
        <ApStyle data={ style } />
        <ApSwitch { ...props }/>
      </div>
    )
  },

  customStyle () {
    const s = this
    let { props } = s

    let { highlightColor, backgroundColor, borderColor } = props
    let handleSize = props.handleSize || 24
    let minWidth = handleSize * 1.5
    let style = {
      '.ap-switch-label': {
        fontSize: '14px',
        lineHeight: `${handleSize}px`
      },
      '.ap-switch-label-text': {
        minWidth: minWidth
      },
      '.ap-switch-on-label': {
        color: 'white',
        marginRight: -1 * handleSize / 2
      },
      '.ap-switch-off-label': {
        background: '#FAFAFA',
        color: '#AAA',
        marginLeft: -1 * handleSize / 2
      },
      '.ap-switch-on .ap-switch-off-label': {
        width: `${handleSize / 2 + 2}px !important`
      },
      '.ap-switch-off .ap-switch-on-label': {
        width: `${handleSize / 2 + 2}px !important`
      },
      '.ap-switch-inner': {
        height: handleSize,
        borderRadius: (handleSize / 2 + 1),
        minWidth: minWidth
      },
      '.ap-switch-handle': {
        width: handleSize,
        height: handleSize
      }
    }
    if (highlightColor) {
      Object.assign(style['.ap-switch-on-label'], {
        background: highlightColor
      })
    }
    if (backgroundColor) {
      Object.assign(style['.ap-switch-inner'], {
        backgroundColor: backgroundColor
      })
    }
    if (borderColor) {
      let borderColorOption = {
        border: `1px solid ${borderColor}`
      }
      Object.assign(style['.ap-switch-inner'], borderColorOption)
      Object.assign(style['.ap-switch-handle'], borderColorOption)
    }
    return style
  }
})

export default SgSwitch
