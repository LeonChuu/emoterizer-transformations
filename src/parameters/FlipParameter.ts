import { TransformationParameter } from './TransformationParameter.js'

class FlipParameter extends TransformationParameter {
  readonly horizontal: boolean
  readonly vertical: boolean

  constructor (horizontal: boolean, vertical: boolean) {
    super('flip')
    this.horizontal = horizontal
    this.vertical = vertical
  }
}

export { FlipParameter }
