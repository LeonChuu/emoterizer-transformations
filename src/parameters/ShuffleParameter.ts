import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class ShuffleParameter implements AnimatedTransformationParameter {
  readonly isVertical: boolean
  readonly transformationName: String
  frameDuration: number
  constructor (transformationName: String, isVertical: boolean, frameDuration: number = 20) {
    this.frameDuration = frameDuration
    this.transformationName = transformationName
    this.isVertical = isVertical
  }
}
export { ShuffleParameter }
