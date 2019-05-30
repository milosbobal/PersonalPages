import { Component, OnInit, NgModule } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-contactfrom',
  templateUrl: './contactfrom.component.html',
  styleUrls: ['./contactfrom.component.css']
})
export class ContactfromComponent implements OnInit {
  
  public defaulttext = "Here should be your message ....";
  public message: string;
  public yourmessage: string;

  constructor() { }

  ngOnInit() {
  }
  
  ReturnEvent(event)
  {
    console.log(event);
    console.log(event.type);
  }
  
  GetFormData(name, yourmessage)
  {
    this.message = yourmessage;
  }

  ClearDefaultText(object)
  {
    object.value = "";
  }

  SetDefaultText(object)
  {
    if(object.name == "yourmessage") 
    {
      object.value = this.defaulttext;
    }
  }

  ValidateEmail() : boolean
  {

    return false;
  }

}
