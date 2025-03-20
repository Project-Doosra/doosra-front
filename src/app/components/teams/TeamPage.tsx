"use client";
import { useState } from "react";
import PlayerHeader from "./PlayerHeader";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      className={`px-4 py-2 text-sm ${
        isActive ? "text-white" : "text-gray-400"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default function TeamPage({ team }: any) {
  const tabs = ["Current form", "Career Stats", "More information"];
  const [activeTab, setActiveTab] = useState("Current form");

  return (
    <div className="min-h-screen bg-black text-white">
      <PlayerHeader player={team} />

      {/* Collapsible Sections */}
      <div className="mt-4 bg-white rounded-t-xl">
        {/* {tabs.map((tab, i) => (
          <div key={i} onClick={() => setActiveTab(tab)}>
            <CollapsibleSection key={i} isOpen={tab == activeTab} title={tab}>
              <StatsTable />
            </CollapsibleSection>
          </div>
        ))} */}
        <CollapsibleSection title={"Current form"}>
          <StatsTable />
        </CollapsibleSection>
        <CollapsibleSection title={"Carrer Stats"}>
          <StatsTable />
        </CollapsibleSection>
        <CollapsibleSection title={"More information"}>
          <StatsTable />
        </CollapsibleSection>
      </div>
    </div>
  );
}

function CollapsibleSection({
  title,
  children,
}: // isOpen = false,
{
  title: string;
  children: React.ReactNode;
  // isOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-white  text-black border-[#074799] border-t-4 rounded-t-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-2xl px-4 py-3 flex  items-center"
      >
        <span className="material-icons">
          {isOpen ? "expand_less" : "expand_more"}
        </span>
        <span className="font-bold">{title}</span>
      </button>
      <div
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] " : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

const StatsTable = () => {
  // Define Tabs
  const tabs = ["IPL", "T20-I", "ODI", "Test"];
  const [activeTab, setActiveTab] = useState("IPL");

  // Dummy Stats Data (Replace with API data if needed)
  const stats: any = {
    IPL: {
      batting: [
        {
          type: "Overall",
          Mat: 115,
          Inns: 115,
          Runs: 115,
          SR: 115,
          "50s": 115,
          "100s": 115,
          NO: 115,
          HS: 115,
        },
        {
          type: "At home",
          Mat: 115,
          Inns: 115,
          Runs: 115,
          SR: 115,
          "50s": 115,
          "100s": 115,
          NO: 115,
          HS: 115,
        },
        {
          type: "Away",
          Mat: 115,
          Inns: 115,
          Runs: 115,
          SR: 115,
          "50s": 115,
          "100s": 115,
          NO: 115,
          HS: 115,
        },
      ],
      bowling: [
        {
          type: "Overall",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
        {
          type: "At home",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
        {
          type: "Away",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
      ],
    },
    // Add similar data for T20-I, ODI, Test if needed
    "T20-I": {
      batting: [
        {
          type: "Overall",
          Mat: 120,
          Inns: 120,
          Runs: 120,
          SR: 120,
          "50s": 120,
          "100s": 120,
          NO: 120,
          HS: 120,
        },
        {
          type: "At home",
          Mat: 120,
          Inns: 120,
          Runs: 120,
          SR: 120,
          "50s": 120,
          "100s": 120,
          NO: 120,
          HS: 120,
        },
        {
          type: "Away",
          Mat: 120,
          Inns: 120,
          Runs: 120,
          SR: 120,
          "50s": 120,
          "100s": 120,
          NO: 115,
          HS: 115,
        },
      ],
      bowling: [
        {
          type: "Overall",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
        {
          type: "At home",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
        {
          type: "Away",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
      ],
    },
    ODI: {
      batting: [
        {
          type: "Overall",
          Mat: 115,
          Inns: 115,
          Runs: 115,
          SR: 115,
          "50s": 115,
          "100s": 115,
          NO: 115,
          HS: 115,
        },
        {
          type: "At home",
          Mat: 115,
          Inns: 115,
          Runs: 115,
          SR: 115,
          "50s": 115,
          "100s": 115,
          NO: 115,
          HS: 115,
        },
        {
          type: "Away",
          Mat: 115,
          Inns: 115,
          Runs: 115,
          SR: 115,
          "50s": 115,
          "100s": 115,
          NO: 115,
          HS: 115,
        },
      ],
      bowling: [
        {
          type: "Overall",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
        {
          type: "At home",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
        {
          type: "Away",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
      ],
    },
    Test: {
      batting: [
        {
          type: "Overall",
          Mat: 115,
          Inns: 115,
          Runs: 115,
          SR: 115,
          "50s": 115,
          "100s": 115,
          NO: 115,
          HS: 115,
        },
        {
          type: "At home",
          Mat: 115,
          Inns: 115,
          Runs: 115,
          SR: 115,
          "50s": 115,
          "100s": 115,
          NO: 115,
          HS: 115,
        },
        {
          type: "Away",
          Mat: 115,
          Inns: 115,
          Runs: 115,
          SR: 115,
          "50s": 115,
          "100s": 115,
          NO: 115,
          HS: 115,
        },
      ],
      bowling: [
        {
          type: "Overall",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
        {
          type: "At home",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
        {
          type: "Away",
          Mat: 115,
          Ovrs: 115,
          Runs: 115,
          Wkt: 115,
          Mdn: 115,
          BBI: 115,
          "5w": 115,
          Eco: 115,
        },
      ],
    },
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg ">
      {/* Tabs */}
      <div className="flex justify-center mb-3">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-4  py-2 text-sm font-medium  ${
              activeTab === tab
                ? "bg-[#074799] text-white"
                : "bg-gray-200 text-gray-700"
            }  ${
              i === 0
                ? "rounded-l-xl"
                : i === tabs.length - 1
                ? "rounded-r-xl"
                : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border  border-gray-300 text-sm">
          <thead>
            <tr className="bg-[#074799] text-white">
              <th className="px-3 py-2 text-left ">Batting</th>
              <th className="px-3 py-2">Mat</th>
              <th className="px-3 py-2">Inns</th>
              <th className="px-3 py-2">Runs</th>
              <th className="px-3 py-2">SR</th>
              <th className="px-3 py-2">50s</th>
              <th className="px-3 py-2">100s</th>
              <th className="px-3 py-2">NO</th>
              <th className="px-3 py-2">HS</th>
            </tr>
          </thead>
          <tbody>
            {stats[activeTab].batting.map((row: any, index: any) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}
              >
                <td className="px-3 py-2 font-medium bg-none">{row.type}</td>
                <td className="px-3 py-2">{row.Mat}</td>
                <td className="px-3 py-2">{row.Inns}</td>
                <td className="px-3 py-2">{row.Runs}</td>
                <td className="px-3 py-2">{row.SR}</td>
                <td className="px-3 py-2">{row["50s"]}</td>
                <td className="px-3 py-2">{row["100s"]}</td>
                <td className="px-3 py-2">{row.NO}</td>
                <td className="px-3 py-2">{row.HS}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="w-full border border-gray-300 text-sm mt-3">
          <thead>
            <tr className="bg-[#074799] text-white">
              <th className="px-3 py-2 text-left">Bowling</th>
              <th className="px-3 py-2">Mat</th>
              <th className="px-3 py-2">Ovrs</th>
              <th className="px-3 py-2">Runs</th>
              <th className="px-3 py-2">Wkt</th>
              <th className="px-3 py-2">Mdn</th>
              <th className="px-3 py-2">BBI</th>
              <th className="px-3 py-2">5w</th>
              <th className="px-3 py-2">Eco</th>
            </tr>
          </thead>
          <tbody>
            {stats[activeTab].bowling.map((row: any, index: any) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}
              >
                <td className="px-3 py-2 font-medium">{row.type}</td>
                <td className="px-3 py-2">{row.Mat}</td>
                <td className="px-3 py-2">{row.Ovrs}</td>
                <td className="px-3 py-2">{row.Runs}</td>
                <td className="px-3 py-2">{row.Wkt}</td>
                <td className="px-3 py-2">{row.Mdn}</td>
                <td className="px-3 py-2">{row.BBI}</td>
                <td className="px-3 py-2">{row["5w"]}</td>
                <td className="px-3 py-2">{row.Eco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
