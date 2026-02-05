"use client";

import Link from "next/link";
import { FiUser, FiLogOut, FiLoader, FiLock } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const { status, data } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogOut() {
    await signOut();
  }
  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
            <span className="text-blue-500">DEV </span>CONTROLE
          </h1>
        </Link>

        {status === "loading" && (
          <button>
            <FiLoader size={26} color="#4b5563" className="animate-spin" />
          </button>
        )}

        {status === "unauthenticated" && (
          <button>
            <FiLock
              size={26}
              color="#4b5563"
              onClick={handleLogin}
              className="cursor-pointer"
            />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex items-baseline gap-4 cursor-pointer">
            <Link href="/dashboard">
              <FiUser size={26} color="#4b5563" />
            </Link>

            <button>
              <FiLogOut
                size={26}
                color="#4b5563"
                onClick={handleLogOut}
                className="cursor-pointer"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
