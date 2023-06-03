import { Frame, GIF } from 'imagescript'
import { AnimatedTransformationParameter } from './AnimatedTransformationParameter.js'

class PatParameter extends AnimatedTransformationParameter {
  readonly squish: number
  frameDuration?: number
  patGif: Promise<Frame[]>
  constructor (patGif: Buffer, squish: number, frameDuration?: number,
    firstFrameDuration?: number, lastFrameDuration?: number, disposalType?: string) {
    super('pat', frameDuration, firstFrameDuration, lastFrameDuration, disposalType)
    this.patGif = GIF.decode(patGif).then(gif => Array.from(gif)) as Promise<Frame[]>
    this.squish = squish
    this.frameDuration = frameDuration
  }
}

export { PatParameter }
