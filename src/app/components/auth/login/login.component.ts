import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../../../models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login = new Login();
  loginForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  showSnackBar(msg){
    this.snackBar.open(msg, null, { duration: 2000 });
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, Validators.required]
    })
  }

  ngOnInit() {
    this.createForm();
  }
  
  onFormSubmit() {
    this.authService.login(this.loginForm.value)
    .subscribe(data => {
      this.showSnackBar('login successful');
    }, err => {
      this.showSnackBar(err);
    })
  }
}
