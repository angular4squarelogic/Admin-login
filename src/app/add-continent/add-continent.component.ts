import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-continent',
  templateUrl: './add-continent.component.html',
  styleUrls: ['./add-continent.component.css']
})
export class AddContinentComponent implements OnInit {
  addcontForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.addcontForm = this.fb.group({
      'overview': ['', Validators.required ],
      'description': ['',Validators.required ]
    });
  }

}
