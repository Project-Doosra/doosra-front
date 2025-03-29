// pages/index.js
"use client";
import React, { useState } from "react";
import kkrlogo from "../../../../public/kkrlogo.png";
import Image from "next/image";
import { MatchHeader } from "@/app/components/livescore/MatchInfo";
import {
  CommentaryTab,
  OverviewTab,
  PointsTab,
  ScorecardTab,
} from "@/app/components/livescore/LiveMatchStats";
export default function SportsScoreInterface() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Overview", "Scorecard", "Commentary", "Points"];

  // Sample match data
  const matchData: any = {
    team1: {
      code: "RCB",
      name: "Royal Challengers Bangalore",
      score: "157/7",
      overs: "(20)",
    },
    team2: {
      code: "KKR",
      name: "Kolkata Knight Riders",
      score: "",
      overs: "(0)",
    },
    overview: {
      batting: [
        {
          name: "V Kohli",
          runs: 50,
          balls: 40,
          fours: 4,
          sixes: 2,
          sr: 125.0,
        },
        {
          name: "F du Plessis",
          runs: 73,
          balls: 41,
          fours: 8,
          sixes: 3,
          sr: 178.05,
        },
        {
          name: "G Maxwell",
          runs: 13,
          balls: 8,
          fours: 1,
          sixes: 1,
          sr: 162.5,
        },
        {
          name: "D Conway",
          runs: 5,
          balls: 5,
          fours: 0,
          sixes: 0,
          sr: 100.0,
        },
        {
          name: "CA Lynn",
          runs: 3,
          balls: 3,
          fours: 0,
          sixes: 0,
          sr: 100.0,
        },
      ],
      bowling: [
        {
          name: "S Gill",
          overs: 4,
          maidens: 0,
          runs: 35,
          wickets: 2,
          er: 8.75,
        },
        {
          name: "Varun C",
          overs: 4,
          maidens: 0,
          runs: 29,
          wickets: 1,
          er: 7.25,
        },
        {
          name: "S Narine",
          overs: 4,
          maidens: 0,
          runs: 30,
          wickets: 0,
          er: 7.5,
        },
      ],
    },
    fantasyPoints: [
      { name: "V Kohli", team: "RCB", points: 150 },
      { name: "F du Plessis", team: "RCB", points: 125 },
      { name: "G Maxwell", team: "RCB", points: 120 },
      { name: "V Iyer", team: "KKR", points: 110 },
      { name: "R Singh", team: "KKR", points: 100 },
      { name: "A Russell", team: "KKR", points: 95 },
      { name: "N Rana", team: "KKR", points: 90 },
      { name: "S Narine", team: "KKR", points: 85 },
    ],
  };

  return (
    <div className="bg-[#dff0f8] min-h-screen font-inter">
      <div className=" rounded-md">
        <MatchHeader />

        {/* Inner Tab Navigation */}
        <div className="flex mb-2  space-x-1 px-2 pt-2">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={` rounded-full text-xs flex items-center justify-center p-2 py-1  flex-1 ${
                activeTab === index ? "bg-blue-600" : "bg-white text-black"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className=" p-2  text-black bg-white rounded-2xl text-base mx-2">
        {activeTab === 0 && <OverviewTab matchData={matchData} />}
        {activeTab === 1 && <ScorecardTab matchData={matchData} />}
        {activeTab === 2 && <CommentaryTab matchData={matchData} />}
        {activeTab === 3 && <PointsTab matchData={matchData} />}
      </div>
    </div>
  );
}
