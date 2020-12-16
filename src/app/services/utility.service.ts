import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  showNotification(
    message: string,
    bg_color: string,
    time: number,
    snackbarService
  ): void {
    snackbarService.add({
      msg: `<strong style="color: white" >${message}</strong>`,
      timeout: time,
      action: {
        text: '',
        onClick: (snack) => {
          console.log('dismissed: ' + snack.id);
        },
      },
      onAdd: (snack) => {
        console.log('added: ' + snack.id);
      },
      onRemove: (snack) => {
        console.log('removed: ' + snack.id);
      },
    });
  }
}
