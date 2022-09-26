import { TransformationParameter } from './TransformationParameter.js'

class SimpleParameter implements TransformationParameter {
  readonly transformationName: String

  constructor (transformationName: String) {
    this.transformationName = transformationName
  }
}

export { SimpleParameter }
