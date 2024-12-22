import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export function TeamMember({ name, role, bio, imageUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-48 h-48 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-blue-600 mb-4">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
}