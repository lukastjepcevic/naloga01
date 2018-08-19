import { TestBed, async, ComponentFixture, inject, fakeAsync } from '@angular/core/testing';
import { Http, Response, HttpModule, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        HttpModule,
        HttpClientModule,
        HttpClientTestingModule
      ]
    }).compileComponents();;
  });

  it(`should issue a request`, async(inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
    http.get('/mock_url').subscribe();
    backend.expectOne({
      url: '/mock_url',
      method: 'GET'
    });
  })
  )
  );

  it(`should respond with data`, async(inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      http.get('/mock_url').subscribe((next) => {
        expect(next).toEqual({
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496"
            }
          }
        });
      });

      backend.match({
        url: '/mock_url',
        method: 'GET'
      })[0].flush({
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        }
      });
    })));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'naloga01'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('naloga01');
  }));

})