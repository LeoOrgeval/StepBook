import { inject, Injectable } from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User, GoogleAuthProvider,
  signInWithPopup, UserCredential
} from "@angular/fire/auth";
import { defer, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly auth = inject(Auth)

  constructor() { }

  get currentUser() {
    return this.auth.currentUser;
  }

  onAuthStateChanged(): Observable<User | null> {
    return new Observable(observer => {
      const unsubscribe = onAuthStateChanged(this.auth, user => {
        observer.next(user);
      });
      return { unsubscribe };
    });
  }

  createAccount(email: string, password: string) {
    return defer(() => createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string) {
    return defer(() => signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return defer(() => this.auth.signOut());
  }
}
