import {
  Check,
  X,
  ShieldCheck,
  RefreshCw,
  Gauge,
  FilePen,
  Headphones,
} from "lucide-react";

interface AnimatedIconProps {
  className?: string;
}

export function AnimatedCheckIcon({ className }: AnimatedIconProps) {
  return <Check className={className} />;
}

export function AnimatedXIcon({ className }: AnimatedIconProps) {
  return <X className={className} />;
}

export function AnimatedShieldCheckIcon({ className }: AnimatedIconProps) {
  return <ShieldCheck className={className} />;
}

export function AnimatedRefreshCwIcon({ className }: AnimatedIconProps) {
  return <RefreshCw className={className} />;
}

export function AnimatedGaugeIcon({ className }: AnimatedIconProps) {
  return <Gauge className={className} />;
}

export function AnimatedFilePenLineIcon({ className }: AnimatedIconProps) {
  return <FilePen className={className} />;
}

export function AnimatedHeadphonesIcon({ className }: AnimatedIconProps) {
  return <Headphones className={className} />;
}