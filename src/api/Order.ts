import { apiRoutes } from 'constants/apiConstants'
import { RoleType } from 'models/role'

import { apiRequest } from './Api'

export const fetchChart = async () =>
  apiRequest<undefined, { date: string; sum: string }[]>(
    'get',
    `${apiRoutes.ORDERS_PREFIX}/chart`,
  )

export const fetchOrders = async (pageNumber: number) =>
  apiRequest<undefined, RoleType[]>(
    'get',
    `${apiRoutes.ORDERS_PREFIX}?page=${pageNumber}`,
  )
