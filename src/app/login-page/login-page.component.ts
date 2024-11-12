import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavBarComponent, ReactiveFormsModule, NgIf, RouterLink, NgClass],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username_or_email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get username_or_email() {
    return this.loginForm.get("username_or_email")!;
  }

  get password() {
    return this.loginForm.get("password")!;
  }

  onSubmit() {
    console.log("Trying to submit vals");
  }
}
