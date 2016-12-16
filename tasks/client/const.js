export const path = {
  ROOT: './',
  DEV: './client/dev/',
  DIST: './client/dist/'
};

export const tasks = {
  CLIENT_VIEWS_DIST: 'client.views:dist',
  CLIENT_IMAGE_DIST: 'client.imgs:dist',
  CLIENT_BUILD_CSS_DIST: 'client.build_css:dist',
  CLIENT_BUILD_JS_DIST: 'client.build_js:dist',
  CLIENT_BUILD_PACKAGES_DIST: 'client.build_packages:dist',
  CLIENT_DEL_DIST: 'client.del:dist',
  CLIENT_BUILD_CONFIG_DIST: 'client.config:dist',
  CLIENT_COPY_DIST: 'client.copy:dist',

  CLIENT_UNIT_TEST: 'client.unit_test',
  CLIENT_COVERAGE: 'client.coverage',

  CLIENT_WATCH: 'client.watch',

  CLIENT_RELOAD: 'client.reload',

  CLIENT_BUILD_DIST: 'client.build:dist',

  CLIENT_BUILD_CONFIG_DEV: 'client.config'
};
