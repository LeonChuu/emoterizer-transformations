import { TransformationParameter } from './TransformationParameter.js'

class CircleParameter extends TransformationParameter {
  readonly largerDimension: boolean
  readonly feathering: number

  constructor (largerDimension: boolean, feathering: number) {
    super('circle')
    this.feathering = feathering
    this.largerDimension = largerDimension
  }
}

export { CircleParameter }
