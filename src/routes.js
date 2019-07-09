import Home from './components/Home'
import Blog from './components/Blog'
import Post from './components/Post'

export default [
	{
		path: '/',
		component: Home,
		name: 'home'
	},
	{
		path: '/blog',
		component: Blog,
		name: 'blog'
	},
	{
		path: '/blog/:id',
		component: Post,
		name: 'post',
		props: true
	}
]