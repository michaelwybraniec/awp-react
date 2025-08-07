/**
 * Main Layout Component
 * Main application layout with header, content area, and footer
 */

import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function MainLayout({
  children,
  className,
  showHeader = true,
  showFooter = true,
}: MainLayoutProps) {
  return (
    <div className='min-h-screen flex flex-col'>
      {showHeader && <Header />}

      <main className={cn('flex-1', className)}>{children}</main>

      {showFooter && <Footer />}
    </div>
  );
}
