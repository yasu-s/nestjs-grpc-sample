import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { SampleData, SampleDataById } from './model';

@Controller()
export class AppController {
  /**
   * AppService findOne
   * @param data id
   * @param metadata metadata
   * @returns SampleData
   */
  @GrpcMethod('AppService')
  findOne(data: SampleDataById, metadata: any): SampleData {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ] as SampleData[];
    const filteredItems = items.filter((item) => item.id === data.id);
    return filteredItems.length > 0 ? filteredItems[0] : ({} as SampleData);
  }
}
