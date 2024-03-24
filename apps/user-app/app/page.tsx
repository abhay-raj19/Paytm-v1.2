"use client";

import { useBalance } from "@repo/store/useBalance";

export default function() {
  const balance = useBalance();
  return <div className="flex justify-center items-center h-screen">
    hi there {balance}
  </div>
}
