
import React, { useState } from 'react';
import { User, MapPin, Calendar, Music, Link as LinkIcon, Instagram, Facebook, Gift, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TrackCard from './TrackCard';

interface ArtistProfileProps {
  artist: {
    id: string;
    name: string;
    bio?: string;
    imageUrl?: string;
    coverUrl?: string;
    followers: number;
    tracks: number;
    genre?: string;
    origin?: string;
    joinDate?: string;
    socialLinks?: {
      website?: string;
      instagram?: string;
      facebook?: string;
      tiktok?: string;
    };
    trackList?: Array<{
      id: string;
      title: string;
      coverUrl: string;
      plays: number;
    }>;
  };
}

const ArtistProfile: React.FC<ArtistProfileProps> = ({ artist }) => {
  const [following, setFollowing] = useState(false);
  const [currentTab, setCurrentTab] = useState('tracks');

  const handleFollow = () => {
    setFollowing(!following);
    console.log(`${following ? 'Unfollow' : 'Follow'} artist: ${artist.name}`);
  };

  const handleDonate = () => {
    console.log(`Donate to artist: ${artist.name}`);
    // Implémenter la logique de don ici
  };

  const handlePlay = (trackId: string) => {
    console.log(`Play track: ${trackId}`);
    // Implémenter la logique de lecture
  };

  return (
    <div className="flex flex-col w-full">
      {/* Section bannière */}
      <div className="w-full h-60 relative rounded-lg overflow-hidden">
        <img 
          src={artist.coverUrl || "https://source.unsplash.com/random/1200x400?concert"} 
          alt={`${artist.name} banner`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      {/* Section profil */}
      <div className="flex flex-col md:flex-row gap-6 -mt-16 px-6 relative z-10">
        {/* Photo de profil */}
        <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-songcm-primary bg-gray-800">
          {artist.imageUrl ? (
            <img 
              src={artist.imageUrl} 
              alt={artist.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User className="h-16 w-16 text-gray-400" />
            </div>
          )}
        </div>

        {/* Informations de l'artiste */}
        <div className="flex-1 mt-4 md:mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">{artist.name}</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {artist.genre && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Music className="h-3 w-3" /> {artist.genre}
                  </Badge>
                )}
                {artist.origin && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {artist.origin}
                  </Badge>
                )}
                {artist.joinDate && (
                  <Badge variant="outline" className="flex items-center gap-1 text-gray-400">
                    <Calendar className="h-3 w-3" /> Rejoint {artist.joinDate}
                  </Badge>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button 
                onClick={handleFollow}
                variant={following ? "default" : "outline"}
                className={following ? "bg-songcm-primary hover:bg-songcm-primary/90" : ""}
              >
                {following ? "Abonné" : "Suivre"} <Users className="ml-1 h-4 w-4" />
              </Button>
              <Button 
                onClick={handleDonate}
                className="bg-gradient-to-r from-songcm-primary to-songcm-secondary hover:opacity-90"
              >
                <Gift className="mr-1 h-4 w-4" /> Faire un don
              </Button>
            </div>
          </div>

          {/* Bio et statistiques */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <p className="text-gray-300">{artist.bio || "Aucune biographie disponible."}</p>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <div className="flex gap-4 items-center">
                <div className="text-center">
                  <p className="text-xl font-bold text-songcm-primary">{artist.followers.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">Abonnés</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-songcm-secondary">{artist.tracks}</p>
                  <p className="text-xs text-gray-400">Titres</p>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              {artist.socialLinks && (
                <div className="flex gap-2 mt-2">
                  {artist.socialLinks.website && (
                    <a href={artist.socialLinks.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                      <LinkIcon className="h-4 w-4 text-gray-300" />
                    </a>
                  )}
                  {artist.socialLinks.instagram && (
                    <a href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                      <Instagram className="h-4 w-4 text-gray-300" />
                    </a>
                  )}
                  {artist.socialLinks.facebook && (
                    <a href={artist.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                      <Facebook className="h-4 w-4 text-gray-300" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs pour le contenu */}
      <div className="mt-8 px-6">
        <Tabs defaultValue="tracks" onValueChange={setCurrentTab} value={currentTab}>
          <TabsList className="w-full max-w-md mx-auto">
            <TabsTrigger value="tracks" className="flex-1">Titres</TabsTrigger>
            <TabsTrigger value="videos" className="flex-1">Vidéos</TabsTrigger>
            <TabsTrigger value="about" className="flex-1">À propos</TabsTrigger>
            <TabsTrigger value="comments" className="flex-1">Commentaires</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tracks" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {artist.trackList && artist.trackList.length > 0 ? (
                artist.trackList.map(track => (
                  <TrackCard
                    key={track.id}
                    track={{
                      ...track,
                      artist: artist.name,
                      artistId: artist.id,
                      genre: artist.genre,
                    }}
                    onPlay={() => handlePlay(track.id)}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-400">Aucun titre disponible pour cet artiste.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center">
                    <p className="text-gray-500">Contenu vidéo à venir</p>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-white">Teaser vidéo</h4>
                    <p className="text-sm text-gray-400">30 secondes</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="about">
            <Card className="bg-gray-800 border-gray-700 mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-white mb-4">Biographie</h3>
                <p className="text-gray-300">{artist.bio || "Aucune biographie disponible pour cet artiste."}</p>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Informations</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-songcm-secondary" />
                        <span className="text-gray-300">{artist.origin || "Non spécifié"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Music className="h-4 w-4 text-songcm-secondary" />
                        <span className="text-gray-300">{artist.genre || "Non spécifié"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-songcm-secondary" />
                        <span className="text-gray-300">Actif depuis {artist.joinDate || "non spécifié"}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Réseaux sociaux</h4>
                    <ul className="space-y-2">
                      {artist.socialLinks?.website && (
                        <li>
                          <a href={artist.socialLinks.website} target="_blank" rel="noopener noreferrer" 
                             className="flex items-center gap-2 text-gray-300 hover:text-songcm-primary">
                            <LinkIcon className="h-4 w-4" />
                            <span>Site web officiel</span>
                          </a>
                        </li>
                      )}
                      {artist.socialLinks?.instagram && (
                        <li>
                          <a href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                             className="flex items-center gap-2 text-gray-300 hover:text-songcm-primary">
                            <Instagram className="h-4 w-4" />
                            <span>Instagram</span>
                          </a>
                        </li>
                      )}
                      {artist.socialLinks?.facebook && (
                        <li>
                          <a href={artist.socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                             className="flex items-center gap-2 text-gray-300 hover:text-songcm-primary">
                            <Facebook className="h-4 w-4" />
                            <span>Facebook</span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="comments">
            <Card className="bg-gray-800 border-gray-700 mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-white mb-4">Commentaires</h3>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-400">Espace de discussion à venir...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ArtistProfile;
