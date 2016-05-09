/**
 * HTML Component
 * @class SgHtml
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'

/** @lends SgMain */
const SgMain = React.createClass({

  // --------------------
  // Specs
  // --------------------

  render () {
    const s = this
    let { state, props } = s

    return (
      <div className={ classnames('sg-main', props.className) }
           style={ Object.assign({}, props.style) }>
        { props.children }
      </div>
    )
  }

})

export default SgMain
