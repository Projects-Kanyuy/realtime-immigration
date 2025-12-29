import createImageUrlBuilder from '@sanity/image-url'
import type { ImageUrlBuilder } from '@sanity/image-url'

import { dataset, projectId } from '../env'

const builder: ImageUrlBuilder = createImageUrlBuilder({
  projectId,
  dataset,
})

export const urlFor = (source: any) => {
  return builder.image(source)
}
