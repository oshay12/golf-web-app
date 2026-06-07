'use client";'

import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {

  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 px-4">
      
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
        Welcome back, {data.user.email} 👋
      </h1>

      {/* Buttons container */}
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
        
        <Link
          href="/tournaments/create"
          className="flex-1 text-center rounded-2xl bg-blue-600 hover:bg-blue-500 transition px-6 py-4 font-medium shadow-lg"
        >
          Create Tournament
        </Link>

        <Link
          href="/tournaments/join"
          className="flex-1 text-center rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition px-6 py-4 font-medium border border-white/10"
        >
          Join Tournament
        </Link>

      </div>
    </div>
  );
}