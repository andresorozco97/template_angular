import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildRoutingModule } from './build-routing.module';
import { BuildComponent } from './build.component';

@NgModule({
  declarations: [BuildComponent],
  imports: [CommonModule, BuildRoutingModule],
})
export class BuildModule {}
