/**
 * HTML Component
 * @class SgHtml
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'

/** @lends SgHeader */
const SgHeader = React.createClass({

  // --------------------
  // Specs
  // --------------------

  render () {
    const s = this
    let { state, props } = s

    return (
      <div className={ classnames('sg-header', props.className) }
           style={ Object.assign({}, props.style) }>
        { props.children }
      </div>
    )
  }

})

export default SgHeader
