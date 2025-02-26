// import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as ExcelJS from 'exceljs';
import { Response } from 'express';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExportService {
  // private getDataFromJson(): any[] {
  //   // Leer el archivo JSON
  //   const filePath = path.join(__dirname,'..', 'data.json');
  //   const jsonData = fs.readFileSync(filePath, 'utf8');
  //   return JSON.parse(jsonData); // Convertir el JSON a un array de objetos
  // }
  private getDataFromJson(): any[] {
    // Obtener la ruta absoluta correcta
    const filePath = path.join(__dirname, '..', 'data.json');
  
    // Verificar si el archivo existe antes de leerlo
    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo data.json no se encuentra en: ${filePath}`);
    }
  
    // Leer el archivo JSON
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
  }
  

  async generateExcel(res: Response): Promise<void> {
    const data = this.getDataFromJson(); // Obtener los datos del JSON

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Usuarios');

    // Definir las columnas del Excel
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Nombre', key: 'name', width: 25 },
      { header: 'Correo', key: 'email', width: 30 },
      { header: 'Edad', key: 'age', width: 10 },
    ];

    // Agregar las filas con los datos
    data.forEach((item) => worksheet.addRow(item));

    // Configurar la respuesta para descargar el archivo
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename=usuarios.xlsx');

    // Escribir el archivo en la respuesta
    await workbook.xlsx.write(res);
    res.end();
  }

  getJsonData(res: Response): void {
    const data = this.getDataFromJson();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename=datos.json');
    res.json(data);
  }
}
