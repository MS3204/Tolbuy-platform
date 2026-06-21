import logoSrc from "@/assets/tolbuy-logo.svg";

interface Props {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

/** Brand logo. Image asset extracted from the supplied logo file. */
export function Logo({
  size = 28,
  withWordmark = true,
  className = "",
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src={logoSrc}
        alt="TolBuy logo"
        width={size}
        height={size}
        className="object-contain drop-shadow-[0_0_12px_oklch(0.55_0.18_245/0.45)]"
        style={{ width: size, height: size }}
      />
      {withWordmark && (
        <span className="font-display font-bold tracking-tight text-lg">
          Tol<span className="text-gradient-brand">Buy</span>
        </span>
      )}
    </span>
  );
}
