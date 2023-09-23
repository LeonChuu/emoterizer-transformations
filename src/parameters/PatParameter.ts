import { Frame, GIF } from 'imagescript'
import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class PatParameter extends AnimatedTransformationParameter {
  readonly squish: number
  frameDuration?: number
  patGif: Buffer
  constructor (patGif: Buffer, squish: number, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('pat', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.patGif = patGif
    this.squish = squish
    this.frameDuration = frameDuration
  }
}

export { PatParameter }
