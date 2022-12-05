import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class CompositeParameter implements AnimatedTransformationParameter {
  frameDuration: number
  transformationName: String

  readonly imageOnTop: Buffer
  readonly offsetX: number
  readonly offsetY: number
  constructor (transformationName: String, imageOnTop: Buffer, offsetX: number, offsetY: number, frameDuration: number = 100) {
    this.transformationName = transformationName
    this.offsetX = offsetX
    this.offsetY = offsetY
    this.imageOnTop = imageOnTop
    this.frameDuration = frameDuration
  }
}

export { CompositeParameter }
