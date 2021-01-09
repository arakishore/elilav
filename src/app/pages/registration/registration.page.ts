import { Component, OnInit } from '@angular/core';


import { AlertController, IonApp, NavController, LoadingController, PopoverController, ToastController, ActionSheetController, IonContent } from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AuthProviderServiceService } from '../.././provider/auth-provider-service.service' ;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  tab_value:any;
  submitAttempt1: boolean;
  submitAttempt2: boolean;
  is_duplicate: boolean;
  is_duplicate2: boolean;
  is_duplicate_email: boolean;
  is_duplicate_email2: boolean;
  Mloading: boolean;
  responseMsg:any;
  responseMsg_email:any;
  countries: any;
  Status = false;
  Status2 = false;
  myDate: String = new Date().toISOString();
  latest_date: string;
  public data: any = {
    values: 'Buyers'
  };

  constructor(private router: Router,
    public alertCtrl: AlertController,
    public app: IonApp,  
    public LoadingCtrl: LoadingController,
    public route: ActivatedRoute, 
    public loadingCtrl: LoadingController,
    public AuthProvider: AuthProviderServiceService,
    public ToastCtlr: ToastController,
    public formBuilder: FormBuilder,
    public datepipe: DatePipe,
    private iab: InAppBrowser,
 //   private photoViewer: PhotoViewer,

    public actionSheetController: ActionSheetController,) {
      this.tab_value = 1;
      this.submitAttempt2 = false;
      this.submitAttempt1 = false;
      

      this.latest_date = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');

           
      
     

      this.form = this.formBuilder.group({
        'Full_name': ['', Validators.compose([
     
         Validators.required
        ])],
        'Username': ['', Validators.compose([
       
        Validators.required
        ])],
        'Buyers_or_sellers_or_both': ['', Validators.compose([
       
          Validators.required
          ])],

        

        'date_of_birth': ['', Validators.compose([
  
          Validators.required
        ])],
        'Address': ['', Validators.compose([
       
          Validators.required
        ])],
        'City': ['', Validators.compose([
       
          Validators.required
        ])],

        'pincode': ['', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])],
        
        'State_Province': ['', Validators.compose([
       
          Validators.required
        ])],
        'mobile_num': ['', Validators.compose([
          Validators.minLength(10),
          Validators.required
        ])],

        'pancard': ['', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])],

        'Aadhar': ['', Validators.compose([
          Validators.minLength(10),
          Validators.required
        ])],

        
        'email': ['', Validators.compose([
         
          Validators.maxLength(70), 
          Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
        ])],
   
        'user_password': ['', Validators.compose([
          Validators.minLength(6),
          Validators.required,
     //     Validators.pattern('.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*')
        ])],
        'confirm_password': ['', Validators.compose([
         ,
          Validators.required
        ])],
       
    
    
         'country_code': ['', Validators.compose([
          ,
           Validators.required
         ])],
        
  
        
      }, { validator: this.matchingPasswords('user_password', 'confirm_password') });


      this.form2 = this.formBuilder.group({
        'e_name': ['', Validators.compose([
     
          Validators.required
        ])],
    
        'e_phone': ['', Validators.compose([
          Validators.minLength(10),
          Validators.required
        ])],
        'e_email': ['', Validators.compose([
         
          Validators.maxLength(70), 
          Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
        ])],
   
        'e_password': ['', Validators.compose([
          Validators.minLength(6),
          Validators.required,
     //     Validators.pattern('.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*')
        ])],
        'e_confirm_password': ['', Validators.compose([
         ,
          Validators.required
        ])],
    
        'e_country_code': ['', Validators.compose([
          ,
           Validators.required
         ])],
  
        
      }, { validator: this.matchingPasswords('e_password', 'e_confirm_password') });



   //   this.countries = JSON.parse(localStorage.getItem('countries'));
      console.log('category_list',this.countries);
// if(this.countries){
//   // this.form.controls['country_code'].setValue('101');
//   // this.form2.controls['e_country_code'].setValue('101');


//     var countries_dataIndex = this.countries.findIndex(item => item.id === 101);
//     console.log("countries_id5555",countries_dataIndex);
//     console.log("countries_id5555",this.countries[countries_dataIndex]);
//     this.form.controls['country_code'].setValue(this.countries[countries_dataIndex]);
//     this.form2.controls['e_country_code'].setValue(this.countries[countries_dataIndex]);
 
// }else{
//   this.get_country();
// }
this.get_country();

     
     }



  loginPage()
  {
  this.router.navigate(['login'])
  }
  ngOnInit() {
  }

  onChangeHandler($event) {
    console.log('event --> ', event );
    this.data.values = $event.target.value;
    console.log('event vale --> ', $event.target.value );
  }

  godefault_cv(CV_list){
    console.log('fishyHandler1 --> ', CV_list );
    this.data.values = CV_list.target.value;
    this.form.controls['Buyers_or_sellers_or_both'].setValue(CV_list.target.value);
  }


  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (form: FormGroup): { [key: string]: any } => {
      let password = form.controls[passwordKey];
      let confirmPassword = form.controls[confirmPasswordKey];
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }



  status_visible(event){
    // Status = false;
    if(this.Status == true){
     this.Status = false;
  
   }else{
     this.Status = true;
   
   }
     console.log('Status',this.Status);
     console.log('event',event);
   
   }


   termcondition(){

    this.iab.create('http://jeap.datagrid.co.in/cms/terms-of-use', '_system', 'location=yes');
   }
   termcondition2(){
    this.iab.create('http://jeap.datagrid.co.in/cms/terms-of-use', '_system', 'location=yes');
   }

   status_visible2(event){
    // Status = false;
    if(this.Status2 == true){
     this.Status2 = false;
  
   }else{
     this.Status2 = true;
   
   }
     console.log('Status2',this.Status2);
     console.log('event2',event);
   
   }
  segmentChanged(events){
    console.log('events --> ', events);
    console.log('events --> ', events.detail.value);
    this.tab_value = events.detail.value;

  //  this.interest_Received( this.tab_value);
   
  }


  async onSubmit(form: any) {

    
    console.log('form1 --> ', form);
    console.log('form1 mobile_num--> ', form.mobile_num);

    if (this.form.valid  && this.Status) {
      this.submitAttempt1 = false;


      const loading = await this.LoadingCtrl.create({
        message: 'Please wait...',
        spinner: 'crescent',
        // duration: 2000
      });
      await loading.present();
        this.AuthProvider.Registration_Candidate(form,'candidate').subscribe(async response => {
        await loading.dismiss();
        if (response.status === 'SUCCESS') {
          this.presentToastWithOptions(response.msg, 'successMsg');

          console.log('registration step 1 data  --> ', response);
          this.router.navigate(['/otp-verify', {mobileno:form.mobile_num,candidate_or_employer:'candidate',is_reg:'yes'}]);
       // this.router.navigate(['/login']);
        }else{
          this.presentToastWithOptions(response.msg, 'errorMsg');
        
        }
      }, err => {
        loading.dismiss();
        this.presentToastWithOptions('Something went wrong while login, Please try again', 'errorMsg');
        console.log(err);
      });
    }else{

      this.submitAttempt1 = true;
    }
  }
  
  




  search_password(password: any){
    if (8 <=  password.length ) {
      console.log('passworddfgw ', password);
      this.submitAttempt2 = false;
    }else{
      this.submitAttempt2 = true;
    }
    console.log('passwordw ', password);
    console.log('password ', password.lenght);
  }

  searchMobile(field: any, value: any,candidate_or_employer: any) {
    console.log('mobile to search is ---> ', value);

    if (field == 'mobile') {
      if (value.length == 10) {
      
        this.duplicate_mobile('mobile', value,candidate_or_employer);
        this.Mloading = false;
        if (value && value.trim() != '') {

        
        } else {
          //   // hide the results when the query is empty
       
        }
      } else if (value.length == 1) {
      
        // this.areas = '';
        // this.getCompanies("");
      }
    }

  }

  searchEmail(field: any, value: any,candidate_or_employer: any) {
    console.log('email to search is ---> ', value);

    if (field == true) {
   
      
        this.duplicate_email('email', value,candidate_or_employer);
        this.Mloading = false;
        if (value && value.trim() != '') {

        
        } else {
          //   // hide the results when the query is empty
       
        }
  
    }

  }



  async duplicate_mobile(field: any, value: any,candidate_or_employer: any) {
    const loading = await this.LoadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
      // duration: 2000
    });
    // await loading.present();
    this.Mloading = true;

    this.AuthProvider.Mobile_Duplicate(field, value,candidate_or_employer)
      .subscribe(async response => {
        if (response.status == 'ERROR') {
          // await loading.dismiss();
          console.log('ERROR ',response);
          if (field == 'mobile') {
            if(candidate_or_employer == 'employer'){
              this.is_duplicate2 = true;
            }else{
              this.is_duplicate = true;
            }
          
           
            this.responseMsg = response.msg;
            this.Mloading = false;
          }

          console.log(' duplicate mobile  --> ', response);
        } else {
          // await loading.dismiss();
          
          console.log(' response.data  --> ',  response.data);
          if(candidate_or_employer == 'employer'){
            
          this.is_duplicate2 = false;
          }else{
           
          this.is_duplicate = false;
          }

          this.Mloading = false;
          this.responseMsg = response.msg;
          if (field == 'mobile') {
            this.responseMsg = response.msg;
          }

          // this.presentToastWithOptions(response.msg, 'errorMsg');
        }
        
      },
        err => {
          loading.dismiss();
          const response = {
            msg: 'Something went wrong, Please try again',
            status: 'error'
          }
          // this.presentAlertConfirm(response);
          this.presentToastWithOptions('Something went wrong, Please try again', 'errorMsg');
          console.log(err);
        });
  }



  async duplicate_email(field: any, value: any,candidate_or_employer: any) {
    const loading = await this.LoadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
      // duration: 2000
    });
    // await loading.present();
    this.Mloading = true;

    this.AuthProvider.email_Duplicate(field, value,candidate_or_employer)
      .subscribe(async response => {
        if (response.status == 'ERROR') {
          // await loading.dismiss();
          console.log('ERROR ',response);
    
            if(candidate_or_employer == 'employer'){
              this.is_duplicate_email2 = true;
            }else{
              this.is_duplicate_email = true;
            }
          
             
            
            this.responseMsg_email = response.msg;
            this.Mloading = false;
         

          console.log(' duplicate mobile  --> ', response);
        } else {
          // await loading.dismiss();
          
          console.log(' response.data  --> ',  response.data);
          if(candidate_or_employer == 'employer'){
            this.is_duplicate_email2 = false;
          }else{
            this.is_duplicate_email = false;
          }
        

       
         
          this.Mloading = false;
          this.responseMsg_email = response.msg;
          if (field == 'mobile') {
            this.responseMsg_email = response.msg;
          }

          // this.presentToastWithOptions(response.msg, 'errorMsg');
        }
        
      },
        err => {
          loading.dismiss();
          const response = {
            msg: 'Something went wrong, Please try again',
            status: 'error'
          }
          // this.presentAlertConfirm(response);
          this.presentToastWithOptions('Something went wrong, Please try again', 'errorMsg');
          console.log(err);
        });
  }




  async presentToastWithOptions(msg: any, css: any) {
    const toast = await this.ToastCtlr.create({
      message: msg,
      // showCloseButton: true,
      position: 'top',
      // closeButtonText: 'Done',
      duration: 3000,
      cssClass: 'toast-color'
    });
    toast.present();
  }


  

  async get_country(){

    const loading = await this.LoadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
      // duration: 2000
    });
    await loading.present();
      this.AuthProvider.get_Country_code().subscribe(async response => {
      await loading.dismiss();
      if (response.status === 'SUCCESS') {
     //   this.presentToastWithOptions(response.msg, 'successMsg');

        console.log('registration step 1 data  --> ', response);
        this.countries = response.data.data;
        localStorage.setItem('countries', JSON.stringify(this.countries));
        this.countries = JSON.parse(localStorage.getItem('countries'));
            var countries_dataIndex = this.countries.findIndex(item => item.phonecode === "+91");
    console.log("countries_id5555",countries_dataIndex);
    console.log("countries_id5555",this.countries[countries_dataIndex]);
    this.form.controls['country_code'].setValue(this.countries[countries_dataIndex]);
    this.form2.controls['e_country_code'].setValue(this.countries[countries_dataIndex]);
        localStorage.setItem('countries', JSON.stringify(this.countries));
     
      }
    }, err => {
      loading.dismiss();
    //  this.presentToastWithOptions('Something went wrong while login, Please try again', 'errorMsg');
      console.log(err);
    });
  }



}
