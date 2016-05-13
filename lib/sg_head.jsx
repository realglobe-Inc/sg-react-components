/**
 * HTML Component
 * @class SgHtml
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'
import {ApHead} from 'apeman-react-basic'

/** @lends SgHead */
const SgHead = React.createClass({

  // --------------------
  // Specs
  // --------------------

  render () {
    const s = this
    let { state, props } = s

    return (
      <ApHead { ...props }
        className={ classnames('sg-head', props.className) }
        style={ Object.assign({}, props.style) }>
        { props.children }
      </ApHead>
    )
  }

})

export default SgHead
