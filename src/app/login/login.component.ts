import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  password:any='';
  secondseg:boolean;
  firstseg:boolean=true;
  //emailRegex :any= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$%^&+=])(?=\\S+\$).{4,}\$/;
  emailRegex:any=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {

  }
  
  selectSegment(val){
    if(val=='first'){
     this.firstseg=true;
     this.secondseg=false;
    }else{
      this.firstseg=false;
      this.secondseg=true;
    }
  }
    createForm() {
      this.authForm = this.fb.group({
        'email': ['', [Validators.required,Validators.pattern(this.emailRegex)] ],
        'password': ['',Validators.required ]
      });
    }

    submitForm() {
    
        if (this.authForm.valid) {
          //window.localStorage.setItem('username', value.username);
          //window.localStorage.setItem('password', value.password);    
          if(this.firstseg){
           console.log('Staff')
          }else{
            console.log('Admin')
          }
        }else{
          console.log('cxz')
        }
    
    }
}
