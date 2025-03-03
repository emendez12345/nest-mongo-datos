import { Controller, Get, Res } from '@nestjs/common';
import { ExportService } from './export.service';
import { Response } from 'express';

@Controller('export')
export class ExportController {
  constructor(private readonly exportService: ExportService) {}

  // Endpoint para descargar JSON
  @Get('json')
  getJson(@Res() res: Response) {
    this.exportService.getJsonData(res);
  }

  // Endpoint para descargar Excel
  @Get('excel')
  async getExcel(@Res() res: Response) {
    await this.exportService.generateExcel(res);
  }
}
