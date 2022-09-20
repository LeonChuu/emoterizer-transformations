import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'
import { TransformationParameter } from './TransformationParameter.js'

class PatParameter implements TransformationParameter, AnimatedTransformationParameter {
  readonly squish: Number
  frameDuration: number
  readonly transformationName: String
  constructor (transformationName: String, squish: Number, frameDuration: number = 100) {
    this.transformationName = transformationName
    this.squish = squish
    this.frameDuration = frameDuration
  }
}

export { PatParameter }
