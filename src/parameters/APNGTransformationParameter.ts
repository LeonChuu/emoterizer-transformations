import { TransformationParameter } from './TransformationParameter.js'

class APNGTransformationParameter extends TransformationParameter {
  readonly colorNumber: number

  constructor (colorNumber: number = 0) {
    super('APNG')
    this.colorNumber = colorNumber
  }
}

export { APNGTransformationParameter }
