import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { FloatingCta } from './FloatingCta';

export const Layout: React.FC = () => {
    return (
        <div className="app-layout">
            <Header />
            <main className="main-content">
                <Outlet />
                <Footer />
            </main>
            <FloatingCta />
        </div>
    );
};
