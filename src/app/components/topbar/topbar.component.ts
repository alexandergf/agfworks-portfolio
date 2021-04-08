import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faBars, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() isDark:boolean = false;
  @Output() languaje = new EventEmitter<string>();

  sideBarIsOpened:boolean = false;

  iconMenuFlag:boolean = true;

  public activeLang = 'es';  

  flags = {
    spain: '../../../assets/images/spain-flag.png',
    usa: '../../../assets/images/usa-flag.png'
  }

  iconsNav = {
    menu: faBars,
    closeMenu: faTimes 
  };

  changeThemeIcon = {
    light: faSun,
    dark: faMoon
  }

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  toggleCollapseShow() {
    this.iconMenuFlag = !this.iconMenuFlag;
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }

  public cambiarLenguaje(lang:string) {
    this.activeLang = lang;
    this.languaje.emit(lang);
  }

  public changeThemeTop(){    
    this.appComponent.changeTheme();
  }

}
