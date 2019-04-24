import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onNewMeetingButtonClicked(){
    this.router.navigate(['/meeting/new-meetings'], { relativeTo: this.route });

  }
  onEditButtonClicked(){
    // this.router.navigate(['/meeting/edit-meetings'], { relativeTo: this.route })
    this.router.navigate(['/meeting/new-meetings'], { relativeTo: this.route });
  }
  onDetailsButtonClicked(){
    this.router.navigate(['/meeting/meetings-details'], { relativeTo: this.route });
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
 
}
