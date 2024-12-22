import React from 'react';
import { TeamMember } from '../components/about/TeamMember';
import { teamMembers } from '../components/about/teamData';
import { Award, Users, Heart } from 'lucide-react';
import img from '../assets/image.png'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Sanjay K. Sharma & Associates</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are dedicated to providing exceptional legal services with compassion,
            integrity, and a commitment to achieving the best possible outcomes for our clients.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to delivering the highest quality legal services.</p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
            <p className="text-gray-600">Your needs and goals are our top priority.</p>
          </div>
          <div className="text-center p-6">
            <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p className="text-gray-600">Understanding and empathy in every interaction.</p>
          </div>
        </div>

        {/* Team Section */}
        <section className="py-10 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              {/* Left Content */}
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Sanjay K. Sharma
                  </h2>
                  <p className="text-gray-700 text-base font-normal leading-relaxed lg:text-start text-center">
                  I, Sanjay K. Sharma, bring decades of expertise and a steadfast commitment to empowering individuals and families. I strive to provide solutions that deliver clarity, security, and a brighter future for every client I serve."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {/* Box 1: Experience */}
                  <div className="flex flex-col bg- p-6 rounded-xl shadow-lg items-center text-center">
                    <h3 className="text-gray-900 text-2xl font-bold">10+ Years</h3>
                    <p className="text-gray-700 text-base font-normal">Legal Experience</p>
                  </div>

                  {/* Box 2: Achievements */}
                  <div className="flex flex-col bg- p-6 rounded-xl shadow-lg items-center text-center">
                    <h3 className="text-gray-900 text-2xl font-bold">500+ Cases</h3>
                    <p className="text-gray-700 text-base font-normal">Successfully Resolved</p>
                  </div>

                  {/* Box 3: Clients */}
                  <div className="flex flex-col bg- p-6 rounded-xl shadow-lg items-center text-center">
                    <h3 className="text-gray-900 text-2xl font-bold">1,000+ Clients</h3>
                    <p className="text-gray-700 text-base font-normal">Satisfied Customers</p>
                  </div>

                  {/* Box 4: Recognition */}
                  <div className="flex flex-col bg- p-6 rounded-xl shadow-lg items-center text-center">
                    <h3 className="text-gray-900 text-2xl font-bold">Award-Winning</h3>
                    <p className="text-gray-700 text-base font-normal">Legal Team</p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col gap-6">
                <img
                  className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                  src={img}
                  alt="About Us"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}