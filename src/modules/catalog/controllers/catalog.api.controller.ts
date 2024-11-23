import { Body, Controller, Get, Put } from '@nestjs/common';

import { CatalogService } from '../services/catalog.service';

@Controller()
export class CatalogApiController {
  constructor(private readonly catalogServices: CatalogService) {}

  @Get('/')
  async getCatalog() {
    return await this.catalogServices.getCatalog();
  }

  @Put('/')
  async updateCatalog(
    @Body() params: { action: string; type: string; data: any },
  ) {
    return await this.catalogServices.updateCatalog(params);
  }
}
