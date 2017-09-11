import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { APP_CONFIG, IAppConfig } from '../../app/app.config';

@Injectable()
export class PickItService {

  constructor(@Inject(APP_CONFIG) private config: IAppConfig,public http: Http) {
    
  }

  pickit(obj){
    return new Promise((resolve,reject) => {
     var url = this.config.apiEndpoint + 'public/pickit/';
        this.http.post(url,obj)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      },error=>{
          reject(JSON.parse(error._body).message);
      });
  });
  }

  historial(id){
    return new Promise((resolve,reject) => {
     var url = this.config.apiEndpoint + 'public/pickit/list/'+id;
        this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      },error=>{
          reject(JSON.parse(error._body).message);
      });
  });
  }

}
