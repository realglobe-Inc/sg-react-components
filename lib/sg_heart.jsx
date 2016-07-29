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
    heartRate: types.number,
    id: types.string
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
    let id = `sg-heart-${props.id}`
    return (
      <div className={ classnames('sg-heart', {
        'sg-heart-enlarged': enlarged
      })}
           id={id}>
           <ApStyle data={ style } />
           <ApIcon className='fa fa-heart sg-heart-icon' />
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

  componentWillUnmount () {
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
    let id = `sg-heart-${props.id}`
    return {
      [`.sg-heart#${id}`]: {
        width,
        height,
        transitionDuration: `${s._period}s`,
        fontSize: `${height * 0.5}px`,
        transitionTimingFunction: 'ease-out'
      },
      [`.sg-heart-enlarged#${id}`]: {
        fontSize: `${height * 0.8}px`,
        transitionTimingFunction: 'ease-in'
      }
    }
  }
})

export default SgHeart
