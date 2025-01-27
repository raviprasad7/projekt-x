'use client';

import React from 'react';
import { cn } from 'projekt-x/lib/utils';
import { ThemeToggle } from 'projekt-x/components/ThemeToggle';
import Link from 'next/link';

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
        <div className="border-l pl-4 dark:border-gray-800">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
