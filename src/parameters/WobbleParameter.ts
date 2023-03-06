import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class WobbleParameter implements AnimatedTransformationParameter {
  readonly squish: Number
  frameDuration?: number
  readonly transformationName: String
  constructor (transformationName: String, squish: Number, frameDuration?: number) {
    this.transformationName = transformationName
    this.squish = squish
    this.frameDuration = frameDuration
  }
}

export { WobbleParameter }
