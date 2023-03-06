import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'
import { TransformationParameter } from './TransformationParameter.js'

class HueParameter implements AnimatedTransformationParameter, TransformationParameter {
  readonly transformationName: String
  readonly frames: number
  frameDuration?: number
  constructor (transformationName: String, frames: number = 10, frameDuration?: number) {
    this.frameDuration = frameDuration
    this.transformationName = transformationName
    this.frames = frames
  }
}

export { HueParameter }
