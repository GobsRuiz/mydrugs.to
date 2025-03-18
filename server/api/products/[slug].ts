import { products } from '../../data/products'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Produto não encontrado'
    })
  }

  return product
})
