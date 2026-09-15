import type { Property } from '../components/PropertyDetailModal'

import samanaExterior from '../imports/image-7.png'
import samanaBedroom  from '../imports/image-8.png'
import samanaPool     from '../imports/image-9.png'
import samanaAmenity  from '../imports/image-10.png'
import aurestaHero    from '../imports/image-11.png'
import aurestaImg2    from '../imports/image-12.png'
import aurestaImg3    from '../imports/image-13.png'
import aurestaImg4    from '../imports/image-14.png'
import aurestaImg5    from '../imports/image-15.png'
import sunsetHero     from '../imports/image-16.png'
import sunsetImg2     from '../imports/image-17.png'
import sunsetImg3     from '../imports/image-18.png'
import sunsetImg4     from '../imports/image-19.png'
import symphonyHero   from '../imports/image-20.png'
import symphonyImg2   from '../imports/image-21.png'
import symphonyImg3   from '../imports/image-22.png'
import symphonyImg4   from '../imports/image-23.png'
import austinHero     from '../imports/image-24.png'
import austinImg2     from '../imports/image-25.png'
import austinImg3     from '../imports/image-26.png'
import austinImg4     from '../imports/image-27.png'
import tigerSkyHero   from '../imports/image-28.png'
import tigerSkyImg2   from '../imports/image-29.png'
import tigerSkyImg3   from '../imports/image-30.png'
import serenzHero     from '../imports/image-31.png'
import serenzImg2     from '../imports/image-32.png'
import serenzImg3     from '../imports/image-33.png'
import serenzImg4     from '../imports/image-34.png'
import serenzImg5     from '../imports/image-35.png'
import serenzImg6     from '../imports/image-36.png'
import biancaHero     from '../imports/image-37.png'
import biancaImg2     from '../imports/image-38.png'
import biancaImg3     from '../imports/image-39.png'
import biancaImg4     from '../imports/image-40.png'
import biancaImg5     from '../imports/image-41.png'
import biancaImg6     from '../imports/image-42.png'
import portofinoHero  from '../imports/image-43.png'
import portofinoImg2  from '../imports/image-44.png'
import portofinoImg3  from '../imports/image-45.png'
import portofinoImg4  from '../imports/image-46.png'
import enreHero       from '../imports/image-47.png'
import enreImg2       from '../imports/image-48.png'
import enreImg3       from '../imports/image-49.png'
import enreImg4       from '../imports/image-50.png'
import enreImg5       from '../imports/image-51.png'
import enreImg6       from '../imports/image-52.png'
import enreImg7       from '../imports/image-53.png'
import timezHero      from '../imports/image-54.png'
import timezImg2      from '../imports/image-55.png'
import timezImg3      from '../imports/image-56.png'
import timezImg4      from '../imports/image-57.png'
import timezImg5      from '../imports/image-58.png'
import greenzHero     from '../imports/image-59.png'
import greenzImg2     from '../imports/image-60.png'
import greenzImg3     from '../imports/image-61.png'
import greenzImg4     from '../imports/image-62.png'
import mbLiving   from '../imports/image-1.png'
import mbInterior from '../imports/image-2.png'
import mbBath     from '../imports/image-3.png'
import mbPool     from '../imports/image-4.png'
import mbSpa      from '../imports/image-5.png'
import mbBedroom  from '../imports/image-6.png'

export const defaultProperties: Property[] = [
  {
    id: 1,
    name: 'SAMANA South Haven',
    location: 'Dubai South',
    type: 'Apartment',
    bedrooms: 1,
    unitTypes: 'Studio / 1BR',
    area: '450 – 680 sq ft',
    price: '₹1.56 Cr',
    priceAED: 'From AED 599K',
    rentalYield: 8.4,
    appreciation: 7.8,
    developer: 'SAMANA Developers',
    completion: 'Q3 2027',
    tag: 'ENTRY',
    tagCol: '#4A7C59',
    tier: 'Entry / Value',
    standout: "Lower entry point in Dubai South — the Al Maktoum Airport growth corridor — with SAMANA's signature private-pool studios and flexible 1% monthly payment plan.",
    description: "SAMANA South Haven sits at the heart of Dubai South, the emirate's fastest-growing master-planned district anchored by Al Maktoum International Airport (set to become the world's largest). Designed with resort-inspired architecture, the development offers private-pool studios and 1BR apartments at one of the most accessible price points in Dubai.",
    image: samanaExterior,
    gallery: [samanaPool, samanaBedroom, samanaAmenity],
    zone: 'Dubai South',
    views: 2143,
    floors: 22,
    totalUnits: 298,
    minDeposit: '₹10L (AED 40K)',
    handoverQuarter: 'Q3 2027',
    amenities: ["Private Pool Studios", "Rooftop Infinity Pool", "Gym & Fitness Centre", "Padel Court", "Children's Play Area", "Retail Promenade", "Smart Home Automation", "Covered Parking", "24/7 Security", "Concierge Service"],
    paymentPlan: [
      { milestone: 'Booking', pct: 10 },
      { milestone: 'During Construction (1% / month)', pct: 60 },
      { milestone: 'On Handover (Q3 2027)', pct: 30 },
    ],
  },
  {
    id: 2,
    name: 'Auresta Tower',
    location: 'Jumeirah Village Circle',
    type: 'Apartment',
    bedrooms: 1,
    unitTypes: 'Studio / 1BR',
    area: '480 – 750 sq ft',
    price: '₹2.22 Cr',
    priceAED: '~AED 850K',
    rentalYield: 9.1,
    appreciation: 7.2,
    developer: 'Tiger Properties',
    completion: 'Q2 2027',
    tag: 'HIGH YIELD',
    tagCol: '#22A861',
    tier: 'Entry / Value',
    standout: "JVC delivers Dubai's consistently highest studio rental yields (9–10%). Tiger Properties brings a credible track record, and Auresta's price point keeps entry under ₹2.5 Cr.",
    description: "Auresta Tower by Tiger Properties occupies a premium corner in Jumeirah Village Circle — one of Dubai's most liquid rental markets. JVC's central location, proximity to Sheikh Mohammed Bin Zayed Road, and proven rental demand from young professionals and couples make it a natural choice for yield-focused investors.",
    image: aurestaHero,
    gallery: [aurestaImg2, aurestaImg3, aurestaImg4, aurestaImg5, austinHero, austinImg2, austinImg3, austinImg4],
    zone: 'JVC',
    views: 1876,
    floors: 28,
    totalUnits: 212,
    minDeposit: '₹10L (AED 40K)',
    handoverQuarter: 'Q2 2027',
    amenities: ["Rooftop Pool & Terrace", "Fully Equipped Gym", "Co-working Lounge", "Kids' Pool", "BBQ Area", "Multipurpose Hall", "Smart Access System", "EV Charging Points", "24/7 Concierge", "Retail on Ground Floor"],
    paymentPlan: [
      { milestone: 'Booking', pct: 20 },
      { milestone: 'During Construction', pct: 40 },
      { milestone: 'On Handover (Q2 2027)', pct: 40 },
    ],
  },
  {
    id: 3,
    name: 'Serenz',
    location: 'Jumeirah Village Circle',
    type: 'Apartment',
    bedrooms: 1,
    unitTypes: 'Studio / 1BR / 2BR',
    area: '500 – 1,100 sq ft',
    price: '₹2.87 Cr',
    priceAED: '~AED 1.10M',
    rentalYield: 8.8,
    appreciation: 7.5,
    developer: 'Danube Properties',
    completion: 'Q4 2027',
    tag: 'OFF-PLAN',
    tagCol: '#9B59B6',
    tier: 'Entry / Value',
    standout: "Danube's brand carries genuine resale premium in Dubai — Serenz in JVC combines that developer credibility with flexible 1% payment plan and a strong yield story.",
    description: "Danube Properties has established itself as Dubai's most prolific off-plan developer, with a consistent track record of on-time delivery. Serenz continues that legacy in JVC with a thoughtfully designed residential tower offering studios through 2BRs.",
    image: serenzHero,
    gallery: [serenzImg2, serenzImg3, serenzImg4, serenzImg5, serenzImg6],
    zone: 'JVC',
    views: 1654,
    floors: 25,
    totalUnits: 340,
    minDeposit: '₹10L (AED 40K)',
    handoverQuarter: 'Q4 2027',
    amenities: ["Temperature-Controlled Pool", "Yoga Deck", "Jogging Track", "Sports Court", "Kids' Play Zone", "Business Centre", "Supermarket Access", "Valet Parking", "Smart Home System", "Community Gardens"],
    paymentPlan: [
      { milestone: 'Booking', pct: 10 },
      { milestone: 'During Construction (1% / month)', pct: 65 },
      { milestone: 'On Handover (Q4 2027)', pct: 25 },
    ],
  },
  {
    id: 4,
    name: 'Bianca',
    location: 'Dubailand',
    type: 'Townhouse',
    bedrooms: 2,
    unitTypes: '2BR Townhouse',
    area: '1,450 – 1,800 sq ft',
    price: '₹3.47 Cr',
    priceAED: '~AED 1.33M',
    rentalYield: 7.9,
    appreciation: 9.4,
    developer: 'Reportage Properties',
    completion: 'Q1 2028',
    tag: 'TOWNHOUSE',
    tagCol: '#3A72A8',
    tier: 'Mid-Range',
    standout: "A rare townhouse format at mid-range pricing — offering more physical space and land component than any apartment at this ticket, with strong family rental demand.",
    description: "Bianca by Reportage Properties offers 2-bedroom townhouses in Dubailand — a vast master-planned community with schools, malls, and leisure facilities already operational.",
    image: biancaHero,
    gallery: [biancaImg2, biancaImg3, biancaImg4, biancaImg5, biancaImg6],
    zone: 'Dubailand',
    views: 1423,
    floors: 3,
    totalUnits: 186,
    minDeposit: '₹15L (AED 60K)',
    handoverQuarter: 'Q1 2028',
    amenities: ["Private Garden", "Community Pool", "Landscaped Parks", "Barbecue Terrace", "Community Gym", "Children's Playground", "Covered Parking (2 spots)", "Jogging & Cycling Track", "Mosque Within Community", "Security Gatehouse"],
    paymentPlan: [
      { milestone: 'Booking', pct: 10 },
      { milestone: 'Q3 2025 – Q3 2026', pct: 30 },
      { milestone: 'Q4 2026 – Q3 2027', pct: 30 },
      { milestone: 'On Handover (Q1 2028)', pct: 30 },
    ],
  },
  {
    id: 5,
    name: 'TIMEZ',
    location: 'Dubai Silicon Oasis',
    type: 'Apartment',
    bedrooms: 2,
    unitTypes: '1BR / 2BR',
    area: '900 – 1,350 sq ft',
    price: '₹4.30 Cr',
    priceAED: '~AED 1.65M',
    rentalYield: 8.2,
    appreciation: 8.6,
    developer: 'Danube Properties',
    completion: 'Q3 2027',
    tag: 'MID-RANGE',
    tagCol: '#3A72A8',
    tier: 'Mid-Range',
    standout: "Dubai Silicon Oasis's tech-hub tenant base drives consistent rental demand; Danube's delivery track record and 1% payment plan make TIMEZ an accessible mid-range play.",
    description: "TIMEZ by Danube Properties is positioned in Dubai Silicon Oasis — home to 1,000+ tech companies and a growing white-collar residential community.",
    image: timezHero,
    gallery: [timezImg2, timezImg3, timezImg4, timezImg5],
    zone: 'Silicon Oasis',
    views: 1198,
    floors: 30,
    totalUnits: 264,
    minDeposit: '₹15L (AED 60K)',
    handoverQuarter: 'Q3 2027',
    amenities: ["Infinity Edge Pool", "State-of-the-Art Gym", "Sauna & Steam Room", "Co-working Hub", "Retail Podium", "Kids' Area", "Pet-Friendly Zone", "EV Charging", "Smart Home Ready", "Shuttle to Metro"],
    paymentPlan: [
      { milestone: 'Booking', pct: 10 },
      { milestone: 'During Construction (1% / month)', pct: 65 },
      { milestone: 'On Handover (Q3 2027)', pct: 25 },
    ],
  },
  {
    id: 6,
    name: 'Enre Residence',
    location: 'Dubai South',
    type: 'Apartment',
    bedrooms: 2,
    unitTypes: '2BR',
    area: '1,200 – 1,550 sq ft',
    price: '₹4.92 Cr',
    priceAED: '~AED 1.89M',
    rentalYield: 8.5,
    appreciation: 9.8,
    developer: 'Imtiaz Developments',
    completion: 'Q2 2027',
    tag: 'NEW',
    tagCol: '#2A7AE8',
    tier: 'Mid-Range',
    standout: "Imtiaz brings premium design sensibility to Dubai South at mid-range pricing — a differentiated product in a growth corridor.",
    description: "Enre Residence by Imtiaz Developments delivers hotel-grade finishes, generous room proportions, and curated communal spaces at a price that still qualifies as mid-range.",
    image: enreHero,
    gallery: [enreImg2, enreImg3, enreImg4, enreImg5, enreImg6, enreImg7],
    zone: 'Dubai South',
    views: 1341,
    floors: 18,
    totalUnits: 148,
    minDeposit: '₹15L (AED 60K)',
    handoverQuarter: 'Q2 2027',
    amenities: ["Sky Lounge", "Rooftop Pool", "Outdoor Cinema", "Yoga Pavilion", "Residents' Gym", "Smart Home System", "Ground-Floor Retail", "Covered Parking", "Shuttle to Expo City", "24/7 Concierge"],
    paymentPlan: [
      { milestone: 'Booking', pct: 20 },
      { milestone: 'During Construction', pct: 40 },
      { milestone: 'On Handover (Q2 2027)', pct: 40 },
    ],
  },
  {
    id: 7,
    name: 'Sunset Bay Grand',
    location: 'Dubai Islands',
    type: 'Apartment',
    bedrooms: 2,
    unitTypes: '1BR / 2BR / 3BR Duplex',
    area: '900 – 2,800 sq ft',
    price: '₹6.10 Cr',
    priceAED: '~AED 2.34M',
    rentalYield: 8.1,
    appreciation: 11.2,
    developer: 'Imtiaz Developments',
    completion: 'Q3 2027',
    tag: 'WATERFRONT',
    tagCol: '#7B5EA7',
    tier: 'Premium',
    standout: "Waterfront Dubai Islands address with direct sea access, near-term 2027 handover, and exceptional 3BR duplex format.",
    description: "Sunset Bay Grand occupies a prime frontage on Dubai Islands — the five-island archipelago that is transforming the northern Dubai coastline.",
    image: sunsetHero,
    gallery: [sunsetImg2, sunsetImg3, sunsetImg4],
    zone: 'Dubai Islands',
    views: 2089,
    floors: 20,
    totalUnits: 196,
    minDeposit: '₹20L (AED 80K)',
    handoverQuarter: 'Q3 2027',
    amenities: ["Private Beach Access", "Infinity Pool Overlooking Sea", "Marina & Yacht Berths", "Water Sports Facility", "Rooftop Sky Bar", "Wellness Spa", "Residents' Beach Club", "Fine Dining Restaurant", "Smart Home with Automation", "Valet & Concierge"],
    paymentPlan: [
      { milestone: 'Booking', pct: 20 },
      { milestone: 'During Construction (6 instalments)', pct: 40 },
      { milestone: 'On Handover (Q3 2027)', pct: 40 },
    ],
  },
  {
    id: 8,
    name: 'Tiger Sky Tower',
    location: 'Business Bay',
    type: 'Apartment',
    bedrooms: 1,
    unitTypes: '1BR / 2BR / 3BR+',
    area: '780 – 2,400 sq ft',
    price: '₹8.26 Cr',
    priceAED: '~AED 3.17M',
    rentalYield: 7.8,
    appreciation: 10.5,
    developer: 'Tiger Properties',
    completion: 'Q4 2027',
    tag: 'PREMIUM',
    tagCol: '#C9A44A',
    tier: 'Premium',
    standout: "Business Bay's most prominent address — iconic architecture, central Dubai location, and the strongest capital appreciation runway.",
    description: "Tiger Sky Tower redefines Business Bay's skyline with a bold architectural statement and premium residential offering. Located steps from the Dubai Canal, Burj Khalifa views are available from mid-floors upward.",
    image: tigerSkyHero,
    gallery: [tigerSkyImg2, tigerSkyImg3],
    zone: 'Business Bay',
    views: 1867,
    floors: 52,
    totalUnits: 412,
    minDeposit: '₹20L (AED 80K)',
    handoverQuarter: 'Q4 2027',
    amenities: ["Sky Infinity Pool (42nd Floor)", "Panoramic Gym", "Private Cinema", "Business Lounge & Co-working", "Rooftop Helipad Lobby", "Canal-View Terrace", "Cigar Lounge", "Kids' Adventure Zone", "Smart Building Management", "Valet Concierge"],
    paymentPlan: [
      { milestone: 'Booking', pct: 20 },
      { milestone: 'During Construction (4 instalments)', pct: 40 },
      { milestone: 'On Handover (Q4 2027)', pct: 40 },
    ],
  },
  {
    id: 9,
    name: 'Greenz',
    location: 'Academic City',
    type: 'Apartment',
    bedrooms: 3,
    unitTypes: '3BR Family',
    area: '1,800 – 2,400 sq ft',
    price: '₹9.56 Cr',
    priceAED: '~AED 3.67M',
    rentalYield: 7.5,
    appreciation: 9.9,
    developer: 'Danube Properties',
    completion: 'Q1 2028',
    tag: 'FAMILY',
    tagCol: '#22A861',
    tier: 'Premium',
    standout: "Largest-format family apartments at premium pricing in an underserved corridor — Academic City's 50,000-student catchment provides a captive, long-term rental pool.",
    description: "Greenz by Danube Properties is positioned in Academic City, home to 25+ international university campuses and a rapidly growing permanent residential population.",
    image: greenzHero,
    gallery: [greenzImg2, greenzImg3, greenzImg4],
    zone: 'Academic City',
    views: 1102,
    floors: 35,
    totalUnits: 228,
    minDeposit: '₹20L (AED 80K)',
    handoverQuarter: 'Q1 2028',
    amenities: ["Olympic-Length Pool", "Tennis & Padel Courts", "Fully Equipped Gym", "Outdoor Cinema", "Barbecue Areas", "Children's Water Play", "Running Track (600m)", "Community Garden Plots", "Retail Village", "On-site Nursery"],
    paymentPlan: [
      { milestone: 'Booking', pct: 10 },
      { milestone: 'During Construction (1% / month)', pct: 65 },
      { milestone: 'On Handover (Q1 2028)', pct: 25 },
    ],
  },
  {
    id: 10,
    name: 'Portofino Felicita',
    location: 'Europe Island, The World Islands',
    type: 'Resort Residence',
    bedrooms: 2,
    unitTypes: 'Sea-View Resort Units',
    area: '1,200 – 2,000 sq ft',
    price: '₹13.6 – 14.3 Cr',
    priceAED: 'AED 5.22M – 5.49M',
    rentalYield: 7.2,
    appreciation: 13.5,
    developer: 'The Heart of Europe',
    completion: 'Q2 2027',
    tag: 'RESORT',
    tagCol: '#C9A44A',
    tier: 'Luxury',
    standout: "A one-of-a-kind investment: a resort-style sea-view residence on a man-made island with zero-percent income tax and scarcity that no mainland project can replicate.",
    description: "Portofino Felicita is part of The Heart of Europe — an extraordinary archipelago of man-made islands recreating European architecture on the sea.",
    image: portofinoHero,
    gallery: [portofinoImg2, portofinoImg3, portofinoImg4],
    zone: 'Dubai Islands',
    views: 2341,
    floors: 5,
    totalUnits: 120,
    minDeposit: '₹25L (AED 1 Lakh)',
    handoverQuarter: 'Q2 2027',
    amenities: ["Private Island Beach", "Marina & Water Taxis", "Italian Piazza & Cafés", "Resort Pool Complex", "Underwater Themed Hotel Access", "Managed Rental Programme", "Fine Dining (European Cuisine)", "Exclusive Residents' Yacht Club", "Helipad Access", "Concierge & Butler Service"],
    paymentPlan: [
      { milestone: 'Booking', pct: 20 },
      { milestone: 'During Construction (3 instalments)', pct: 30 },
      { milestone: 'On Handover (Q2 2027)', pct: 50 },
    ],
  },
  {
    id: 11,
    name: 'Mercedes-Benz Places',
    location: 'Downtown Dubai',
    type: 'Branded Residence',
    bedrooms: 2,
    unitTypes: 'Branded Luxury Residences',
    area: '1,500 – 4,000 sq ft',
    price: '₹13.03 Cr+',
    priceAED: 'AED 5M+ / POR',
    rentalYield: 6.8,
    appreciation: 14.2,
    developer: 'Binghatti Developers',
    completion: 'Q4 2027',
    tag: 'BRANDED',
    tagCol: '#C9A44A',
    tier: 'Luxury',
    standout: "The only Mercedes-Benz co-branded residential tower in the world — a globally unique collector's asset with Burj Khalifa views.",
    description: "Mercedes-Benz Places by Binghatti is the world's first Mercedes-Benz branded residential tower — a singular collaboration between one of the world's most recognised luxury brands and Dubai's most design-forward developer.",
    image: mbLiving,
    gallery: [mbPool, mbInterior, mbBath, mbSpa, mbBedroom],
    zone: 'Downtown',
    views: 3214,
    floors: 65,
    totalUnits: 150,
    minDeposit: '₹30L (AED 1.2 Lakh)',
    handoverQuarter: 'Q4 2027',
    amenities: ["Mercedes-AMG Fitness Lab", "Infinity Sky Pool (55th Fl)", "Private Owners' Lounge", "Chauffeur & Fleet Services", "Formula 1 Simulator", "Concierge Butler Programme", "Private Art Gallery", "Cigar & Whiskey Room", "Smart Building AI", "Valet & Branded Parking"],
    paymentPlan: [
      { milestone: 'Booking', pct: 20 },
      { milestone: 'During Construction (4 instalments)', pct: 30 },
      { milestone: 'On Handover (Q4 2027)', pct: 50 },
    ],
  },
  {
    id: 12,
    name: 'The Symphony',
    location: 'Meydan Horizon',
    type: 'Ultra Luxury',
    bedrooms: 4,
    unitTypes: '4BR / 5BR Residences',
    area: '3,200 – 6,500 sq ft',
    price: '₹18.95 Cr',
    priceAED: '~AED 7.27M',
    rentalYield: 6.5,
    appreciation: 15.1,
    developer: 'Imtiaz Developments',
    completion: 'Q1 2028',
    tag: 'ULTRA LUX',
    tagCol: '#C9A44A',
    tier: 'Luxury',
    standout: "Design-led ultra-luxury residences in Meydan — Dubai's most prestigious off-Downtown address — with racecourse views and large-format layouts.",
    description: "The Symphony by Imtiaz Developments is the crown jewel of the Meydan Horizon masterplan — a collection of 4 and 5-bedroom ultra-luxury residences set against the backdrop of the Meydan Racecourse.",
    image: symphonyHero,
    gallery: [symphonyImg2, symphonyImg3, symphonyImg4],
    zone: 'Meydan',
    views: 1987,
    floors: 40,
    totalUnits: 88,
    minDeposit: '₹35L (AED 1.4 Lakh)',
    handoverQuarter: 'Q1 2028',
    amenities: ["Grand Ballroom & Event Space", "Olympic Pool & Lap Lane", "Private Spa Suites", "Racecourse-View Terrace", "Home Theatre Rooms", "Personal Storage Vaults", "Five-Star Concierge Team", "Private Dining by Chef", "Helipad & VIP Drop-Off", "Smart Estate Management"],
    paymentPlan: [
      { milestone: 'Booking', pct: 20 },
      { milestone: 'During Construction (3 instalments)', pct: 30 },
      { milestone: 'On Handover (Q1 2028)', pct: 50 },
    ],
  },
]

const STORAGE_KEY = 'parva_properties'

export type StoredProperty = Omit<Property, 'image' | 'gallery'> & {
  image: string
  gallery: string[]
}

function toStored(p: Property): StoredProperty {
  return { ...p, image: p.image as string, gallery: (p.gallery as string[]) }
}

export function getProperties(): Property[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProperties
    const stored: StoredProperty[] = JSON.parse(raw)
    // Merge: for stored properties, resolve local image references
    return stored.map(sp => {
      const def = defaultProperties.find(d => d.id === sp.id)
      return {
        ...sp,
        // If image is a blob/http URL keep it; if it matches a default image path use the imported module
        image: sp.image.startsWith('http') || sp.image.startsWith('blob') ? sp.image : (def?.image ?? sp.image),
        gallery: sp.gallery.map((g, i) => {
          if (g.startsWith('http') || g.startsWith('blob')) return g
          return def?.gallery?.[i] ?? g
        }),
      } as Property
    })
  } catch {
    return defaultProperties
  }
}

export function saveProperties(props: Property[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(props.map(toStored)))
}

export function resetProperties(): void {
  localStorage.removeItem(STORAGE_KEY)
}

// ─── Admin User Types ───────────────────────────────────────────────────────
export interface AdminUser {
  email: string
  name: string
  password: string
  role: 'super-admin' | 'admin'
}

export interface ActivityEntry {
  email: string
  name: string
  action: 'Added' | 'Updated' | 'Deleted'
  propertyName: string
  timestamp: string
}

// ─── Default admin accounts (pre-seeded) ───────────────────────────────────
const DEFAULT_ADMINS: AdminUser[] = [
  { email: 'chaitra@parvarealty.ae',  name: 'Chaitra',  password: 'Chaitra@2026',  role: 'super-admin' },
  { email: 'nagesh@parvarealty.ae',   name: 'Nagesh',   password: 'Nagesh@2026',   role: 'admin' },
  { email: 'sushma@diagofinance.com', name: 'Sushma',   password: 'Sushma@2026',   role: 'admin' },
]

const ADMINS_KEY      = 'parva_admins'
const ADMIN_KEY       = 'parva_admin_session'
const ACTIVITY_KEY    = 'parva_activity_log'

// ─── Admin list management ──────────────────────────────────────────────────
export function getAdmins(): AdminUser[] {
  try {
    const raw = localStorage.getItem(ADMINS_KEY)
    return raw ? (JSON.parse(raw) as AdminUser[]) : DEFAULT_ADMINS
  } catch {
    return DEFAULT_ADMINS
  }
}

export function saveAdmins(admins: AdminUser[]): void {
  localStorage.setItem(ADMINS_KEY, JSON.stringify(admins))
}

// ─── Auth ───────────────────────────────────────────────────────────────────
export function adminLogin(email: string, password: string): boolean {
  const admins = getAdmins()
  const user = admins.find(
    a => a.email.toLowerCase() === email.toLowerCase().trim() && a.password === password
  )
  if (user) {
    sessionStorage.setItem(ADMIN_KEY, JSON.stringify({ email: user.email, name: user.name, role: user.role }))
    return true
  }
  return false
}

export function adminLogout(): void {
  sessionStorage.removeItem(ADMIN_KEY)
}

export function isAdminLoggedIn(): boolean {
  return !!sessionStorage.getItem(ADMIN_KEY)
}

export function getAdminSession(): { email: string; name: string; role: 'super-admin' | 'admin' } | null {
  try {
    const raw = sessionStorage.getItem(ADMIN_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

// ─── Activity Log ───────────────────────────────────────────────────────────
export function getActivityLog(): ActivityEntry[] {
  try {
    const raw = localStorage.getItem(ACTIVITY_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function logActivity(action: ActivityEntry['action'], propertyName: string): void {
  const session = getAdminSession()
  if (!session) return
  const entry: ActivityEntry = {
    email: session.email,
    name: session.name,
    action,
    propertyName,
    timestamp: new Date().toISOString(),
  }
  const log = getActivityLog()
  log.unshift(entry)
  // Keep last 200 entries
  localStorage.setItem(ACTIVITY_KEY, JSON.stringify(log.slice(0, 200)))
}
