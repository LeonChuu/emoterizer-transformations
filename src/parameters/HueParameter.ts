import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class HueParameter extends AnimatedTransformationParameter {
  readonly frames: number
  constructor (frames: number = 10, frameDuration: number = 130,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('hue', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.frames = frames
  }
}

export { HueParameter }
