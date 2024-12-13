'use client';
import "../globals.css";
import Head from "next/head";
import Sidebar from '../components/sidebar';
import AccountDropdown from '../components/account-dropdown';


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <main>
            <div className='flex flex-col lg:flex-row'>
                <Sidebar />
                <div className='flex-1 flex flex-col p-5 lg:p-8'>
                    <div className='hidden lg:block self-end' >
                        <AccountDropdown />
                    </div>
                    <div className='mt-4 lg:mt-0' >
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
