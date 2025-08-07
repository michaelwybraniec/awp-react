/**
 * Footer Component
 * Main application footer with links and information
 */

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t bg-background', className)}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='h-8 w-8 rounded-lg bg-primary flex items-center justify-center'>
                <span className='text-primary-foreground font-bold text-sm'>
                  A
                </span>
              </div>
              <span className='font-bold text-xl'>AWP React</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              Connecting labs and pharmaceutical companies for successful
              partnerships.
            </p>
          </div>

          {/* Platform */}
          <div className='space-y-4'>
            <h3 className='font-semibold'>Platform</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/labs'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Find Labs
                </Link>
              </li>
              <li>
                <Link
                  href='/pharmaceuticals'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Find Pharmaceuticals
                </Link>
              </li>
              <li>
                <Link
                  href='/proposals'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Proposals
                </Link>
              </li>
              <li>
                <Link
                  href='/dashboard'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className='space-y-4'>
            <h3 className='font-semibold'>Company</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/about'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className='space-y-4'>
            <h3 className='font-semibold'>Support</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/help'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href='/docs'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-sm text-muted-foreground'>
            © 2024 AWP React Platform. All rights reserved.
          </p>
          <div className='flex space-x-4 mt-4 sm:mt-0'>
            <Link
              href='/privacy'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              Privacy
            </Link>
            <Link
              href='/terms'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              Terms
            </Link>
            <Link
              href='/cookies'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
