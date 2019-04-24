import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  public executeSelectedChange = (event) => {
      console.log(event);
    }

    onloginButtonClicked(){
      this.router.navigate(['/owner/owners'], { relativeTo: this.route })
    }
  
    email = new FormControl('', [ Validators.required, Validators.email ]);

    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a email' :
          this.email.hasError('email') ? 'Not a valid email' :

              '';
    }
    // domainNameValidation = new FormControl('', [ Validators.required, Validators.email ]);

    // getdomainNameValidation() {
    //   return this.email.hasError('required') ? 'You must enter a email' :
    //       this.email.hasError('email') ? 'Not a valid email' :
    //           '';
    // }

    emailforlogin = new FormControl('',[ Validators.required,Validators.email ])
    getErrorMessageForLogin() {
      return this.emailforlogin.hasError('required') ? 'You must enter a email' :
          this.emailforlogin.hasError('email') ? 'Not a valid email' :
          this.emailforlogin.hasError('pattern') ? 'Domain name must be bluzor.com or easternenterprise.com or ansh-system.com':
              '';
    }
 

  ngOnInit() {
  }


}
