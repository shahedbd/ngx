import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'q';
import { GenericService } from '../../Service/generic.service';
import { JSONDataService } from '../../Service/jsondata.service';
import { Country } from '../../Service/country';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-updatebasicinfo',
  templateUrl: './updatebasicinfo.component.html',
  styleUrls: ['./updatebasicinfo.component.scss']
})
export class UpdatebasicinfoComponent implements OnInit {

  angForm: FormGroup;
  basicInfo: any = {};
  country: Country[];
  selectedCountry: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private genericService: GenericService,
    private jSONDataService: JSONDataService,
    private toastr: ToastrService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required],
      DateofBirth: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Country: ['', Validators.required]
    });
  }

  ngOnInit() {
      this.jSONDataService.getJSON()
      .subscribe((dataCountry: Country[]) => {
        this.country = dataCountry;
      });

    this.route.params.subscribe(params => {
      this.genericService.getById(params['id']).subscribe(result => {
        this.basicInfo = result;

        let index = 0;
        for (let i = 0; i < this.country.length; i++) {
          if (this.country[i].name === this.basicInfo.Country) {
            index = i;
            break;
          }
        }
        this.basicInfo.Country = index;
        this.basicInfo.DateofBirth = new Date(this.basicInfo.DateofBirth).toDateString();
      });
    });
  }

  async onSubmit() {
  }

  onChangeCountry($event) {
    this.selectedCountry = $event.target.options[$event.target.options.selectedIndex].text;
  }

  Update() {
    if (!this.angForm.valid) { return; }

    const formData: any = Object.assign({}, this.angForm.value);
    formData.Country = this.selectedCountry;
    this.route.params.subscribe(async params => {
      this.genericService.update(params['id'], formData);
      await delay(1);
      this.ngOnInit();
      this.showSuccess(formData);
      this.router.navigate(['Basicinfo']);
    }, err => {
      scroll(0, 0);
    });
  }

  showSuccess(data) {
    this.toastr.success('Updated successfully.', data.Name,
      {
        timeOut: 5000,
        positionClass: 'toast-bottom-right',
        closeButton: true,
        progressBar: true
      });
  }

}









