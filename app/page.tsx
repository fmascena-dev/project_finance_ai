'use client'

import { Button } from "./_components/ui/button";

export default function Home() {
  const message = "Welcome to Finance AI!";

  return (
    <div>
      <h1 className="p-5 text-3xl font-bold text-red-500 underline">Home</h1>
      <Button variant="default" onClick={() => alert(message)}>
        Primary Button
      </Button>
    </div>
  );
}
