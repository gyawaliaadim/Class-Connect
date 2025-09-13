// 'use client';

// import { useState } from 'react';
// import {
//     MantineProvider,
//     MantineColorScheme,
//     MantineColorSchemeProvider,
//     ColorSchemeScript,
// } from '@mantine/core';

// export function Providers({ children }: { children: React.ReactNode }) {
//     const [colorScheme, setColorScheme] = useState<MantineColorScheme>('light');
//     const toggleColorScheme = (value?: MantineColorScheme) => {
//         const next = value || (colorScheme === 'dark' ? 'light' : 'dark');
//         setColorScheme(next);
//     };

//     return (
//         <>
//             <ColorSchemeScript />
//             <MantineColorSchemeManager
//                 colorScheme={colorScheme}
//                 toggleColorScheme={toggleColorScheme}
//             >
//                 <MantineProvider
//                     theme={{ colorScheme }}
//                     withGlobalStyles
//                     withNormalizeCSS
//                 >
//                     {children}
//                 </MantineProvider>
//             </ColorSchemeProvider>
//         </>
//     );
// }
