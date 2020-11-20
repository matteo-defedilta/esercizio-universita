import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValueService } from './value.service';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
  providers: [ValueService]
})
export class ValueComponent implements OnInit {

  cambiaValuta: FormGroup;
  valuta: Number;
  ratesList: Object;
  newRatesList: Object;

  constructor(private change_value_form: FormBuilder, private call_change_value: ValueService) { }

  ngOnInit(): void {
    this.cambiaValuta = this.change_value_form.group({
      valuta: ["", Validators.required]
    })
  }
  calcRates(rates:object):object{
    for (let [key, value] of Object.entries(rates)) {
      console.log(key, value);
      this.newRatesList
  }
    return rates
  }
  changeValue() {
    this.call_change_value.callChangeValue()
      .subscribe(value => {
        return this.ratesList = value.rates;
      })
  }

}
