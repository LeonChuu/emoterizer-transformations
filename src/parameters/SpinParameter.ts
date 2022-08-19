import { TransformationParameter } from './TransformationParameter'

class SpinParameter implements TransformationParameter {
  readonly image: Buffer
  readonly transformationName: String
  readonly speed: number

  constructor(image: Buffer, transformationName: String, speed: number) {
    this.image = image
    this.transformationName = transformationName
    this.speed = speed
  }
}

export {SpinParameter}