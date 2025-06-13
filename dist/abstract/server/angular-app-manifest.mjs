
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5019, hash: '64d11844bf3b5a88d7e250c86571688716dfaa1b07cc80d6040d69119ca9d6ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5283, hash: 'db0d4e17fbb58241eabd388f201f3800ff47d05a34afdae3cf882202a682d1bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8853, hash: 'f5ed6eac7aa25a183da2c469c683cf3d1a043b42b862384c168a70f8e1bff78d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-C3LLUAID.css': {size: 124, hash: 'RrQRc770wy4', text: () => import('./assets-chunks/styles-C3LLUAID_css.mjs').then(m => m.default)}
  },
};
