import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class FadeParameter extends AnimatedTransformationParameter {
  readonly frameNumber: number
  constructor (frameNumber: number, frameDuration: number = 100,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('fade', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.frameNumber = frameNumber
  }
}

export { FadeParameter }
