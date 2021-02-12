import { Injectable } from '@angular/core';
import { IUser } from '@app/model/user.model';

const currentUser = 'currentUser';

/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable()
export class CredentialsService {
  private _user: IUser | null = null;
  constructor() {
    const savedUser = localStorage.getItem(currentUser);
    if (savedUser) {
      this._user = JSON.parse(savedUser);
    }
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get currentUser(): IUser | null {
    return this._user;
  }

  /** set user details locally */
  setUserDetails(user?: IUser) {
    this._user = user || null;
    if (user) {
      localStorage.setItem(currentUser, JSON.stringify(user));
    } else {
      localStorage.removeItem(currentUser);
    }
  }
}
