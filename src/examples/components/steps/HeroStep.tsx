interface HeroStepProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
}

export function HeroStep({ imageSrc, imageAlt, title, subtitle }: HeroStepProps) {
  return (
    <div className="flex flex-col items-center w-full" style={{ gap: 'clamp(16px, 3vh, 24px)' }}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full object-contain"
        style={{
          maxWidth: 'min(75vw, 280px)',
          height: 'auto',
          aspectRatio: '1',
        }}
      />
      <h1
        className="text-center font-bold"
        style={{
          fontSize: 'clamp(28px, 8vw, 32px)',
          lineHeight: '1.2',
          maxWidth: '90vw',
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="text-center"
          style={{
            fontSize: 'clamp(15px, 4vw, 16px)',
            color: 'var(--color-text-secondary)',
            maxWidth: '85vw',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
