import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { SomeComponent } from './migrations/some.component';
import { QueriesComponent } from './migrations/queries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SomeComponent, QueriesComponent],
  template: `
    <app-some [backgroundColor]="color" [name]="name" [num]="20" (triple)="tripleValue = $event" />
    <p>Tripe: {{ tripleValue }}</p>
    <app-queries />
    <p>ViewChildName: {{ viewChildName }}</p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'Migrate to signals using ngxtension library';
  color = 'red';
  name = 'Hello World!!!!';

  tripleValue = 0;

  @ViewChild(QueriesComponent) queries!: QueriesComponent;
  viewChildName = '';
  
  ngAfterViewInit(): void {
    this.viewChildName = this.queries.name;  
  }
}
