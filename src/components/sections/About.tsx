import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Users,
  Award,
  Star,
  ArrowRight,
  Quote,
  Shield,
  Heart,
  Key,
  Waves,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Personalized Service',
      description:
        'Every guest receives our dedicated concierge service and local recommendations tailored to create unforgettable Miami Beach experiences.',
    },
    {
      icon: Key,
      title: 'Luxury Standards',
      description:
        'Each property is meticulously maintained to five-star standards with premium amenities and designer furnishings throughout.',
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description:
        'As Miami Beach natives, we provide insider access to the best restaurants, hidden beaches, and exclusive experiences the city offers.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description:
        'Fully licensed, insured, and committed to guest safety with 24/7 support and verified property management standards.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Established', icon: Award },
    { value: '500+', label: 'Happy Guests', icon: Users },
    { value: '4.9/5', label: 'Guest Rating', icon: Star },
    { value: '6', label: 'Premium Properties', icon: Key },
  ];

  const team = [
    {
      name: 'Isabella Martinez',
      role: 'Founder & Property Manager',
      image: 'IM',
      bio: 'Miami Beach native with 12+ years in luxury hospitality. Former Four Seasons manager.',
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Guest Experience Director',
      image: 'CR',
      bio: 'Bilingual concierge specialist ensuring every stay exceeds expectations.',
    },
    {
      name: 'Sofia Chen',
      role: 'Operations Manager',
      image: 'SC',
      bio: 'Detail-oriented professional managing seamless check-ins and property maintenance.',
    },
    {
      name: 'Miguel Santos',
      role: 'Local Experience Curator',
      image: 'MS',
      bio: 'Miami insider connecting guests with authentic experiences and hidden gems.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Coastal Retreats
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Gateway to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Miami Beach Luxury
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a boutique vacation rental company specializing in premium beachfront properties,
            offering personalized service and local expertise for unforgettable Miami Beach stays.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by Miami Beach locals, Coastal Retreats was born from a passion for
                sharing the magic of our coastal paradise with discerning travelers.
              </p>
              <p>
                After years of witnessing impersonal vacation rental experiences, we curated a
                collection of six premium properties, each offering luxury amenities and our
                signature concierge service.
              </p>
              <p>
                Today, we're proud to have hosted over 500 guests from around the world, creating
                lasting memories while maintaining our commitment to personalized, boutique
                hospitality that larger platforms simply can't match.
              </p>
            </div>
            <Button className="group">
              View Our Properties
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Waves className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every guest deserves to experience Miami Beach like a local, with luxury and
                      authenticity."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Isabella Martinez, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground">
              The principles that guide our commitment to exceptional hospitality and unforgettable
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              Miami Beach locals dedicated to creating exceptional experiences for every guest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Book Your Stay Today
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Coastal Retreats exceeded every expectation. The penthouse was stunning, but their
                personal touches and local recommendations made our Miami Beach vacation truly
                magical."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rachel Williams</div>
                  <div className="text-sm text-muted-foreground">Anniversary Getaway Guest</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
