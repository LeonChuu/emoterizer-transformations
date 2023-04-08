import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class CompositeParameter extends AnimatedTransformationParameter {
  readonly imageOnTop: Buffer
  readonly offsetX: number
  readonly offsetY: number

  constructor (imageOnTop: Buffer, offsetX: number, offsetY: number, frameDuration: number = 100,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('composite', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.offsetX = offsetX
    this.offsetY = offsetY
    this.imageOnTop = imageOnTop
  }
}

export { CompositeParameter }
