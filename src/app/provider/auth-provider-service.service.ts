import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

import { map } from 'rxjs/operators';
// import { Http, Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http/ngx';
import { format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthProviderServiceService {

  appKey = localStorage.getItem('appKey');
  // base_url: any = 'http://cafen.datagrid.co.in/API/';

  base_url: any = 'https://www.everestjewels.in/';
  token: string;
 


  constructor(public http: HttpClient,
   ) { }


  public login(form: any) {
    const tmp_user: any = {};
    tmp_user.mobile = form.user_mobile;
    tmp_user.password = form.user_password;
   // tmp_user.user_type = form.user_type;
    tmp_user.gcm_id = localStorage.getItem('fcmid');
   

    /*  Convert Object to Post  */
    const post_data = this.encodeParam(tmp_user);
    /*  Headers  */
    const arr_header: any = {};

    this.appKey = localStorage.getItem('appKey');

    arr_header.headers = { 'Content-Type': 'application/x-www-form-urlencoded'};
   // arr_header.headers = { 'appKey': this.appKey };

    return this.http.post(this.base_url + 'login', post_data, arr_header).pipe(map(response => {
      console.log(response);
      const tmp_response: any = response;

      if (tmp_response.status === 'success') {
        console.log(tmp_response);

        localStorage.setItem('user_id', tmp_response.data[0].user_id);

        this.setCredentialsInLocal(tmp_response.data[0]);
      
        // if (form.remember === true) {
        //   localStorage.setItem('setusername', form.customerNumber);
        // localStorage.setItem('setpassword', form.user_password);
        // } else {
        //   localStorage.removeItem('setusername');
        //   localStorage.removeItem('setpassword');
        // }
      }
      return tmp_response;
    }));
  }





  public Registration_Candidate(form: any,candidate_or_employer: any) {
    const tmp_user: any = {};
    tmp_user.first_name = form.first_name;
    tmp_user.middle_name = form.middle_name;
    tmp_user.last_name = form.last_name;
    tmp_user.email = form.email;
    tmp_user.mobile_num = form.mobile_num;
    tmp_user.password = form.user_password;
    tmp_user.confirm_password = form.confirm_password;
    tmp_user.candidate_or_employer = candidate_or_employer;
    tmp_user.country_code = form.country_code.phonecode;
   
   // tmp_user.user_type = form.user_type;
   // tmp_user.fcm_id = localStorage.getItem('fcmid');



    /*  Convert Object to Post  */
    const post_data = this.encodeParam(tmp_user);
    /*  Headers  */
    const arr_header: any = {};

    this.appKey = localStorage.getItem('appKey');

     arr_header.headers = { 'Content-Type': 'application/x-www-form-urlencoded',};
  //  
  // 
   // arr_header.headers = { 'Content-Type': 'application/json'};
   // arr_header.headers = { 'appKey': this.appKey };

    return this.http.post(this.base_url + 'signup', post_data, arr_header).pipe(map(response => {
      console.log(response);
      const tmp_response: any = response;

      if (tmp_response.status === 'SUCCESS') {
        console.log(tmp_response);

      }
      return tmp_response;
    }));
  }

          /* Mobile/Email Duplication Start */
          public Mobile_Duplicate(field: any, value: any,candidate_or_employer: any) {
            const tmp_user: any = {};
         ///   tmp_user.field = field;
  
         const formData = new FormData();
         const date = new Date().valueOf();
  
        formData.append('phone', value);
        formData.append('candidate_or_employer',candidate_or_employer);
   
        
            /*  Convert Object to Post  */
            const post_data = this.encodeParam(tmp_user);
            /*  Headers  */
            const arr_header: any = {};
        
            this.token = localStorage.getItem('token');
            console.log('Your token is', this.token);
             arr_header.headers = { 'Content-Type': 'application/x-www-form-urlencoded'};
      
     
     
            // arr_header.headers = { 'Content-Type': 'application/x-www-form-urlencoded', 'appKey': this.appKey };
        
            return this.http.post(this.base_url + 'check_contact_duplication',  formData).pipe(map(response => {
              console.log(response);
              const tmp_response: any = response;
        
              if (tmp_response.status == 'SUCCESS') {
                console.log(tmp_response);
              }
              return tmp_response;
            }));
          }


                  /* Mobile/Email Duplication Start */
        public email_Duplicate(field: any, value: any,candidate_or_employer: any) {
          const tmp_user: any = {};
       ///   tmp_user.field = field;

       const formData = new FormData();
       const date = new Date().valueOf();

      formData.append('email', value);
      formData.append('candidate_or_employer',candidate_or_employer);
 
    
      
          /*  Convert Object to Post  */
          const post_data = this.encodeParam(tmp_user);
          /*  Headers  */
          const arr_header: any = {};
      
          this.token = localStorage.getItem('token');
          console.log('Your token is', this.token);
           arr_header.headers = { 'Content-Type': 'application/x-www-form-urlencoded'};
    
   
   
          // arr_header.headers = { 'Content-Type': 'application/x-www-form-urlencoded', 'appKey': this.appKey };
      
          return this.http.post(this.base_url + 'check_email_duplication',  formData).pipe(map(response => {
            console.log(response);
            const tmp_response: any = response;
      
            if (tmp_response.status == 'SUCCESS') {
              console.log(tmp_response);
            }
            return tmp_response;
          }));
        }
        public get_Country_code() {
          const tmp_user: any = {};
        
          
      
          /*  Convert Object to Post  */
          const post_data = this.encodeParam(tmp_user);
          /*  Headers  */
          const arr_header: any = {};
      
          this.appKey = localStorage.getItem('appKey');
      
           arr_header.headers = { 'Content-Type': 'application/x-www-form-urlencoded'};
          
         
         
         // arr_header.headers = { 'appKey': this.appKey };
      
          return this.http.post(this.base_url + 'get_country_code', arr_header).pipe(map(response => {
            console.log(response);
            const tmp_response: any = response;
      
            if (tmp_response.status === 'SUCCESS') {
              console.log(tmp_response);
      
            }
            return tmp_response;
          }));
        }

  public setCredentialsInLocal(userInfo: any) {
    console.log('userInfo 111' ,JSON.stringify( userInfo));
  
    localStorage.setItem('user_id', userInfo.user_id);
    localStorage.setItem('user_mobile', userInfo.user_mobile);
    localStorage.setItem('user_payment_status', userInfo.user_payment_status);
    localStorage.setItem('full_name', userInfo.full_name);
    localStorage.setItem('user_id', userInfo.user_id);
    localStorage.setItem('user_company_name', userInfo.user_company_name);
    localStorage.setItem('company_logo', userInfo.company_logo);
    localStorage.setItem('company_id', userInfo.company_id);
    localStorage.setItem('user_logo', userInfo.user_logo);
    localStorage.setItem('user_photo', userInfo.user_photo);
   
    

  }

  public logout() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_mobile');
    localStorage.removeItem('user_payment_status');
    localStorage.removeItem('full_name');
    localStorage.removeItem('user_id');
    localStorage.removeItem('company_id');
    localStorage.removeItem('logged_in');
    localStorage.removeItem('user_company_name');
    localStorage.removeItem('company_logo');
    localStorage.removeItem('user_logo');
    localStorage.removeItem('user_photo');
    


  //  localStorage.clear();
  }

   // List Filter Data end

   public encodeParam(obj: object, prefix?: object) {
    // tslint:disable-next-line:prefer-const
    let str = [], p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        // tslint:disable-next-line:prefer-const
        let k = prefix ? prefix + '[' + p + ']' : p, v = obj[p];
        str.push((v !== null && typeof v === 'object') ?
          this.encodeParam(v, k) :
          encodeURIComponent(k) + '=' + encodeURIComponent(v));
      }
    }
    return str.join('&');
  }
}
