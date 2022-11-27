import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class FadeParameter implements AnimatedTransformationParameter {
  frameDuration: number
  transformationName: String

  readonly frameNumber: number
  constructor (transformationName: String, frameNumber: number, frameDuration: number = 100) {
    this.transformationName = transformationName
    this.frameNumber = frameNumber
    this.frameDuration = frameDuration
  }
}

export { FadeParameter }
