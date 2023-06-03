import { TransformationParameter } from './TransformationParameter.js'

class AccelerateParameter extends TransformationParameter {
  readonly acceleration: number
  readonly middle: boolean

  constructor (acceleration: number, middle: boolean) {
    super('accelerate')
    this.acceleration = acceleration
    this.middle = middle
  }
}

export { AccelerateParameter }
