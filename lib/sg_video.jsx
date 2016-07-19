/**
 * SgVideo Component
 * @class SgVideo
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'

/** @lends SgVideo */
const SgVideo = React.createClass({
  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Video source URL */
    src: types.oneOfType([
      types.string,
      types.arrayOf(types.string)
    ]),
    /** Register player */
    playerRef: types.func
  },

  getDefaultProps () {
    return {
      playerRef () {}
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let src = [].concat(props.src || [])
    let videoProps = Object.assign({}, props)
    delete videoProps.playerRef
    return (
      <video { ...videoProps }
        className={ classnames('sg-video', props.className) }
        style={ Object.assign({}, props.style) }
        ref={ (player) => props.playerRef(player) }
      >
        { src.map((src) => (
          <source src={ src } key={ src }/>)
        ) }
        { props.children }
      </video>
    )
  }
})

export default SgVideo
