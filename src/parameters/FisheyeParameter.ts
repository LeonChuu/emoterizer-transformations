import { TransformationParameter } from './TransformationParameter.js'

class FisheyeParameter implements TransformationParameter {
  readonly transformationName: String
  readonly radius: number

  constructor (transformationName: String, radius: number) {
    this.transformationName = transformationName
    this.radius = radius
  }
}

export { FisheyeParameter }
