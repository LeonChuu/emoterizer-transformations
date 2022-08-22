import { TransformationParameter } from './TransformationParameter'

class SpinParameter implements TransformationParameter {
  readonly transformationName: String
  readonly speed: number

  constructor (image: Buffer, transformationName: String, speed: number) {
    this.transformationName = transformationName
    this.speed = speed
  }
}

export { SpinParameter }
