import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Waves, Car, Wifi, Coffee, Shield, Clock, Users, Star } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Waves,
      title: 'Oceanfront Paradise',
      description:
        'Wake up to stunning Atlantic Ocean views from our beachfront penthouses with private balconies and direct beach access.',
      badge: 'Premium Location',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description:
        'Fully licensed Miami Beach vacation rentals with comprehensive insurance coverage for your peace of mind.',
      badge: 'Trust & Safety',
    },
    {
      icon: MapPin,
      title: 'Prime Miami Beach',
      description:
        'Walking distance to South Beach, Art Deco District, world-class dining, and vibrant nightlife.',
      badge: 'Location',
    },
    {
      icon: Users,
      title: 'Concierge Services',
      description:
        'Personal concierge assistance for restaurant reservations, activity bookings, and local recommendations.',
      badge: 'Service',
    },
    {
      icon: Coffee,
      title: 'Luxury Amenities',
      description:
        'High-end furnishings, gourmet kitchens, premium linens, and resort-style pool access at select properties.',
      badge: 'Comfort',
    },
    {
      icon: Wifi,
      title: 'Business Ready',
      description:
        'High-speed fiber internet, dedicated workspaces, and quiet environments perfect for extended business stays.',
      badge: 'Business Travel',
    },
    {
      icon: Clock,
      title: 'Flexible Check-in',
      description:
        'Self-check-in with smart locks and 24/7 guest support for arrivals at any time that suits your schedule.',
      badge: 'Convenience',
    },
    {
      icon: Car,
      title: 'Parking Included',
      description:
        'Complimentary secure parking spaces at all properties - a rare find in Miami Beach worth $40+ per night.',
      badge: 'Value',
    },
    {
      icon: Star,
      title: '5-Star Experience',
      description:
        'Consistently rated 4.9+ stars by guests for cleanliness, location, and exceptional hospitality.',
      badge: 'Excellence',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Coastal Retreats
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Miami Beach Rentals
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Beyond Ordinary Stays
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience Miami Beach like a local with our curated collection of premium vacation
            rentals, personalized service, and insider knowledge of the Magic City.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to experience Miami Beach luxury?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Now
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
