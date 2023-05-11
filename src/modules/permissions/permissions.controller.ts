import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { PermissionsService } from './permissions.service'
import { Permission } from 'entities/permission.entity'
import { CreatePermissionDto } from './dto/create-permission.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('permissions')
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionService: PermissionsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Permission[]> {
    return this.permissionService.findAll()
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPermissionDto: CreatePermissionDto): Promise<Permission> {
    return this.permissionService.create(createPermissionDto)
  }
}
