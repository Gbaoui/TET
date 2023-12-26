/*
    File: About.jsx
    Author: Ed Park
    Copyright: 2023 - Ed Park https://edpark.space
    Version: 1.0
*/

import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";

export default function About() {
    return (
        <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
            <h1 className="text-center max-w-[18em]">About Me</h1>
            <img className="w-[300px] profile-border" src="/assets/images/people.png" alt="Profile of Ed Park" />
            <p className="text-justify">
            Enthusiastic and passionate about web development, I am a full stack developer specialized in the MERN Stack, with particular expertise in agile methodology and a proactive approach to solving problems. My versatility is reflected in a solid experience, ranging from the initial design to the maintenance phases, for the creation of websites and applications. My commitment to continuous learning pushes me to approach development challenges in an innovative way. Convinced that my dynamism and my curiosity will be assets within your team, I am ready to take up stimulating challenges. I am ready to contribute significantly to innovative projects.
            </p>
        </section>
    );
}