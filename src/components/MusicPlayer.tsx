
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Play, Pause, SkipBack, SkipForward, 
  Volume, VolumeX, Share, Download
} from 'lucide-react';

interface MusicPlayerProps {
  track?: {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
    audioUrl: string;
  }
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!track) return;
    
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setProgress((current / total) * 100);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    
    const newProgress = parseFloat(e.target.value);
    const newTime = (audioRef.current.duration / 100) * newProgress;
    
    audioRef.current.currentTime = newTime;
    setProgress(newProgress);
  };

  if (!track) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-songcm-background border-t border-gray-800 p-4">
        <div className="container mx-auto flex justify-center">
          <p className="text-gray-400">Sélectionnez un titre pour commencer l'écoute</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-songcm-background border-t border-gray-800 p-4 z-40">
      <div className="container mx-auto">
        <div className="flex items-center gap-4">
          <img 
            src={track.coverUrl || "/placeholder.svg"}
            alt={track.title}
            className="h-14 w-14 rounded object-cover"
          />
          
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <div>
                <h4 className="font-medium text-white">{track.title}</h4>
                <p className="text-sm text-gray-400">{track.artist}</p>
              </div>
              
              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Share className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="w-full">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress} 
                onChange={handleProgressChange}
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button 
                  onClick={togglePlay} 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-300 hover:text-white"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>
              
              <Button 
                onClick={toggleMute} 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:text-white"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <audio 
        ref={audioRef}
        src={track.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
    </div>
  );
};

export default MusicPlayer;
