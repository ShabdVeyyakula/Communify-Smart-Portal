import React, { useState, useEffect } from 'react'

import firebase from 'firebase/app'
import 'firebase/auth'

export const AuthService = {
  login: async (email, password) => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
      const user = userCredential.user
      return {
        user: user
      }
    } catch (e) {
      return {
        error: e.message
      }
    }
  },

  logout: async () => {
    await firebase.auth().signOut()
  }
}