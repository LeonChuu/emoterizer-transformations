import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class PatParameter extends AnimatedTransformationParameter {
  readonly squish: number
  frameDuration?: number
  constructor (squish: number, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('pat', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.squish = squish
    this.frameDuration = frameDuration
  }
}

export { PatParameter }
