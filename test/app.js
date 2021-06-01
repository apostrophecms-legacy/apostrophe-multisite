module.exports = async function(options = {}) {
  const modules = {
    'apostrophe-users': {
      groups: [
        {
          title: 'admin',
          permissions: [ 'admin' ]
        }
      ]
    },
    'apostrophe-pages': {},
    'apostrophe-templates': {}
  };

  return require('../index.js')({
    sites: { modules },
    dashboard: { modules },
    sessionSecret: 'test123',
    port: options.port || 3000,
    dashboardHostname: 'dashboard.test',
    shortNamePrefix: options.shortNamePrefix || 'test-multi-',
    mongodbUrl: options.mongodbUrl || 'mongodb://localhost:27017',
    maxRequestsBeforeShutdown: options.maxRequestsBeforeShutdown,
    additionalRequestsBeforeShutdown: options.additionalRequestsBeforeShutdown,
    exit: options.exit
  });
};
