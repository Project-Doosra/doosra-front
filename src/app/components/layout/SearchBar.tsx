import React from "react";

interface SearchBarProps {
  type: "basic" | "full";
  placeholder?: string;
}

// Use type prop to render different search bar styles
export default function SearchBar({ type, placeholder }: SearchBarProps) {
  return (
    <div className="search-bar-container">
      {type === "full" && (
        <h3 className="text-[#FFB800] text-xs flex items-center gap-1 mb-2">
          Featured AI search <span>✨</span>
        </h3>
      )}
      <div className="basic-search-bar relative">
        <input
          type="text"
          placeholder={placeholder || "Search players, predictions, teams etc."}
          className="rounded-[0.5rem] bg-[#FFFFFF] !shadow-[0_4px_4px_rgba(0,0,0,0.25)] pl-12 pr-48 py-2 text-sm text-black placeholder-gray-800 focus:outline focus:outline-blue-500"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
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
    </div>
  );
}