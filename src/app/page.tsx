"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import HorizontalStorySlider from "@/components/HorizentalStorySlider";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ContactModal } from "@/components/modals/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <section id="hero" className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to FrameProd
        </h1>
        <p className="text-xl mb-8">
          Elevating Your Vision Through Audio-Visual Excellence
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Explore Our Work
        </Button>
      </section>

      <section id="stories" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Explore Our Work
        </h2>
        <HorizontalStorySlider />
      </section>

      <section id="services" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Video Production", "Audio Engineering", "Live Event Support"].map(
            (service) => (
              <div key={service} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-300">
                  Professional {service.toLowerCase()} tailored to your needs.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <FeaturedProject />

      <section id="about" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">About FrameProd</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          FrameProd is a leading audio-visual company dedicated to bringing your
          creative visions to life. With our team of experienced professionals
          and state-of-the-art equipment, we deliver exceptional results for
          every project.
        </p>
      </section>

      <section id="contact" className="text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">
          Ready to start your next project? Contact us today!
        </p>
        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white"
          onClick={() => setIsContactModalOpen(true)}
        >
          Contact Us
        </Button>
      </section>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
