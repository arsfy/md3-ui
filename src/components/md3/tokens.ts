// Material Design 3 Baseline Tokens
// https://m3.material.io/styles/color/the-color-system/tokens

export const md3Colors = {
    // Primary
    primary: '#6750A4',
    onPrimary: '#FFFFFF',
    primaryContainer: '#EADDFF',
    onPrimaryContainer: '#21005D',

    // Secondary
    secondary: '#625B71',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#E8DEF8',
    onSecondaryContainer: '#1D192B',

    // Tertiary
    tertiary: '#7D5260',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#FFD8E4',
    onTertiaryContainer: '#31111D',

    // Error
    error: '#B3261E',
    onError: '#FFFFFF',
    errorContainer: '#F9DEDC',
    onErrorContainer: '#410E0B',

    // Surface & Background
    background: '#FFFBFE',
    onBackground: '#1C1B1F',
    surface: '#FFFBFE',
    onSurface: '#1C1B1F',
    surfaceVariant: '#E7E0EC',
    onSurfaceVariant: '#49454F',

    // Inverse
    inverseSurface: '#313033',
    inverseOnSurface: '#F4EFF4',
    inversePrimary: '#D0BCFF',

    // Outline
    outline: '#79747E',
    outlineVariant: '#CAC4D0',

    // Misc
    shadow: '#000000',
    scrim: '#000000',
    surfaceTint: '#6750A4',

    // Surface containers (elevation overlays)
    surfaceContainerHighest: '#E6E0E9',
    surfaceContainerHigh: '#ECE6F0',
    surfaceContainer: '#F3EDF7',
    surfaceContainerLow: '#F7F2FA',
    surfaceContainerLowest: '#FFFFFF',
    surfaceBright: '#FDF8FD',
    surfaceDim: '#DED8E1',
} as const;

export const md3DarkColors = {
    primary: '#D0BCFF',
    onPrimary: '#381E72',
    primaryContainer: '#4F378B',
    onPrimaryContainer: '#EADDFF',

    secondary: '#CCC2DC',
    onSecondary: '#332D41',
    secondaryContainer: '#4A4458',
    onSecondaryContainer: '#E8DEF8',

    tertiary: '#EFB8C8',
    onTertiary: '#492532',
    tertiaryContainer: '#633B48',
    onTertiaryContainer: '#FFD8E4',

    error: '#F2B8B5',
    onError: '#601410',
    errorContainer: '#8C1D18',
    onErrorContainer: '#F9DEDC',

    background: '#1C1B1F',
    onBackground: '#E6E1E5',
    surface: '#1C1B1F',
    onSurface: '#E6E1E5',
    surfaceVariant: '#49454F',
    onSurfaceVariant: '#CAC4D0',

    inverseSurface: '#E6E1E5',
    inverseOnSurface: '#313033',
    inversePrimary: '#6750A4',

    outline: '#938F99',
    outlineVariant: '#49454F',

    shadow: '#000000',
    scrim: '#000000',
    surfaceTint: '#D0BCFF',

    surfaceContainerHighest: '#36343B',
    surfaceContainerHigh: '#2B2930',
    surfaceContainer: '#211F26',
    surfaceContainerLow: '#1D1B20',
    surfaceContainerLowest: '#0F0D13',
    surfaceBright: '#3B383E',
    surfaceDim: '#141218',
} as const;

// Shape tokens (corner radius in px)
export const md3Shapes = {
    none: '0px',
    extraSmall: '4px',
    extraSmallTop: '4px 4px 0 0',
    small: '8px',
    medium: '12px',
    large: '16px',
    largeEnd: '0 16px 16px 0',
    largeTop: '16px 16px 0 0',
    extraLarge: '28px',
    extraLargeTop: '28px 28px 0 0',
    full: '9999px',
} as const;

// Elevation tokens (shadow + overlay opacity)
export const md3Elevation = {
    level0: 'none',
    level1: '0px 1px 3px 1px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)',
    level2: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)',
    level3: '0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px 0px rgba(0,0,0,0.3)',
    level4: '0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px 0px rgba(0,0,0,0.3)',
    level5: '0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px 0px rgba(0,0,0,0.3)',
} as const;

// Typography tokens (font, weight, size, line-height, letter-spacing)
export const md3Typography = {
    displayLarge: { size: '57px', weight: 400, lineHeight: '64px', letterSpacing: '-0.25px' },
    displayMedium: { size: '45px', weight: 400, lineHeight: '52px', letterSpacing: '0px' },
    displaySmall: { size: '36px', weight: 400, lineHeight: '44px', letterSpacing: '0px' },

    headlineLarge: { size: '32px', weight: 400, lineHeight: '40px', letterSpacing: '0px' },
    headlineMedium: { size: '28px', weight: 400, lineHeight: '36px', letterSpacing: '0px' },
    headlineSmall: { size: '24px', weight: 400, lineHeight: '32px', letterSpacing: '0px' },

    titleLarge: { size: '22px', weight: 400, lineHeight: '28px', letterSpacing: '0px' },
    titleMedium: { size: '16px', weight: 500, lineHeight: '24px', letterSpacing: '0.15px' },
    titleSmall: { size: '14px', weight: 500, lineHeight: '20px', letterSpacing: '0.1px' },

    bodyLarge: { size: '16px', weight: 400, lineHeight: '24px', letterSpacing: '0.5px' },
    bodyMedium: { size: '14px', weight: 400, lineHeight: '20px', letterSpacing: '0.25px' },
    bodySmall: { size: '12px', weight: 400, lineHeight: '16px', letterSpacing: '0.4px' },

    labelLarge: { size: '14px', weight: 500, lineHeight: '20px', letterSpacing: '0.1px' },
    labelMedium: { size: '12px', weight: 500, lineHeight: '16px', letterSpacing: '0.5px' },
    labelSmall: { size: '11px', weight: 500, lineHeight: '16px', letterSpacing: '0.5px' },
} as const;

// Motion tokens
export const md3Motion = {
    durationShort1: '50ms',
    durationShort2: '100ms',
    durationShort3: '150ms',
    durationShort4: '200ms',
    durationMedium1: '250ms',
    durationMedium2: '300ms',
    durationMedium3: '350ms',
    durationMedium4: '400ms',
    durationLong1: '450ms',
    durationLong2: '500ms',
    durationLong3: '550ms',
    durationLong4: '600ms',
    durationExtraLong1: '700ms',
    durationExtraLong2: '800ms',
    durationExtraLong3: '900ms',
    durationExtraLong4: '1000ms',
    easingStandard: 'cubic-bezier(0.2, 0, 0, 1)',
    easingStandardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
    easingStandardDecelerate: 'cubic-bezier(0, 0, 0.2, 1)',
    easingEmphasized: 'cubic-bezier(0.2, 0, 0, 1)',
    easingEmphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
    easingEmphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
} as const;
