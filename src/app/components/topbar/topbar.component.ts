import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  sideBarIsOpened:boolean = false;

  iconMenuFlag:boolean = true;

  iconsNav = {
    menu: faBars,
    closeMenu: faTimes 
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapseShow() {
    this.iconMenuFlag = !this.iconMenuFlag;
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }

}
