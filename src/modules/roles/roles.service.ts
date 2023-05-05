import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Permission } from 'entities/permission.entity'
import { Role } from 'entities/role.entity'
import Logging from 'library/Logging'
import { AbstractService } from 'modules/common/abstract/abstract.service'
import { CreateUpdateRoleDto } from 'modules/roles/dto/create-update-role.dto'
import { Repository } from 'typeorm'

@Injectable()
export class RolesService extends AbstractService {
  constructor(@InjectRepository(Role) private readonly rolesRepository: Repository<Role>) {
    super(rolesRepository)
  }

  async create(createRoleDto: CreateUpdateRoleDto, permissionsIds: { id: string }[]): Promise<Role> {
    try {
      const permission = this.rolesRepository.create({ ...createRoleDto, permissions: permissionsIds })
      return this.rolesRepository.save(permission)
    } catch (error) {
      Logging.error(error)
      throw new BadRequestException('Could not create a new role')
    }
  }
  async update(roleId: string, updateRoleDto: CreateUpdateRoleDto, permissionsIds: { id: string }[]): Promise<Role> {
    const role = (await this.findById(roleId)) as Role
    try {
      role.name = updateRoleDto.name
      role.permissions = permissionsIds as Permission[]
      return this.rolesRepository.save(role)
    } catch (error) {
      Logging.error(error)
      throw new BadRequestException('Could not update the permission')
    }
  }
}
