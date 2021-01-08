import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public candiate_login:any= [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },

    {
      title: 'About us',
      url: 'aboutus',
      icon: 'arrow-undo'
    },

    {
      title: 'Help',
      url: 'help',
      icon: 'business'
    },
  //   {
  //     title: 'Jobs',
  //     url: 'job-listing',
  //     icon: 'business'
  //   },
   
  //   {
  //     title: 'My Job Applications',
  //     url: 'applies',
  //     icon: 'desktop'
  //   },
  //   {
  //     title: 'My Followings',
  //     url: 'my-following-company',
  //     icon: 'person'
  //   },

  //   {
  //     title: 'Notifications',
  //     url: 'notification-page',
  //     icon: 'notifications'
  //   },

  //   {
  //     title: 'Privacy Policy',
  //     url: 'privacy-policy',
  //     icon: 'lock-closed'
  //   },

    
    
  //   {
  //     title: 'About Us',
  //     url: 'about-us2',
  //     icon: 'business'
  //   },

  //   {
  //     title: 'Contact Us',
  //     url: 'contact-us2',
  //     icon: 'call'
  //   },
  //   {
  //     title: 'Terms & Conditions',
  //     url: 'terms-conditions',
  //     icon: 'document-text'
  //   },

  //  {
  //     title: 'Change Password',
  //     url: 'change-password',
  //     icon: 'lock-closed'
  //   },

    

  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  menuOpened() {
    console.log('menuOpened');
    let user_logo = localStorage.getItem('user_photo');
    let user_name = localStorage.getItem('full_name');
    
    console.log('user_logo  --> ', user_logo);
  
    

     

    

  }

  
  logout(){
    this.menuCtrl.close();
 
  }

  closeMenu() {
    this.menuCtrl.close();
  }
}
