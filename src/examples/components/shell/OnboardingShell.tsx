import { useOnboarding } from "@/examples/hooks/useOnboarding";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { ProgressIndicator } from "./ProgressIndicator";
import { ShellFooter } from "./ShellFooter";
import { ShellHeader } from "./ShellHeader";

interface OnboardingShellProps {
  children: React.ReactNode;
  showProgress?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function OnboardingShell({
  children,
  showProgress = true,
  showHeader = true,
  showFooter = true,
}: OnboardingShellProps) {
  const { currentStepIndex, totalSteps } = useOnboarding();

  return (
    <div
      data-testid="shell-container"
      className="flex flex-col min-h-dvh w-full max-w-[428px] mx-auto bg-background"
      style={{ overflowX: "hidden" }}
    >
      {showHeader && <ShellHeader />}

      {showProgress && (
        <ProgressIndicator current={currentStepIndex} total={totalSteps} />
      )}

      <main
        data-testid="shell-content"
        className="flex-1 overflow-y-auto w-full"
        style={{
          padding: "clamp(16px, 4vw, 24px)",
        }}
      >
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </main>

      {showFooter && <ShellFooter />}
    </div>
  );
}
