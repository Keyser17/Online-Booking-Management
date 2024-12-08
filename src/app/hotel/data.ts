// hotel/[hotelId]/data.ts
// Types pour clarifier la structure des données
interface Address {
  postalCode: string;
  street: string;
  locality: string;
  region: string;
  country: string;
}

interface Rating {
  value: number;
  count: number;
  bestRating: number;
}

interface Price {
  current: number;
  old?: number;
  currency: string;
  per: string; // ex: "night"
}

interface Host {
  name: string;
  avatar: string;
  superHost: boolean;
}

interface Features {
  guests: number;
  beds: number;
  baths: number;
  bedrooms: number;
}

interface Image {
  src: string;
  alt: string;
}

interface Review {
  id: string;
  avatar: string;
  name: string;
  date: string;
  content: string;
}

interface Room {
  id: string;
  name: string;
  description: string;
  price: Price;
  features: Features;
  gallery: Image[];
}

interface Hotel {
  id: string;
  country: string;
  region: string;
  city: string;
  category: string;
  title: string;
  name: string;
  rating: Rating;
  price: Price;
  address: Address;
  description: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  host: Host;
  amenities: string[];
  features: Features;
  gallery: {
    general: Image[];
    [key: string]: Image[];
  };
  reviews: Review[];
  image: string;
  mapLink: string;
  url: string;
  rooms: Room[]; // Liste des chambres associées
}

// Exemple de données
const hotels: Hotel[] = [
  {
    id: "1",
    country: "Thailand",
    region: "Phuket",
    city: "Patong",
    category: "Hotel",
    title: "Zenseana Resort & Spa - SHA Plus",
    name: "Zenseana Resort & Spa - SHA Plus",
    rating: {
      value: 7.8,
      count: 2552,
      bestRating: 10,
    },
    price: {
      current: 350,
      currency: "USD",
      per: "night",
    },
    address: {
      postalCode: "83150",
      street: "147 Prabaramee Road, Patong, Kathu",
      locality: "Patong Beach",
      region: "Phuket",
      country: "Thailand",
    },
    description: "A luxurious resort in the heart of Patong Beach.",
    location: "Phuket, Thailand",
    coordinates: {
      lat: 7.880448,
      lng: 98.39225,
    },
    host: {
      name: "Zenseana Resort & Spa - SHA Plus",
      avatar: "/path-to-avatar.png",
      superHost: true,
    },
    amenities: ["Free WiFi", "Outdoor pool", "Parking", "Air conditioning"],
    features: {
      guests: 100,
      beds: 50,
      baths: 25,
      bedrooms: 50,
    },
    gallery: {
      general: [
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Main Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/2.jpg", alt: "Secondary Image" },
      ],
    },
    reviews: [
      {
        id: "1",
        avatar: "/path-to-avatar.png",
        name: "Lina",
        date: "May 2021",
        content: "Amazing service and location!",
      },
    ],
    image: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg",
    mapLink: "https://maps.google.com",
    url: "https://booking.com",
    rooms: [
      {
        id: "101",
        name: "Deluxe Room",
        description: "A spacious room with sea view.",
        price: {
          current: 120,
          currency: "USD",
          per: "night",
        },
        features: {
          guests: 2,
          beds: 1,
          baths: 1,
          bedrooms: 1,
        },
        gallery: [
          { src: "https://example.com/room1.jpg", alt: "Room 1" },
          { src: "https://example.com/room2.jpg", alt: "Room 2" },
        ],
      },
      {
        id: "102",
        name: "Family Suite",
        description: "Perfect for families, with extra space and amenities.",
        price: {
          current: 200,
          currency: "USD",
          per: "night",
        },
        features: {
          guests: 4,
          beds: 2,
          baths: 2,
          bedrooms: 2,
        },
        gallery: [
          { src: "https://example.com/family1.jpg", alt: "Family Room 1" },
          { src: "https://example.com/family2.jpg", alt: "Family Room 2" },
        ],
      },
    ],
  },
];

export const getHotelDataById = (id: string): Hotel | undefined => {
  return hotels.find((hotel) => hotel.id === id);
};

export const getRoomDataById = (hotelId: string, roomId: string): Room | undefined => {
  const hotel = getHotelDataById(hotelId);
  return hotel?.rooms.find((room) => room.id === roomId);
};
