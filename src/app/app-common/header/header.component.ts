import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentTab="home";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }
  ActiveMe(param){
    this.currentTab=param
  }
}
