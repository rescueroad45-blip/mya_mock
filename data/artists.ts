export interface Artist {
  id: string;
  name: string;
  role: string;
  image: string;
  coverImage: string;
  bio: string;
  socials: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    twitter?: string;
  };
  works: {
    title: string;
    role: string;
    year: string;
    image: string;
  }[];
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "Sok Visal",
    role: "Director & Producer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
    bio: "Sok Visal is a visionary director and producer with over 15 years of experience in the Cambodian film industry. Known for his unique storytelling and visual style, he has helmed some of the country's biggest blockbusters.",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#"
    },
    works: [
      {
        title: "The Last Guardian",
        role: "Director",
        year: "2024",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "City of Ghosts",
        role: "Producer",
        year: "2023",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "2",
    name: "Dara Rith",
    role: "Lead Actor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2000&auto=format&fit=crop",
    bio: "Dara Rith is an award-winning actor celebrated for his versatility and intense performances. From action-packed thrillers to emotional dramas, he brings depth to every character he portrays.",
    socials: {
      facebook: "#",
      instagram: "#",
      tiktok: "#"
    },
    works: [
      {
        title: "Broken Vows",
        role: "Main Actor",
        year: "2024",
        image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "The Heist",
        role: "Supporting Actor",
        year: "2022",
        image: "https://images.unsplash.com/photo-1559583109-3e79eb81b618?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "3",
    name: "Bopha Devi",
    role: "Actress & Model",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2000&auto=format&fit=crop",
    bio: "Bopha Devi is a rising star in the entertainment world. Her natural charisma and dedication to her craft have quickly made her a fan favorite in TV series and feature films.",
    socials: {
      instagram: "#",
      tiktok: "#"
    },
    works: [
      {
        title: "Summer Love",
        role: "Lead Actress",
        year: "2023",
        image: "https://images.unsplash.com/photo-1523207918174-66f6f7476395?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "4",
    name: "Vireak Chey",
    role: "Cinematographer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
    bio: "With a keen eye for composition and lighting, Vireak Chey transforms scripts into visual masterpieces. His work has been recognized at international film festivals.",
    socials: {
      facebook: "#",
      instagram: "#"
    },
    works: [
      {
        title: "Night in Phnom Penh",
        role: "DOP",
        year: "2024",
        image: "https://images.unsplash.com/photo-1517604931442-71053e3e2c28?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "5",
    name: "Srey Mom",
    role: "Screenwriter",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2000&auto=format&fit=crop",
    bio: "Srey Mom weaves intricate narratives that capture the heart of Cambodian culture. Her scripts are known for their emotional depth and authentic dialogue.",
    socials: {
      facebook: "#",
      twitter: "#"
    },
    works: [
      {
        title: "The Rice Field",
        role: "Writer",
        year: "2023",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "6",
    name: "Piseth Pilika",
    role: "Costume Designer",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop",
    bio: "Piseth brings characters to life through fabric and color. Her costume designs range from historical epics to modern urban chic, always enhancing the visual storytelling.",
    socials: {
      instagram: "#",
      tiktok: "#"
    },
    works: [
      {
        title: "Royal Blood",
        role: "Costume Designer",
        year: "2022",
        image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "7",
    name: "Rithy Panh",
    role: "Executive Producer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=2000&auto=format&fit=crop",
    bio: "A veteran of the industry, Rithy ensures that every production meets the highest standards of quality. His leadership has guided numerous projects to commercial and critical success.",
    socials: {
      facebook: "#",
      twitter: "#"
    },
    works: [
      {
        title: "Empire of Angkor",
        role: "Executive Producer",
        year: "2024",
        image: "https://images.unsplash.com/photo-1565060169194-196e927284b4?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "8",
    name: "Kanya Soun",
    role: "Makeup Artist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2000&auto=format&fit=crop",
    bio: "Kanya is a master of transformation. From subtle natural looks to terrifying special effects makeup, her artistry is essential to creating believable characters.",
    socials: {
      instagram: "#",
      tiktok: "#"
    },
    works: [
      {
        title: "Zombie Run",
        role: "SFX Makeup",
        year: "2023",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "9",
    name: "Chann Thy",
    role: "Sound Engineer",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop",
    bio: "Chann Thy creates immersive audio landscapes that pull audiences into the film. His expertise in sound design and mixing is unmatched in the local industry.",
    socials: {
      facebook: "#",
      youtube: "#"
    },
    works: [
      {
        title: "Silence of the Forest",
        role: "Sound Design",
        year: "2024",
        image: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "10",
    name: "Sophea Duch",
    role: "Film Editor",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1574717432722-a03306358bd2?q=80&w=2000&auto=format&fit=crop",
    bio: "Sophea has a rhythm for storytelling. Her precise editing shapes the narrative flow, pacing, and emotional impact of every scene she touches.",
    socials: {
      instagram: "#",
      twitter: "#"
    },
    works: [
      {
        title: "Fast Lane",
        role: "Editor",
        year: "2023",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "11",
    name: "Veasna So",
    role: "Stunt Coordinator",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2000&auto=format&fit=crop",
    bio: "Veasna ensures safety while delivering high-octane action. With a background in martial arts, he choreographs thrilling fight scenes and daring stunts.",
    socials: {
      facebook: "#",
      tiktok: "#"
    },
    works: [
      {
        title: "The Fighter",
        role: "Stunt Coordinator",
        year: "2022",
        image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "12",
    name: "Leakena Meas",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop",
    bio: "Leakena creates the visual world of the film. From set design to props, her attention to detail builds convincing environments for the story to unfold.",
    socials: {
      instagram: "#",
      facebook: "#"
    },
    works: [
      {
        title: "Vintage Dreams",
        role: "Art Director",
        year: "2024",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "13",
    name: "Sambath Kim",
    role: "VFX Supervisor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    bio: "Sambath bridges the gap between reality and imagination. His VFX team creates stunning digital effects that enhance the cinematic experience.",
    socials: {
      youtube: "#",
      twitter: "#"
    },
    works: [
      {
        title: "Space Odyssey KH",
        role: "VFX Supervisor",
        year: "2025",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "14",
    name: "Nary Chan",
    role: "Casting Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
    bio: "Nary has an instinct for talent. She finds the perfect actors for every role, discovering new stars and assembling powerful ensembles.",
    socials: {
      facebook: "#",
      instagram: "#"
    },
    works: [
      {
        title: "New Generation",
        role: "Casting",
        year: "2023",
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "15",
    name: "Vannak Oum",
    role: "Gaffer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2000&auto=format&fit=crop",
    bio: "Vannak controls the light. Working closely with the cinematographer, he executes complex lighting setups that define the mood and look of the film.",
    socials: {
      facebook: "#"
    },
    works: [
      {
        title: "Shadows",
        role: "Gaffer",
        year: "2024",
        image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=800&auto=format&fit=crop"
      }
    ]
  }
];
