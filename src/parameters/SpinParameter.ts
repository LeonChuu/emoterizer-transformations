import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class SpinParameter implements AnimatedTransformationParameter {
  readonly transformationName: String
  readonly speed: number
  frameDuration: number

  constructor (transformationName: String, speed: number, frameDuration: number = 100) {
    this.transformationName = transformationName
    this.speed = speed
    this.frameDuration = frameDuration
  }
}

export { SpinParameter }
