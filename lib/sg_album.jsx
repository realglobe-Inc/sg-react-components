/**
 * HTML Component
 * @class SgHtml
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'
import {ApNextButton, ApPrevButton} from 'apeman-react-button'

/** @lends SgAlbum */
const SgAlbum = React.createClass({

  propTypes: {
    width: types.number,
    imageList: types.array
  },

  getDefaultProps () {
    return {
      width: 300
    }
  },

  getInitialState () {
    return {
      right: 0,
      nth: 1
    }
  },

  render () {
    const s = this
    let { props, state } = s
    let { imageList } = props
    let style = s.getStyle()

    return (
      <div className={ classnames('sg-album', props.className) }
           style={ Object.assign(style.container, props.style) }>
        <div style={style.header}>
          <ApPrevButton onTap={s.toLeft} />
          <ApNextButton onTap={s.toRight} />
          <span style={style.nth}> {state.nth} / {imageList.length} </span>
        </div>
        <div className='sg-album-display' style={style.display}>
          <div className='sg-album-full-img' style={style.fullImg}>
              {
                imageList.map((src, i) =>
                  <img className='sg-album-img' src={src} key={i} style={style.img}/>
                )
              }
          </div>
        </div>
        <div style={style.download}>
          <a href={imageList[state.nth - 1]} download>download</a>
        </div>
      </div>
    )
  },

  getStyle () {
    const s = this
    let { props, state } = s
    let { imageList, width } = props
    return {
      container: {
        width: `${width}px`,
        margin: '5px'
      },
      display: {
        width: `${width}px`,
        overflow: 'hidden'
      },
      fullImg: {
        width: width * imageList.length,
        position: 'relative',
        right: `${state.right}px`,
        transition: 'all 0.3s ease'
      },
      img: {
        width: width
      },
      header: {
        position: 'relative',
        textAlign: 'center'
      },
      nth: {
        position: 'absolute',
        right: 0,
        top: '10px'
      },
      download: {
        textAlign: 'center'
      }
    }
  },

  toRight () {
    let {props, state} = this
    let rightLimit = props.width * (props.imageList.length - 1)
    if (state.right < rightLimit) {
      this.setState({
        right: state.right + props.width,
        nth: state.nth + 1
      })
    }
  },

  toLeft () {
    let {props, state} = this
    if (state.right > 0) {
      this.setState({
        right: state.right - props.width,
        nth: state.nth - 1
      })
    }
  }

})

export default SgAlbum
