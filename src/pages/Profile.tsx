import {
    Camera,
    ChevronRight,
    CreditCard,
    Globe,
    HelpCircle,
    Lock,
    LogOut,
    Mail,
    MapPin,
    Moon,
    Shield,
    Smartphone,
    User,
} from 'lucide-react';
import { useState } from 'react';

import {
    Md3Button,
    Md3Card,
    Md3Chip,
    Md3IconButton,
    Md3ListItem,
    Md3Switch,
    useMd3Theme,
} from '@/md3';

export default function Profile() {
    const { resolvedMode, toggleMode } = useMd3Theme();
    const [notifications, setNotifications] = useState(true);
    const [location, setLocation] = useState(false);

    return (
        <div className='pb-28 lg:pb-8'>
            {/* Profile header */}
            <div className='px-4 pt-6 pb-6 flex flex-col items-center'>
                <div className='relative'>
                    <div className='h-24 w-24 rounded-full bg-(--md3-primaryContainer) text-(--md3-onPrimaryContainer) flex items-center justify-center text-3xl font-medium'>
                        <User className='w-10 h-10' />
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <Md3IconButton variant='filled' size='small' className='h-8 w-8'>
                            <Camera className='w-4 h-4' />
                        </Md3IconButton>
                    </div>
                </div>
                <h2 className='mt-4 text-2xl font-normal tracking-[-0.25px] text-(--md3-onSurface)'>
                    Alex Chen
                </h2>
                <p className='mt-1 text-sm text-(--md3-onSurfaceVariant) tracking-[0.25px]'>
                    alex.chen@example.com
                </p>
                <div className='mt-3 flex gap-2'>
                    <Md3Chip variant='assist'>
                        <Shield className='w-3.5 h-3.5' />
                        Verified
                    </Md3Chip>
                    <Md3Chip variant='suggestion'>Pro Member</Md3Chip>
                </div>
            </div>

            {/* Account info */}
            <div className='px-4'>
                <h3 className='text-sm font-medium tracking-[0.1px] text-(--md3-onSurface) uppercase'>
                    Account Info
                </h3>
                <Md3Card variant='outlined' className='mt-3'>
                    <Md3ListItem
                        leading={<Mail className='w-6 h-6' />}
                        headline='Email Address'
                        supporting='alex.chen@example.com'
                        trailing={<ChevronRight className='w-5 h-5' />}
                    />
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <Md3ListItem
                        leading={<Smartphone className='w-6 h-6' />}
                        headline='Phone Number'
                        supporting='+1 234 **** 890'
                        trailing={<ChevronRight className='w-5 h-5' />}
                    />
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <Md3ListItem
                        leading={<MapPin className='w-6 h-6' />}
                        headline='Location'
                        supporting='San Francisco, CA'
                        trailing={<ChevronRight className='w-5 h-5' />}
                    />
                </Md3Card>
            </div>

            {/* Preferences */}
            <div className='px-4 mt-6'>
                <h3 className='text-sm font-medium tracking-[0.1px] text-(--md3-onSurface) uppercase'>
                    Preferences
                </h3>
                <Md3Card variant='outlined' className='mt-3'>
                    <div className='px-4 py-3 flex items-center justify-between min-h-14'>
                        <div className='flex items-center gap-4'>
                            <Moon className='w-6 h-6 text-(--md3-onSurfaceVariant)' />
                            <span className='text-base text-(--md3-onSurface)'>Dark Mode</span>
                        </div>
                        <Md3Switch checked={resolvedMode === 'dark'} onChange={toggleMode} />
                    </div>
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <div className='px-4 py-3 flex items-center justify-between min-h-14'>
                        <div className='flex items-center gap-4'>
                            <Mail className='w-6 h-6 text-(--md3-onSurfaceVariant)' />
                            <span className='text-base text-(--md3-onSurface)'>
                                Notifications
                            </span>
                        </div>
                        <Md3Switch
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                        />
                    </div>
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <div className='px-4 py-3 flex items-center justify-between min-h-14'>
                        <div className='flex items-center gap-4'>
                            <Globe className='w-6 h-6 text-(--md3-onSurfaceVariant)' />
                            <span className='text-base text-(--md3-onSurface)'>
                                Location Services
                            </span>
                        </div>
                        <Md3Switch
                            checked={location}
                            onChange={(e) => setLocation(e.target.checked)}
                        />
                    </div>
                </Md3Card>
            </div>

            {/* Security */}
            <div className='px-4 mt-6'>
                <h3 className='text-sm font-medium tracking-[0.1px] text-(--md3-onSurface) uppercase'>
                    Security & Privacy
                </h3>
                <Md3Card variant='outlined' className='mt-3'>
                    <Md3ListItem
                        leading={<Lock className='w-6 h-6' />}
                        headline='Change Password'
                        supporting='Last changed 30 days ago'
                        trailing={<ChevronRight className='w-5 h-5' />}
                    />
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <Md3ListItem
                        leading={<CreditCard className='w-6 h-6' />}
                        headline='Payment Methods'
                        supporting='2 cards linked'
                        trailing={<ChevronRight className='w-5 h-5' />}
                    />
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <Md3ListItem
                        leading={<Shield className='w-6 h-6' />}
                        headline='Privacy Settings'
                        supporting='Manage data sharing permissions'
                        trailing={<ChevronRight className='w-5 h-5' />}
                    />
                </Md3Card>
            </div>

            {/* Support */}
            <div className='px-4 mt-6'>
                <h3 className='text-sm font-medium tracking-[0.1px] text-(--md3-onSurface) uppercase'>
                    Help
                </h3>
                <Md3Card variant='outlined' className='mt-3'>
                    <Md3ListItem
                        leading={<HelpCircle className='w-6 h-6' />}
                        headline='FAQ'
                        supporting='View help documentation'
                        trailing={<ChevronRight className='w-5 h-5' />}
                    />
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <Md3ListItem
                        leading={<Globe className='w-6 h-6' />}
                        headline='About Us'
                        supporting='Version v1.0.0'
                        trailing={<ChevronRight className='w-5 h-5' />}
                    />
                </Md3Card>
            </div>

            {/* Logout */}
            <div className='px-4 mt-6 mb-6'>
                <Md3Button variant='outlined' className='w-full'>
                    <LogOut className='w-4 h-4' />
                    Sign Out
                </Md3Button>
            </div>
        </div>
    );
}
