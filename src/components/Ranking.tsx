import { motion } from 'motion/react';
import { ArrowLeft, Trophy, Medal, Award, TrendingUp, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface RankingProps {
  onBack: () => void;
}

const topUsers = [
  {
    rank: 1,
    name: 'MegaGeek',
    avatar: 'MG',
    level: 28,
    xp: 8945,
    events: 67,
    badges: 12,
    trend: 'up',
  },
  {
    rank: 2,
    name: 'OtakuMaster',
    avatar: 'OM',
    level: 26,
    xp: 8234,
    events: 54,
    badges: 10,
    trend: 'up',
  },
  {
    rank: 3,
    name: 'CosplayLegend',
    avatar: 'CL',
    level: 25,
    xp: 7890,
    events: 48,
    badges: 11,
    trend: 'down',
  },
  {
    rank: 4,
    name: 'GameProX',
    avatar: 'GP',
    level: 24,
    xp: 7456,
    events: 52,
    badges: 9,
    trend: 'up',
  },
  {
    rank: 5,
    name: 'AnimeFreak',
    avatar: 'AF',
    level: 23,
    xp: 7123,
    events: 45,
    badges: 8,
    trend: 'same',
  },
  {
    rank: 6,
    name: 'RPGMestre',
    avatar: 'RM',
    level: 22,
    xp: 6789,
    events: 41,
    badges: 9,
    trend: 'up',
  },
  {
    rank: 7,
    name: 'ComicFanatic',
    avatar: 'CF',
    level: 21,
    xp: 6234,
    events: 38,
    badges: 7,
    trend: 'down',
  },
  {
    rank: 8,
    name: 'João Gamer',
    avatar: 'JD',
    level: 12,
    xp: 3450,
    events: 23,
    badges: 5,
    trend: 'up',
    isCurrentUser: true,
  },
  {
    rank: 9,
    name: 'RetroPlayer',
    avatar: 'RP',
    level: 19,
    xp: 5678,
    events: 35,
    badges: 6,
    trend: 'same',
  },
  {
    rank: 10,
    name: 'StreamerGeek',
    avatar: 'SG',
    level: 18,
    xp: 5234,
    events: 32,
    badges: 7,
    trend: 'up',
  },
];

const rankColors: any = {
  1: { bg: 'from-yellow-500/20 to-yellow-600/20', border: 'border-yellow-500/50', icon: 'text-yellow-400', iconBg: 'bg-yellow-500/20' },
  2: { bg: 'from-slate-400/20 to-slate-500/20', border: 'border-slate-400/50', icon: 'text-slate-300', iconBg: 'bg-slate-400/20' },
  3: { bg: 'from-orange-500/20 to-orange-600/20', border: 'border-orange-500/50', icon: 'text-orange-400', iconBg: 'bg-orange-500/20' },
};

export function Ranking({ onBack }: RankingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="p-2">
              <ArrowLeft className="w-6 h-6 text-cyan-400" />
            </button>
            <h1 className="text-white">Ranking Global</h1>
            <Trophy className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-3 items-end mb-6">
            {/* 2nd Place */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-3">
                <Avatar className="w-16 h-16 mx-auto border-4 border-slate-400">
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white">
                    {topUsers[1].avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-400 rounded-full flex items-center justify-center border-4 border-slate-950">
                  <Medal className="w-4 h-4 text-slate-900" />
                </div>
              </div>
              <div className="bg-gradient-to-b from-slate-400/20 to-slate-500/20 border border-slate-400/50 rounded-t-xl p-3 h-24">
                <p className="text-white truncate mb-1">{topUsers[1].name}</p>
                <p className="text-slate-300">Nv. {topUsers[1].level}</p>
              </div>
            </motion.div>

            {/* 1st Place */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="relative mb-3">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-md opacity-50"></div>
                <Avatar className="w-20 h-20 mx-auto border-4 border-yellow-400 relative">
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white text-xl">
                    {topUsers[0].avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-slate-950">
                  <Trophy className="w-5 h-5 text-yellow-900" />
                </div>
              </div>
              <div className="bg-gradient-to-b from-yellow-500/20 to-yellow-600/20 border border-yellow-500/50 rounded-t-xl p-4 h-32">
                <p className="text-white truncate mb-1">{topUsers[0].name}</p>
                <p className="text-yellow-300">Nv. {topUsers[0].level}</p>
                <Badge className="bg-yellow-500/30 text-yellow-200 border-0 mt-2">
                  Campeão
                </Badge>
              </div>
            </motion.div>

            {/* 3rd Place */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="relative mb-3">
                <Avatar className="w-16 h-16 mx-auto border-4 border-orange-400">
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white">
                    {topUsers[2].avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center border-4 border-slate-950">
                  <Award className="w-4 h-4 text-orange-900" />
                </div>
              </div>
              <div className="bg-gradient-to-b from-orange-500/20 to-orange-600/20 border border-orange-500/50 rounded-t-xl p-3 h-24">
                <p className="text-white truncate mb-1">{topUsers[2].name}</p>
                <p className="text-orange-300">Nv. {topUsers[2].level}</p>
              </div>
            </motion.div>
          </div>

          {/* Rest of Rankings */}
          <div className="space-y-3">
            {topUsers.slice(3).map((user, index) => (
              <motion.div
                key={user.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + 4) * 0.05 }}
              >
                <Card
                  className={`${
                    user.isCurrentUser
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50'
                      : 'bg-slate-900/50 border-purple-500/20'
                  } p-4 hover:border-cyan-400/40 transition-colors`}
                >
                  <div className="flex items-center gap-4">
                    {/* Rank Number */}
                    <div className="w-8 text-center">
                      <span className={`text-xl ${user.isCurrentUser ? 'text-cyan-400' : 'text-slate-400'}`}>
                        {user.rank}
                      </span>
                    </div>

                    {/* Avatar */}
                    <Avatar className={`border-2 ${user.isCurrentUser ? 'border-cyan-400' : 'border-purple-400'}`}>
                      <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>

                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`${user.isCurrentUser ? 'text-cyan-400' : 'text-white'}`}>
                          {user.name}
                        </span>
                        {user.isCurrentUser && (
                          <Badge className="bg-cyan-500/20 text-cyan-400 border-0">
                            Você
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-slate-400">
                        <span>Nv. {user.level}</span>
                        <span>•</span>
                        <span>{user.xp} XP</span>
                      </div>
                    </div>

                    {/* Trend */}
                    <div className="flex flex-col items-end gap-1">
                      {user.trend === 'up' && (
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      )}
                      {user.trend === 'down' && (
                        <TrendingUp className="w-5 h-5 text-red-400 rotate-180" />
                      )}
                      {user.trend === 'same' && (
                        <div className="w-5 h-0.5 bg-slate-500"></div>
                      )}
                      <div className="flex items-center gap-1 text-purple-400">
                        <Zap className="w-3 h-3" />
                        <span className="text-xs">{user.badges}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Your Stats */}
          <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/30 p-6">
            <h3 className="text-white mb-4">Seu Progresso</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-slate-300 mb-2">
                  <span>Próximo nível</span>
                  <span>3450 / 4000 XP</span>
                </div>
                <Progress value={86.25} className="h-2 bg-slate-800">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{ width: '86.25%' }}></div>
                </Progress>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center pt-3">
                <div>
                  <p className="text-2xl text-cyan-400">23</p>
                  <p className="text-slate-400">Eventos</p>
                </div>
                <div>
                  <p className="text-2xl text-purple-400">5</p>
                  <p className="text-slate-400">Badges</p>
                </div>
                <div>
                  <p className="text-2xl text-pink-400">#{8}</p>
                  <p className="text-slate-400">Posição</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
