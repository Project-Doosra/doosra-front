"use client"
import { useEffect, useState } from "react";
import { getBaseUrl } from "@/lib/utils";

async function getSearch(id: string) {
  const res = await fetch(`${getBaseUrl()}/api/players/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch player");
  }
  return res.json();
}
interface SearchResultProps {
  params: Promise<{ query: string }>;
}
export default async function SearchResults({ params }: SearchResultProps) {
  const { query } = await params;
  const result = await getSearch(query);
  return (
    <main className="min-h-screen bg-[#F5F9FC] text-[#1E1E1E] p-4">
      <h1 className="text-2xl font-bold text-[#074799]">Search Results for "{query}"</h1>
      <div dangerouslySetInnerHTML={{ __html: result || "No results found." }} />
    </main>
  );
}
