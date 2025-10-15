import { motion } from 'motion/react';
import { ArrowLeft, Send, Hash, TrendingUp, MessageCircle, Heart, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';

interface CommunityProps {
  onBack: () => void;
}

const channels = [
  { name: 'geral', icon: Hash, unread: 3, color: 'text-cyan-400' },
  { name: 'eventos', icon: TrendingUp, unread: 0, color: 'text-purple-400' },
  { name: 'cosplay', icon: Users, unread: 7, color: 'text-pink-400' },
  { name: 'gaming', icon: MessageCircle, unread: 12, color: 'text-green-400' },
];

const topics = [
  {
    id: 1,
    author: 'GameMaster',
    avatar: 'GM',
    title: 'Alguém mais vai na Comic Con esse ano?',
    content: 'Já comprei meu ingresso! Quem mais tá indo? Vamos marcar um meetup lá!',
    replies: 47,
    likes: 128,
    timestamp: '2h atrás',
    tags: ['Comic Con', 'Meetup'],
  },
  {
    id: 2,
    author: 'CosplayQueen',
    avatar: 'CQ',
    title: 'Dicas para primeira vez no cosplay?',
    content: 'Vou fazer meu primeiro cosplay na próxima convenção. Alguma dica de materiais e onde comprar?',
    replies: 23,
    likes: 89,
    timestamp: '5h atrás',
    tags: ['Cosplay', 'Dicas'],
  },
  {
    id: 3,
    author: 'AnimeFreak',
    avatar: 'AF',
    title: 'Indicações de anime para assistir?',
    content: 'Terminei de ver Demon Slayer e tô procurando algo parecido. Sugestões?',
    replies: 156,
    likes: 234,
    timestamp: '1d atrás',
    tags: ['Anime', 'Recomendações'],
  },
  {
    id: 4,
    author: 'RPGMestre',
    avatar: 'RM',
    title: 'Montando mesa de D&D em SP',
    content: 'Procuro 2-3 players para completar uma mesa de D&D 5e. Sessões aos sábados!',
    replies: 31,
    likes: 67,
    timestamp: '2d atrás',
    tags: ['RPG', 'D&D', 'São Paulo'],
  },
];

export function Community({ onBack }: CommunityProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={onBack} className="p-2">
              <ArrowLeft className="w-6 h-6 text-cyan-400" />
            </button>
            <h1 className="text-white">Comunidade</h1>
            <div className="w-10"></div>
          </div>

          {/* Channels */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {channels.map((channel) => (
              <button
                key={channel.name}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-purple-500/20 rounded-full hover:border-cyan-400/50 transition-colors whitespace-nowrap"
              >
                <channel.icon className={`w-4 h-4 ${channel.color}`} />
                <span className="text-slate-300">{channel.name}</span>
                {channel.unread > 0 && (
                  <Badge className="bg-pink-500 text-white border-0 h-5 min-w-[20px] px-1">
                    {channel.unread}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topics List */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-4 pb-24">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-slate-900/50 border-purple-500/20 p-4 hover:border-cyan-400/40 transition-colors cursor-pointer">
              {/* Author */}
              <div className="flex items-start gap-3 mb-3">
                <Avatar className="border-2 border-cyan-400">
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white">
                    {topic.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white">{topic.author}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-500">{topic.timestamp}</span>
                  </div>
                  <h3 className="text-white mb-2">{topic.title}</h3>
                  <p className="text-slate-300 mb-3">{topic.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {topic.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-purple-500/20 text-purple-300 border-0"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 text-slate-400">
                    <button className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{topic.replies}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{topic.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* New Post Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-t border-purple-500/20 p-4">
        <div className="max-w-md mx-auto flex gap-2">
          <Input
            placeholder="Compartilhe algo com a comunidade..."
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
          />
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
