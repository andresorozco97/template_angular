import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './organisms/table/table.component';
import { FormComponent } from './organisms/form/form.component';
import { ControlComponent } from './molecules/control/control.component';
import { SelectComponent } from './molecules/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    ControlComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TableComponent,
    FormComponent,
    ControlComponent,
    SelectComponent
  ]
})
export class SharedModule { }