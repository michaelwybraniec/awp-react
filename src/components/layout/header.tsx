/**
 * Header Component
 * Main application header with navigation and user menu
 */

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='h-8 w-8 rounded-lg bg-primary flex items-center justify-center'>
                <span className='text-primary-foreground font-bold text-sm'>
                  A
                </span>
              </div>
              <span className='font-bold text-xl'>AWP React</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            <Link
              href='/dashboard'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Dashboard
            </Link>
            <Link
              href='/labs'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Labs
            </Link>
            <Link
              href='/pharmaceuticals'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Pharmaceuticals
            </Link>
            <Link
              href='/proposals'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Proposals
            </Link>
          </nav>

          {/* User Menu */}
          <div className='flex items-center space-x-4'>
            <button className='text-sm font-medium transition-colors hover:text-primary'>
              Sign In
            </button>
            <button className='bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
