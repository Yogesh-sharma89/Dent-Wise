import { Button } from "@/components/ui/button";

import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="p-5">
      <h2>Home page</h2> <br/>
      <SignedOut>
        <SignUpButton mode="modal">
          <Button className="cursor-pointer">Sign up</Button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
          <Button>Logout</Button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
