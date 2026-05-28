import {
  Briefcase,
  Building2,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  PartyPopper,
  School,
  Trophy
} from "lucide-react";

// EDIT BUSINESS INFO: Replace placeholders with the real Cheesedogs NC details.
export const business = {
  name: "Cheesedogs NC",
  url: "https://www.cheesedogsnc.com",
  phone: "919-798-1319",
  email: "cheesedogsofnc@gmail.com",
  instagram: "https://www.instagram.com/cheesedogs.nc/",
  facebook: "https://www.facebook.com/profile.php?id=61579955609117",
  serviceArea:
    "Raleigh, Durham, Cary, Apex, Holly Springs, Fuquay-Varina, Garner, Chapel Hill, Wake Forest, and surrounding Triangle NC communities"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/locations", label: "Schedule" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const serviceAreas = [
  "Raleigh",
  "Durham",
  "Cary",
  "Apex",
  "Holly Springs",
  "Fuquay-Varina",
  "Garner",
  "Chapel Hill",
  "Wake Forest"
];

// EDIT MENU: Update here when Cheesedogs changes menu items, prices, combos, or toppings.
export const menuSections = [
  {
    title: "Hot Dogs",
    items: [
      { name: "Classic Dog", description: "Ketchup, mustard, and relish.", price: "Single $3.50 / Double $6" },
      { name: "Ry Guy Dog", description: "Mustard, onions, slaw, and chili.", price: "Single $4 / Double $7" },
      { name: "The Cheesedog", description: "Chili and cheese sauce.", price: "Single $4 / Double $7" },
      { name: "Buffalo Dog", description: "Buffalo sauce, ranch, cheese, and slaw.", price: "Single $4 / Double $7" },
      { name: "The German Heatwave", description: "Mustard, sauerkraut, onions, and jalapenos.", price: "Single $4 / Double $7" },
      { name: "The Cheeto Dog", description: "Hot Cheeto dust, chili, cheese sauce, and jalapenos.", price: "Single $4 / Double $7" }
    ]
  },
  {
    title: "Single Dogs",
    items: [
      { name: "Regular Dog", description: "A single regular hot dog.", price: "$3.50" },
      { name: "Gourmet Dog", description: "A single specialty dog from the Cheesedogs menu.", price: "$4" }
    ]
  },
  {
    title: "Double Dogs",
    items: [
      { name: "Regular Dog", description: "Two regular hot dogs.", price: "$6" },
      { name: "Gourmet Dog", description: "Two specialty dogs from the Cheesedogs menu.", price: "$7" }
    ]
  },
  {
    title: "Combos",
    items: [
      { name: "Classic Combo", description: "Regular dog, chips, and drink.", price: "$6" },
      { name: "Deluxe Combo", description: "Gourmet dog, chips, and drink.", price: "$7" },
      { name: "Double Dog Combo", description: "Two regular dogs, chips, and drink.", price: "$8" }
    ]
  },
  {
    title: "Toppings",
    items: [
      { name: "Ketchup", description: "Classic topping.", price: "Included" },
      { name: "Mustard", description: "Classic topping.", price: "Included" },
      { name: "Mayo", description: "Creamy topping.", price: "Included" },
      { name: "Chili Sauce", description: "Savory chili topping.", price: "Included" },
      { name: "Sauerkraut", description: "Tangy topping.", price: "Included" },
      { name: "Onions", description: "Chopped onions.", price: "Included" },
      { name: "Cheese Sauce", description: "Warm cheese sauce.", price: "Included" },
      { name: "Relish", description: "Sweet relish.", price: "Included" },
      { name: "Buffalo Sauce", description: "Spicy buffalo sauce.", price: "Included" },
      { name: "Hot Cheeto Dust", description: "Crunchy spicy dust.", price: "Included" },
      { name: "Ranch", description: "Cool ranch sauce.", price: "Included" },
      { name: "Coleslaw", description: "Creamy slaw.", price: "Included" },
      { name: "Jalapeno Slices", description: "Spicy jalapeno slices.", price: "Included" },
      { name: "Extra Toppings", description: "Max 4 toppings. Additional toppings are $0.50 each.", price: "$0.50" }
    ]
  }
];

export const perfectFor = [
  { title: "Weddings", icon: Heart },
  { title: "Neighborhoods", icon: Home },
  { title: "Corporate Events", icon: Briefcase },
  { title: "School Events", icon: School },
  { title: "Breweries", icon: Building2 },
  { title: "Private Parties", icon: PartyPopper },
  { title: "Sports Events", icon: Trophy },
  { title: "Grand Openings", icon: GraduationCap }
];

// EDIT SCHEDULE: Keep upcoming stops current for customers and local SEO.
export const schedule = [
  {
    date: "June 7",
    title: "Apex Neighborhood Night",
    location: "Apex, NC",
    time: "5:00 PM - 8:00 PM",
    note: "Loaded dogs, chips, and cold drinks."
  },
  {
    date: "June 14",
    title: "Raleigh Brewery Pop-Up",
    location: "Raleigh, NC",
    time: "12:00 PM - 4:00 PM",
    note: "Follow socials for the exact taproom announcement."
  },
  {
    date: "June 22",
    title: "Cary Community Pool Lunch",
    location: "Cary, NC",
    time: "11:30 AM - 2:30 PM",
    note: "Family-friendly menu and quick service."
  },
  {
    date: "Booking Now",
    title: "Private Events Across the Triangle",
    location: "Triangle NC",
    time: "Weekdays and weekends",
    note: "Reserve the cart for your wedding, school, office, neighborhood, or party."
  }
];

export const packages = [
  {
    name: "Weddings",
    description: "A fun late-night snack, post-reception treat, rehearsal dinner cart, or after-party bite guests will remember.",
    details: ["Late-night snack service", "Rehearsal dinner friendly", "Guest-pay or host-pay options"]
  },
  {
    name: "Private Event",
    description: "A simple, crowd-pleasing setup for birthdays, graduations, sports teams, and backyard parties.",
    details: ["Reserved service window", "Unique topping plan", "Chips and drinks available"]
  },
  {
    name: "Corporate Catering",
    description: "A polished hot dog catering option for offices, job sites, grand openings, and team lunches.",
    details: ["Invoice-friendly quote", "Efficient guest flow", "Menu built for dietary needs"]
  }
];

export const featuredMenu = [
  { title: "Ry Guy Dog", text: "Mustard, onions, slaw, chili, and a loyal following.", tags: ["Mustard", "Onions", "Slaw", "Chili"] },
  { title: "The Cheeto Dog", text: "Hot Cheeto dust, chili, cheese sauce, and jalapenos.", tags: ["Cheeto Dust", "Chili", "Cheese", "Jalapenos"] },
  { title: "Buffalo Dog", text: "Buffalo sauce, ranch, cheese, and slaw with a little kick.", tags: ["Buffalo", "Ranch", "Cheese", "Slaw"] }
];

export const testimonials = [
  {
    quote: "Everyone is still talking about it. Super friendly service, quick setup, and unbelievable cheesy dogs.",
    name: "Peyton C."
  },
  {
    quote: "The dogs are loaded, unique, and insanely good every single time.",
    name: "Giuseppe B."
  },
  {
    quote: "Guests loved the unique, fun vibe and the food was amazing.",
    name: "Tyler C."
  }
];

export const schemaArea = serviceAreas.map((city) => ({
  "@type": "City",
  name: `${city}, NC`
}));

export const MapIcon = MapPin;
