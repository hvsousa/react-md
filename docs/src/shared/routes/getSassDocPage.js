export default function getSassDocPage(state, cb) {
  if (__CLIENT__) {
    require.ensure([], require => {
      cb(null, require('containers/SassDocPage').default);
    });
  } else {
    cb(null, require('containers/SassDocPage').default);
  }
}
