import { TransformationParameter } from './TransformationParameter'

class InvertParameter implements TransformationParameter {
  readonly transformationName: String

  constructor (transformationName: String) {
    this.transformationName = transformationName
  }
}

export { InvertParameter }
