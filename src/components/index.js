import Loadable from 'react-loadable'

const components = (path) => Loadable({
    loader:() => import(`@/components/${path}`),
    loading:() => (null)
});

const NavBars = components('navBar/index');
export {
    NavBars
}