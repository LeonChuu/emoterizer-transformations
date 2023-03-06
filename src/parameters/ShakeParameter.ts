import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class ShakeParameter implements AnimatedTransformationParameter {
  readonly intensity: number
  readonly transformationName: String
  frameDuration?: number
  constructor (transformationName: String, intensity: number, frameDuration?: number) {
    this.frameDuration = frameDuration
    this.transformationName = transformationName
    this.intensity = intensity
  }
}

export { ShakeParameter }
