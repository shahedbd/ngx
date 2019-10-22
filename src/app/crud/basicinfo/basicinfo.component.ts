import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { delay } from 'q';
import { Basicinfo } from '../../Service/basicinfo';
import { GenericService } from '../../Service/generic.service';
import Swal from 'sweetalert2';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.scss']
})
export class BasicinfoComponent implements OnInit {
  maxSize = 5;
  showBoundaryLinks = true;
  totalData = null;
  // bigCurrentPage = 1;

  data: any;
  basicinfo: Basicinfo[];
  returnedArray: Basicinfo[];

  // sorting
  key = 'id'; // set default
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private genericService: GenericService,
    private router: Router,
    private route: ActivatedRoute) {
    this.genericService.apiName = 'Basicinfo';
  }

  ngOnInit() {
    this.genericService.getAll()
      .subscribe((data: Basicinfo[]) => {
        // data.reverse();
        this.basicinfo = data;
        this.returnedArray = this.basicinfo.slice(0, 10);
        this.totalData = this.basicinfo.length;
      });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.basicinfo.slice(startItem, endItem);
  }

  async Delete(id) {
    // Swal.fire('Hello world!');
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.route.params.subscribe(async params => {
          this.genericService.deleteById(id);
          await delay(1000);
          this.ngOnInit();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }
}
