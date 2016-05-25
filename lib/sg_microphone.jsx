/**
 * Microphone component
 * @class SgMicrophone
 */
'use strict'

import React, {PropTypes as types} from 'react'
import {ApIcon} from 'apeman-react-basic'
import {ApTouchMixin, ApPureMixin} from 'apeman-react-mixins'
import classnames from 'classnames'

const { MICROPHONE_TRANSITION } = require('./constants/animation_constants')

/** @lends SgMicrophone */
const SgMicrophone = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    width: types.number,
    height: types.number,
    on: types.bool
  },

  statics: {
    MICROPHONE_TRANSITION
  },

  mixins: [
    ApTouchMixin,
    ApPureMixin
  ],

  getDefaultProps () {
    return {
      width: 44,
      height: 44,
      on: false
    }
  },

  getInitialState () {
    return {
      enlarged: false
    }
  },

  render () {
    const s = this
    let style = s.getStyle()
    let { state, props } = s
    let { on } = props
    return (
      <a className={ classnames('sg-microphone', {
        'sg-microphone-on': on
      })}
         style={ style.root }>
        <div className={ classnames('sg-microphone-back', {
        'sg-microphone-back-enlarged': state.enlarged
        }) }></div>
        <ApIcon className="fa fa-microphone sg-microphone-icon"
                style={ style.icon }
        />
      </a>
    )
  },

  // --------------------
  // Lifecycle
  // --------------------

  componentDidMount () {
    const s = this
    s._anmationTimer = setInterval(() => {
      const { state, props } = s
      if (props.on) {
        s.setState({
          enlarged: !state.enlarged
        })
      }
    }, MICROPHONE_TRANSITION)
  },

  componentWillUnMount () {
    const s = this
    clearInterval(s._anmationTimer)
  },

  // --------------------
  // Custom
  // --------------------

  getStyle () {
    const s = this
    let { props } = s
    let { width, height } = props
    return {
      root: {
        width,
        height
      },
      icon: {
        fontSize: height * 0.66
      }
    }
  }
})

module.exports = SgMicrophone
