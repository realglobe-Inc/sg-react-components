'use strict'

import React from 'react'
import {
  SgAlbum,
  SgHtml,
  SgButton,
  SgThemeStyle,
  SgKinectFrame
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
          <legend>SgButton</legend>
          <SgButton primary={ true } onTap={ () => console.log('button 01 tapped!') }>Button 01</SgButton>
          <SgButton onTap={ () => console.log('button 02 tapped!') }>Button 02</SgButton>
        </fieldset>
        <fieldset>
          <legend>SgAlbum</legend>
          <SgAlbum imageList={imgs} />
        </fieldset>
        <fieldset>
          <legend>SgKinectFrame</legend>
          <div>
            <SgKinectFrame frame={ require('./data/mock-kinnect-body-frame') }/>
          </div>
        </fieldset>
      </div>
    )
  }
})

export default Demo
