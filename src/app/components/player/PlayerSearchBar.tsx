"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineSparkles } from "react-icons/hi2";

interface PlayerSearchBarProps {
  type: "basic" | "full";
  placeholder?: string;
}

// Use type prop to render different search bar styles
export default function PlayerSearchBar({ type, placeholder }: PlayerSearchBarProps) {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handlePlayerSearch = () => {
    if (!searchText.trim()) return;
    const query = searchText.trim().replace(/\s+/g, "-");
    router.push(`/search/${query}`);
  };
  return (
    <div className="search-bar-container">
      {type === "full" && (
        <>
          <div className="basic-search-bar relative">
            <div className="relative w-full">
              <input
                type="text"
                className=" border-black border-2 rounded-[0.5rem] bg-[#FFFFFF] !shadow-[0_4px_4px_rgba(0,0,0,0.25)] pl-20 left-20 pr-48 py-10 text-lg text-black placeholder-transparent focus:outline focus:outline-blue-500 w-full"
                value={searchText}
                onFocus={(e) => setSearchText(" ")}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              {!searchText && (
                <div className="absolute left-20 top-1/2 transform -translate-y-1/2 text- pointer-events-none">
                  <span className="font-semibold">
                    Search players, predictions, teams, etc.
                  </span>
                  <p className="text-xs">
                    Try: Compare Kohli vs Smith last 5 matches
                  </p>
                </div>
              )}
            </div>

            <div className="absolute left-8 top-1/2 -translate-y-1/2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </>
      )}
      {type === "basic" && (
        <div className="basic-search-bar relative">
          <input
            type="text"
            placeholder={
              placeholder || "Search any player"
            }
            value={searchText}
            onFocus={(e) => setSearchText(" ")}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlePlayerSearch()}
            className="border-black border-2 rounded-[0.9rem] bg-[#FFFFFF] pl-6 font-semibold pr-48 py-2 text-sm text-black placeholder-gray-600 focus:outline focus:outline-blue-300 w-full"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
