import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class SlideParameter implements AnimatedTransformationParameter {
  readonly interval: number
  readonly transformationName: String
  readonly frames: number
  frameDuration?: number
  constructor (transformationName: String, interval: number, frames: number = 10, frameDuration?: number) {
    this.frameDuration = frameDuration
    this.transformationName = transformationName
    this.frames = frames
    this.interval = interval
  }
}

export { SlideParameter }
