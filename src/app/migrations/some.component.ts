import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-some',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  template: `
    <p>Use Input and Output decorators</p>
    <div>
      <p>bgColor: {{ bgColor }}</p>
      <p>name: {{ name }}</p>
      <p>num: {{ numSub.getValue() }}</p>
      <p>double: {{ double$ | async }}</p>
      <div>
        Num: <input type="number" [ngModel]="numSub.getValue()" (ngModelChange)="numSub.next($event)" />
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SomeComponent {
  @Input({ required: true, alias: 'backgroundColor'}) bgColor!: string; 
  @Input({ transform: (x: string) => x.toLocaleUpperCase() }) name: string = 'input decorator';

  // input setter
  @Input({ required: true }) set num(newValue: number) {
    console.log('newValue', newValue);
    this.numSub.next(newValue);
  }

  numSub = new BehaviorSubject<number>(2);
  double$ = this.numSub.pipe(map((n) => n * 2)); 
}
