import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  password: any;
  username: any;
  invalidUser: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      username: ['', [Validators.required]]
    })
  }

  async submit() {
    if (this.form.valid) {
      // Llamar login
      console.log(this.username, this.password);
      this.authService.login(this.username.value, this.password.value).subscribe((resp: any) => {
        console.log(resp);
        localStorage.setItem('auth_token', resp.token);
        this.router.navigate(['/inicio'])
      })
    } else {
      this.form.markAllAsTouched();
    }


  }

  reEnter() {
    this.invalidUser = false;
  }

  ngOnInit(): void {
    this.password = this.form.get("password");
    this.username = this.form.get("username");
  }
}
