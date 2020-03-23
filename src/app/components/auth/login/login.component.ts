import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../../../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login = new Login();
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, Validators.required]
    })
  }
  ngOnInit() {
    this.createForm();
  }
  onFormSubmit(){
    console.log(this.loginForm.value);
  }
}
