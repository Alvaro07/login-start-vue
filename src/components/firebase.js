import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-storage'

const config = {
  apiKey: 'AIzaSyAE_4rAo3jQ-nIynUYWbDy1SJOdfCYWOV0',
  authDomain: 'login-start-vue.firebaseapp.com',
  databaseURL: 'https://login-start-vue.firebaseio.com',
  projectId: 'login-start-vue',
  storageBucket: 'login-start-vue.appspot.com',
  appId: '1:326552357673:web:48812b452a5af34d28c538'
}

class Firebase {
  constructor () {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
    this.storage = app.storage()
  }

  /**
   *
   * Login function
   * @param {string} email - The user email.
   * @param {string} password - The user password.
   */

  login (email, password) {
    return new Promise((resolve, reject) => {
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(error => reject(error))
    })
  }

  /**
   *
   * Check that user exists
   * @param {string} userName - The user name.
   */

  userExists (userName) {
    return new Promise(resolve => {
      this.db
        .collection('users')
        .doc(userName)
        .get()
        .then(doc => resolve(doc))
    })
  }

  /**
   *
   * Register function
   * @param {string} email - The user email.
   * @param {string} password - The user password.
   * @param {string} userName - The user name.
   */

  register (email, password, userName) {
    return new Promise((resolve, reject) => {
      this.auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.db
            .collection('users')
            .doc(userName)
            .set({
              displayName: userName,
              email: email
            })
            .then(() => {
              this.auth.currentUser.updateProfile({ displayName: userName }).then(() => resolve())
            })
            .catch(error => error)
        })
        .catch(error => reject(error))
    })
  }

  /**
   *
   * Logout function
   */

  logout () {
    return this.auth.signOut()
  }

  /**
   *
   * Get user function
   * @returns {string} The user.
   */

  getUser () {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user)
        } else {
          reject('No user is signed in.')
        }
      })
    })
  }
}

export default new Firebase()
