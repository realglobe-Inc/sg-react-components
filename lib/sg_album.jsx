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
     * Number of images per 1 row in the thumbnail.
     */
    thumbnailCol: types.number,
    /**
     * Border color of selected image in the thumbnail.
     */
    thumbnailSelectedColor: types.string,
    /**
     * Called when update. Argument is index of imageList.
     */
    onChange: types.func
  },

  getDefaultProps () {
    return {
      imageList: [],
      width: 300,
      thumbnailCol: 4,
      thumbnailSelectedColor: 'yellow'
    }
  },

  getInitialState () {
    return {
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
           style={ Object.assign({}, props.style) }>
        <style className='sg-album-style' type='text/css'>
          { style }
        </style>
        <div className='sg-album-container'>
          <div className='sg-album-header'>
            <ApPrevButton onTap={ s.toLeft } />
            <ApNextButton onTap={ s.toRight } />
            <span className='sg-album-nth'> { state.nth } / { imageList.length } </span>
          </div>
          <div className='sg-album-display'>
            <div className='sg-album-full-img'>
                {
                  imageList.map((image, i) =>
                    <img className='sg-album-img' src={ image } key={ i } />
                  )
                }
            </div>
          </div>
          <div className='sg-album-thumbnail'>
            <div className='sg-album-thumbnail-selected'/>
            {
              imageList.map((image, i) => {
                // 配列の前方から画像を挿入しても、各画像に対するkeyを不変にする。画像データをkeyにすると同じ画像を挿入するとエラーになる
                let key = imageList.length - i
                return (
                  <div className='sg-album-thumbnail-img-effect' key={ key } data={ i } onClick={ this.moveTo }>
                    <img className='sg-album-thumbnail-img' src={ image } key={ key }/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  },

  componentWillReceiveProps (nextProps) {
    // 新しい画像がシフトされたら閲覧位置を戻す
    if (this.props.imageList.length < nextProps.imageList.length) {
      this.setState(this.getInitialState())
    }
  },

  componentWillUpdate (nextProps, nextState) {
    // 親コンポーネントからこのコンポーネントの状態を取得するのに使える
    let onChange = this.props.onChange
    if (onChange) {
      onChange(nextState.nth - 1)
    }
  },

  getStyle () {
    const s = this
    let { props, state } = s
    let { imageList, width, thumbnailCol, thumbnailSelectedColor } = props
    let displayRight = (state.nth - 1) * width
    let thumbnailWidth = width / thumbnailCol
    let thumbnailHeight = thumbnailWidth * 3 / 4
    let thumbnailLeft = thumbnailWidth * ((state.nth - 1) % thumbnailCol)
    let thumbnailTop = thumbnailHeight * Math.floor((state.nth - 1) / thumbnailCol)
    return `
.sg-album-container {
  width: ${width}px;
  margin: 5px;
}
.sg-album-display {
  width: ${width}px;
  overflow: hidden;
  border-bottom: 2px solid #666;
}
.sg-album-full-img {
  width: ${width * imageList.length}px;
  position: relative;
  white-space: nowrap;
  right: ${displayRight}px;
  transition: all 0.3s ease;
}
.sg-album-img {
  width: ${width}px;
}
.sg-album-header {
  position: relative;
  text-align: center;
}
.sg-album-nth {
  position: absolute;
  right: 0;
  top: 10px;
}
.sg-album-thumbnail {
  width: ${width}px;
  position: relative;
}
.sg-album-thumbnail-img-effect {
  z-index: 1;
  display: inline-block;
  position: relative;
  width: ${thumbnailWidth}px;
}
.sg-album-thumbnail-img-effect:hover:before {
  content: "";
  cursor: pointer;
  position: absolute;
  z-index: 3;
  display: block;
  width: ${thumbnailWidth}px;
  height: ${thumbnailHeight}px;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.2);
}
.sg-album-thumbnail-img-effect:active:before {
  content: "";
  cursor: pointer;
  position: absolute;
  z-index: 3;
  display: block;
  width: ${thumbnailWidth}px;
  height: ${thumbnailHeight}px;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.3);
}
.sg-album-thumbnail-img {
  width: ${thumbnailWidth}px;
}
.sg-album-thumbnail-selected {
  position: absolute;
  cursor: pointer;
  z-index: 2;
  width: ${thumbnailWidth}px;
  height: ${thumbnailHeight}px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  border: 2px solid ${thumbnailSelectedColor};
  left: ${thumbnailLeft}px;
  top: ${thumbnailTop}px;
}
`
  },

  toRight () {
    let { props, state } = this
    let nth = state.nth % props.imageList.length + 1
    this.setState({ nth })
  },

  toLeft () {
    let { state, props } = this
    let nth = (state.nth + props.imageList.length - 2) % props.imageList.length + 1
    this.setState({ nth })
  },

  moveTo (e) {
    let nth = Number(e.target.attributes.data.value) + 1
    this.setState({ nth })
  }
})

export default SgAlbum
