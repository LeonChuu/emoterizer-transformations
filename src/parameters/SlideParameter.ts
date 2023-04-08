import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class SlideParameter extends AnimatedTransformationParameter {
  readonly frames: number
  readonly interval: number
  constructor (frames: number, interval: number, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('slide', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.frames = frames
  }
}

export { SlideParameter }
