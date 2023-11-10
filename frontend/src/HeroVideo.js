import React from 'react';
import video from './styles/videos/hero-intro-video.mp4'; // import the video here

function HeroVideo() {
    return (
        <section className="hero-video">
            <video className="video-bg" autoplay="true" loop="true" muted src={video} type="video/mp4">
            </video>
            <h1>Your Heading Here</h1>
        </section>
    );
}

export default HeroVideo;