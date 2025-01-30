import { MiddlewareRoute } from '@medusajs/framework'

import { commissionMiddlewares } from './commission/middlewares'
import { orderSetsMiddlewares } from './order-sets/middlewares'
import { sellerMiddlewares } from './sellers/middlewares'

export const adminMiddlewares: MiddlewareRoute[] = [
  ...orderSetsMiddlewares,
  ...commissionMiddlewares,
  ...sellerMiddlewares
]
