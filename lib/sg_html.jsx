/**
 * HTML Component
 * @class SgHtml
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'
import {ApHtml} from 'apeman-react-basic'

/** @lends SgHtml */
const SgHtml = React.createClass({

  // --------------------
  // Specs
  // --------------------

  render () {
    const s = this
    let { state, props } = s

    return (
      <ApHtml className={ classnames('sg-html', props.className) }
              style={ Object.assign({}, props.style) }>
        { props.children }
      </ApHtml>
    )
  }

})

export default SgHtml
