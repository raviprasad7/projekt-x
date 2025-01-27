'use client';

import React from 'react';
import { cn } from '@@lib/utils';
import { ThemeToggle } from '@@components/ThemeToggle';
import Link from 'next/link';
import { UserMenu } from './UserMenu';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors duration-300"
        >
          Projekt X
        </Link>
        <div className="flex items-center">
          <div className="pr-4 border-r dark:border-gray-800">
            <UserMenu />
          </div>
          <div className="pl-4 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
