'use strict'

import React from 'react'
import {
  SgAlbum,
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
    let imgs = ['./img/sample1.png', './img/sample2.png', './img/sample3.png', './img/sample4.png', './img/sample5.png']
    return (
      <div>
        <SgThemeStyle dominant={ DOMINANT_COLOR } style={ demoStyle }/>
        <fieldset>
          <legend>SgAlbum</legend>
          <SgAlbum imageList={imgs} />
        </fieldset>
      </div>
    )
  }
})

export default Demo
