import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'
import { TransformationParameter } from './TransformationParameter.js'

class ShakeParameter implements AnimatedTransformationParameter, TransformationParameter {
  readonly intensity: number
  readonly transformationName: String
  frameDuration: number
  constructor (transformationName: String, intensity: number, frameDuration: number = 20) {
    this.frameDuration = frameDuration
    this.transformationName = transformationName
    this.intensity = intensity
  }
}

export { ShakeParameter }
