'use client';
import { useState } from 'react';
import PlayerHeader from './PlayerHeader';
import PlayerStats from './PlayerStats';
import CurrentForm from './CurrentForm';
import PlayerInfo from './PlayerInfo';

interface TabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

function Tab({ label, isActive, onClick }: TabProps) {
    return (
        <button
            className={`px-4 py-2 text-sm ${isActive ? 'text-white' : 'text-gray-400'}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default function PlayerPage({ player }: any) {
    const [activeTab, setActiveTab] = useState('IPL');

    return (
        <div className="min-h-screen bg-black text-white">
            <PlayerHeader player={player} />

            {/* Collapsible Sections */}
            <div className="space-y-2">
                <CollapsibleSection title="Current form">
                    <div className="p-4">
                        <div className="flex border-b border-gray-800 mb-4">
                            {['IPL', 'T20-I', 'ODI'].map((tab) => (
                                <Tab
                                    key={tab}
                                    label={tab}
                                    isActive={activeTab === tab}
                                    onClick={() => setActiveTab(tab)}
                                />
                            ))}
                        </div>
                        <CurrentForm data={player.currentForm} />
                    </div>
                </CollapsibleSection>
                
                <CollapsibleSection title="Career Statistics">
                    <PlayerStats stats={player.careerStats} />
                </CollapsibleSection>

                <CollapsibleSection title="More Information">
                    <PlayerInfo 
                        information={player.information}
                        videos={player.videos}
                    />
                </CollapsibleSection>
            </div>
        </div>
    );
}

function CollapsibleSection({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-800">
            <button
                className="w-full px-4 py-3 flex  items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="material-icons">
                    {isOpen ? 'expand_less' : 'expand_more'}
                </span>
                <span className="font-bold">{title}</span>
                
            </button>
            {isOpen && children}
        </div>
    );
}