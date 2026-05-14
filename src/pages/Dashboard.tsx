import {
    BarChart3,
    Bell,
    Calendar,
    CreditCard,
    Download,
    FileText,
    MessageSquare,
    Plus,
    ShoppingBag,
    TrendingUp,
    Users,
} from 'lucide-react';
import { useState } from 'react';

import { Md3Button, Md3Card, Md3CardContent, Md3Chip, Md3FAB, Md3ListItem } from '@/components/md3';

function StatCard({
    icon,
    label,
    value,
    change,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    change: string;
}) {
    return (
        <Md3Card variant='filled'>
            <Md3CardContent className='p-5'>
                <div className='flex items-start justify-between'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-sm text-(--md3-onSurfaceVariant) tracking-[0.25px]'>
                            {label}
                        </span>
                        <span className='text-2xl font-normal text-(--md3-onSurface) tracking-[-0.25px]'>
                            {value}
                        </span>
                    </div>
                    <div className='h-10 w-10 rounded-xl bg-(--md3-primaryContainer) text-(--md3-onPrimaryContainer) flex items-center justify-center'>
                        {icon}
                    </div>
                </div>
                <div className='mt-3 flex items-center gap-1 text-sm text-(--md3-tertiary)'>
                    <TrendingUp className='w-4 h-4' />
                    <span>{change}</span>
                </div>
            </Md3CardContent>
        </Md3Card>
    );
}

export default function Dashboard() {
    const [chips, setChips] = useState([
        { label: 'All', active: true },
        { label: 'In Progress', active: false },
        { label: 'Completed', active: false },
        { label: 'Pending', active: false },
    ]);

    const toggleChip = (index: number) => {
        setChips((prev) => prev.map((c, i) => ({ ...c, active: i === index })));
    };

    return (
        <div className='pb-28 lg:pb-8'>
            {/* Hero section */}
            <div className='px-4 pt-6 pb-2'>
                <h2 className='text-3xl font-normal tracking-[-0.25px] text-(--md3-onSurface)'>
                    Dashboard
                </h2>
                <p className='mt-1 text-base text-(--md3-onSurfaceVariant) tracking-[0.5px]'>
                    Welcome back, here is your daily overview
                </p>
            </div>

            {/* Stats grid */}
            <div className='px-4 mt-4 grid grid-cols-2 gap-3'>
                <StatCard
                    icon={<ShoppingBag className='w-5 h-5' />}
                    label='Total Orders'
                    value='1,284'
                    change='+12.5%'
                />
                <StatCard
                    icon={<Users className='w-5 h-5' />}
                    label='New Users'
                    value='384'
                    change='+8.2%'
                />
                <StatCard
                    icon={<CreditCard className='w-5 h-5' />}
                    label='Revenue'
                    value='$48,230'
                    change='+23.1%'
                />
                <StatCard
                    icon={<BarChart3 className='w-5 h-5' />}
                    label='Conversion'
                    value='3.24%'
                    change='+1.4%'
                />
            </div>

            {/* Quick actions */}
            <div className='px-4 mt-6'>
                <h3 className='text-sm font-medium tracking-[0.1px] text-(--md3-onSurface)'>
                    Quick Actions
                </h3>
                <div className='mt-3 flex flex-wrap gap-2'>
                    <Md3Button variant='filled' size='small'>
                        <Plus className='w-4 h-4' />
                        New Project
                    </Md3Button>
                    <Md3Button variant='outlined' size='small'>
                        <Download className='w-4 h-4' />
                        Export Report
                    </Md3Button>
                    <Md3Button variant='tonal' size='small'>
                        <FileText className='w-4 h-4' />
                        View Docs
                    </Md3Button>
                </div>
            </div>

            {/* Filter chips */}
            <div className='px-4 mt-6'>
                <h3 className='text-sm font-medium tracking-[0.1px] text-(--md3-onSurface)'>
                    Project Filters
                </h3>
                <div className='mt-3 flex flex-wrap gap-2'>
                    {chips.map((chip, i) => (
                        <Md3Chip
                            key={chip.label}
                            variant='filter'
                            active={chip.active}
                            onClick={() => toggleChip(i)}
                        >
                            {chip.label}
                        </Md3Chip>
                    ))}
                </div>
            </div>

            {/* Recent activity */}
            <div className='px-4 mt-6'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-sm font-medium tracking-[0.1px] text-(--md3-onSurface)'>
                        Recent Activity
                    </h3>
                    <Md3Button variant='text' size='small' className='h-8 px-2'>
                        View All
                    </Md3Button>
                </div>
                <Md3Card variant='outlined' className='mt-3'>
                    <Md3ListItem
                        leading={<Calendar className='w-6 h-6' />}
                        headline='Product Launch Meeting'
                        supporting='Today 14:00 · Room A'
                        trailing={
                            <Md3Button variant='text' size='small' className='h-8 px-2'>
                                Details
                            </Md3Button>
                        }
                    />
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <Md3ListItem
                        leading={<MessageSquare className='w-6 h-6' />}
                        headline='New Comment Pending'
                        supporting='From John · 2 hours ago'
                        trailing={<Bell className='w-5 h-5' />}
                    />
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <Md3ListItem
                        leading={<FileText className='w-6 h-6' />}
                        headline='Monthly Report Generated'
                        supporting='Auto · Yesterday'
                        trailing={<Download className='w-5 h-5' />}
                    />
                </Md3Card>
            </div>

            {/* FAB */}
            <div className='fixed right-4 bottom-24 lg:bottom-8 z-40'>
                <Md3FAB variant='primary'>
                    <Plus className='w-6 h-6' />
                    Create
                </Md3FAB>
            </div>
        </div>
    );
}
