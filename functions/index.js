const glob = require('glob')
const path = require('path')
const admin = require('firebase-admin')


// Initialize firebase-admin so it is available within functions
try {
  admin.initializeApp({
    projectId: 'peakflo',
    databaseURL: 'https://peakflo.firebaseio.com',
    storageBucket: 'peakflo.appspot.com',
  })
} catch (err) {
  /* istanbul ignore next: not called in tests */
  console.error(
      'Caught error initializing default firebase-admin app instance:',
      err
  )
}

let filePath

if (process.env.APP_ENVIRONMENT === 'development') {
  filePath = './lib/**/index.js'
} else {
  filePath = './lib/**/*.js'
}

// Load all folders within dist directory (mirrors layout of src)
const files = glob.sync('./lib/**/index.js', {
  cwd: __dirname,
  ignore: ['../node_modules/**', './lib/utils/**', './lib/constants/**'],
})

// Load only files associated with the current function if FUNCTION_NAME env
// variable exists - Done to help improve function cold start times.
files.forEach((functionFile) => {
  // Get folder name from file name (removing any dashes)
  const folderName = path
      .basename(path.dirname(functionFile))
      .replace(/[-]/g, '')

  const functionName = process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET

  // Load single function from default export of function folder's index file
  !functionName || functionName === folderName ?
  // eslint-disable-line no-unused-expressions
    (exports[folderName] = require(functionFile).default) :
    // eslint-disable-line global-require
    () => {} // eslint-disable-line @typescript-eslint/no-empty-function
})
