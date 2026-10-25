import React from 'react';
import Banner from '../components/Banner';
import RecentWork from '../components/RecentWork';
import BehindPixels from '../components/BehindPixels';
import Services from '../components/Services';
import WorkRecent from '../components/WorkRecent';
import BackgroundAchievements from '../components/BackgroundAchievements';
import ClientsFeedback from '../components/ClientsFeedback';
import RecentBlog from '../components/RecentBlog';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="w-full bg-black">
            <section id="home">
                <Banner />
            </section>

            <section id="works">
                <RecentWork />
            </section>

            <section id="about">
                <BehindPixels />
            </section>

            <section id="services">
                <Services />
            </section>

            <section id="resume">
                <WorkRecent />
            </section>

            <section id="skills">
                <BackgroundAchievements />
            </section>

            <section id="testimonials">
                <ClientsFeedback />
            </section>

            <section id="blog">
                <RecentBlog />
            </section>

            <section id="contact">
                <Footer />
            </section>
        </div>
    );
};

export default Home;