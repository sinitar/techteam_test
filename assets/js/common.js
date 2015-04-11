// Filename: common.js
require.config({
  paths: {

    jquery: 'lib/jquery/jquery.min',
    bootstrap: 'lib/bootstrap/bootstrap.min',
    jquery_ui: 'lib/jquery/jquery-ui.min',
    handyScripts: 'app/handyScripts',
    typeahead: 'lib/bootstrap/typeahead.bundle'

  },
  shim: {

    "bootstrap": ["jquery"],
    "jquery_ui": ["jquery"],
    "handyScripts": ["jquery"],
    "handyScripts": ["jquery_ui"],
    "handyScripts": ["typeahead"],
    "typeahead": ["jquery"],
    "typeahead": ["bootstrap"],
    "jquery_ui": ["jquery"]

  }
});

require([

  'jquery',
  'bootstrap',
  'handyScripts',
  'jquery_ui',
  'typeahead'

], function(common){ });

// Clear Cache of localStorage, fix for Less.js | @TBD: REMOVE
localStorage.clear()