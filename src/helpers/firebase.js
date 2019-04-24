import { firebaseDatabase, firebaseAuth } from './firebase';
import { app } from 'firebase';

export const resetPassword = (email) => firebaseAuth.sendPasswordResetEmail(email);

export const confirmResetPassword = (code, newPassword) => firebaseAuth.confirmPasswordReset(code, newPassword);

export const login = (email, password) => firebaseAuth.signInWithEmailAndPassword(email, password);

export const logout = () => firebaseAuth.signOut();