# Design Guidelines: Canine Aqua Park - PawSplash

## Design Approach

**Selected Approach:** Reference-Based with E-commerce/Hospitality Inspiration

Drawing from industry leaders in experience-based bookings and pet services:
- **Airbnb/Booking.com** - Service booking flow and visual card layouts
- **Rover/Wag** - Pet service presentation and trust-building elements
- **Shopify Stores** - Clean product/service catalog organization

**Core Principle:** Create an emotional connection through joyful imagery of dogs enjoying water activities while maintaining professional service booking functionality.

---

## Typography System

**Primary Font:** Poppins (Google Fonts) - Modern, friendly, highly readable
- Headlines (H1): 3xl to 5xl, font-semibold to font-bold
- Subheadlines (H2): 2xl to 3xl, font-semibold
- Section Titles (H3): xl to 2xl, font-medium
- Body Text: base to lg, font-normal
- Small Text/Labels: sm, font-medium

**Secondary Font:** Inter (Google Fonts) - For UI elements, forms, data
- Navigation: base, font-medium
- Buttons: sm to base, font-semibold
- Form Labels: sm, font-medium
- Price Tags: lg to xl, font-bold

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component internal padding: p-4, p-6, p-8
- Section padding: py-16 md:py-20 lg:py-24
- Card spacing: gap-6 to gap-8
- Element margins: mb-2, mb-4, mb-8

**Container Strategy:**
- Full-width sections: w-full with max-w-7xl mx-auto px-4
- Content sections: max-w-6xl mx-auto
- Reading content: max-w-prose

---

## Page Structure & Layouts

### Homepage

**Hero Section (90vh):**
- Full-bleed hero image showcasing dogs playing in water features
- Centered overlay content with backdrop-blur on button containers
- Large headline (text-4xl md:text-5xl lg:text-6xl)
- Primary CTA: "Reserve Your Pup's Day" + Secondary: "View Services"
- Trust indicator banner: "Trusted by 2,000+ Happy Dogs & Owners"

**Services Showcase (3-column grid lg:, 2-column md:, 1-column base):**
- Large service cards with image, title, price, quick description
- Categories: Day Pass, Grooming Packages, Spa Treatments, Birthday Parties
- Icon + Title + Image + Price + Short Description + "Book Now" CTA
- Hover elevation effect on cards

**Why Choose Us (4-column grid lg:, 2-column md:):**
- Icon-led feature highlights
- Safety certified, Professional staff, Premium facilities, Flexible scheduling
- Icons from Heroicons (solid variant)

**Featured Adoptable Dogs (Carousel with 3 visible cards):**
- Large dog photos, name, breed, age, personality snippet
- "Meet [Name]" CTA buttons
- Carousel navigation dots below

**Upcoming Events (2-column grid lg:, 1-column base):**
- Event cards with date badge, title, description, capacity indicator
- "Register Now" CTAs
- Maximum 4 events shown, "View All Events" link

**Testimonials (3-column grid lg:, 1-column md:):**
- Owner photo, dog name, rating stars, quote, owner name
- Authentic, warm presentation

**Location Preview:**
- Split layout: Map integration (50%) + Contact info card (50%)
- Operating hours, address, phone, email
- "Get Directions" CTA

**Footer (4-column grid lg:, 2-column md:):**
- Column 1: Logo + tagline
- Column 2: Quick Links (Services, Adoption, Events, Contact)
- Column 3: Contact info + Social media icons
- Column 4: Newsletter signup form
- Bottom bar: Copyright, Privacy Policy, Terms

### Services Page

**Page Header:**
- Medium hero (60vh) with dogs in grooming/spa setting
- Breadcrumb navigation
- Page title + descriptive subtitle

**Service Categories (Tabbed Interface):**
- Horizontal tabs: All Services, Day Passes, Grooming, Spa, Special Packages
- Active tab indicator with underline

**Service Grid (3-column lg:, 2-column md:):**
- Service cards: Large image, service name, duration, price
- Detailed description expandable section
- "Add to Cart" + "Book Now" buttons
- Package deals highlighted with badge

**Service Details Modal:**
- Large service image gallery
- Full description, what's included, duration, pricing tiers
- Date/time picker for booking
- Quantity selector (for group bookings)
- "Add to Cart" or "Book Directly"

### Adoption Page

**Adoption Hero (50vh):**
- Heartwarming image of dogs
- "Find Your New Best Friend" headline
- Filter bar integrated into hero bottom

**Filter Sidebar (Desktop) / Collapsible (Mobile):**
- Size, Age, Breed, Energy Level, Good with (Kids/Cats/Dogs)
- Clear filters button

**Dog Gallery (Masonry grid - 3 columns lg:, 2 columns md:):**
- Large dog photos (varying heights for masonry effect)
- Overlay on hover: Name, breed, age
- "Learn More" button

**Dog Profile Page:**
- Hero section: Large photo carousel (multiple images)
- 2-column layout: Dog details (left 60%) + Application form (right 40%)
- Details: Name, breed, age, size, personality, medical history, story
- Application form: Name, email, phone, experience, home situation
- "Submit Application" CTA

### Events Page

**Events Header (40vh):**
- Calendar-themed imagery
- "Join the Pack" headline

**Event Calendar View:**
- Monthly calendar grid with event dots
- Click date to filter events

**Event Cards (2-column lg:, 1-column md:):**
- Event image, date badge (absolute positioned top-left)
- Title, time, location, capacity (e.g., "15/30 spots remaining")
- Price (if applicable), brief description
- "Register" CTA
- Status badges: "Filling Fast", "New", "Free Event"

**Event Detail Page:**
- Split hero: Event image (60%) + Quick registration form (40%)
- Full description, itinerary, what to bring
- Gallery of past event photos
- Related events section

### Shopping Cart & Checkout

**Cart Sidebar (Slide-out from right):**
- Cart items list: Service thumbnail, name, date/time, price
- Remove/Edit buttons
- Subtotal, tax (if applicable), total
- "Proceed to Checkout" CTA

**Checkout Page (Single column, max-w-3xl):**
- Multi-step progress indicator: Details → Payment → Confirmation
- Step 1: Customer info, pet info, contact details
- Step 2: Payment method (Stripe integration), billing address
- Order summary sticky sidebar (desktop) or collapsible (mobile)
- "Complete Booking" CTA

### Location Page

**Interactive Map Hero (60vh):**
- Full-width embedded map
- Location markers, facility photos on click

**Contact Information (3-column grid):**
- Address card, Hours card, Contact methods card
- Large, readable text

**Facility Gallery (4-column grid lg:, 2-column md:):**
- Photos of pools, play areas, grooming stations, rest areas
- Lightbox viewer on click

**Directions & Parking:**
- Written directions from major highways
- Parking info, accessibility details

---

## Component Library

### Navigation

**Desktop Header:**
- Horizontal layout, sticky on scroll
- Logo (left), Navigation links (center), Cart icon + User icon (right)
- Links: Services, Adoption, Events, Location, About
- Transparent on hero, solid background on scroll

**Mobile Navigation:**
- Hamburger menu (top-right)
- Full-screen overlay menu
- Stacked navigation links
- Cart and user icons in header

### Cards

**Service Card:**
- Aspect ratio 4:3 image
- Padding: p-6
- Shadow: shadow-md, hover:shadow-xl transition
- Rounded: rounded-xl

**Dog Card:**
- Aspect ratio 3:4 image (portrait)
- Overlay gradient at bottom for text
- Padding: p-4
- Rounded: rounded-lg

**Event Card:**
- Horizontal layout (image left 40%, content right 60%) on desktop
- Vertical stack on mobile
- Date badge: absolute positioning, rounded-full

### Forms

**Input Fields:**
- Height: h-12
- Padding: px-4
- Border: border-2
- Rounded: rounded-lg
- Label above input: mb-2

**Buttons:**
- Primary: px-6 py-3, rounded-lg, font-semibold
- Secondary: px-6 py-3, rounded-lg, font-medium, border-2
- Icon buttons: p-3, rounded-full

**Form Layouts:**
- 2-column on desktop (grid-cols-2), single column mobile
- Gap: gap-6
- Required field indicators: asterisk after label

### Data Displays

**Price Tags:**
- Large, bold typography
- Currency symbol smaller than amount
- Strikethrough for original price on discounts

**Status Badges:**
- Pill shape: px-3 py-1, rounded-full
- Small text: text-xs font-semibold

**Rating Stars:**
- Heroicons star-solid and star-outline
- Size: w-5 h-5

### Images

**Hero Images:**
- Large hero image on homepage showing dogs playing in water park
- Services page: Dogs being groomed/pampered
- Adoption page: Heartwarming rescue dog portrait
- Events page: Dogs and owners at previous events
- Location page: Facility exterior/aerial view

**Service Images:**
- High-quality photos of actual facilities and services
- Dogs enjoying grooming, spa treatments, swimming
- Clean, professional photography

**Adoption Images:**
- Multiple photos per dog showing personality
- Natural, candid shots preferred over posed

**Event Images:**
- Past event photos showing community and fun
- Action shots of dogs playing, interacting

---

## Animation Strategy

**Minimal, Purposeful Animations:**
- Card hover: Subtle elevation (shadow transition)
- Page transitions: Simple fade-in for new content
- Image loading: Gentle fade-in
- NO auto-playing carousels
- NO scroll-triggered animations
- NO parallax effects

---

## Responsive Breakpoints

**Mobile-First Approach:**
- Base (mobile): Single column layouts, stacked navigation
- md: (768px): 2-column grids, horizontal navigation option
- lg: (1024px): 3-4 column grids, full desktop experience
- xl: (1280px): Max container widths, optimal spacing

---

## Accessibility

- All images have descriptive alt text (especially dog photos)
- Form inputs have associated labels
- Sufficient contrast ratios maintained
- Focus states clearly visible on all interactive elements
- Keyboard navigation fully supported
- ARIA labels for icon-only buttons

---

This comprehensive design creates a welcoming, professional experience that builds trust while showcasing the joy and care provided to dogs at the aqua park.