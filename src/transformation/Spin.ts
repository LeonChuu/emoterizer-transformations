import { SpinParameter } from '../parameters/SpinParameter'

import { Image, Frame} from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation'

class Spin extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: SpinParameter): Promise<Frame[]> {
    return []
  }
}

export { Spin }
