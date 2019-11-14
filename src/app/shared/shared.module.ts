import { NgModule, ModuleWithProviders, ErrorHandler } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  FilterPipe,
  KeyValuesPipe,
  DecodeURIPipe,
  DatePipe,
  DateTimePipe,
  FlagPipe,
  CurrencyPipe,
  AgePipe,
  DecodePipe,
  DateTimeISOPipe,
  PercentagePipe
} from "./utils/pipes";
@NgModule({
  imports: [FlexLayoutModule, FormsModule, MaterialModule],

  declarations: [
    FilterPipe,
    KeyValuesPipe,
    DecodeURIPipe,
    DecodePipe,
    DatePipe,
    DateTimePipe,
    FlagPipe,
    CurrencyPipe,
    AgePipe,
    DateTimeISOPipe,
    PercentagePipe
  ],

  exports: [
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    FilterPipe,
    KeyValuesPipe,
    DecodeURIPipe,
    DecodePipe,
    DatePipe,
    DateTimePipe,
    FlagPipe,
    CurrencyPipe,
    AgePipe,
    DateTimeISOPipe,
    PercentagePipe
  ],

  providers: []
})
export class SharedModule {}
