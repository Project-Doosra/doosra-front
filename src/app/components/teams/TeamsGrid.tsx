"use client"

import React, { useEffect, useState } from "react";
import { Container, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface Team {
    text: string;
    url: string;
    logo: string;
}

interface AllTeamsProps {
    alignment: "row" | "column";
}

const AllTeams: React.FC<AllTeamsProps> = ({ alignment }) => {
    const [league, setLeague] = useState("IPL");
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch(`/api/teams?league=${league}`);
                // const data = await response.json();
                const data = [
                    { text: "CSK", url: "/teams", logo: "https://images.seeklogo.com/logo-png/19/2/ipl-chennai-super-kings-logo-png_seeklogo-196613.png" },
                    { text: "RCB", url: "/teams", logo: "https://seeklogo.com/images/I/ipl-royal-challengers-bangalore-logo-B2B03856E6-seeklogo.com.png" },
                    { text: "MI", url: "/teams", logo: "https://seeklogo.com/images/I/ipl-mumbai-indians-logo-5FD6E24965-seeklogo.com.png" },
                    { text: "KXIP", url: "/teams", logo: "https://seeklogo.com/images/I/ipl-kings-xi-punjab-logo-6747D5C02B-seeklogo.com.png" },
                    { text: "RR", url: "/teams", logo: "https://seeklogo.com/images/I/ipl-rajasthan-royals-logo-F69DDCEF15-seeklogo.com.png" },
                    { text: "KKR", url: "/teams", logo: "https://seeklogo.com/images/I/ipl-kolkata-knight-riders-logo-23993E9646-seeklogo.com.png" },
                    { text: "GT", url: "/teams", logo: "https://seeklogo.com/images/G/gujarat-titans-ipl-logo-6962504B75-seeklogo.com.png" },

                ];

                const formattedTeams = data.map((team: any) => ({
                    text: team.text,
                    url: "/teams",
                    logo: team.logo,
                }));

                setTeams(formattedTeams);
            } catch (error) {
                console.error("Error fetching teams:", error);
            }
        };

        fetchTeams();
    }, [league]);

    const handleChange = (event: SelectChangeEvent) => {
        setLeague(event.target.value);
    };

    return (
        <div className="w-full mt-3 flex flex-col justify-center">
            <Container className="flex justify-between">
                <h2 className="text-md font-semibold mb-3 text-[#074799]">All Teams</h2>
                <div>
                    <FormControl sx={{ minWidth: 120 }} size="small">
                        <Select value={league} onChange={handleChange}>
                            <MenuItem value="IPL">IPL</MenuItem>
                            <MenuItem value="International">International</MenuItem>
                            <MenuItem value="WCL">WCL</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Container>
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-4 gap-4 p-2">
                {teams.map((team, index) => (
                    <><a key={index} href={team.url} className="flex flex-col items-center gap-2">
                        <button className="border-[#074799] border-[1.5px] flex rounded-[0.5rem] items-center justify-center gap-2 bg-[#FFFFFF] text-white px-4 py-4 shadow-md transition duration-200 hover:bg-[#063a7d]">
                            <div className="w-8 h-8 flex justify-center items-center">
                                <img src={team.logo} alt={team.text} className="w-full h-full object-contain" />
                            </div>
                        </button>
                        <span className="text-sm font-semibold">{team.text}</span>
                    </a></>
                ))}
            </div>
        </div>
    );
};

export default AllTeams;
