import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class SpinParameter extends AnimatedTransformationParameter {
  readonly speed: number
  constructor (speed: number, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('speed', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.speed = speed
  }
}

export { SpinParameter }
