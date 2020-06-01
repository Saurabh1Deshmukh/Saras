import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})



export class ContactComponent implements OnInit {

  userName: string;
  userEmail: string;
  userMessage: string;
  mapsurl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0791979089026!2d73.87645641436946!3d18.570467872494206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c181a926dfc1%3A0xfca104ed65f8fea5!2sSARAS%20Architects%20and%20Interior%20designers!5e0!3m2!1sen!2sin!4v1590934524199!5m2!1sen!2sin";

  constructor(public sanitizer: DomSanitizer){}

  ngOnInit(): void {

  }

  processForm() {
    const allInfo = `My name is ${this.userName}. My email is ${this.userEmail}. My message is ${this.userMessage}`;
    alert(allInfo);
  }

}
