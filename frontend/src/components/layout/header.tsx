import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/categories', label: 'Category' },
    { to: '/profile', label: 'Profile' },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <header className="max-w-[1950px] mx-auto px-4 md:px-40">
            <div className="flex h-15 md:h-32 items-center justify-between">
                <Link to="/" className="text-xl md:text-5xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
                    Food Recipe
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-lg font-semibold">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.to} to={link.to} className="text-slate-800 hover:text-amber-600 transition-colors">
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        to="/search"
                        aria-label="Search"
                        className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-full bg-slate-100 text-slate-800 hover:text-amber-600 transition-colors"
                    >
                        <FaSearch className="text-base" />
                    </Link>
                </nav>

                <div className="md:hidden flex items-center gap-4">
                    <Link to="/search" aria-label="Search" className="text-slate-900 text-lg p-1">
                        <FaSearch />
                    </Link>
                    <button type="button" aria-label="Open menu" onClick={() => setIsOpen((prev) => !prev)} className="text-slate-900 text-xl p-1">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className="md:hidden flex flex-col gap-4 pb-6 pt-2 text-sm font-semibold text-slate-800 border-t border-slate-100">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
