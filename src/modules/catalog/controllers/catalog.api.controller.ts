import { Body, Controller, Get, Post } from '@nestjs/common';

import { CatalogService } from '../services/catalog.service';

@Controller()
export class CatalogApiController {
  constructor(private readonly catalogServices: CatalogService) {}

  @Get('/get')
  async getCatalog() {
    return await this.catalogServices.getCatalog();
  }

  @Post('/update')
  async updateCatalog(
    @Body() params: { action: string; type: string; data: any },
  ) {
    return await this.catalogServices.updateCatalog(params);
  }
}
