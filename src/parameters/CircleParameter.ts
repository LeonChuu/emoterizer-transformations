import { TransformationParameter } from './TransformationParameter.js'

class CircleParameter implements TransformationParameter {
  readonly transformationName: String
  readonly largerDimension: boolean
  readonly feathering: number

  constructor (transformationName: String, largerDimension: boolean, feathering: number) {
    this.transformationName = transformationName
    this.feathering = feathering
    this.largerDimension = largerDimension
  }
}

export { CircleParameter }
