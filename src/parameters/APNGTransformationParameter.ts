import { TransformationParameter } from './TransformationParameter.js'

class APNGTransformationParameter implements TransformationParameter {
  readonly transformationName: String
  readonly colorNumber: number

  constructor (transformationName: String, colorNumber: number = 0) {
    this.transformationName = transformationName
    this.colorNumber = colorNumber
  }
}

export { APNGTransformationParameter }
