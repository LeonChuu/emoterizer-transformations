import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class ShuffleParameter extends AnimatedTransformationParameter {
  readonly isVertical: boolean

  constructor (isVertical: boolean, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('shuffle', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.isVertical = isVertical
  }
}
export { ShuffleParameter }
