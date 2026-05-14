import {
    Bell,
    Check,
    Heart,
    Home,
    Plus,
    Search,
    Settings,
    Share2,
    Star,
    Trash2,
} from 'lucide-react';
import { useState } from 'react';

import {
    Md3Button,
    Md3Card,
    Md3CardContent,
    Md3CardDescription,
    Md3CardFooter,
    Md3CardHeader,
    Md3CardTitle,
    Md3Chip,
    Md3Dialog,
    Md3DialogClose,
    Md3DialogContent,
    Md3DialogDescription,
    Md3DialogFooter,
    Md3DialogHeader,
    Md3DialogTitle,
    Md3DialogTrigger,
    Md3FAB,
    Md3IconButton,
    Md3ListItem,
    Md3Switch,
    Md3TextField,
    md3Toast,
} from '@/md3';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className='px-4 mt-6'>
            <h3 className='text-sm font-medium tracking-[0.1px] text-(--md3-onSurface) uppercase'>
                {title}
            </h3>
            <div className='mt-3'>{children}</div>
        </div>
    );
}

export default function Components() {
    const [sw1, setSw1] = useState(true);
    const [sw2, setSw2] = useState(false);
    const [textValue, setTextValue] = useState('');

    return (
        <div className='pb-28 lg:pb-8'>
            <div className='px-4 pt-6 pb-2'>
                <h2 className='text-3xl font-normal tracking-[-0.25px] text-(--md3-onSurface)'>
                    Components
                </h2>
                <p className='mt-1 text-base text-(--md3-onSurfaceVariant) tracking-[0.5px]'>
                    Material Design 3 component library showcase
                </p>
            </div>

            {/* Buttons */}
            <Section title='Buttons'>
                <Md3Card variant='outlined'>
                    <Md3CardContent className='p-5 flex flex-wrap gap-3'>
                        <Md3Button variant='filled'>Filled</Md3Button>
                        <Md3Button variant='tonal'>Tonal</Md3Button>
                        <Md3Button variant='outlined'>Outlined</Md3Button>
                        <Md3Button variant='text'>Text</Md3Button>
                        <Md3Button variant='elevated'>Elevated</Md3Button>
                    </Md3CardContent>
                </Md3Card>
                <div className='mt-3 flex flex-wrap gap-3'>
                    <Md3Button variant='filled' size='small'>
                        Small
                    </Md3Button>
                    <Md3Button variant='filled' size='default'>
                        Default
                    </Md3Button>
                    <Md3Button variant='filled' size='large'>
                        Large
                    </Md3Button>
                </div>
                <div className='mt-3 flex flex-wrap gap-3'>
                    <Md3Button variant='filled' icon>
                        <Plus className='w-5 h-5' />
                    </Md3Button>
                    <Md3Button variant='outlined' icon>
                        <Heart className='w-5 h-5' />
                    </Md3Button>
                    <Md3Button variant='tonal' icon>
                        <Share2 className='w-5 h-5' />
                    </Md3Button>
                </div>
            </Section>

            {/* Icon Buttons */}
            <Section title='Icon Buttons'>
                <div className='flex flex-wrap gap-3'>
                    <Md3IconButton variant='standard'>
                        <Search className='w-5 h-5' />
                    </Md3IconButton>
                    <Md3IconButton variant='filled'>
                        <Plus className='w-5 h-5' />
                    </Md3IconButton>
                    <Md3IconButton variant='tonal'>
                        <Settings className='w-5 h-5' />
                    </Md3IconButton>
                    <Md3IconButton variant='outlined'>
                        <Heart className='w-5 h-5' />
                    </Md3IconButton>
                </div>
            </Section>

            {/* Text Fields */}
            <Section title='Text Fields'>
                <Md3Card variant='outlined'>
                    <Md3CardContent className='p-5 flex flex-col gap-4'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <Md3TextField
                                variant='filled'
                                label='Username'
                                placeholder='Enter username'
                                value={textValue}
                                onChange={(e) => setTextValue(e.target.value)}
                            />
                            <Md3TextField
                                variant='outlined'
                                label='Email'
                                placeholder='Enter email'
                                type='email'
                            />
                            <Md3TextField
                                variant='filled'
                                label='Password'
                                type='password'
                                leadingIcon={<Search className='w-5 h-5' />}
                            />
                            <Md3TextField
                                variant='outlined'
                                label='With Error'
                                error
                                errorText='This field is required'
                                leadingIcon={<Settings className='w-5 h-5' />}
                                trailingIcon={<Bell className='w-5 h-5' />}
                            />
                            <Md3TextField
                                variant='filled'
                                label='Disabled'
                                disabled
                                defaultValue='Read only value'
                            />
                            <Md3TextField
                                variant='outlined'
                                label='Required'
                                required
                                helperText='Helper text goes here'
                            />
                        </div>
                        <Md3TextField
                            variant='outlined'
                            label='Multiline'
                            multiline
                            rows={4}
                            placeholder='Type something...'
                        />
                    </Md3CardContent>
                </Md3Card>
            </Section>

            {/* Chips */}
            <Section title='Chips'>
                <Md3Card variant='outlined'>
                    <Md3CardContent className='p-5 flex flex-wrap gap-2'>
                        <Md3Chip variant='assist'>
                            <Search className='w-4 h-4' />
                            Assist
                        </Md3Chip>
                        <Md3Chip variant='filter' active>
                            <Check className='w-4 h-4' />
                            Filter Active
                        </Md3Chip>
                        <Md3Chip variant='filter'>Filter</Md3Chip>
                        <Md3Chip variant='input'>
                            Input
                            <Trash2 className='w-3.5 h-3.5' />
                        </Md3Chip>
                        <Md3Chip variant='suggestion'>Suggestion</Md3Chip>
                    </Md3CardContent>
                </Md3Card>
            </Section>

            {/* Cards */}
            <Section title='Cards'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <Md3Card variant='elevated'>
                        <Md3CardHeader>
                            <Md3CardTitle>Elevated Card</Md3CardTitle>
                            <Md3CardDescription>
                                A card with elevated shadow to emphasize content hierarchy.
                            </Md3CardDescription>
                        </Md3CardHeader>
                        <Md3CardContent>
                            <div className='h-24 rounded-lg bg-(--md3-primaryContainer) flex items-center justify-center text-(--md3-onPrimaryContainer)'>
                                <Star className='w-8 h-8' />
                            </div>
                        </Md3CardContent>
                        <Md3CardFooter>
                            <Md3Button variant='text' size='small'>
                                Action
                            </Md3Button>
                        </Md3CardFooter>
                    </Md3Card>

                    <Md3Card variant='filled'>
                        <Md3CardHeader>
                            <Md3CardTitle>Filled Card</Md3CardTitle>
                            <Md3CardDescription>
                                A filled card using surface container background color.
                            </Md3CardDescription>
                        </Md3CardHeader>
                        <Md3CardContent>
                            <div className='h-24 rounded-lg bg-(--md3-secondaryContainer) flex items-center justify-center text-(--md3-onSecondaryContainer)'>
                                <Home className='w-8 h-8' />
                            </div>
                        </Md3CardContent>
                        <Md3CardFooter>
                            <Md3Button variant='text' size='small'>
                                Action
                            </Md3Button>
                        </Md3CardFooter>
                    </Md3Card>

                    <Md3Card variant='outlined'>
                        <Md3CardHeader>
                            <Md3CardTitle>Outlined Card</Md3CardTitle>
                            <Md3CardDescription>
                                A card outlined with a thin border.
                            </Md3CardDescription>
                        </Md3CardHeader>
                        <Md3CardContent>
                            <div className='h-24 rounded-lg bg-(--md3-tertiaryContainer) flex items-center justify-center text-(--md3-onTertiaryContainer)'>
                                <Bell className='w-8 h-8' />
                            </div>
                        </Md3CardContent>
                        <Md3CardFooter>
                            <Md3Button variant='text' size='small'>
                                Action
                            </Md3Button>
                        </Md3CardFooter>
                    </Md3Card>
                </div>
            </Section>

            {/* FABs */}
            <Section title='Floating Action Buttons'>
                <Md3Card variant='outlined'>
                    <Md3CardContent className='p-5 flex flex-wrap items-center gap-4'>
                        <Md3FAB variant='primary'>
                            <Plus className='w-5 h-5' />
                            Primary
                        </Md3FAB>
                        <Md3FAB variant='secondary'>
                            <Heart className='w-5 h-5' />
                            Secondary
                        </Md3FAB>
                        <Md3FAB variant='tertiary'>
                            <Star className='w-5 h-5' />
                            Tertiary
                        </Md3FAB>
                        <Md3FAB variant='surface'>
                            <Share2 className='w-5 h-5' />
                            Surface
                        </Md3FAB>
                    </Md3CardContent>
                </Md3Card>
                <div className='mt-3 flex flex-wrap gap-3'>
                    <Md3FAB variant='primary' size='small'>
                        <Plus className='w-4 h-4' />
                    </Md3FAB>
                    <Md3FAB variant='primary' size='default'>
                        <Plus className='w-5 h-5' />
                    </Md3FAB>
                    <Md3FAB variant='primary' size='large'>
                        <Plus className='w-6 h-6' />
                        Large
                    </Md3FAB>
                </div>
            </Section>

            {/* Switches */}
            <Section title='Switches'>
                <Md3Card variant='outlined'>
                    <Md3CardContent className='p-5 flex flex-col gap-4'>
                        <div className='flex items-center justify-between'>
                            <span className='text-base text-(--md3-onSurface)'>
                                Push Notifications
                            </span>
                            <Md3Switch checked={sw1} onChange={(e) => setSw1(e.target.checked)} />
                        </div>
                        <div className='h-px bg-(--md3-outlineVariant)' />
                        <div className='flex items-center justify-between'>
                            <span className='text-base text-(--md3-onSurface)'>Dark Mode</span>
                            <Md3Switch checked={sw2} onChange={(e) => setSw2(e.target.checked)} />
                        </div>
                        <div className='h-px bg-(--md3-outlineVariant)' />
                        <div className='flex items-center justify-between'>
                            <span className='text-base text-(--md3-onSurface)'>Auto Save</span>
                            <Md3Switch disabled />
                        </div>
                    </Md3CardContent>
                </Md3Card>
            </Section>

            {/* Dialogs */}
            <Section title='Dialogs'>
                <Md3Card variant='outlined'>
                    <Md3CardContent className='p-5 flex flex-wrap gap-3'>
                        <Md3Dialog>
                            <Md3DialogTrigger asChild>
                                <Md3Button variant='filled'>Open Dialog</Md3Button>
                            </Md3DialogTrigger>
                            <Md3DialogContent>
                                <Md3DialogHeader>
                                    <Md3DialogTitle>Discard draft?</Md3DialogTitle>
                                    <Md3DialogDescription>
                                        Your unsaved changes will be removed from this session.
                                    </Md3DialogDescription>
                                </Md3DialogHeader>
                                <Md3DialogFooter>
                                    <Md3DialogClose asChild>
                                        <Md3Button variant='text'>Cancel</Md3Button>
                                    </Md3DialogClose>
                                    <Md3DialogClose asChild>
                                        <Md3Button variant='filled'>Discard</Md3Button>
                                    </Md3DialogClose>
                                </Md3DialogFooter>
                            </Md3DialogContent>
                        </Md3Dialog>

                        <Md3Dialog>
                            <Md3DialogTrigger asChild>
                                <Md3Button variant='tonal'>Simple Dialog</Md3Button>
                            </Md3DialogTrigger>
                            <Md3DialogContent showCloseButton={false}>
                                <Md3DialogHeader className='pr-0'>
                                    <Md3DialogTitle>Choose account</Md3DialogTitle>
                                    <Md3DialogDescription>
                                        Select the profile used for this workspace.
                                    </Md3DialogDescription>
                                </Md3DialogHeader>
                                <div className='overflow-hidden rounded-xl border border-(--md3-outlineVariant)'>
                                    <Md3ListItem
                                        headline='Personal'
                                        supporting='alex@example.com'
                                    />
                                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                                    <Md3ListItem headline='Team' supporting='design@example.com' />
                                </div>
                                <Md3DialogFooter>
                                    <Md3DialogClose asChild>
                                        <Md3Button variant='text'>Done</Md3Button>
                                    </Md3DialogClose>
                                </Md3DialogFooter>
                            </Md3DialogContent>
                        </Md3Dialog>
                    </Md3CardContent>
                </Md3Card>
            </Section>

            {/* Toasts */}
            <Section title='Toasts'>
                <Md3Card variant='outlined'>
                    <Md3CardContent className='p-5 flex flex-wrap gap-3'>
                        <Md3Button
                            variant='filled'
                            onClick={() =>
                                md3Toast.success('Saved changes', {
                                    description: 'Your component settings were updated.',
                                })
                            }
                        >
                            Success Toast
                        </Md3Button>
                        <Md3Button
                            variant='tonal'
                            onClick={() =>
                                md3Toast('Draft archived', {
                                    description: 'The item moved to archive.',
                                    action: {
                                        label: 'Undo',
                                        onClick: () => md3Toast.info('Archive undone'),
                                    },
                                })
                            }
                        >
                            Action Toast
                        </Md3Button>
                        <Md3Button
                            variant='outlined'
                            onClick={() =>
                                md3Toast.error('Upload failed', {
                                    description: 'Check your connection and try again.',
                                })
                            }
                        >
                            Error Toast
                        </Md3Button>
                    </Md3CardContent>
                </Md3Card>
            </Section>

            {/* List Items */}
            <Section title='List Items'>
                <Md3Card variant='outlined'>
                    <Md3ListItem
                        leading={<Home className='w-6 h-6' />}
                        headline='Home'
                        supporting='Return to main dashboard'
                        trailing={<Check className='w-5 h-5 text-(--md3-primary)' />}
                    />
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <Md3ListItem
                        leading={<Settings className='w-6 h-6' />}
                        headline='Settings'
                        supporting='Account and app preferences'
                    />
                    <div className='mx-4 h-px bg-(--md3-outlineVariant)' />
                    <Md3ListItem
                        leading={<Bell className='w-6 h-6' />}
                        headline='Notifications'
                        supporting='3 unread messages'
                    />
                </Md3Card>
            </Section>
        </div>
    );
}
