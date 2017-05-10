import { LeadService } from './../lead/lead.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'filter-demo',
  template: `
  <section>
  <div class="form-reg-personal container">
    <div>
    <div>
      <h3>
        Lead List
        <small>
       
        </small>
      </h3>
      <input
        type='text'
        style='padding:8px;margin:15px auto;width:30%;'
        placeholder='Type to filter the name column...'
        (keyup)='updateFilter($event)'
      />
      <ngx-datatable
        #table
        class='material'
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [limit]="2"
        [rows]='rows'>


        
        <ngx-datatable-column name="firstName">
          <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>
            <span (click)="sort()">{{column.name}}</span>
          </ng-template>
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            <strong>{{value}}</strong>
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="gender">
        <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>
            <span (click)="sort()">{{column.name}}</span>
          </ng-template>
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            <i>{{value}}</i>
          </ng-template>
        </ngx-datatable-column>

      <ngx-datatable-column name="assignedto">
        <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>
            <span (click)="sort()">{{column.name}}</span>
          </ng-template>
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            <i>{{value}}</i>
          </ng-template>
        </ngx-datatable-column>


         <ngx-datatable-column name="testing">
           <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>
            <span (click)="sort()">{{column.name}}</span>
          </ng-template>
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
             <a [routerLink]="['/dashboard/lead', value]"><strong>{{value}}</strong></a>
          </ng-template>
        </ngx-datatable-column>

      </ngx-datatable>
      
     


    </div>
    </div>
    </div>
    </section>
  `
})
export class LeadlistComponent implements OnInit {
  joke = 'knock knock';
  ngOnInit(){
    this.leadService.getleadlist()
      .subscribe(
        (data) => {
          let result = data.obj;
          let reformattedresult = result.map((obj) => {
            obj.assignedto = obj.assignedto.name;
            obj.testing = obj._id;
            return obj;
          });
          this.temp = [...data.obj];
          this.rows = data.obj;

          console.log(this.rows);
        },
        error => console.log(error)
      )
  }
  rows = [];

  temp = [];
/*
  columns = [
    { name: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];
*/

  columns = [
    {name: '_id'},
    {name: 'firstName'},
    {name: 'lastName'},
    {name: 'email'},
    {name: 'gender'},
    {name: 'status'},
    {name: 'assignedto'}
  ]


  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private leadService: LeadService) {
 /*
    this.fetch((data) => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
    */
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `../assets/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadlist',
  //templateUrl: './leadlist.component.html',
  template:  `

  <section>
  <div class="form-reg-personal container">
    <div>
      <ngx-datatable
        [rows]="rows"
        [columns]="columns">
      </ngx-datatable>
    </div>
    </div>
    </section>
  `,
  styleUrls: ['./leadlist.component.css']
})
export class LeadlistComponent implements OnInit {
  rows = [
    {  name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  constructor() { }

  ngOnInit() {
    
  }

}
*/