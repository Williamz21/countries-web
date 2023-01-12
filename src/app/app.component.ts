import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-countries';

  changeTheme(){
    const icon = document.getElementById('theme-icon') as HTMLImageElement;
    const text = document.getElementById('theme-text') as HTMLSpanElement;
    if(icon){
      document.body.classList.toggle('dark-theme');
      if(document.body.classList.contains('dark-theme')){
        text.innerHTML = 'Light Mode'
        icon.src= '../assets/sun.png'
      }else icon.src = '../assets/moon.png'
    }
  }
}
