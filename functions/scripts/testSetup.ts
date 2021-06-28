/* eslint-disable no-unused-vars */
import * as admin from 'firebase-admin'

const projectId = 'unit-test-project'
const {
  FIREBASE_DATABASE_EMULATOR_HOST,
} = process.env

;(global as any).projectId = projectId

// Initialize admin SDK with emulator settings for RTDB (needed to
// prevent error from initializeApp not being called since it is in index.js)
admin.initializeApp({
  projectId,
  databaseURL: `http://${FIREBASE_DATABASE_EMULATOR_HOST}?ns=${projectId}`,
  credential: admin.credential.applicationDefault(),
})
