import { TransformationParameter } from './TransformationParameter.js'

class SpinParameter implements TransformationParameter {
  readonly transformationName: String
  readonly speed: number

  constructor (transformationName: String, speed: number) {
    this.transformationName = transformationName
    this.speed = speed
  }
}

export { SpinParameter }
