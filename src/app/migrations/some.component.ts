import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { outputFromObservable } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-some',
  standalone: true,
  imports: [FormsModule],
  
    template: `
    <h2>Use Input and Output decorators</h2>
    <div>
      <p>bgColor: {{ bgColor() }}</p>
      <p>name: {{ name() }}</p>
      @let n = numSub.getValue();
      <p>num: {{ n }}</p>
      <div>
        Num: <input type="number" [ngModel]="n" (ngModelChange)="numSub.next($event)" />
      </div>
      <button (click)="triple.emit(n * 3)" >Show triple in the parent</button>
      <button (click)="powerX3.emit(n * n * n)" >Show cube in the parent</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SomeComponent {
  bgColor = input.required<string>({ alias: 'backgroundColor' }); 
  name = input<any, string | string>('input decorator', { transform: (x: string) => x.toLocaleUpperCase() });

  triple = output<number>();
  powerX3 = output<number>({ alias: 'cube' });

  numSub = new BehaviorSubject<number>(2);
  double = outputFromObservable(this.numSub.pipe(map((n) => n * 2)));
}
