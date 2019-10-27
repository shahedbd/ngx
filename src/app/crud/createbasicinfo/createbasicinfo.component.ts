import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from '../../Service/generic.service';
import { JSONDataService } from '../../Service/jsondata.service';
import { Country } from '../../Service/country';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { delay } from 'q';


@Component({
  selector: 'app-createbasicinfo',
  templateUrl: './createbasicinfo.component.html',
  styleUrls: ['./createbasicinfo.component.scss']
})
export class CreatebasicinfoComponent implements OnInit {
  private regForm: any;
  private selectedCountry: any;
  country: Country[];
  modalRef: BsModalRef;
  bsValue = new Date();

  constructor(private fb: FormBuilder,
    private router: Router,
    private genericService: GenericService,
    private toastr: ToastrService,
    private jSONDataService: JSONDataService,
    private modalService: BsModalService) { }

  postForm = this.fb.group({
    Name: ['', Validators.required],
    DateofBirth: [''],
    MobileNo: [''],
    Country: ['']
  });


  async onSubmit(f: NgForm) {
    f.reset();
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
        this.router.navigate(['Basicinfo'])
          .then(() => {
            delay(4000);
            //this.router.navigate(['Basicinfo']);
            //window.location.reload();
          });
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
