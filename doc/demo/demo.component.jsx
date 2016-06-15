'use strict'

import React from 'react'
import {
  SgAlbum,
  SgHtml,
  SgButton,
  SgThemeStyle,
  SgKinectFrame,
  SgMicrophone,
  SgSwitch,
  SgVideo,
  SgHeart
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
      switchOn: false,
      videoPaused: false
    }
  },

  render () {
    const s = this
    let imgs = [ './img/sample1.png', './img/sample2.png', './img/sample3.png', './img/sample4.png', './img/sample5.png' ]
    let { switchOn, videoPaused } = s.state
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
        <fieldset>
          <legend>SgVideo</legend>
          <div>
            <div>
              <SgVideo src="./video/mock-mp4.mp4"
                       autoPlay
                       loop
                       width="120"
                       height="120"
                       playerRef={ (player) => { s.videoPlayer = player }}
                       onClick={ () => s.toggleVideo(!videoPaused) }
              />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>SgHeart</legend>
          <div>
            <SgHeart width={60} height={60} heartRate={60} />
          </div>
        </fieldset>
      </div>
    )
  },

  toggleSwitch () {
    const s = this
    this.setState({
      switchOn: !s.state.switchOn
    })
  },

  toggleVideo (paused) {
    const s = this
    if (paused) {
      s.videoPlayer.pause()
    } else {
      s.videoPlayer.play()
    }
    s.setState({ videoPaused: paused })
  }
})

export default Demo
