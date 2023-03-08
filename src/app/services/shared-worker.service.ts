import { Injectable,signal, NgZone } from '@angular/core';

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

    this.sharedWorker.port.onmessage =  ({data}) => {
      this.zone.run(()=>  this.message.set(data));
    };

    this.sharedWorker.port.start();
 }

  postMessage(data: string): void {
    this.sharedWorker.port.postMessage(data);
  }

}
