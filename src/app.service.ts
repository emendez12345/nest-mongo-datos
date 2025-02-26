import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(@Inject('MONGO') private readonly database:Db){}
  getHello(): string {
    return 'Hello World!';
  }
  getTasks(){
    const taskColletion=this.database.collection('task')
    return taskColletion.find().toArray();
  }
}
