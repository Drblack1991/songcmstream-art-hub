
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-songcm-background text-gray-300 pt-12 pb-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-songcm-primary text-2xl font-bold">
                SongCm<span className="text-songcm-secondary">Stream</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              La plateforme de streaming musical qui soutient les artistes et les connecte à leurs fans.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Pour les artistes */}
          <div>
            <h3 className="text-white font-semibold mb-4">Pour les Artistes</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/upload" className="hover:text-songcm-primary">Poster votre musique</Link></li>
              <li><Link to="/pro" className="hover:text-songcm-primary">Compte Pro</Link></li>
              <li><Link to="/resources" className="hover:text-songcm-primary">Ressources</Link></li>
              <li><Link to="/stats" className="hover:text-songcm-primary">Statistiques</Link></li>
            </ul>
          </div>
          
          {/* Pour les fans */}
          <div>
            <h3 className="text-white font-semibold mb-4">Pour les Fans</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explore" className="hover:text-songcm-primary">Explorer</Link></li>
              <li><Link to="/playlists" className="hover:text-songcm-primary">Playlists</Link></li>
              <li><Link to="/support" className="hover:text-songcm-primary">Soutenir les artistes</Link></li>
              <li><Link to="/download" className="hover:text-songcm-primary">Téléchargements</Link></li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">À propos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-songcm-primary">À propos de nous</Link></li>
              <li><Link to="/contact" className="hover:text-songcm-primary">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-songcm-primary">Conditions d'utilisation</Link></li>
              <li><Link to="/privacy" className="hover:text-songcm-primary">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500">
          <p>© 2025 SongCmStream.art. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
