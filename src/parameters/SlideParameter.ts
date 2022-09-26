import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'
import { TransformationParameter } from './TransformationParameter.js'

class SlideParameter implements AnimatedTransformationParameter, TransformationParameter {
  readonly interval: number
  readonly transformationName: String
  readonly frames: number
  frameDuration: number
  constructor (transformationName: String, interval: number, frames: number = 10, frameDuration: number = 20) {
    this.frameDuration = frameDuration
    this.transformationName = transformationName
    this.frames = frames
    this.interval = interval
  }
}

export { SlideParameter }
