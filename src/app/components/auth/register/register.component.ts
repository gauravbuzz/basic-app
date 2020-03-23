import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from '../../../models/register.model';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    this.createForm();
  }

  onFormSubmit() {
    this.authService.register(this.registerForm.value)
      .subscribe(data => {
        this.showSnackBar('Registration successful');
        console.log(data);
      }, err => {
        console.log(err);
      })
  }

  showSnackBar(msg) {
    this.snackBar.open(msg, null, { duration: 2000 });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

}