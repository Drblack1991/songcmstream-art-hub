
import React from 'react';
import { Play, Heart, Download, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';

interface TrackCardProps {
  track: {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
    plays: number;
  };
  onPlay: () => void;
}

const TrackCard: React.FC<TrackCardProps> = ({ track, onPlay }) => {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden group">
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
          <div className="bg-songcm-primary rounded-full p-3">
            <Play className="h-8 w-8 text-white" />
          </div>
        </button>
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium text-white truncate">{track.title}</h3>
        <p className="text-sm text-gray-400 truncate">{track.artist}</p>
        
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500">{track.plays.toLocaleString()} écoutes</span>
          
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart className="h-4 w-4 text-gray-400" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Download className="h-4 w-4 text-gray-400" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackCard;
