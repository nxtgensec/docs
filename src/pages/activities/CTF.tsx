import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Flag, Calendar, Users, Trophy, Target, Shield, Lock, Code, Zap } from "lucide-react";

const upcomingCTFs = [
  {
    name: "nxtgensec CTF - February 2026",
    date: "February 8-9, 2026",
    format: "Jeopardy Style",
    difficulty: "Beginner to Advanced",
    categories: ["Web", "Crypto", "Forensics", "Pwn", "Reverse Engineering"],
    prizes: true,
    registrationOpen: true,
  },
  {
    name: "Red Team Challenge",
    date: "March 1-2, 2026",
    format: "Attack-Defense",
    difficulty: "Intermediate to Advanced",
    categories: ["Network", "Web", "Active Directory", "Cloud"],
    prizes: true,
    registrationOpen: false,
  },
];

const pastCTFs = [
  {
    name: "nxtgensec CTF - January 2026",
    date: "January 11-12, 2026",
    participants: 320,
    teams: 85,
    challenges: 25,
    categories: ["Web Exploitation", "Cryptography", "Binary Exploitation", "Forensics", "OSINT", "Misc"],
    highlights: [
      "Custom vulnerable web applications",
      "Real-world inspired scenarios",
      "Beginner-friendly warmup challenges",
      "Advanced multi-stage exploitation chains",
    ],
    topTeams: [
      { rank: 1, team: "CyberPhantoms", score: 4850, flag: "🏆" },
      { rank: 2, team: "HackSquad", score: 4620, flag: "🥈" },
      { rank: 3, team: "BinaryNinjas", score: 4380, flag: "🥉" },
    ],
    challengeBreakdown: [
      { category: "Web", count: 6, difficulty: "Easy to Hard" },
      { category: "Crypto", count: 5, difficulty: "Medium to Hard" },
      { category: "Forensics", count: 4, difficulty: "Easy to Medium" },
      { category: "Pwn", count: 4, difficulty: "Medium to Hard" },
      { category: "Reverse", count: 3, difficulty: "Medium to Hard" },
      { category: "OSINT", count: 3, difficulty: "Easy to Medium" },
    ],
  },
  {
    name: "nxtgensec CTF - December 2025",
    date: "December 14-15, 2025",
    participants: 280,
    teams: 72,
    challenges: 22,
    categories: ["Web", "Crypto", "Pwn", "Forensics", "Misc"],
    topTeams: [
      { rank: 1, team: "ZeroDay Hunters", score: 4200, flag: "🏆" },
      { rank: 2, team: "PacketStorm", score: 3980, flag: "🥈" },
      { rank: 3, team: "ShellShock", score: 3750, flag: "🥉" },
    ],
  },
  {
    name: "nxtgensec CTF - November 2025",
    date: "November 9-10, 2025",
    participants: 245,
    teams: 65,
    challenges: 20,
    categories: ["Web", "Crypto", "Pwn", "Reverse", "Misc"],
    topTeams: [
      { rank: 1, team: "ExploitDev", score: 3900, flag: "🏆" },
      { rank: 2, team: "BufferOverflow", score: 3680, flag: "🥈" },
      { rank: 3, team: "RootAccess", score: 3420, flag: "🥉" },
    ],
  },
];

const stats = [
  { label: "CTFs Hosted", value: "15+", icon: Flag },
  { label: "Total Participants", value: "2,500+", icon: Users },
  { label: "Challenges Created", value: "350+", icon: Target },
  { label: "Countries", value: "30+", icon: Shield },
];

const categoryIcons: Record<string, typeof Shield> = {
  "Web": Code,
  "Crypto": Lock,
  "Forensics": Target,
  "Pwn": Zap,
  "Reverse": Code,
  "OSINT": Target,
  "Misc": Flag,
};

export default function CTF() {
  return (
    <PageLayout>
      <PageHeader
        title="Monthly CTF Challenges"
        description="Test your hacking skills in our monthly Capture The Flag competitions. From beginners to experts, there's a challenge for everyone."
      />
      <ContentSection>
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border text-center">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Upcoming CTFs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming CTF Events</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingCTFs.map((ctf, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold">{ctf.name}</h3>
                  {ctf.registrationOpen ? (
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                      Open
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {ctf.date}
                  </p>
                  <p><strong>Format:</strong> {ctf.format}</p>
                  <p><strong>Difficulty:</strong> {ctf.difficulty}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {ctf.categories.map((cat, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-secondary text-xs">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <Button disabled={!ctf.registrationOpen}>
                  {ctf.registrationOpen ? "Register Now" : "Notify Me"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Past CTF */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured: January 2026 CTF</h2>
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="h-6 w-6 text-primary" />
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    Completed
                  </span>
                  <span className="text-muted-foreground text-sm">January 11-12, 2026</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-secondary/50">
                    <div className="text-2xl font-bold text-primary">{pastCTFs[0].participants}</div>
                    <div className="text-xs text-muted-foreground">Participants</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/50">
                    <div className="text-2xl font-bold text-primary">{pastCTFs[0].teams}</div>
                    <div className="text-xs text-muted-foreground">Teams</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/50">
                    <div className="text-2xl font-bold text-primary">{pastCTFs[0].challenges}</div>
                    <div className="text-xs text-muted-foreground">Challenges</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Event Highlights</h4>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {pastCTFs[0].highlights?.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Flag className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenge Breakdown */}
                <div>
                  <h4 className="font-semibold mb-3">Challenge Categories</h4>
                  <div className="grid gap-2 md:grid-cols-3">
                    {pastCTFs[0].challengeBreakdown?.map((cat, i) => {
                      const IconComponent = categoryIcons[cat.category] || Flag;
                      return (
                        <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border/50">
                          <div className="flex items-center gap-2 mb-1">
                            <IconComponent className="h-4 w-4 text-primary" />
                            <span className="font-medium text-sm">{cat.category}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {cat.count} challenges • {cat.difficulty}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="lg:w-72">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Top Teams
                </h4>
                <div className="space-y-3">
                  {pastCTFs[0].topTeams.map((team, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-lg border ${
                        team.rank === 1
                          ? "bg-yellow-500/10 border-yellow-500/30"
                          : team.rank === 2
                          ? "bg-gray-400/10 border-gray-400/30"
                          : "bg-orange-500/10 border-orange-500/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{team.flag}</span>
                          <div>
                            <p className="font-semibold">{team.team}</p>
                            <p className="text-xs text-muted-foreground">Rank #{team.rank}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{team.score.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past CTFs List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Past CTF Events</h2>
          <div className="grid gap-4">
            {pastCTFs.slice(1).map((ctf, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{ctf.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {ctf.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {ctf.participants} participants
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {ctf.challenges} challenges
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="h-4 w-4 text-yellow-400" />
                      <span className="text-muted-foreground">Winner:</span>
                      <span className="font-medium">{ctf.topTeams[0].team}</span>
                      <span className="text-primary">({ctf.topTeams[0].score} pts)</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View Writeups</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
