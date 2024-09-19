import { Timestamp } from '@firebase/firestore-types';

export interface Account {
  id: string;
  email: string;
  pseudo: string;
  createAt: Timestamp;
  questionnaire: {
  }
}
