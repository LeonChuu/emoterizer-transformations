import { TransformationParameter } from './TransformationParameter.js'
import { Frame } from 'imagescript'

abstract class AnimatedTransformationParameter extends TransformationParameter {
  frameDuration?: number
  firstFrameDuration?: number
  lastFrameDuration?: number
  disposalType?: string

  constructor (transformationName: string, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType: string = Frame.DISPOSAL_BACKGROUND) {
    super(transformationName)
    this.frameDuration = frameDuration
    this.firstFrameDuration = firstFrameDuration
    this.lastFrameDuration = lastFrameDuration
    this.disposalType = disposalType
  }
}

export { AnimatedTransformationParameter }
