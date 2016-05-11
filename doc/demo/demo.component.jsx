'use strict'

import React from 'react'
import {
  SgHtml,
  SgButton,
  SgThemeStyle
} from '../../lib'

const DOMINANT_COLOR = '#FFC533'

const demoStyle = {
  '.react-demo a:link, .react-demo a:visited': {
    color: DOMINANT_COLOR
  },
  '.react-demo .syntaxhighlighter .keyword': {
    color: `${DOMINANT_COLOR} !important`
  }
}

const Demo = React.createClass({
  render () {
    return (
      <div>
        <SgThemeStyle dominant={ DOMINANT_COLOR } style={ demoStyle }/>
        <fieldset>
          <legend>SgButton</legend>
          <SgButton primary={ true } onTap={ () => console.log('button 01 tapped!') }>Button 01</SgButton>
          <SgButton onTap={ () => console.log('button 02 tapped!') }>Button 02</SgButton>
        </fieldset>
      </div>
    )
  }
})

export default Demo
