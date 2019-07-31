import { AppComponent } from './app.component';
import {AppModule} from 'src/app/app.module';
import { Shallow } from 'shallow-render';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule);
  });

  it(`has as title 'ng8-shallow'`, async () => {
    const {find} = await shallow.render();
    const title = find('h1');

    expect(title).toHaveFound(1);
    expect(title.nativeElement.textContent).toContain('Welcome to ng8-shallow!');
  });
});
