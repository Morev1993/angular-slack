import { Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  ClientsEffects,
  clientsReducer,
  CLIENTS_FEATURE_KEY,
} from '@angular-slack/client/data-access';
import {
  ContactsEffects,
  contactsReducer,
  CONTACTS_FEATURE_KEY,
} from '@angular-slack/data-access-contacts';

export const SHELL_ROUTES: Routes = [
  {
    path: ':clientId',
    component: ShellComponent,
    children: [
      {
        path: ':roomId',
        loadComponent: () =>
          import('@angular-slack/workspace/feature-primary-view').then(
            (m) => m.PrimaryViewComponent
          ),
      },
    ],
    providers: [
      provideState(CLIENTS_FEATURE_KEY, clientsReducer),
      provideEffects(ClientsEffects),
      provideState(CONTACTS_FEATURE_KEY, contactsReducer),
      provideEffects(ContactsEffects),
    ],
  },
];
