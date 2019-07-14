module.exports = {
 verbose: true, 
 notify: true,
 notifyMode: 'always',
 collectCoverage: true,
 collectCoverageFrom: [
  "src/*.{js,jsx}",
  "!/node_modules/**",
  "!src/app.js"
 ],
 coverageThreshold: {
   "src/*.{js,jsx}": {
    "branches": 90,
    "functions": 90,
    "lines": 90,
    "statements": 90
   }
 }
};