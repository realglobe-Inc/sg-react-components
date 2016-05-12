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
    /**
     * Width(px) of a image.
     */
    width: types.number,
    /**
     * List of image src.
     */
    imageList: types.array,
    /**
     * Called with rendering. Argument is index of imageList.
     */
    onRender: types.func
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
    if (props.onRender) {
      props.onRender(state.nth - 1)
    }

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
                imageList.map((image, i) =>
                  <img className='sg-album-img' src={image} key={i} style={style.img}/>
                )
              }
          </div>
        </div>
      </div>
    )
  },

  componentWillReceiveProps (nextProps) {
    this.setState(this.getInitialState())
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
        width: `${width * imageList.length}px`,
        position: 'relative',
        whiteSpace: 'nowrap',
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
      }
    }
  },

  toRight () {
    let {props, state} = this
    if (state.nth < props.imageList.length) {
      this.setState({
        right: state.nth * props.width,
        nth: state.nth + 1
      })
    }
  },

  toLeft () {
    let {props, state} = this
    if (state.nth > 0) {
      this.setState({
        right: (state.nth - 2) * props.width,
        nth: state.nth - 1
      })
    }
  }

})

export default SgAlbum
