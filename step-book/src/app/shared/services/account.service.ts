import { inject, Injectable } from "@angular/core";
import { doc, Firestore, getDoc, setDoc } from "@angular/fire/firestore";
import { defer, map } from "rxjs";
import { Account } from "../models/Account";
import { DocumentData } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private readonly firestore = inject(Firestore);

  constructor() {
  }

  createAccount(id: string, email: string, pseudo: string) {
    return defer(() => {
      return setDoc(doc(this.firestore, "accounts", id), {
        email,
        pseudo,
        createAt: new Date(),
        questionnaire: {}
      });
    });
  }

  getAccount(id: string) {
    return defer(() => {
      return getDoc(doc(this.firestore, "accounts", id));
    })
      .pipe(
        map((snapshot) => this.mapAccount(snapshot.id, snapshot.data()!))
      );
  }

  updateAccount(id: string, data: any) {
    return defer(() => {
      return setDoc(doc(this.firestore, "accounts", id), data, { merge: true });
    });
  }

  private mapAccount(id: string, data: DocumentData): Account {
    return {
      id,
      ...data
    } as Account;
  }

  accountExists(id: string) {
    return defer(async () => {
      const accountDoc = await getDoc(doc(this.firestore, 'accounts', id));
      return accountDoc.exists();
    });
  }
}
