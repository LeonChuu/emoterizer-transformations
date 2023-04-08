import { TransformationParameter } from './TransformationParameter.js'

class FisheyeParameter extends TransformationParameter {
  readonly radius: number

  constructor (radius: number) {
    super('fisheye')
    this.radius = radius
  }
}

export { FisheyeParameter }
