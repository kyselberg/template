import { motion } from 'framer-motion';
import { OnboardingShell } from '@/examples/components/shell/OnboardingShell';
import { HeroStep } from '@/examples/components/steps/HeroStep';
import { Button } from '@/examples/components/ui/Button';
import { useOnboarding } from '@/examples/hooks/useOnboarding';
import { animations } from '@/examples/utils/animations';

export default function WelcomePage() {
  const { nextStep } = useOnboarding();

  return (
    <OnboardingShell>
      <motion.div
        data-testid="screen-welcome"
        variants={animations.pageSlide}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center min-h-full w-full"
        style={{
          gap: 'clamp(16px, 4vh, 32px)',
          padding: 'clamp(16px, 4vw, 24px) 0',
        }}
      >
        <HeroStep
          imageSrc="/vite.svg" 
          imageAlt="Welcome illustration"
          title="Welcome to App"
          subtitle="Get started in just a few steps with our mobile-first onboarding experience."
        />
        
        <div className="w-full mt-8">
            <Button onClick={nextStep}>
                Get Started
            </Button>
        </div>
      </motion.div>
    </OnboardingShell>
  );
}
