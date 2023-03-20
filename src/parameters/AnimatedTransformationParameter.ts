import { TransformationParameter } from './TransformationParameter.js'

interface AnimatedTransformationParameter extends TransformationParameter {
  frameDuration?: number
  firstFrameDuration?: number
  lastFrameDuration?: number
}

export { AnimatedTransformationParameter }
