import { motion } from 'motion/react';
import { ArrowLeft, Settings, Calendar, Trophy, Star, Award, Zap, Crown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface UserProfileProps {
  onBack: () => void;
}

const badges = [
  { icon: Trophy, name: 'Veterano', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20', description: 'Participou de 10+ eventos' },
  { icon: Star, name: 'Cosplayer', color: 'text-pink-400', bgColor: 'bg-pink-500/20', description: 'Competiu em cosplay' },
  { icon: Zap, name: 'Gamer Pro', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20', description: 'Venceu torneio' },
  { icon: Crown, name: 'Influencer', color: 'text-purple-400', bgColor: 'bg-purple-500/20', description: 'Top 10 no ranking' },
  { icon: Award, name: 'Contribuidor', color: 'text-green-400', bgColor: 'bg-green-500/20', description: 'Organizou evento' },
];

const recentEvents = [
  { name: 'Anime Fest Brasil', date: '05 Out 2025', points: '+150 XP' },
  { name: 'Game Jam SP', date: '12 Set 2025', points: '+200 XP' },
  { name: 'Cosplay Contest', date: '28 Ago 2025', points: '+300 XP' },
];

export function UserProfile({ onBack }: UserProfileProps) {
  const level = 12;
  const currentXP = 3450;
  const nextLevelXP = 4000;
  const progress = (currentXP / nextLevelXP) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-purple-500/20">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={onBack} className="p-2">
            <ArrowLeft className="w-6 h-6 text-cyan-400" />
          </button>
          <h1 className="text-white">Meu Perfil</h1>
          <button className="p-2">
            <Settings className="w-6 h-6 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Profile Header */}
          <Card className="bg-slate-900/50 border-purple-500/20 p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <Avatar className="w-20 h-20 border-4 border-cyan-400">
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white text-2xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <span className="text-white">{level}</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl text-white mb-1">João Gamer</h2>
                <p className="text-slate-400 mb-2">@joaogamer_sp</p>
                <div className="flex gap-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-0">
                    São Paulo, SP
                  </Badge>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl text-white">23</p>
                <p className="text-slate-400">Eventos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-white">456</p>
                <p className="text-slate-400">Conexões</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-purple-400">#{8}</p>
                <p className="text-slate-400">Ranking</p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
              Editar Perfil
            </Button>
          </Card>

          {/* Level Progress */}
          <Card className="bg-slate-900/50 border-purple-500/20 p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white">Nível {level}</h3>
              <span className="text-cyan-400">{currentXP} / {nextLevelXP} XP</span>
            </div>
            <Progress value={progress} className="h-3 bg-slate-800">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
            </Progress>
            <p className="text-slate-400 mt-2">
              Faltam {nextLevelXP - currentXP} XP para o próximo nível
            </p>
          </Card>

          {/* Badges */}
          <div>
            <h3 className="text-xl text-white mb-4">Conquistas Desbloqueadas</h3>
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`${badge.bgColor} border-0 p-4 hover:scale-105 transition-transform`}>
                    <badge.icon className={`w-8 h-8 ${badge.color} mb-2`} />
                    <h4 className={`${badge.color} mb-1`}>{badge.name}</h4>
                    <p className="text-slate-400 text-xs">{badge.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Events */}
          <div>
            <h3 className="text-xl text-white mb-4">Eventos Recentes</h3>
            <div className="space-y-3">
              {recentEvents.map((event, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/30 border-purple-500/10 p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white">{event.name}</p>
                      <p className="text-slate-400 text-sm">{event.date}</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-0">
                    {event.points}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-xl text-white mb-4">Interesses</h3>
            <div className="flex flex-wrap gap-2">
              {['Anime', 'Cosplay', 'RPG', 'E-Sports', 'Quadrinhos', 'Board Games', 'Retro Gaming', 'K-Pop'].map((interest) => (
                <Badge
                  key={interest}
                  className="bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
