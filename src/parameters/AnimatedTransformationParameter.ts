import { TransformationParameter } from './TransformationParameter.js'

abstract class AnimatedTransformationParameter extends TransformationParameter {
  frameDuration?: number
  firstFrameDuration?: number
  lastFrameDuration?: number
  disposalType?: string

  constructor (transformationName: string, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super(transformationName)
    this.frameDuration = frameDuration
    this.firstFrameDuration = firstFrameDuration
    this.lastFrameDuration = lastFrameDuration
    this.disposalType = disposalType
  }
}

export { AnimatedTransformationParameter }
