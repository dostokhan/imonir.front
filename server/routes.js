// const routes = module.exports = require('next-routes')();

// routes
// .add('home', '/', 'index')
// .add('whatidid', '/whatidid', 'whatidid')
// .add('whatido', '/whatido', 'whatido')
// .add('singlenote', '/note/:slug', 'note/single');
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})


module.exports = () => {
  return {
    '/': { page: '/index' },
    '/whatidid': { page: '/whatidid' },
    '/whatido': { page: '/whatido' },
    '/404': { page: '/404' },
    '/note/:slug': { page: '/note/index' },
  };
};

