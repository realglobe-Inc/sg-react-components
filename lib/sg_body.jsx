/**
 * HTML Component
 * @class SgHtml
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApBody} from 'apeman-react-basic'
import classnames from 'classnames'

/** @lends SgBody */
const SgBody = React.createClass({

  // --------------------
  // Specs
  // --------------------

  render () {
    const s = this
    let { state, props } = s

    return (
      <ApBody { ...props }
        className={ classnames('sg-body', props.className) }
        style={ Object.assign({}, props.style) }>
        { props.children }
      </ApBody>
    )
  }

})

export default SgBody
