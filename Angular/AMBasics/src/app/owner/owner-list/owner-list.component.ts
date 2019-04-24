import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  onNewButtonClicked(){
    this.router.navigate(['/new-training/new-trainings'], { relativeTo: this.route })

  }
  onEditButtonClicked(){
    this.router.navigate(['/new-training/new-trainings'], { relativeTo: this.route })
  }
  onRegisterButtonClicked(){

  }
  onDetailsButtonClicked(){
    this.router.navigate(['/traning-detail/training-details'], { relativeTo: this.route })
  }
  ngOnInit() {
  }

}
