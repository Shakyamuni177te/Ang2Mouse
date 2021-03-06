/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      // auth0 related libraries
      'angular2-jwt': 'npm:angular2-jwt',
      'base64-js': 'npm:base64-js/index.js',
      'buffer': 'npm:buffer/index.js',
      'convert-hex': 'npm:sha256/npm:convert-hex/convert-hex.js',
      'convert-string': 'npm:sha256/npm:convert-string/convert-string.js',
      'ieee754': 'npm:ieee754/index.js',
      'isarray': 'npm:buffer/node_modules/isarray/index.js',
      'js-base64': 'npm:js-base64/base64.js',
      'sha256': 'npm:sha256/lib/sha256.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2-jwt': {
        main: './angular2-jwt.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
