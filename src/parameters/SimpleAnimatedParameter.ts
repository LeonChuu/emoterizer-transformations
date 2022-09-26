import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'
import { TransformationParameter } from './TransformationParameter.js'

class SimpleAnimatedParameter implements TransformationParameter, AnimatedTransformationParameter {
  readonly transformationName: String
  frameDuration: number
  constructor (transformationName: String) {
    this.transformationName = transformationName
  }
}

export { SimpleAnimatedParameter }
