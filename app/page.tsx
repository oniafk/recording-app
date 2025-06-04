import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import { recentSessions } from "@/constants";
import React from "react";

const Page = async () => {
  const { userId } = await auth();

  return (
    <main>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl underline">Popular Companions</h1>
        <SignedIn>
          <p className="text-sm text-gray-600">
            Welcome back! User ID: {userId}
          </p>
        </SignedIn>
        <SignedOut>
          <p className="text-sm text-gray-600">
            Sign in to access personalized features
          </p>
        </SignedOut>
      </div>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network"
          subject="science"
          duration={30}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Neura the Brainy Explorer"
          topic="Neural Network"
          subject="science"
          duration={30}
          color="#ffda6e"
        />
        <CompanionCard
          id="678"
          name="Neura the Brainy Explorer"
          topic="Neural Network"
          subject="science"
          duration={30}
          color="#ffda6e"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full "
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
