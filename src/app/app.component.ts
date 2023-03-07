import { Component, inject, ApplicationRef, Injector, ComponentFactoryResolver, signal } from '@angular/core';
import { ComponentPortal, DomPortalOutlet } from "@angular/cdk/portal";
import { SharedWorkerService } from './services/shared-worker.service';
import { DescriptionComponent } from './components/description/description.component';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DescriptionComponent, JsonPipe, NgIf],
  template: `
  <div class="container">
    <app-description *ngIf="!popout()">
    </app-description>
    <div>
    <button (click)="toggleWindow()">{{ popout() ? 'Pop Back In' : 'Pop Out' }}</button>
    </div>
    <div>
    Timer of this window : {{ sharedWorkerService.count() }}
    </div>
  </div>
  `,
  styles: [`
  .container{
    display:flex;
    flex-flow: column;
    gap : 25px;
  }
  `]
})
export class AppComponent {
  sharedWorkerService = inject(SharedWorkerService);
  private externalWindow: any;
  private PortalOutlet!: any;
  private componentFactoryResolver = inject(ComponentFactoryResolver);
  private applicationRef = inject(ApplicationRef);
  private injector = inject(Injector);
  popout = signal(false);


  toggleWindow() {
    // Close window
    if (this.popout()) {
      this.toggle();
      return;
    }

    // Open window
    this.externalWindow = window.open(
      "",
      "",
      "width=300,height=300,left=200,top=200"
    );
    const portal = new ComponentPortal(DescriptionComponent);
    this.PortalOutlet = new DomPortalOutlet(
      this.externalWindow.document.body,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    )
    this.toggle();
    this.PortalOutlet.attach(portal);
    this.externalWindow.onbeforeunload = () => {
      this.clearWindow();
    }
  }

  ngOnDestroy() {
    this.clearWindow();
  }

  clearWindow() {
    this.toggle();
    this.externalWindow.close();
    this.PortalOutlet.detach();
  }

  toggle() {
    this.popout.set(!this.popout());
  }

}
