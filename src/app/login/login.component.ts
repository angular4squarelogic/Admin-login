import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  password:any='';
  emailRegex :any= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$%^&+=])(?=\\S+\$).{4,}\$/;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {

  }
  

    createForm() {
      this.authForm = this.fb.group({
        'email': [' ', [Validators.required,Validators.pattern(this.emailRegex)] ],
        'password': [' ',Validators.required ]
      });
    }

    submitForm() {
    
        if (this.authForm.valid) {
          //window.localStorage.setItem('username', value.username);
          //window.localStorage.setItem('password', value.password);    
        }else{
          console.log('cxz')
        }
    
    }
}
