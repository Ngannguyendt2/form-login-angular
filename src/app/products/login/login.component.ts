import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: IUser[] = [
    {
      email: 'ngan@gmail.com',
      password: '12345678'
    }
  ];


  constructor(private fb: FormBuilder) {
  }

  loginForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required]
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.loginForm.value);
    const emailInput = this.loginForm.get('email').value;
    const passwordInput = this.loginForm.get('password').value;
    this.users.forEach((value, index) => {
      if (emailInput === value.email && passwordInput === value.password) {
        console.log('oke');
      } else {
        console.log('error');
      }
    });
  }
}
