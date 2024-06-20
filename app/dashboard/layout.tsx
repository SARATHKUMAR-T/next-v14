import React from 'react'
import GeneralBreadcrumb from '../ui/generalBreadCrumb'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "dashboard",
    description: "Dynamic ui",
};

function Layout({ children }: { children: React.ReactNode }) {
    const list = ["dashboard", "user", "settings"]
    return (
        <main className='min-h-screen bg-slate-200'>
            <GeneralBreadcrumb list={list} />
            <div className='bg-slate-300'>
                {children}
            </div>
        </main>
    )
}

export default Layout