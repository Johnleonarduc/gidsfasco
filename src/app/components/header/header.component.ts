import { Component, OnInit } from '@angular/core';
import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  title:string = "GIDSFASCO INTEGRATED SERVICES LTD"

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
