import { Injectable,signal,NgZone, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedWorkerService {
  sharedWorker!: SharedWorker;
  count = signal(0);
  message = signal([]);
  constructor(private zone : NgZone) {

    setInterval(() => {
      this.count.set(this.count()+1);
    }, 1000);
    this.sharedWorker = new SharedWorker('/assets/app.worker.js');

    this.sharedWorker.port.onmessage = async ({data}) => {
      this.zone.run(async()=> await this.message.set(data));
    };

    this.sharedWorker.port.start();
 }

  postMessage(data: string): void {
    this.sharedWorker.port.postMessage(data);
  }

}
