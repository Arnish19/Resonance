import { SignIn } from "@clerk/nextjs";
import { Sign } from "crypto";

export default function SignInPage() {
    return (
        <div className="flex min-h-screen items-center justify-center
        bg-background">
            <SignIn
              appearance={{
                elements: {
                    rootBox: "mx-auto",
                    card: "shadow-lg",
                },
              }}
            />
        </div>
    );
}