import { Controller } from '@nestjs/common';

import { CatalogService } from '../services/catalog.service';

@Controller()
export class CatalogApiController {
  constructor(private readonly catalogServices: CatalogService) {}
}
