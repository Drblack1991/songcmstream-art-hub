
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, User, Music, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-songcm-background border-b border-gray-800 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-songcm-primary text-2xl font-bold">
            SongCm<span className="text-songcm-secondary">Stream</span>
          </span>
        </Link>
        
        <div className="hidden md:flex relative max-w-md w-full mx-4">
          <input 
            type="text"
            placeholder="Rechercher des artistes, des chansons..."
            className="w-full bg-gray-800 rounded-full py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-songcm-primary"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Music className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Link to="/login">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/upload" className="hidden sm:block">
            <Button className="bg-songcm-secondary hover:bg-opacity-90">
              Poster votre musique
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
