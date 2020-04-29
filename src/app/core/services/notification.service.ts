import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }
  private options: MatSnackBarConfig = {
    duration: 2500,
    horizontalPosition: 'end',
    verticalPosition: 'bottom',
    panelClass: ''
  };

  showSuccess(message: string): void {
    this.options.panelClass = 'success';
    this.snackBar.open(message, 'X', this.options);
  }

  showError(message: string): void {
    this.options.panelClass = 'error';
    this.snackBar.open(message, 'X', this.options);
  }
}
