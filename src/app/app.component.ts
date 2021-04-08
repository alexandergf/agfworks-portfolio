import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'alexander-portfolio';

  public activeLang = 'es';  

  public isDark:boolean = false;
  
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }  

  ngOnInit() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.isDark = true;
    } else {
      document.documentElement.classList.remove('dark')
    }
  }  

  public changeTheme(){
    if(this.isDark){
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      this.isDark = false;
    }else{
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
      this.isDark = true;
    }
  }
  
  public cambiarLenguaje(lang:string) {
    this.translate.use(lang);
  }
}
