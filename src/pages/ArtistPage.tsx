
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtistProfile from '@/components/ArtistProfile';
import { Skeleton } from '@/components/ui/skeleton';

const ArtistPage = () => {
  const { artistId } = useParams<{ artistId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [artist, setArtist] = useState<any>(null);

  useEffect(() => {
    // Simulation d'un chargement de données
    const loadArtist = async () => {
      setIsLoading(true);
      // Dans une vraie application, ceci serait un appel API
      // await fetch(`/api/artists/${artistId}`)
      
      // Pour la démonstration, on utilise des données fictives
      setTimeout(() => {
        setArtist({
          id: artistId,
          name: "Manu Dibango",
          bio: "Manu Dibango est un saxophoniste et vibraphoniste camerounais. Il est surtout connu pour son single 'Soul Makossa' sorti en 1972. Il est l'un des pionniers de l'afro-jazz et a contribué à populariser la musique africaine dans le monde entier.",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait,music",
          coverUrl: "https://source.unsplash.com/random/1200x400?concert,stage",
          followers: 125890,
          tracks: 45,
          genre: "Afro-Jazz",
          origin: "Cameroun",
          joinDate: "15 Mars 2023",
          socialLinks: {
            website: "https://example.com",
            instagram: "https://instagram.com",
            facebook: "https://facebook.com",
          },
          trackList: [
            {
              id: "t1",
              title: "Soul Makossa",
              coverUrl: "https://source.unsplash.com/random/300x300?album,1",
              plays: 1250000
            },
            {
              id: "t2",
              title: "Big Blow",
              coverUrl: "https://source.unsplash.com/random/300x300?album,2",
              plays: 820000
            },
            {
              id: "t3",
              title: "Africadelic",
              coverUrl: "https://source.unsplash.com/random/300x300?album,3",
              plays: 540000
            },
            {
              id: "t4",
              title: "New Bell",
              coverUrl: "https://source.unsplash.com/random/300x300?album,4",
              plays: 375000
            },
            {
              id: "t5",
              title: "Douala By Night",
              coverUrl: "https://source.unsplash.com/random/300x300?album,5",
              plays: 295000
            },
            {
              id: "t6",
              title: "African Voodoo",
              coverUrl: "https://source.unsplash.com/random/300x300?album,6",
              plays: 188000
            }
          ]
        });
        setIsLoading(false);
      }, 1500);
    };

    if (artistId) {
      loadArtist();
    }
  }, [artistId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-6">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="space-y-6">
              {/* Skeleton loader pour le profil */}
              <div className="w-full h-60 rounded-lg overflow-hidden">
                <Skeleton className="w-full h-full" />
              </div>
              <div className="flex gap-6">
                <Skeleton className="h-32 w-32 rounded-full" />
                <div className="flex-1 space-y-4">
                  <Skeleton className="h-8 w-1/4" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
            </div>
          ) : (
            artist && <ArtistProfile artist={artist} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtistPage;
