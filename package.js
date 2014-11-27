Package.describe({
  name: 'ganymed:material-button',
  summary: ' A Material Button for Meteor',
  version: '0.1.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('ganymed:material-button.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ganymed:material-button');
  api.addFiles('ganymed:material-button-tests.js');
});
