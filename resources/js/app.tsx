import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ComponentType, ReactNode } from 'react';
import AdminLayout from './layouts/AdminLayout';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        const pages = import.meta.glob<{
            default: ComponentType & { layout?: (page: ReactNode) => ReactNode };
        }>('./pages/**/*.tsx');

        const pageModule = await resolvePageComponent(`./pages/${name}.tsx`, pages);
        const Page = pageModule.default;

        const routeName = name.toLowerCase();
        const isAdminPage = routeName.startsWith('admin/');
        const isException = ['admin/auth/login', 'admin/auth/resetpassword', 'admin/auth/register'].includes(routeName);

        if (isAdminPage && !isException) {
            Page.layout ??= (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
        }

        return Page;
    },

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
