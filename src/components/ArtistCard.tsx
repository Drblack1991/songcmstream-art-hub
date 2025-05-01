
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, MapPin, Music, Gift } from 'lucide-react';

interface ArtistCardProps {
  artist: {
    id: string;
    name: string;
    imageUrl?: string;
    followers: number;
    tracks: number;
    genre?: string;
    origin?: string;
  };
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const handleDonate = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêcher la navigation vers la page artiste
    // Logique pour le don à implémenter
    console.log(`Don pour l'artiste: ${artist.name}`);
    // Ici on pourrait ouvrir une modale de don ou rediriger vers une page de paiement
  };

  return (
    <Link to={`/artist/${artist.id}`} className="group">
      <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col items-center p-4 hover:bg-gray-700 transition-all duration-300">
        <div className="h-24 w-24 rounded-full overflow-hidden mb-4 border-2 border-songcm-primary transform transition-transform group-hover:scale-105">
          {artist.imageUrl ? (
            <img 
              src={artist.imageUrl} 
              alt={artist.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <User className="h-12 w-12 text-gray-400" />
            </div>
          )}
        </div>
        
        <h3 className="font-medium text-white text-center">{artist.name}</h3>
        
        <div className="flex flex-col items-center mt-2">
          <p className="text-sm text-gray-400">{artist.followers} fans</p>
          <p className="text-xs text-gray-500">{artist.tracks} titres</p>
          
          {/* Ajout des informations de genre et d'origine */}
          {artist.genre && (
            <div className="flex items-center mt-1">
              <Music className="h-3 w-3 text-songcm-secondary mr-1" />
              <p className="text-xs text-gray-400">{artist.genre}</p>
            </div>
          )}
          
          {artist.origin && (
            <div className="flex items-center mt-1">
              <MapPin className="h-3 w-3 text-songcm-secondary mr-1" />
              <p className="text-xs text-gray-400">{artist.origin}</p>
            </div>
          )}
        </div>
        
        <div className="mt-3 w-full space-y-2">
          <Button className="w-full bg-transparent border border-songcm-secondary hover:bg-songcm-secondary text-white">
            Suivre
          </Button>
          
          {/* Nouveau bouton de don */}
          <Button 
            onClick={handleDonate} 
            className="w-full bg-songcm-primary hover:bg-opacity-80 text-white flex items-center justify-center"
          >
            <Gift className="mr-1 h-4 w-4" />
            Faire un don
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
