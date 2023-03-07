import { Component,  inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { SharedWorkerService } from 'src/app/services/shared-worker.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports:[JsonPipe],
  template: `
  <div class="card">
   <button (click)="sendMessage()">Say Hai</button>
  </div>
  <div class="card">
   <h4 >{{ sharedWorkerService.message() | json }}</h4>
  </div>
  `,
  styles: [
    `
  .card{
    width: 100%;
    min-height: 10px;
    border : 1px solid black;
    margin : 15px 0px;
    padding : 5px;
  }
  `
  ]
})
export class DescriptionComponent {
  sharedWorkerService = inject(SharedWorkerService);

  sendMessage() {
    this.sharedWorkerService.postMessage('Hello from Angular!');
  }
}
