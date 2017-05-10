import { LeadInterface } from '../lead/lead.interface';
import { LeadModel } from '../lead/lead.model';
import { LeadService } from '../lead/lead.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-leadprofile',
  templateUrl: './leadprofile.component.html',
  styleUrls: ['./leadprofile.component.css']
})
export class LeadprofileComponent implements OnInit {
  lead: LeadModel;
  leadprimaryInfo: LeadInterface;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LeadService
  ) { }

  ngOnInit() {
    this.route.params
      .filter((params: Params) => {
        console.log(params);
        if (!params['id']){
          return false;
        } else {
          return true;
        }
      })
      .switchMap((params: Params) => this.service.getLeadById(params['id']))
      .subscribe(
        (data) => {
          this.leadprimaryInfo = {
            _id: data.obj._id,
            firstName: data.obj.firstName,
            lastName: data.obj.lastName,
            email: data.obj.email,
            fatherName: data.obj.fatherName,
            spouseName: data.obj.spouseName,
            dateOfBirth: data.obj.dateOfBirth,
            gender: data.obj.gender,
            phone: data.obj.phone[0],
            alternatephone: data.obj.phone[0],
            address: data.obj.address,
            photo: data.obj.photo,
            country: data.obj.country,
            passportavailableyn: data.obj.passportavailableyn,
            passportnumber: data.obj.passportnumber,
            passportissueddate: data.obj.passportissueddate,
            visarejected: data.obj.visarejected,
            visarejectednotes: data.obj.visarejectednotes
          };
          
          console.log(data);
        }
      );
  }

}
