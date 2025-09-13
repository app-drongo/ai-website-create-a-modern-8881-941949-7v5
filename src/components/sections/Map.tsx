import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Navigation,
  Home,
  Coffee,
  ShoppingBag,
  Train,
  Utensils,
  Trees,
  Waves,
  Camera,
  Star,
} from 'lucide-react';

export default function PropertyMap() {
  const properties = [
    {
      id: 1,
      name: 'Ocean Breeze Penthouse',
      price: '$1,850/night',
      type: 'Beachfront Penthouse',
      lat: 25.7617,
      lng: -80.1918,
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 2,
      name: 'Sunset Sky Penthouse',
      price: '$1,950/night',
      type: 'Beachfront Penthouse',
      lat: 25.7717,
      lng: -80.1818,
      rating: 4.8,
      reviews: 98,
    },
    {
      id: 3,
      name: 'Downtown Luxe Loft',
      price: '$850/night',
      type: 'Modern Loft',
      lat: 25.7617,
      lng: -80.1918,
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: 'Bayview Family Suite',
      price: '$1,200/night',
      type: 'Family Apartment',
      lat: 25.7517,
      lng: -80.2018,
      rating: 4.9,
      reviews: 203,
    },
  ];

  const amenities = [
    { icon: Waves, name: 'Beach Access', count: 3 },
    { icon: Utensils, name: 'Fine Dining', count: 24 },
    { icon: Coffee, name: 'Cafés & Bars', count: 18 },
    { icon: ShoppingBag, name: 'Boutiques', count: 12 },
    { icon: Camera, name: 'Attractions', count: 8 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Prime Miami Beach Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked luxury properties in the heart of Miami Beach's most desirable
            neighborhoods
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Placeholder Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=750&fit=crop"
                    alt="Miami Beach aerial view"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Map Overlay Elements */}
                <div className="absolute inset-0">
                  {/* Property Markers */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                        <Card className="p-3 whitespace-nowrap shadow-lg">
                          <p className="text-sm font-semibold">Ocean Breeze Penthouse</p>
                          <p className="text-xs text-muted-foreground">Beachfront • $1,850/night</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="size-3 fill-primary text-primary" />
                            <span className="text-xs">4.9 (127 reviews)</span>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 right-1/4">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                        <Card className="p-3 whitespace-nowrap shadow-lg">
                          <p className="text-sm font-semibold">Sunset Sky Penthouse</p>
                          <p className="text-xs text-muted-foreground">Beachfront • $1,950/night</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="size-3 fill-primary text-primary" />
                            <span className="text-xs">4.8 (98 reviews)</span>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-accent/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-accent hover:bg-accent/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                        <Card className="p-3 whitespace-nowrap shadow-lg">
                          <p className="text-sm font-semibold">Downtown Luxe Loft</p>
                          <p className="text-xs text-muted-foreground">Modern Loft • $850/night</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="size-3 fill-primary text-primary" />
                            <span className="text-xs">4.7 (156 reviews)</span>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-2/3 right-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-secondary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-secondary hover:bg-secondary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="secondary" className="shadow-lg backdrop-blur-sm">
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="size-4 bg-primary rounded-full" />
                      <span>Beachfront</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-4 bg-accent rounded-full" />
                      <span>Downtown</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-4 bg-secondary rounded-full" />
                      <span>Family-Friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Property List */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  Our Miami Beach Properties
                </h3>
                <div className="space-y-4">
                  {properties.map(property => (
                    <div
                      key={property.id}
                      className="flex items-start justify-between p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-all duration-200 hover:shadow-md"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1">{property.name}</p>
                        <p className="text-xs text-muted-foreground mb-2">{property.type}</p>
                        <div className="flex items-center gap-1">
                          <Star className="size-3 fill-primary text-primary" />
                          <span className="text-xs font-medium">{property.rating}</span>
                          <span className="text-xs text-muted-foreground">
                            ({property.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm text-primary">{property.price}</p>
                        <Badge variant="secondary" className="text-xs mt-1">
                          Available
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Amenities */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">What's Nearby</h3>
                <div className="space-y-4">
                  {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <amenity.icon className="size-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{amenity.name}</span>
                      </div>
                      <Badge variant="outline" className="font-medium">
                        {amenity.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Explore All Properties
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
