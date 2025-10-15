import { motion } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, Users, Heart, Share2, Check, Ticket, Plus, Minus, CreditCard, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { useState } from 'react';

interface EventDetailsProps {
  eventId: number;
  onBack: () => void;
}

const eventData: any = {
  1: {
    title: 'Comic Con 2025',
    date: '15 Nov 2025',
    time: '10:00 - 22:00',
    location: 'São Paulo Expo - Rodovia dos Imigrantes, km 1.5',
    attendees: 1245,
    image: 'https://images.unsplash.com/photo-1735720518631-60257e2fde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb252ZW50aW9uJTIwY29zcGxheXxlbnwxfHx8fDE3NjAxODc3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Convenção',
    categoryColor: 'bg-pink-500',
    description: 'A maior convenção geek da América Latina está de volta! Prepare-se para painéis exclusivos, encontro com artistas, competições de cosplay, lançamentos de quadrinhos e muito mais. Mais de 100 expositores, áreas temáticas e experiências imersivas.',
    organizer: {
      name: 'Geek Productions',
      avatar: 'GP',
    },
    highlights: [
      '50+ painéis e workshops',
      'Artist Alley com 80+ artistas',
      'Competição de Cosplay',
      'Áreas temáticas Marvel e DC',
      'Lançamentos exclusivos',
    ],
    tickets: [
      { id: 'half', name: 'Meia Entrada', price: 75, description: 'Estudantes e idosos' },
      { id: 'full', name: 'Inteira', price: 150, description: 'Acesso completo ao evento' },
      { id: 'vip', name: 'VIP Geek', price: 350, description: 'Acesso VIP + meet & greet + brindes exclusivos' },
    ],
  },
};

export function EventDetails({ eventId, onBack }: EventDetailsProps) {
  const [isAttending, setIsAttending] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState('full');
  const [quantity, setQuantity] = useState(1);
  
  const event = eventData[eventId] || eventData[1];
  
  const currentTicket = event.tickets.find((t: any) => t.id === selectedTicket);
  const totalPrice = currentTicket ? currentTicket.price * quantity : 0;
  
  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };
  
  const handlePurchase = () => {
    setIsDialogOpen(false);
    setIsAttending(true);
    // Aqui você adicionaria a lógica de processamento de pagamento
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header Image */}
      <div className="relative h-80">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/50"
        >
          <ArrowLeft className="w-5 h-5 text-cyan-400" />
        </button>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-pink-400/50"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-pink-400 text-pink-400' : 'text-pink-400'}`} />
          </button>
          <button className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/50">
            <Share2 className="w-5 h-5 text-purple-400" />
          </button>
        </div>

        {/* Category Badge */}
        <Badge className={`${event.categoryColor} absolute bottom-4 left-4 border-0`}>
          {event.category}
        </Badge>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Title */}
          <h1 className="text-3xl text-white">{event.title}</h1>

          {/* Event Info */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-cyan-400 mt-1" />
              <div>
                <p className="text-white">{event.date}</p>
                <p className="text-slate-400">{event.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-pink-400 mt-1" />
              <p className="text-slate-300">{event.location}</p>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-purple-400" />
              <p className="text-slate-300">
                <span className="text-white">{event.attendees}</span> confirmados
              </p>
            </div>
          </div>

          {/* Organizer */}
          <div className="flex items-center gap-3 p-4 bg-slate-900/50 border border-purple-500/20 rounded-xl">
            <Avatar className="border-2 border-cyan-400">
              <AvatarFallback className="bg-cyan-500 text-white">
                {event.organizer.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-slate-400">Organizado por</p>
              <p className="text-white">{event.organizer.name}</p>
            </div>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
              Seguir
            </Button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl text-white mb-2">Sobre o Evento</h3>
            <p className="text-slate-300 leading-relaxed">{event.description}</p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xl text-white mb-3">Destaques</h3>
            <div className="space-y-2">
              {event.highlights.map((highlight: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-slate-900/30 border border-purple-500/10 rounded-lg"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ticket Prices */}
          <div>
            <h3 className="text-xl text-white mb-3">Ingressos</h3>
            <div className="grid gap-3">
              {event.tickets.map((ticket: any) => (
                <div
                  key={ticket.id}
                  className="flex items-center justify-between p-4 bg-slate-900/50 border border-purple-500/20 rounded-xl hover:border-cyan-400/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <Ticket className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white">{ticket.name}</p>
                      <p className="text-slate-400 text-sm">{ticket.description}</p>
                    </div>
                  </div>
                  <p className="text-xl text-cyan-400">
                    R$ {ticket.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="sticky bottom-0 pb-6 pt-4 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent space-y-3">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar Ingresso
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-purple-500/30 text-white max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Comprar Ingresso
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Event Info */}
                  <div className="p-4 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                    <h4 className="text-white mb-2">{event.title}</h4>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  {/* Ticket Type Selection */}
                  <div>
                    <Label className="text-white mb-3 block">Tipo de Ingresso</Label>
                    <RadioGroup value={selectedTicket} onValueChange={setSelectedTicket}>
                      {event.tickets.map((ticket: any) => (
                        <div
                          key={ticket.id}
                          className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            selectedTicket === ticket.id
                              ? 'bg-cyan-500/10 border-cyan-400'
                              : 'bg-slate-800/30 border-slate-700 hover:border-purple-400/50'
                          }`}
                          onClick={() => setSelectedTicket(ticket.id)}
                        >
                          <RadioGroupItem value={ticket.id} id={ticket.id} className="border-cyan-400 text-cyan-400" />
                          <Label htmlFor={ticket.id} className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-white">{ticket.name}</p>
                                <p className="text-slate-400 text-sm">{ticket.description}</p>
                              </div>
                              <p className="text-cyan-400">R$ {ticket.price}</p>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Quantity */}
                  <div>
                    <Label className="text-white mb-3 block">Quantidade</Label>
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                        className="bg-slate-800 border-slate-700 text-cyan-400 hover:bg-slate-700 hover:text-cyan-300 disabled:opacity-50"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <div className="flex-1 text-center">
                        <span className="text-2xl text-white">{quantity}</span>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(1)}
                        disabled={quantity >= 10}
                        className="bg-slate-800 border-slate-700 text-cyan-400 hover:bg-slate-700 hover:text-cyan-300 disabled:opacity-50"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <Separator className="bg-slate-700" />

                  {/* Total */}
                  <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">Subtotal</span>
                      <span className="text-white">R$ {totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">Taxa de serviço</span>
                      <span className="text-white">R$ {(totalPrice * 0.1).toFixed(2)}</span>
                    </div>
                    <Separator className="bg-slate-600 my-3" />
                    <div className="flex items-center justify-between">
                      <span className="text-xl text-white">Total</span>
                      <span className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        R$ {(totalPrice * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Nome Completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="João Silva"
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="joao@email.com"
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="card" className="text-white mb-2 block">
                        Número do Cartão
                      </Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <Input
                          id="card"
                          placeholder="0000 0000 0000 0000"
                          className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Purchase Button */}
                  <Button
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                  >
                    Finalizar Compra
                  </Button>

                  <p className="text-slate-500 text-xs text-center">
                    Ao finalizar, você receberá o ingresso por e-mail e ganhará +200 XP
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button
              onClick={() => setIsAttending(!isAttending)}
              variant="outline"
              className={`w-full ${
                isAttending
                  ? 'bg-slate-800 border-2 border-cyan-400 text-cyan-400 hover:bg-slate-700'
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
              }`}
            >
              {isAttending ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Confirmado
                </>
              ) : (
                'Confirmar Presença (Grátis)'
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
