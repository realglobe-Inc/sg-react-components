/**
 * HTML Component
 * @class SgHtml
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApButton} from 'apeman-react-button'
import classnames from 'classnames'

/** @lends SgButton */
const SgButton = React.createClass({

  // --------------------
  // Specs
  // --------------------

  render () {
    const s = this
    let { state, props } = s

    return (
      <ApButton { ...props }
        className={ classnames('sg-button', props.className) }
        style={ Object.assign({}, props.style) }>
        { props.children }
      </ApButton>
    )
  }

})

export default SgButton
