Package.describe({
  name: 'ganymed:material-button',
  summary: ' A Material Button for Meteor',
  version: '0.0.3',
  git: 'https://github.com/lampe/ganymed-material-button'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('templating');
  api.addFiles('ganymed:material-button.html', "client");
  api.addFiles('ganymed:material-button.css', "client");
  api.addFiles('ganymed:material-button.js', "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ganymed:material-button');
  api.addFiles('ganymed:material-button-tests.js');
});
