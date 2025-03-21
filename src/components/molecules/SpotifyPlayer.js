'use client';

import { useEffect, useRef } from 'react';

export default function SpotifyPlayer({ spotifyUri }) {
    const embedRef = useRef(null);

    useEffect(() => {
        if (!spotifyUri || !embedRef.current) return;

        // ✅ Define the callback BEFORE loading the script
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            console.log('Spotify API Ready');
            IFrameAPI.createController(embedRef.current, { uri: spotifyUri }, () => {
                console.log('Spotify IFrame created');
            });
        };

        const existingScript = document.getElementById('spotify-iframe-api');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://open.spotify.com/embed-podcast/iframe-api/v1';
            script.async = true;
            script.id = 'spotify-iframe-api';
            document.body.appendChild(script);
        } else {
            // If script already exists and Spotify already called the callback, manually create controller
            if (window.spotifyApi) {
                window.spotifyApi.createController(embedRef.current, { uri: spotifyUri }, () => {
                    console.log('Spotify IFrame created (from cached API)');
                });
            }
        }

        return () => {
            // Optional cleanup — do not remove script if reused across app
        };
    }, [spotifyUri]);

    return (
        <div className="spotify-wrapper">
            <div ref={embedRef} id="spotify-embed" />
        </div>
    );
}