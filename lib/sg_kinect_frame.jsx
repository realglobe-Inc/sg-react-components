/**
 * HTML Component
 * @class SgKinectFrame
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'
import apemancolor from 'apemancolor'
import {depthSpace, jointTypes} from 'sg-kinect-constants'
import * as drawHelper from './helpers/draw_helper'
import * as colorHelper from './helpers/color_helper'

/** @lends SgKinectFrame */
const SgKinectFrame = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Body frame data from kinect */
    bodies: types.array,
    /** Component width */
    width: types.number,
    /** Component height */
    height: types.number,
    /** Width of frames */
    frameWidth: types.number,
    /** Radius of joint */
    jointRadius: types.number,
    /** Scale rate of canvas */
    scale: types.number,
    /** Alt message when no body found */
    alt: types.string,
    /** Colorizer function */
    colorizer: types.func
  },

  getDefaultProps () {
    return {
      width: depthSpace.BOUND_WIDTH,
      height: depthSpace.BOUND_HEIGHT,
      frameWidth: 4,
      jointRadius: 3,
      scale: 2,
      alt: 'NO BODY FOUND',
      colorizer: colorHelper.uniqueColorizer('#CCCC33')
    }
  },

  statics: {},

  render () {
    const s = this
    let { state, props } = s
    let { width, height, scale } = props
    let style = s.getStyle()
    let isEmpty = s.getBodies().length === 0
    return (
      <div className={ classnames('sg-kinnect-frame', props.className) }
           style={ Object.assign({
           }, style.main, props.style) }>
        { isEmpty ? s._renderAlt(style.alt) : null }
        <canvas width={ width * scale }
                height={ height * scale }
                style={ Object.assign({
                  width, height
                }) }
                ref={ (canvas) => s.registerCanvas(canvas) }/>
        { props.children }
      </div>
    )
  },

  componentWillMount () {
    const s = this
    s._trackingColors = {}
  },

  componentDidMount () {
    const s = this
    s.drawBody(s.getBodies())
  },

  componentDidUpdate () {
    const s = this
    s.drawBody(s.getBodies())
  },

  // --------------------
  // Specs
  // --------------------

  drawBody (bodies) {
    const s = this
    let { canvas } = s

    if (!canvas) {
      return
    }

    const {
      SPINE_BASE, SPINE_MID, NECK, HEAD, SHOULDER_LEFT,
      ELBOW_LEFT, WRIST_LEFT, HAND_LEFT, SHOULDER_RIGHT,
      ELBOW_RIGHT, WRIST_RIGHT, HAND_RIGHT, HIP_LEFT, KNEE_LEFT,
      ANKLE_LEFT, FOOT_LEFT, HIP_RIGHT, KNEE_RIGHT, ANKLE_RIGHT,
      FOOT_RIGHT, SPINE_SHOULDER, HAND_TIP_LEFT, THUMB_LEFT,
      HAND_TIP_RIGHT, THUMB_RIGHT
    } = jointTypes

    let { props } = s
    let { width, height, frameWidth, jointRadius, scale, colorizer } = props

    let ctx = canvas.getContext('2d')
    ctx.save()

    const { drawCircle, drawLine } = drawHelper
    let toPoint = (joint) => ({
      x: joint.depthX * width,
      y: joint.depthY * height
    })

    ctx.scale(scale, scale)
    ctx.clearRect(0, 0, width, height)

    for (let body of bodies) {
      let { joints, trackingId } = body

      let color = colorizer(`tracking-${trackingId}`)
      let points = joints.map(toPoint)

      ctx.fillStyle = color
      ctx.strokeStyle = apemancolor.parse(color).alpha(0.66).rgbaString()
      ctx.lineWidth = frameWidth

      let spineB = points[ SPINE_BASE ]
      let spineM = points[ SPINE_MID ]
      let neck = points[ NECK ]
      let head = points[ HEAD ]
      let shoulderL = points[ SHOULDER_LEFT ]
      let elbowL = points[ ELBOW_LEFT ]
      let wristL = points[ WRIST_LEFT ]
      let handL = points[ HAND_LEFT ]
      let shoulderR = points[ SHOULDER_RIGHT ]
      let elbowR = points[ ELBOW_RIGHT ]
      let wristR = points[ WRIST_RIGHT ]
      let handR = points[ HAND_RIGHT ]
      let hipL = points[ HIP_LEFT ]
      let kneeL = points[ KNEE_LEFT ]
      let ankleL = points[ ANKLE_LEFT ]
      let footL = points[ FOOT_LEFT ]
      let hipR = points[ HIP_RIGHT ]
      let kneeR = points[ KNEE_RIGHT ]
      let ankleR = points[ ANKLE_RIGHT ]
      let footR = points[ FOOT_RIGHT ]
      let spineShoulder = points[ SPINE_SHOULDER ]
      let handTipL = points[ HAND_TIP_LEFT ]
      let thumbL = points[ THUMB_LEFT ]
      let handTipR = points[ HAND_TIP_RIGHT ]
      let thumbR = points[ THUMB_RIGHT ]

      // Draw lines
      {
        let linePoints = [
          [ head, neck, spineShoulder, spineM, spineB ],
          [ spineShoulder, shoulderL, elbowL, wristL, handL, handTipL, thumbL ],
          [ spineB, hipL, kneeL, ankleL, footL ],
          [ spineShoulder, shoulderR, elbowR, wristR, handR, handTipR, thumbR ],
          [ spineB, hipR, kneeR, ankleR, footR ]
        ]
        for (let linePoint of linePoints) {
          drawLine(ctx, ...linePoint)
        }
      }

      // Draw circles
      {
        const RADIUS = jointRadius
        let circlePoints = [
          head, neck, spineShoulder, spineM, spineB,
          shoulderL, hipL, elbowL, wristL,
          shoulderR, hipR, elbowR, wristR,
          handL, handTipL, thumbL,
          handR, handTipR, thumbR
        ]
        for (let circlePoint of circlePoints) {
          drawCircle(ctx, circlePoint, RADIUS)
        }
      }
    }

    ctx.restore()
  },

  // --------------------
  // Custom
  // --------------------

  registerCanvas (canvas) {
    const s = this
    s.canvas = canvas
  },

  getStyle () {
    return {
      main: {
        position: 'relative'
      },
      alt: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#EEE',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.1)',
        fontSize: '36px',
        zIndex: '4',
        lineHeight: '1em',
        wordBreak: 'break-word',
        textAlign: 'center'
      }
    }
  },

  getBodies () {
    const s = this
    let { props } = s
    return (props.bodies || [])
      .filter((body) => !!body)
      .filter((body) => body.tracked)
  },

  _renderAlt (style) {
    const s = this
    let { props } = s
    return (
      <div className="sg-kinnect-frame-alt" style={ style }
      >{ props.alt }</div>
    )
  },

  canvas: null,

  _trackingColors: null

})

export default SgKinectFrame
