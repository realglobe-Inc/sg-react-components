'use strict'

import React from 'react'
import {
  SgAlbum,
  SgHtml,
  SgButton,
  SgThemeStyle,
  SgKinectFrame,
  SgMicrophone,
  SgSwitch
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
  getInitialState () {
    return {
      switchOn: false
    }
  },

  render () {
    let imgs = [ './img/sample1.png', './img/sample2.png', './img/sample3.png', './img/sample4.png', './img/sample5.png' ]
    let {switchOn} = this.state
    return (
      <div>
        <SgThemeStyle dominant={ DOMINANT_COLOR } style={ demoStyle }/>
        <fieldset>
          <legend>SgButton</legend>
          <SgButton primary={ true } onTap={ () => console.log('button 01 tapped!') }>Button 01</SgButton>
          <SgButton onTap={ () => console.log('button 02 tapped!') }>Button 02</SgButton>
        </fieldset>
        <fieldset>
          <legend>SgSwitch</legend>
          <SgSwitch on={switchOn} onTap={ this.toggleSwitch } onTitle='ON' offTitle='OFF' width={120} handleSize={40}/>
        </fieldset>
        <fieldset>
          <legend>SgAlbum</legend>
          <SgAlbum imageList={ imgs } width={ 400 } thumbnailCol={ 4 } thumbnailSelectedColor={ DOMINANT_COLOR }/>
        </fieldset>
        <fieldset>
          <legend>SgKinectFrame</legend>
          <div>
            <SgKinectFrame style={{ display: 'inline-block' }} width={ 256 } height={ 128 }
                           bodies={ require('./data/mock-kinnect-bodies') }/>
            <SgKinectFrame style={{ display: 'inline-block' }} width={ 256 } height={ 128 } bodies={ null }/>
          </div>
        </fieldset>
        <fieldset>
          <legend>SgMicrophone</legend>
          <div>
            <SgMicrophone />
            <SgMicrophone on/>
          </div>
        </fieldset>
      </div>
    )
  },

  toggleSwitch () {
    this.setState({
      switchOn: !this.state.switchOn
    })
  }
})

export default Demo
