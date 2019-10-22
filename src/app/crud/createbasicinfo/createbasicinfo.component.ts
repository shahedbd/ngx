import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from '../../Service/generic.service';
import { JSONDataService } from '../../Service/jsondata.service';
import { Country } from '../../Service/country';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-createbasicinfo',
  templateUrl: './createbasicinfo.component.html',
  styleUrls: ['./createbasicinfo.component.scss']
})
export class CreatebasicinfoComponent implements OnInit {
  private regForm: any;
  private selectedCountry: any;
  country: Country[];


  constructor(private fb: FormBuilder,
    private router: Router,
    private genericService: GenericService,
    private toastr: ToastrService,
    private jSONDataService: JSONDataService) { }

  postForm = this.fb.group({
    Name: ['', Validators.required],
    DateofBirth: [''],
    MobileNo: [''],
    Country: ['']
  });

  async onSubmit() {
  }

  ngOnInit() {
    this.jSONDataService.getJSON()
      .subscribe((data: Country[]) => {
        this.country = data;
      });
  }

  onChangeCountry($event) {
    this.selectedCountry = $event.target.options[$event.target.options.selectedIndex].text;
    // this.selectedCountry = $event.target.options[$event.target.options.selectedIndex].value;
  }

  Save() {
    if (!this.postForm.valid) { return; }

    const formData: any = Object.assign({}, this.postForm.value);
    formData.Country = this.selectedCountry;
    formData.DateofBirth = new Date(formData.DateofBirth).toDateString();

    this.genericService.createNew(formData)
      .subscribe(res => {
        this.showSuccess(formData);
        this.router.navigate(['Basicinfo']);
      }, err => {
        scroll(0, 0);
      });
  }

  showSuccess(data) {
    this.toastr.success('Added successfully.', data.Name,
      {
        timeOut: 5000,
        positionClass: 'toast-bottom-right',
        closeButton: true,
        progressBar: true
      });
  }
}
