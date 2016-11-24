import hello from './pages/hello/hello'
import index from './pages/index/index'

export default [
  {
    path: '/hello',
    component: hello,
    name: 'hello',
  },
  {
    path: '/index',
    component: index,
    name: 'index',
  },
  { path: '*', redirect: '/index' }
]
