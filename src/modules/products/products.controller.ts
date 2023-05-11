import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { PaginatedResult } from 'interfaces/paginated-result.interface'
import { Product } from 'entities/product.entity'
import { CreateUpdateProductDto } from './dto/create-update-product.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { isFileExtensionSafe, removeFile, saveImageToStorage } from 'helpers/imageStorage'
import { join } from 'path'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async paginated(@Query('page') page: number): Promise<PaginatedResult> {
    return this.productsService.paginate(page)
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProductDto: CreateUpdateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto)
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', saveImageToStorage))
  @HttpCode(HttpStatus.CREATED)
  async upload(@UploadedFile() file: Express.Multer.File, @Param('id') productId: string): Promise<Product> {
    const filename = file?.filename

    if (!filename) throw new BadRequestException('File must be the right type')

    const imagesFolderPath = join(process.cwd(), 'files')
    const fullImagePath = join(imagesFolderPath + '/' + file.filename)
    if (await isFileExtensionSafe(fullImagePath)) {
      return this.productsService.updateProductImage(productId, filename)
    }
    removeFile(fullImagePath)
    throw new BadRequestException('File content does not match extension')
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() createProductDto: CreateUpdateProductDto): Promise<Product> {
    return this.productsService.update(id, createProductDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id)
  }
}
