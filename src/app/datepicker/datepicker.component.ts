import { Component, OnInit, EventEmitter } from '@angular/core';

/* DatepickerComponent
 *    Customized datepicker component, that would
 * return date in 'dd-mm-yyyy' format.
 * 
 */
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  public dt: Date = new Date();

  public dateinfoevent = new EventEmitter<string>();
  constructor() {

  }

  onChange(val) {
    let mm: string;
    let dd: string;
    let yyyy: string;
    [dd, mm, yyyy] = val.split("-");

    let calcdate = new Date(mm+'-'+dd+'-'+yyyy);

    if (Object.prototype.toString.call(calcdate) === "[object Date]"){
      if (!isNaN(calcdate.getTime())) {
        this.dt = calcdate;
        this.dateinfoevent.emit(this.getDate());
      }
    }
  }
  ngOnInit() {
  }

  getDate() {
    let dd = '' + this.dt.getDate();
    let mm = '' + (this.dt.getMonth() + 1);
    let yyyy = this.dt.getFullYear();
    if (mm.length < 2) mm = '0' + mm;
    if (dd.length < 2) dd = '0' + dd;
    this.dateinfoevent.emit([dd, mm, yyyy].join('-'));
    return [dd, mm, yyyy].join('-');
  }

}
