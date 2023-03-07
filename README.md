# Angular-Signals-SharedWorkers
Angular@next-v16  Trying out Shared Worker with Signals 
# Signals
![image](https://user-images.githubusercontent.com/48177059/223433983-46948dfe-ab88-4bab-ba35-6ab99e45bd09.png)

# Goal :
 To learn about Shared Workers (that share data between tabs and windows) and Signals that is going to be released in Angular V16

# In This Example you will see : 
  1.) Component of Angular Popping in and out of window with the help of portals 
  2.) Same Application that can maintain its state across different windows with the help of ServiceWorker
  3.) Usage of signals instead of Rxjs Subjects to Maintain State in UI.

# Takeaway :
  1.) SharedWorkers are supported in main desktop browsers and can be used share data across different tabs and windows, 
   we can also create a common state management library that works with all frameworks and across windows as well
   might need adoptor for different frameworks
  2.) signals are just dope and exciting, first step from angular to eliminate NgZone



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0-next.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
