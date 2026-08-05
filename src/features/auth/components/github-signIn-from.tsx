"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { signInWithGithub } from "../actions";

export function GitHubIcon() {
  return (
    <Image
      src="/github.png"
      alt="GitHub"
      width={16}
      height={16}
      className="size-4"
    />
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  let buttonLabel = "Continue with GitHub";
  let buttonIcon = <GitHubIcon />;
  if (pending) {
    buttonLabel = "Redirecting to GitHub…";
    buttonIcon = <Spinner className="size-4" />;
  }
  return (
    <Button type="submit" className={"w-full"} size={"lg"} disabled={pending}>
      {buttonIcon}
      {buttonLabel}
    </Button>
  );
}
type GithubSignInFormProps = {
  callbackUrl?: string;
};

const GitHubSignInForm = ({ callbackUrl }: GithubSignInFormProps) => {
  return (
    <form action={signInWithGithub} className="w-full">
      {callbackUrl ? (
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
      ) : null}
      <SubmitButton />
    </form>
  );
};

export default GitHubSignInForm;
