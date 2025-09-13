import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ThumbsUp, Check, Filter, ChevronDown, MessageSquare, Award } from 'lucide-react';

export default function PropertyReviews() {
  const reviews = [
    {
      id: 1,
      author: 'Isabella Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      date: '3 days ago',
      property: 'Ocean Vista Penthouse',
      verified: true,
      helpful: 42,
      title: 'Breathtaking ocean views and impeccable service',
      content:
        "Our stay at the Ocean Vista Penthouse exceeded every expectation. Waking up to panoramic ocean views from the floor-to-ceiling windows was magical. The concierge team arranged dinner reservations at Joe's Stone Crab and provided insider tips for the best beach spots. The rooftop terrace became our favorite evening retreat.",
      pros: ['Stunning ocean views', 'Exceptional concierge service', 'Luxurious amenities'],
      stayDate: 'December 2024',
    },
    {
      id: 2,
      author: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 week ago',
      property: 'Brickell Modern Loft',
      verified: true,
      helpful: 38,
      title: 'Perfect location for Miami nightlife and dining',
      content:
        "The Brickell loft was ideal for our couples' weekend. Walking distance to Zuma, Komodo, and the best rooftop bars in Miami. The apartment's modern design and smart home features impressed us. Coastal Retreats' local recommendations helped us discover hidden gems we never would have found otherwise.",
      pros: [
        'Prime Brickell location',
        'Modern smart home tech',
        'Excellent restaurant recommendations',
      ],
      stayDate: 'November 2024',
    },
    {
      id: 3,
      author: 'Jennifer & Mark Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      property: 'Bayfront Family Suite',
      verified: true,
      helpful: 51,
      title: 'Family vacation perfection with thoughtful touches',
      content:
        'Traveling with our 8 and 12-year-old, we needed space and family-friendly amenities. The Bayfront Suite delivered beautifully - kids loved the pool access and beach toys provided. The kitchen was fully stocked for family meals, and the team even arranged a private beach cabana for our anniversary dinner. Unforgettable week!',
      pros: ['Kid-friendly amenities', 'Spacious family layout', 'Thoughtful personal touches'],
      stayDate: 'November 2024',
    },
    {
      id: 4,
      author: 'Alessandro Rossi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 5,
      date: '3 weeks ago',
      property: 'South Beach Penthouse',
      verified: true,
      helpful: 29,
      title: 'Business trip elevated to luxury experience',
      content:
        'Extended stay for a month-long project became a pleasure thanks to Coastal Retreats. The penthouse office setup was perfect for video calls with Milan headquarters. Daily housekeeping, grocery delivery coordination, and restaurant reservations handled seamlessly. This is how business travel should be.',
      pros: ['Professional workspace', 'Concierge business support', 'Extended stay flexibility'],
      stayDate: 'October 2024',
    },
    {
      id: 5,
      author: 'Rachel & James Kim',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      property: 'Wynwood Arts Loft',
      verified: true,
      helpful: 33,
      title: "Romantic anniversary in the heart of Miami's art scene",
      content:
        'Our 10th anniversary deserved something special, and the Wynwood loft delivered magic. Surrounded by world-class street art, walking to galleries and trendy restaurants. The team surprised us with champagne and arranged a private art tour. The rooftop sunset views over the murals created perfect romantic moments.',
      pros: ['Unique arts district location', 'Romantic surprise touches', 'Cultural immersion'],
      stayDate: 'October 2024',
    },
  ];

  const stats = {
    average: 4.9,
    total: 287,
    distribution: [
      { stars: 5, count: 251 },
      { stars: 4, count: 28 },
      { stars: 3, count: 6 },
      { stars: 2, count: 2 },
      { stars: 1, count: 0 },
    ],
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Guest Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why discerning travelers choose Coastal Retreats for their Miami Beach luxury
            stays
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                {/* Overall Rating */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">{stats.average}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < Math.floor(stats.average)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {stats.total} verified stays
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2 mb-6">
                  {stats.distribution.map(item => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-3">{item.stars}</span>
                      <Star className="size-4 fill-primary text-primary" />
                      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(item.count / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8 text-right">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-primary" />
                    <span>All reviews verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="size-4 text-primary" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="size-4 text-primary" />
                    <span>Miami Beach Certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="size-4" />
                  All Properties
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Property Type
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Stay Length
                  <ChevronDown className="size-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                Most Recent
                <ChevronDown className="size-4" />
              </Button>
            </div>

            {/* Review Cards */}
            {reviews.map(review => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="size-12">
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{review.author}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs gap-1">
                              <Check className="size-3" />
                              Verified Stay
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span>Stayed {review.stayDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Property Badge */}
                  <Badge variant="outline" className="mb-3 bg-accent/10">
                    {review.property}
                  </Badge>

                  {/* Review Content */}
                  <h5 className="font-semibold text-foreground mb-2">{review.title}</h5>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>

                  {/* Pros */}
                  {review.pros && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {review.pros.map((pro, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="gap-1 bg-primary/10 text-primary"
                        >
                          <Check className="size-3" />
                          {pro}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <ThumbsUp className="size-4" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <MessageSquare className="size-4" />
                      Host Response
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center pt-8">
              <Button variant="outline" size="lg" className="px-8">
                View All {stats.total} Reviews
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                See what makes Coastal Retreats the premier choice for Miami Beach luxury stays
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
