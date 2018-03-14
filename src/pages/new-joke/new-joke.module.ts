import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewJokePage } from './new-joke';

@NgModule({
  declarations: [
    NewJokePage,
  ],
  imports: [
    IonicPageModule.forChild(NewJokePage),
  ],
})
export class NewJokePageModule {}
