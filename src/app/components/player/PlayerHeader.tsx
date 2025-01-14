'use client';

interface PlayerHeaderProps {
    player: {
        name: string;
        role: string;
        age: number;
        bowlingStyle: string;
        dob: string;
        country: string;
        teamLogo: string;
        headerImage: string;
    }
}

export default function PlayerHeader({ player }: PlayerHeaderProps) {
    return (
        <div className="relative h-[280px]">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: `url(${player.headerImage})`,
                    backgroundPosition: 'center 50%'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
            </div>

            {/* Content */}
            <div className="relative h-full p-6">
                <div className="flex items-center justify-between">
                    <button 
                        className="text-white" 
                        onClick={() => window.history.back()}
                    >
                        <span className="material-icons">arrow_back</span>
                    </button>
                    <span className="text-[#FFB800]">Doosra</span>
                </div>

                <div className="absolute bottom-6 w-full pr-12">
                    <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-3xl font-bold">{player.name}</h1>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-sm">sports_cricket</span>
                            <span className="text-sm">{player.bowlingStyle}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-sm">cake</span>
                            <span className="text-sm">{player.age} Yrs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img 
                                src={`/flags/${player.country.toLowerCase()}.svg`} 
                                alt={player.country}
                                className="w-4 h-4"
                            />
                            <span className="text-sm">{player.country}</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400">{player.dob}</p>
                </div>
            </div>
        </div>
    )
}
  