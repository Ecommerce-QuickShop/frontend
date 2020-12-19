import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
 
  isSubmitted = false;

  constructor(private fb: FormBuilder, private us:UserService) { }

  loginForm = this.fb.group({
    
    email: ['', Validators.required ],
    password: ['', Validators.required]
  });

  LogInUser(email,password){
    this.us.LogInUser(email,password).subscribe((res)=>console.log(res),(err)=> console.log(err));
    
  }

  

    onSubmit(){
      this.isSubmitted=true;
      alert('Loged In');
  }
 

}

