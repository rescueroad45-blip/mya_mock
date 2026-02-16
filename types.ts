import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'Wedding' | 'Corporate' | 'Concert' | 'Private' | 'Portrait' | 'Government/NGO' | 'Product Launch' | 'Events';
  date: string;
  coverImage: string;
  images: string[];
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  priceStart?: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}