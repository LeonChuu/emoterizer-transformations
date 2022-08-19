import { TransformationParameter } from './TransformationParameter'

class SpinParameter implements TransformationParameter {
  readonly transformationName: String
  readonly horizontal: boolean
  readonly vertical: boolean

  constructor (transformationName: String, horizontal: boolean, vertical: boolean) {
    this.transformationName = transformationName
    this.horizontal = horizontal
    this.vertical = vertical
  }
}

export { SpinParameter }
