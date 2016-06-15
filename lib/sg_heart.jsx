/**
 * SgHeart Component
 * @class SgHeart
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApStyle, ApIcon} from 'apeman-react-basic'
import classnames from 'classnames'

/** @lends SgHeart */
const SgHeart = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    width: types.number,
    height: types.number,
    heartRate: types.number
  },

  statics: {
    style: {
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
  },

  getDefaultProps () {
    return {
      width: 44,
      height: 44,
      heartRate: 60
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
    let { enlarged } = state
    return (
      <div className='sg-heart'>
           <ApStyle data={ SgHeart.style } />
           <ApStyle data={ style } />
           <ApIcon className={ classnames('fa fa-heart sg-heart-icon', {
             'sg-heart-icon-enlarged': enlarged
           })}
           />
      </div>
    )
  },

  // --------------------
  // Lifecycle
  // --------------------

  componentWillMount () {
    const s = this
    const { props } = s
    let period = 60 / (props.heartRate * 2)
    s._period = period
  },

  componentDidMount () {
    const s = this
    s._animationTimer = setInterval(() => {
      const { state } = s
      s.setState({
        enlarged: !state.enlarged
      })
    }, s._period * 1000)
  },

  componentWillUnMount () {
    const s = this
    clearInterval(s._animationTimer)
  },

  // --------------------
  // Custom
  // --------------------

  getStyle () {
    const s = this
    let { props } = s
    let { width, height } = props
    return {
      '.sg-heart': {
        width,
        height
      },
      '.sg-heart-icon': {
        transitionDuration: `${s._period}s`,
        fontSize: `${height * 0.5}px`,
        transitionTimingFunction: 'ease-out'
      },
      '.sg-heart-icon-enlarged': {
        fontSize: `${height * 0.9}px`,
        transitionTimingFunction: 'ease-in'
      }
    }
  }

})

export default SgHeart
