import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC3UGjYs9Y-FGTi06EuCwZqR5GCThjYSW0',
  authDomain: 'fir-811ce.firebaseapp.com',
  projectId: 'fir-811ce',
  storageBucket: 'fir-811ce.appspot.com',
  messagingSenderId: '274132232548',
  appId: '1:274132232548:web:4ce34cd1a14363b14b3271',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
