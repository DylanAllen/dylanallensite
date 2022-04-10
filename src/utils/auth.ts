import "firebase/compat/firestore"
import 'firebase/storage'

import 'firebase/auth'; 
import { GoogleAuthProvider, User, getAuth, signInWithPopup } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage"

interface Auth {
    init: () => void;
    login: () => Promise<User | null>;
    logout: () => Promise<any>;
    provider: GoogleAuthProvider;
    storage: () => FirebaseStorage;
}

export interface AuthState {
  user?: User | null;
  initialized?: boolean;
}

export const authState = {
  user: null,
  initialized: false,
}

export const userEvent = (user: User | null) => {
  updateState({user: user});
  const event = new CustomEvent('userUpdate', { detail: user } )
  window.dispatchEvent(event);
}
const firebaseAuth = getAuth;

export const auth: Auth = {
    provider: new GoogleAuthProvider(),
    init: async () => {
      updateState({initialized: true});
      auth.provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebaseAuth().onAuthStateChanged(function(user) {
          if (user) {
            userEvent(user);
          }
      });
    },
    login: () => {
        if (!authState.initialized) auth.init();
        if (!authState.user) {
        
            return signInWithPopup(firebaseAuth(), auth.provider).then((result) => {           
                userEvent(result.user);
                return result.user;
            }).catch(function(error) {
                console.log(error);
                return null;
            });
        } else {
            return Promise.resolve(authState.user);
        }
    },
    logout: () => {
      return firebaseAuth().signOut().then(res => {
        userEvent(null);
        return res;
      });
    },
    storage: () => {
        return getStorage();
    }
}

export const updateState = (udpatedData: AuthState) => ({
  ...authState,
  ...udpatedData,
});

