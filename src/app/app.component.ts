import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewChildren } from '@angular/core';
import { SomeComponent } from './migrations/some.component';
import { QueriesComponent } from './migrations/queries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SomeComponent, QueriesComponent],
  template: `
    <app-some [backgroundColor]="color" [name]="name" [num]="20" 
      (triple)="tripleValue = $event" (cube)="cubeValue = $event" />
    <p>Tripe: {{ tripleValue }}, Cube: {{ cubeValue }}</p>
    <app-queries>
      <div #header header>My Header</div>
      <p #p>Paragraph 1</p>
      <p #p>Paragraph 2</p>
    </app-queries>

    <app-queries #a>
      <div #header header>My Header 2</div>
      <p #p>Paragraph 1a</p>
      <p #p>Paragraph 2a</p>
    </app-queries>
    <app-queries #a>
      <div #header header>My Header 3</div>
      <p #p>Paragraph 1b</p>
      <p #p>Paragraph 2b</p>
    </app-queries>
    <p>ViewChildName: {{ viewChildName }}</p>
    <p>numAComponents: {{ numAComponents }}</p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'Migrate to signals using ngxtension library';
  color = 'red';
  name = 'Hello World!!!!';

  tripleValue = 0;
  cubeValue = 0;

  @ViewChild(QueriesComponent) queries!: QueriesComponent;
  @ViewChildren('a') aComponents!: QueriesComponent[];

  viewChildName = '';
  numAComponents = 0;
  
  ngAfterViewInit(): void {
    this.viewChildName = this.queries.name;  
    this.numAComponents = this.aComponents.length;
  }
}
