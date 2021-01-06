import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../service/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
 
  isSubmitted = false;
  
  

  constructor(private fb: FormBuilder, private us:UserService, private router: Router) { }

  loginForm = this.fb.group({
    
    email: ['', Validators.required ],
    password: ['', Validators.required]
  
  });

  LogInUser(email,password){
    this.us.LogInUser(email,password).subscribe((res)=>{
      console.log(res)
    if(res[0].role=="1: User") {
      alert("Logged In");
    console.log("This is a user");
    this.router.navigateByUrl('/user');
  }
else if(res[0].role=="2: Admin"){
  alert("Logged In");
  console.log("This is a admin");
    this.router.navigateByUrl('/admin');
}
else{

  alert("Invalid Log In");
}},(err)=> console.log(err));
    
  }


    onSubmit(){
      this.isSubmitted=true;
     
      
  }
 

}

