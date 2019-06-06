import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { browser } from 'protractor';

@Component({
  selector: 'app-contactfrom',
  templateUrl: './contactfrom.component.html',
  styleUrls: ['./contactfrom.component.css']
})
export class ContactfromComponent implements OnInit {
  
  @Output() public writerdata;
  public defaulttext = "Here you can write your message ....";
  public emailtext: string;
  public messagetext: string;
  public nametext: string;
  public visible: boolean;
  public isname: boolean;

  constructor() { }

  ngOnInit() {
  }
  
  isVisible(object): boolean{
    return (object.value != "" && object.value != this.defaulttext);
  }

  isDisabled(object, object2, object3): boolean {
    return (object.value == "" || object2.value == "" || object3.value == "");
  }

  ClearValue(object){
    object.value = "";
  }

  SetDefaultText(object){
    object.value = this.defaulttext;
  }

  onClear(object){
    this.ClearValue(object);
    this.SetDefaultText(object);
  }

  onClick(object)
  {
    if(object.value == "")
    {
      this.SetDefaultText(object);
    }
    if(object.value == this.defaulttext)
    {
      this.ClearValue(object);
    }
  }

  FormatingMessageText(message)
  {
    this.messagetext = message.value;
    var newstring  = this.messagetext.split("\n");

    for (let index = 0; index < newstring.length; index++) {
      const element = newstring[index];

      var newbr = document.createElement("br");

      var newtextnode = document.createTextNode(newstring[index]);
      document.getElementById("mailtext").appendChild(newtextnode);
      document.getElementById("mailtext").append(element);
      
    }
  }
}
