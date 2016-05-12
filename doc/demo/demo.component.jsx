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
    let imgs = ['sample1.png', 'sample2.png', 'sample3.png', 'sample4.png', 'sample5.png'].map(name => { return {path: `./img/${name}`, name: name} })
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
