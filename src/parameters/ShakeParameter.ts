import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class ShakeParameter extends AnimatedTransformationParameter {
  readonly intensity: number
  constructor (intensity: number, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('shake', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.intensity = intensity
  }
}

export { ShakeParameter }
