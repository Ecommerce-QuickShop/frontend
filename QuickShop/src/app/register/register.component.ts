import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'; 
import {UserService} from '../service/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  isSubmitted=false;
 

  Role: any =['User','Admin']

 
  constructor(private fb: FormBuilder, private us:UserService) {}
   
      registrationForm = this.fb.group({  
      first_name: ['', Validators.required ],  
      last_name: ['', Validators.required ],  
      email: ['', [Validators.required,Validators.email]], 
      phone_number: ['', Validators.required],  
      username: ['', Validators.required ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required],
      avatar_mine: ['']
        });  

        addUser(first_name,last_name, email,phone_number,username,password,role,avatar_mine){
          this.us.addUser(first_name,last_name, email,phone_number,username,password,role,avatar_mine);
        }
   

  ChangeRole(e){
   
    this.registrationForm.get('role').setValue(e.target.value,{onlySelf:true})
  
      
  }
  
  get PersonRole(){
    return this.registrationForm.get('role').value;
  }

  onSubmit(){
    this.isSubmitted=true;
      alert('Registered!');
    

  }
  
  


}

