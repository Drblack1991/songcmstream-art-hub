
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrackCard from '@/components/TrackCard';
import ArtistCard from '@/components/ArtistCard';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';

// Données fictives pour les démos
const featuredTracks = [
  {
    id: '1',
    title: 'Nuit Africaine',
    artist: 'Manu Dibango',
    coverUrl: 'https://source.unsplash.com/random/300x300?concert,1',
    audioUrl: '#',
    plays: 154890
  },
  {
    id: '2',
    title: 'Lumiere',
    artist: 'Charlotte Dipanda',
    coverUrl: 'https://source.unsplash.com/random/300x300?concert,2',
    audioUrl: '#',
    plays: 89567
  },
  {
    id: '3',
    title: 'Cameroon Vibes',
    artist: 'Petit Pays',
    coverUrl: 'https://source.unsplash.com/random/300x300?concert,3',
    audioUrl: '#',
    plays: 67234
  },
  {
    id: '4',
    title: 'Douala Night',
    artist: 'Richard Bona',
    coverUrl: 'https://source.unsplash.com/random/300x300?concert,4',
    audioUrl: '#',
    plays: 123765
  },
];

const popularArtists = [
  {
    id: '1',
    name: 'Manu Dibango',
    imageUrl: 'https://source.unsplash.com/random/100x100?portrait,1',
    followers: 125890,
    tracks: 45
  },
  {
    id: '2',
    name: 'Charlotte Dipanda',
    imageUrl: 'https://source.unsplash.com/random/100x100?portrait,2',
    followers: 98765,
    tracks: 32
  },
  {
    id: '3',
    name: 'Richard Bona',
    imageUrl: 'https://source.unsplash.com/random/100x100?portrait,3',
    followers: 87543,
    tracks: 27
  },
  {
    id: '4',
    name: 'Stanley Enow',
    imageUrl: 'https://source.unsplash.com/random/100x100?portrait,4',
    followers: 76543,
    tracks: 18
  },
];

const newReleases = [
  {
    id: '5',
    title: 'Soleil de Minuit',
    artist: 'Locko',
    coverUrl: 'https://source.unsplash.com/random/300x300?concert,5',
    audioUrl: '#',
    plays: 23456
  },
  {
    id: '6',
    title: 'Coller la Petite',
    artist: 'Franko',
    coverUrl: 'https://source.unsplash.com/random/300x300?concert,6',
    audioUrl: '#',
    plays: 34567
  },
  {
    id: '7',
    title: 'African Soul',
    artist: 'Blick Bassy',
    coverUrl: 'https://source.unsplash.com/random/300x300?concert,7',
    audioUrl: '#',
    plays: 12345
  },
  {
    id: '8',
    title: 'Cameroon Pride',
    artist: 'Jovi',
    coverUrl: 'https://source.unsplash.com/random/300x300?concert,8',
    audioUrl: '#',
    plays: 45678
  },
];

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState<any>(null);

  const handlePlayTrack = (track: any) => {
    setCurrentTrack({
      ...track,
      audioUrl: "#" // Dans une vraie application, ce serait l'URL réelle du fichier audio
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pb-24"> {/* Add padding to bottom for music player */}
        <Hero />
        
        {/* Featured Tracks */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Titres en Vedette</h2>
              <Link to="/explore" className="text-songcm-primary hover:underline">
                Voir tout
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredTracks.map(track => (
                <TrackCard 
                  key={track.id} 
                  track={track} 
                  onPlay={() => handlePlayTrack(track)}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Artists */}
        <section className="py-12 px-6 bg-gray-900">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Artistes Populaires</h2>
              <Link to="/artists" className="text-songcm-primary hover:underline">
                Voir tout
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {popularArtists.map(artist => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          </div>
        </section>
        
        {/* New Releases */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Nouveautés</h2>
              <Link to="/new" className="text-songcm-primary hover:underline">
                Voir tout
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {newReleases.map(track => (
                <TrackCard 
                  key={track.id} 
                  track={track} 
                  onPlay={() => handlePlayTrack(track)}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Join CTA */}
        <section className="py-16 px-6 bg-songcm-primary/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Rejoignez SongCmStream Aujourd'hui
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Que vous soyez artiste ou fan, SongCmStream vous offre une plateforme pour partager, 
              découvrir et soutenir la musique que vous aimez.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <button className="btn-secondary text-lg py-3 px-8">
                  Créer un compte
                </button>
              </Link>
              <Link to="/login">
                <button className="btn-primary text-lg py-3 px-8">
                  Se connecter
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <MusicPlayer track={currentTrack} />
      <Footer />
    </div>
  );
};

export default Index;
