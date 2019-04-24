import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ngx-formly';
  model: any = {};
  form = new FormGroup({});

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  //options used for communicating between fields through formstate.
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
      toggle: false,
      mainModel: this.model
    },
  };

  // building HTML fileds by  FormlyFieldConfig
  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: ' ',
    },

    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'firtName',
          type: 'input',
          className: 'col-md-5',
          templateOptions: {
            label: 'First Name',
            placeholder: 'Please Enter Name',
            required: true,
          },
        },
        {
          key: 'lastName',
          type: 'input',
          className: 'col-md-5',
          templateOptions: {
            label: 'Last Name',
            placeholder: 'Please Enter Name',
            required: true,
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'email',
          type: 'input',
          className: 'col-md-5',
          templateOptions: {
            label: 'Email',
            type: 'email',
            // pattern:"^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(bluzor||easternenterprise||ansh-system)?(\.in||\.com)$",
            emailValidation: "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Ia-i0-9]+)*(\\.[I-Ni-n]{1,2})$",
            placeholder: 'Please Enter Email',
            description: '',
            required: true,
          },
          expressionProperties: {
            // 'templateOptions.disabled': '!model.text',
            'templateOptions.focus': 'formState.awesomeIsForced',
            'templateOptions.description': (formState) => {
              if (formState.awesomeIsForced) {
                return 'And look! This field magically got focus!';
              }
            },
          },
          validation: {
            messages: {
              required: 'You need to provide valid email!',
            },
          }
        },
        {
          key: 'contactNumber',
          type: 'input',
          className: 'col-md-5',
          templateOptions: {
            label: 'Contact NO',
            type: '',
            pattern: "[0-9]*",
            placeholder: 'Please Enter First Number',
            required: true,
          },
          validation: {
            messages: {
              required: 'Contact number should be numeric only',
            },
          }
        },
        {
          key: 'optionalElements',
          type: 'repeat',
          className: 'col-md-12',
          templateOptions: {
            addText: '',
          },
          fieldArray: {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                key: 'optionalEmail',
                type: 'input',
                className: 'col-md-6',
                templateOptions: {
                  label: 'Email',
                  emailValidation: "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Ia-i0-9]+)*(\\.[I-Ni-n]{1,2})$",
                  type: 'email',
                  placeholder: 'Please Enter Email',
                  required: true,

                },
                validation: {
                  messages: {
                    required: 'You need to provide valid email!',
                  },
                }
              },
              {
                key: 'optionalContactNumber',
                type: 'input',
                className: 'col-md-6',
                templateOptions: {
                  label: 'Contact NO',
                  type: '',
                  placeholder: 'Please Enter First Number',
                  required: true,
                },
              },
            ],
          },
        },
      ],
    },

    {
      key: 'password',
      validators: {
        fieldMatch: {
          expression: (control) => {
            const value = control.value;

            return value.passwordConfirm === value.password
              // avoid displaying the message error when values are empty
              || (!value.passwordConfirm || !value.password);
          },
          message: 'Password Not Matching',
          errorPath: 'passwordConfirm',
        },
      },
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'Password',
          type: 'input',
          className: 'col-md-5',
          templateOptions: {
            type: 'password',
            label: 'Password',
            placeholder: 'Must be at least 3 characters',
            required: true,
            minLength: 3,
            maxLength: 10,
          },
        },
        {
          key: 'passwordConfirm',
          type: 'input',
          className: 'col-md-5',
          templateOptions: {
            type: 'password',
            label: 'Confirm Password',
            minLength: 3,
            maxLength: 10,
            placeholder: 'Please re-enter your password',
            required: true,
          },
        },
      ],
    },

    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: 'Gender',
        required: true,
        name: 'gender',
        options: [
          { value: 'Male', key: 'M' },
          { value: 'Female', key: 'F' }
        ]
      },
    },
   
    {
      key: 'address',
      wrappers: ['panel'],
      templateOptions: { label: 'Address' },
      fieldGroup: [
        {
          key: 'state',
          type: 'select',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'State',
            options: [
              { value: 1, label: 'Gujrat' },
              { value: 2, label: 'Maharashtra' },
              { value: 3, label: 'Punjab' },
              { value: 4, label: 'Himachal' },
            ],
          },
        },
        {
          key: 'town',
          type: 'select',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Town',
            options: [
              { value: 1, label: 'Nashik' },
              { value: 2, label: 'Pune' },
              { value: 3, label: 'Shimal' },
              { value: 4, label: 'Baroda' },
            ],
            hideExpression: (model: any, formState: any) => {
              // access to the main model can be through `this.model` or `formState` or `model
              if (formState.mainModel && formState.mainModel.state) {
                return formState.mainModel.state !== ""
              }
              return true;
            },
          },
        },
        {
          key: 'pincode',
          type: 'input',
          templateOptions: {
            required: true,
            type: '',
            class: "no-spinners",
            label: 'Pin Code',
            addonRight: {
              class: 'fa fa-code',
              onClick: (to, fieldType, $event) => console.log(to, fieldType, $event),
            },
          },
        },
      ],
    },
  ]

  // This functin is used to sumbit the Form data
  submit(): void {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
      console.log(this.model);
    }
    this.router.navigate(['multistep'], { relativeTo: this.route })

  }
}
