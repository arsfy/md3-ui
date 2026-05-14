import {
    Layers,
    LayoutDashboard,
    Menu,
    Search,
    Settings as SettingsIcon,
    User,
} from 'lucide-react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import {
    Md3AppBar,
    Md3AppBarLeading,
    Md3AppBarTitle,
    Md3AppBarTrailing,
    Md3IconButton,
    Md3NavigationBar,
    Md3NavigationBarItem,
    Md3NavigationRail,
    Md3NavigationRailItem,
    Md3Toaster,
} from './md3';
import Components from './pages/Components';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const navItems = [
    { path: '/', label: 'Home', icon: <LayoutDashboard className='w-6 h-6' /> },
    { path: '/components', label: 'Components', icon: <Layers className='w-6 h-6' /> },
    { path: '/settings', label: 'Settings', icon: <SettingsIcon className='w-6 h-6' /> },
    { path: '/profile', label: 'Profile', icon: <User className='w-6 h-6' /> },
];

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const currentPage = navItems.find((n) => n.path === location.pathname);
    const pageTitle = currentPage?.label || 'MD3 Demo';

    return (
        <div className='min-h-screen bg-(--md3-background) text-(--md3-onBackground)'>
            {/* Mobile: Top App Bar */}
            <div className='lg:hidden'>
                <Md3AppBar variant='small'>
                    <Md3AppBarLeading>
                        <Md3IconButton variant='standard'>
                            <Menu className='w-5 h-5' />
                        </Md3IconButton>
                        <Md3AppBarTitle className='text-xl'>{pageTitle}</Md3AppBarTitle>
                    </Md3AppBarLeading>
                    <Md3AppBarTrailing>
                        <Md3IconButton variant='standard'>
                            <Search className='w-5 h-5' />
                        </Md3IconButton>
                    </Md3AppBarTrailing>
                </Md3AppBar>
            </div>

            {/* Desktop: Side Navigation Rail */}
            <div className='hidden lg:block'>
                <Md3NavigationRail
                    header={
                        <Md3IconButton variant='standard'>
                            <Menu className='w-5 h-5' />
                        </Md3IconButton>
                    }
                >
                    {navItems.map((item) => (
                        <Md3NavigationRailItem
                            key={item.path}
                            icon={item.icon}
                            label={item.label}
                            active={location.pathname === item.path}
                            onClick={() => navigate(item.path)}
                        />
                    ))}
                </Md3NavigationRail>
            </div>

            {/* Main Content */}
            <main className='max-w-3xl mx-auto lg:ml-20 lg:max-w-none lg:mr-0 lg:px-8'>
                {/* Desktop page title */}
                <div className='hidden lg:block pt-8 pb-4'>
                    <h1 className='text-(--md3-onSurface) text-3xl font-normal tracking-[-0.25px]'>
                        {pageTitle}
                    </h1>
                </div>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/components' element={<Components />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </main>

            {/* Mobile: Bottom Navigation Bar */}
            <div className='lg:hidden'>
                <Md3NavigationBar>
                    {navItems.map((item) => (
                        <Md3NavigationBarItem
                            key={item.path}
                            icon={item.icon}
                            label={item.label}
                            active={location.pathname === item.path}
                            onClick={() => navigate(item.path)}
                        />
                    ))}
                </Md3NavigationBar>
            </div>

            <Md3Toaster />
        </div>
    );
}

export default App;
