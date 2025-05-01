
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

interface ArtistCardProps {
  artist: {
    id: string;
    name: string;
    imageUrl?: string;
    followers: number;
    tracks: number;
  };
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.id}`} className="group">
      <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col items-center p-4 hover:bg-gray-700 transition">
        <div className="h-24 w-24 rounded-full overflow-hidden mb-4 border-2 border-songcm-primary">
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
        </div>
        
        <Button className="mt-3 w-full bg-transparent border border-songcm-secondary hover:bg-songcm-secondary text-white">
          Suivre
        </Button>
      </div>
    </Link>
  );
};

export default ArtistCard;
