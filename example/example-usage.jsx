'use strict'

import React from 'react'
import {
  SgThemeStyle
} from 'sg-react-components'

const DOMINANT_COLOR = '#FFC533'

const ExampleComponent = React.createClass({
  render () {
    return (
      <div>
        <SgThemeStyle dominant={ DOMINANT_COLOR }/>
      </div>
    )
  }
})

