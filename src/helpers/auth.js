import { auth } from "../services/firebase";

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  // provider.addScope("email");
  // provider.addScope('https://www.googleapis.com/auth/plus.login, email');
  return auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
  const provider = new auth.GithubAuthProvider();
  return auth().signInWithPopup(provider);
}

export function signInWithFacebook() {
  const provider = new auth.FacebookAuthProvider();
  provider.addScope("email");
  return auth().signInWithPopup(provider);
}

export function logout() {
  return auth().signOut();
}
