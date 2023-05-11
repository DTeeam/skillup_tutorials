import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Permission } from 'entities/permission.entity'
import { AbstractService } from 'modules/common/abstract/abstract.service'
import { Repository } from 'typeorm'
import Logging from 'library/Logging'
import { Product } from 'entities/product.entity'

@Injectable()
export class OrdersService {}
