import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class WobbleParameter extends AnimatedTransformationParameter {
  readonly squish: number
  constructor (squish: number, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('wobble', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.squish = squish
  }
}

export { WobbleParameter }
