import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { BrMaskerModule } from 'br-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationPage } from './registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    IonicSelectableModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
