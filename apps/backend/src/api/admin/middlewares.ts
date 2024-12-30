import { MiddlewareRoute } from '@medusajs/framework'

import { comissionMiddlewares } from './comission/middlewares'
import { orderSetsMiddlewares } from './order-sets/middlewares'

export const adminMiddlewares: MiddlewareRoute[] = [
  ...orderSetsMiddlewares,
  ...comissionMiddlewares
]
