
import React from 'react';
import { Play, Heart, Download, Share, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface TrackCardProps {
  track: {
    id: string;
    title: string;
    artist: string;
    artistId?: string;
    coverUrl: string;
    plays: number;
    genre?: string;
  };
  onPlay: () => void;
}

const TrackCard: React.FC<TrackCardProps> = ({ track, onPlay }) => {
  const { toast } = useToast();

  const handleDonate = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Faire un don",
      description: `Vous allez faire un don à ${track.artist} pour "${track.title}"`,
    });
    console.log(`Don pour le titre: ${track.title} par ${track.artist}`);
    // Logique pour rediriger vers la page de don
  };
  
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Afficher des options de partage (Facebook, Instagram, TikTok)
    toast({
      title: "Partager",
      description: "Partagez ce titre sur les réseaux sociaux",
    });
  };

  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:shadow-lg hover:shadow-songcm-primary/20 transition-all duration-300">
      <div className="relative">
        <img 
          src={track.coverUrl || "/placeholder.svg"}
          alt={track.title}
          className="w-full aspect-square object-cover group-hover:opacity-80 transition-opacity"
        />
        <button 
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="bg-songcm-primary rounded-full p-3 transform transition-transform hover:scale-110">
            <Play className="h-8 w-8 text-white" />
          </div>
        </button>
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium text-white truncate">{track.title}</h3>
        <p className="text-sm text-gray-400 truncate">{track.artist}</p>
        
        {track.genre && (
          <p className="text-xs text-songcm-secondary mt-1">{track.genre}</p>
        )}
        
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500">{track.plays.toLocaleString()} écoutes</span>
          
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart className="h-4 w-4 text-gray-400 hover:text-songcm-secondary" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Download className="h-4 w-4 text-gray-400 hover:text-songcm-secondary" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleShare}>
              <Share className="h-4 w-4 text-gray-400 hover:text-songcm-secondary" />
            </Button>
          </div>
        </div>
        
        {/* Bouton de don */}
        <Button 
          onClick={handleDonate}
          className="mt-2 w-full bg-gradient-to-r from-songcm-primary to-songcm-secondary text-white hover:opacity-90 flex items-center justify-center gap-2"
          size="sm"
        >
          <Gift className="h-4 w-4" /> Soutenir l'artiste
        </Button>
      </CardContent>
    </Card>
  );
};

export default TrackCard;
