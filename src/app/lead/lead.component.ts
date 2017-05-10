import { LeadService } from './lead.service';
import { LeadModel } from './lead.model';
import { DateValidator } from './../shared/date.directive';
import { LeadInterface } from './lead.interface';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';


@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {

  
  @Input() public lead: LeadInterface;
  public genders = [
    { value: 'Female', display: 'Female' },
    { value: 'Male', display: 'Male' },
    { value: 'Other', display: 'Other' }
  ];
  
  public passportavailableyn = [
    { value: 'Y', display: 'Y' },
    { value: 'N', display: 'N' }
  ];

  public visarejectedyn = [
    { value: 'Y', display: 'Y' },
    { value: 'N', display: 'N' }
  ];

  leadForm;
  constructor(private leadService: LeadService) { }

  ngOnInit() {
    
    this.lead = {
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      fatherName: '',
      spouseName: '',
      dateOfBirth: '',
      gender: this.genders[0].value,
      phone: '',
      alternatephone: '',
      address: '',
      photo: '',
      country: '',
      passportavailableyn: this.passportavailableyn[0].value,
      passportnumber: '',
      passportissueddate: '',
      passportexpirydate: '',
      visarejected: this.visarejectedyn[1].value,
      visarejectednotes: '',
    }
  }
  /* Date picker event capture
   *  for date of birth
   * 
   * 
   */
  //public dt: Date = new Date();
  public dt: Date;

  setdob(val: Date){
    this.lead.dateOfBirth = this.getDate(val);
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
      }
    }
  }


  // Date of issue of passport
  public doi: Date;

  setdoi(val: Date){
    this.lead.passportissueddate = this.getDate(val);
  }
  onChangePassportDate(val) {
    let mm: string;
    let dd: string;
    let yyyy: string;
    [dd, mm, yyyy] = val.split("-");

    let calcdate = new Date(mm+'-'+dd+'-'+yyyy);

    if (Object.prototype.toString.call(calcdate) === "[object Date]"){
      if (!isNaN(calcdate.getTime())) {
        this.doi = calcdate;
      }
    }
  }

  public doe: Date;

  setdoe(val: Date){
    this.lead.passportexpirydate = this.getDate(val);
  }
  onChangePassportDateExpiry(val) {
    let mm: string;
    let dd: string;
    let yyyy: string;
    [dd, mm, yyyy] = val.split("-");

    let calcdate = new Date(mm+'-'+dd+'-'+yyyy);

    if (Object.prototype.toString.call(calcdate) === "[object Date]"){
      if (!isNaN(calcdate.getTime())) {
        this.doe = calcdate;
      }
    }
  }

  getDate(val) {
    let dd = '' + val.getDate();
    let mm = '' + (val.getMonth() + 1);
    let yyyy = val.getFullYear();
    if (mm.length < 2) mm = '0' + mm;
    if (dd.length < 2) dd = '0' + dd;
    return [dd, mm, yyyy].join('-');
  }

  /* The below code is for image
   *  upload info.
   * 
   */
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 512,
    resizeMaxWidth: 512
  };

  selected(imageResult: ImageResult) {
    this.lead.photo = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
  }


  /* Save
   *
   * 
   */
  save(isValid: boolean, f: LeadInterface) {
    if (!isValid) return;
    console.log(f);
/*
    let leaddata = new LeadModel(
      this.lead.firstName,
      this.lead.lastName,
      this.lead.email,
      this.lead.fatherName,
      this.lead.spouseName,
      this.lead.dateOfBirth,
      this.lead.gender,
      //[this.lead.phone, this.lead.alternatephone],
      [],
      this.lead.address,
      this.lead.country,
      this.lead.passportavailableyn,
      this.lead.passportnumber,
      this.lead.passportissueddate,
      this.lead.visarejected,
      this.lead.visarejectednotes
    );
*/

    let leaddata = new LeadModel(this.lead);
    console.log(leaddata);
    this.leadService.createlead(leaddata)
      .subscribe(
        (data) => {
          this.lead._id = data._id;
          console.log(data);
        },
        error => console.error(error)
      );
  }

}
