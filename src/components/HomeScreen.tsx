import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Search, Filter, Bell, Menu } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeScreenProps {
  onNavigate: (screen: string, eventId?: number) => void;
}

const events = [
  {
    id: 1,
    title: 'Comic Con 2025',
    date: '15 Nov 2025',
    location: 'São Paulo Expo',
    attendees: 1245,
    image: 'https://images.unsplash.com/photo-1735720518631-60257e2fde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb252ZW50aW9uJTIwY29zcGxheXxlbnwxfHx8fDE3NjAxODc3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Convenção',
    categoryColor: 'bg-pink-500',
  },
  {
    id: 2,
    title: 'Anime Fest Brasil',
    date: '22 Nov 2025',
    location: 'Rio de Janeiro',
    attendees: 892,
    image: 'https://images.unsplash.com/photo-1721642353290-440b0ae63b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNvbnZlbnRpb24lMjBldmVudHxlbnwxfHx8fDE3NjAxODc3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Anime',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 3,
    title: 'E-Sports Championship',
    date: '28 Nov 2025',
    location: 'Arena Online',
    attendees: 2341,
    image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwZXNwb3J0c3xlbnwxfHx8fDE3NjAwOTEyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gaming',
    categoryColor: 'bg-cyan-500',
  },
  {
    id: 4,
    title: 'Encontro de Colecionadores',
    date: '05 Dez 2025',
    location: 'Geek Store SP',
    attendees: 156,
    image: 'https://images.unsplash.com/photo-1715354457728-40202506375b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBzdG9yZXxlbnwxfHx8fDE3NjAxODE0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Meetup',
    categoryColor: 'bg-orange-500',
  },
  {
    id: 5,
    title: 'Board Game Night',
    date: '12 Dez 2025',
    location: 'Taverna Geek',
    attendees: 45,
    image: 'https://images.unsplash.com/photo-1676385795382-b29240c98fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBuaWdodHxlbnwxfHx8fDE3NjAxODc3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Social',
    categoryColor: 'bg-green-500',
  },
  {
    id: 6,
    title: 'Retro Gaming Tournament',
    date: '18 Dez 2025',
    location: 'Arcade Zone',
    attendees: 234,
    image: 'https://images.unsplash.com/photo-1698273300787-f698a50bb250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGFyY2FkZXxlbnwxfHx8fDE3NjAxMDQ0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gaming',
    categoryColor: 'bg-cyan-500',
  },
];

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => onNavigate('profile')} className="p-2">
              <Menu className="w-6 h-6 text-cyan-400" />
            </button>
            <h1 className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Geekonecta
            </h1>
            <button className="p-2 relative">
              <Bell className="w-6 h-6 text-cyan-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <Input
              placeholder="Buscar eventos..."
              className="pl-10 pr-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Filter className="w-5 h-5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Events Feed */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-slate-900/50 border-purple-500/20 overflow-hidden hover:border-cyan-400/40 transition-colors cursor-pointer">
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <Badge className={`${event.categoryColor} absolute top-3 right-3 border-0`}>
                  {event.category}
                </Badge>
              </div>

              {/* Event Info */}
              <div className="p-4">
                <h3 className="text-xl text-white mb-3">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>{event.attendees} participantes</span>
                  </div>
                </div>

                <Button
                  onClick={() => onNavigate('event', event.id)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                >
                  Participar
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-t border-purple-500/20">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-around">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1">
            <Calendar className="w-6 h-6 text-cyan-400" />
            <span className="text-xs text-cyan-400">Eventos</span>
          </button>
          <button onClick={() => onNavigate('community')} className="flex flex-col items-center gap-1">
            <Users className="w-6 h-6 text-slate-400" />
            <span className="text-xs text-slate-400">Comunidade</span>
          </button>
          <button onClick={() => onNavigate('ranking')} className="flex flex-col items-center gap-1">
            <div className="relative">
              <div className="w-6 h-6 border-2 border-slate-400 rotate-45"></div>
            </div>
            <span className="text-xs text-slate-400">Ranking</span>
          </button>
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-400"></div>
            <span className="text-xs text-slate-400">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
