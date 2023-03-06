import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class FadeParameter implements AnimatedTransformationParameter {
  frameDuration: number|undefined
  lastFrameDuration: number
  transformationName: String

  readonly frameNumber: number
  constructor (transformationName: String, frameNumber: number, lastFrameDuration: number = 1000, frameDuration?: number) {
    this.transformationName = transformationName
    this.frameNumber = frameNumber
    this.frameDuration = frameDuration
    this.lastFrameDuration = lastFrameDuration
  }
}

export { FadeParameter }
