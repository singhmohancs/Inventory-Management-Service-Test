import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CredentialsService } from './credentials.service';
import { ILoginContext, IUser } from '@app/model/user.model';
import { DatabaseService } from '../database/database.service';
import { IError } from '@app/model/error.model';

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable()
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService, private dbService: DatabaseService) { }

  /**
   * method
   * @name login
   * @description handle login from the server
   * 
   */
  login(context: ILoginContext): Promise<IUser> {
    return new Promise((resolve, reject) => {
      this.dbService.checkUserCredentials(context).then((response: IUser) => {
          this.credentialsService.setUserDetails(response);
          resolve(response);
      }).catch((err) => {
        console.log(err);
        reject(err);
      })
    });
  }

   /**
   * @method
   * @name logout
   * Logs out the user and clear credentials.
   * @return boolean
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setUserDetails();
    return of(true);
  }
}
