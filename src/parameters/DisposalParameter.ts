import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'
import { TransformationParameter } from './TransformationParameter.js'

class DisposalParameter implements AnimatedTransformationParameter, TransformationParameter {
  frameDuration?: number
  transformationName: String
  disposalType: string
  constructor (transformationName: String, disposalType: string, frameDuration?: number) {
    this.transformationName = transformationName
    this.disposalType = disposalType
    this.frameDuration = frameDuration
  }
}

export { DisposalParameter }
