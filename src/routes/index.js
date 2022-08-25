// Layouts
import { HeaderOnly } from '~/Layouts';
// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/Profile', component: Profile },
    { path: '/Upload', component: Upload, value: HeaderOnly },
    { path: '/Search', component: Search, value: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
