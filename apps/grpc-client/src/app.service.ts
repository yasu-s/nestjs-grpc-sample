import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface SampleService {
  findOne(data: { id: number }): Observable<any>;
}

@Injectable()
export class AppService implements OnModuleInit {
  private sampleService: SampleService;

  constructor(@Inject('SAMPLE_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.sampleService = this.client.getService<SampleService>('AppService');
  }

  getSampleData(): Observable<string> {
    return this.sampleService.findOne({ id: 1 });
  }
}
