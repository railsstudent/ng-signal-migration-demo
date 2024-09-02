import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-some',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  
    template: `
    <h2>Use Input and Output decorators</h2>
    <div>
      <p>bgColor: {{ bgColor() }}</p>
      <p>name: {{ name() }}</p>
      <p>num: {{ numSub.getValue() }}</p>
      <p>double: {{ double$ | async }}</p>
      <div>
        Num: <input type="number" [ngModel]="numSub.getValue()" (ngModelChange)="numSub.next($event)" />
      </div>
      <button (click)="triple.emit(numSub.getValue() * 3)" >Show triple in the parent</button>
      <button (click)="powerX3.emit(numSub.getValue() * numSub.getValue() * numSub.getValue())" >Show cube in the parent</button>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SomeComponent {
  bgColor = input.required<string>({ alias: 'backgroundColor' }); 
  name = input<any, string | string>('input decorator', { transform: (x: string) => x.toLocaleUpperCase() });

  // input setter
  @Input({ required: true }) set num(newValue: number) {
    this.numSub.next(newValue);
  }

  @Output() triple = new EventEmitter<number>();
  @Output('cube') powerX3 = new EventEmitter<number>();

  numSub = new BehaviorSubject<number>(2);
  double$ = this.numSub.pipe(map((n) => n * 2));
}
