
import { Component, OnInit } from '@angular/core';
import { AlertController, IonApp, NavController, LoadingController, PopoverController, ToastController } from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';

import { AuthProviderServiceService } from '../.././provider/auth-provider-service.service' ;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  submitAttempt = false;
  Remember_Me:boolean;
  paramData = '';
  password_type: string = 'password';
  category_list: any;
  material_list: any;

  constructor(   public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private iab: InAppBrowser,
    public app: IonApp, public router: Router, public formBuilder: FormBuilder,
    public ToastCtlr: ToastController, public LoadingCtrl: LoadingController,
    public AuthProvider: AuthProviderServiceService,) {
      this.form = this.formBuilder.group({
        
        // 'user_type': ['normal_user', Validators.compose([
        //   Validators.required
        // ])],
        'Remember_Me': [''],
        'user_mobile': ['', Validators.compose([
          Validators.minLength(10),
          Validators.required
        ])],
        'user_password': ['', Validators.compose([
          Validators.minLength(6),
          Validators.required,
        //  Validators.pattern('.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*')
        ])]
      });
     // this.Remember_Me = false;
     this.form.controls['Remember_Me'].setValue('false');
     }

  ngOnInit() {
  }


  togglePasswordMode(type: any) {
    console.log('type is ---> ', type);

    if(type == 'password'){
      this.password_type = 'text';
    } else {
      this.password_type = 'password';
    }
 }

  async onSubmit(form: any) {
   
    console.log('form Date  --> ', form);
    console.log('Remember_Me  --> ',  this.form.get('Remember_Me').value);

    if (this.form.valid) {
      this.submitAttempt = false;
      const loading = await this.LoadingCtrl.create({
        message: 'Please wait...',
        spinner: 'crescent',
        // duration: 2000
      });
      await loading.present();
      this.AuthProvider.login(form).subscribe(async response => {
        await loading.dismiss();
        if (response.status === 'success') {
          this.presentToastWithOptions(response.msg, 'successMsg');
          let Remember_Me =  this.form.get('Remember_Me').value;
        //  if(Remember_Me){}else{}
       //   localStorage.setItem('logged_in', Remember_Me);
          localStorage.setItem('logged_in', 'true');
          console.log('login data  --> ', response);
       
          this.router.navigate(['home', {response: JSON.stringify(response), user_type: form.user_type, type: '0'}]);
          // this.router.navigate(['/otp', {response: JSON.stringify(response), user_type: form.user_type, type: '0'}]);
        } 
        
        else{
          this.presentToastWithOptions(response.msg, 'errorMsg');
        }
      }, err => {
        loading.dismiss();
        this.presentToastWithOptions('Something went wrong while login, Please try again', 'errorMsg');
        console.log(err);
        this.router.navigate(['home']);
      });
    } else {
      this.submitAttempt = true;
      console.log('invalid  --> ', form);
    }
  }

  async presentToastWithOptions(msg: any, css: any) {
    const toast = await this.ToastCtlr.create({
      message: msg,
      // showCloseButton: true,
      position: 'top',
      // closeButtonText: 'Done',
      duration: 4000,
    //  cssClass: css
    });
    toast.present();
  }

  forgotPassword() {
    const user_type = this.form.controls['user_type'].value;
    this.router.navigate(['forgot-password', {user_id: this.paramData, user_type: user_type}]);
  }

  registration() {
    this.router.navigate(['/registration']);
  }

  visit_website(){

    this.iab.create('https://www.everestjewels.in', '_system', 'location=yes');
  }


  

  openWebpage(url: string) {
    const FB = 'https://www.facebook.com/JITOApexHO/';
    const LI = 'https://www.linkedin.com/in/JitoApex';
    const TW = 'https://twitter.com/JitoApex';
    
  //   const options: InAppBrowserOptions = {
  //     zoom: 'no'
  //   }

  //   // Opening a URL and returning an InAppBrowserObject
  //   const browser = this.inAppBrowser.create(url, '_self', options);

  //  // Inject scripts, css and more with browser.X
    if(url == 'fb') {
      window.open(FB, "_system", "location=yes");
    }

    if(url == 'li') {
      window.open(LI, "_system", "location=yes");
    }

    if(url == 'tw') {
      window.open(TW, "_system", "location=yes");
    }
  
  }

  forget_password(){
    this.router.navigate(['/forgot-password']);
  }

  Sign_up() {
    this.router.navigate(['/registration']);
  }

}

