import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgencyState } from 'src/app/store/agency/state/agency.state';

import { AgenciesComponent } from './agencies.component';

describe('AgenciesComponent', () => {
  let component: AgenciesComponent;
  let fixture: ComponentFixture<AgenciesComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesComponent ],
      imports: [
        SharedModule,
        NgxsModule.forRoot([AgencyState]),
      ],
    })
    .compileComponents();
    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot(),
      items: {
        Agencies: {
            Results: [
              {
                Name: 'Bon Jovi',
                IsAwardWinner: false,
                Agency: {
                  Name: 'The fancy agency company'
                },
                Theme: {
                  AvatarImage: 'pick any image to use as an avatar'
                },
                AverageSalePrice: 502664.13,
                SoldProperties: 152,
                TotalReviews: 0,
                StarRating: 1
              },
              {
                Name: 'Teddy Scott',
                IsAwardWinner: true,
                Agency: {
                  Name: 'A fancier agency'
                },
                Theme: {
                  AvatarImage: 'pick any image to use as an avatar'
                },
                AverageSalePrice: 627586.74,
                SoldProperties: 125,
                TotalReviews: 174,
                StarRating: 5
              }
            ]
          },
          Loading: false
        }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update store on init', () => {
    component.ngOnInit();
    expect(store.selectSnapshot(state => state.items.Agencies.Results.length)).toEqual(2);
  });
});
