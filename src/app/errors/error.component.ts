import { ErrorService } from './error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [`
      .backdrop {
          background-color: rgba(0,0,0,0.6);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height 100vh;
      }
  `]
})
export class ErrorComponent implements OnInit {
  error: Error;
  displayed: string = 'none';
  constructor( private errorService: ErrorService) { }

  ngOnInit() {
    this.errorService.errorOccurred.subscribe(
      (error: Error) => {
        this.error = error;
        this.displayed = 'block';
      }
    )
  }

  onErrorHandled() {
    this.displayed = 'none';
  }

}
