import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, MapPin, Users, Wifi, Car } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const properties = [
    {
      name: 'Ocean Vista Penthouse',
      description: 'Luxury beachfront penthouse with panoramic ocean views',
      price: '$450',
      period: '/night',
      badge: null,
      features: [
        '3 bedrooms, 2.5 bathrooms',
        'Private oceanfront balcony',
        'Gourmet kitchen with premium appliances',
        'Master suite with ocean views',
        'Complimentary beach chairs & umbrellas',
        'High-speed WiFi throughout',
        '24/7 concierge service',
        'Rooftop pool access',
      ],
      cta: 'Book Now',
      popular: false,
      guests: 'Up to 6 guests',
      location: 'Direct beachfront',
    },
    {
      name: 'Sunset Penthouse Suite',
      description: 'Premium beachfront living with stunning sunset views',
      price: '$525',
      period: '/night',
      badge: 'Most Popular',
      features: [
        '4 bedrooms, 3 bathrooms',
        'Wraparound terrace with sunset views',
        "Chef's kitchen with wine cooler",
        'Two master suites with ocean views',
        'Private beach cabana included',
        'Premium linens & toiletries',
        'Dedicated property manager',
        'Infinity pool & spa access',
        'Complimentary airport transfer',
      ],
      cta: 'Book Now',
      popular: true,
      guests: 'Up to 8 guests',
      location: 'Prime beachfront',
    },
    {
      name: 'Downtown Loft Collection',
      description: 'Modern urban retreats in the heart of Miami Beach',
      price: '$275',
      period: '/night',
      badge: 'Best Value',
      features: [
        '2 bedrooms, 2 bathrooms',
        'Floor-to-ceiling windows',
        'Modern kitchen with breakfast bar',
        'Walk to restaurants & nightlife',
        'Fitness center access',
        'High-speed business WiFi',
        'Concierge recommendations',
        'Secure parking available',
      ],
      cta: 'Book Now',
      popular: false,
      guests: 'Up to 4 guests',
      location: 'Downtown Miami Beach',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Premium Accommodations
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Miami Beach
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Vacation Rentals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Experience the finest beachfront and downtown properties in Miami Beach. Each rental
            includes personalized concierge service and premium amenities.
          </p>

          {/* Season Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Peak Season
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Off Season
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {properties.map((property, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                property.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {property.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {property.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {property.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {property.badge && !property.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {property.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{property.name}</CardTitle>
                <CardDescription className="text-base mb-4">{property.description}</CardDescription>

                {/* Property Details */}
                <div className="flex items-center justify-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>{property.guests}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="size-4" />
                    <span>{property.location}</span>
                  </div>
                </div>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{property.price}</span>
                  <span className="text-muted-foreground mb-1">{property.period}</span>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {property.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    property.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={property.popular ? 'default' : 'outline'}
                >
                  {property.cta}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Free cancellation • Instant booking confirmation
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Planning an extended stay or group event?</h3>
          <p className="text-muted-foreground mb-6">
            We offer special rates for weekly and monthly stays, plus exclusive packages for
            weddings, corporate retreats, and family reunions in Miami Beach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
            <Button size="lg">Request Custom Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
