import {
  Briefcase,
  Building2,
  Compass,
  DoorOpen,
  Handshake,
  HeartCrack,
  History,
  Coins,
  Lightbulb,
  Mail,
  MapPin,
  Milestone,
  Monitor,
  MoreHorizontal,
  Phone,
  RefreshCw,
  Scale,
  Scroll,
  ShieldCheck,
  UserCheck,
  UsersRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

export const iconRegistry = {
  "heart-crack": HeartCrack,
  users: Users,
  "users-round": UsersRound,
  scroll: Scroll,
  history: History,
  "building-2": Building2,
  coins: Coins,
  "more-horizontal": MoreHorizontal,
  briefcase: Briefcase,
  handshake: Handshake,
  milestone: Milestone,
  "refresh-cw": RefreshCw,
  "door-open": DoorOpen,
  scale: Scale,
  "shield-check": ShieldCheck,
  "user-check": UserCheck,
  compass: Compass,
  lightbulb: Lightbulb,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  monitor: Monitor,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconRegistry;

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Component = iconRegistry[name];
  return (
    <Component
      className={cn("h-6 w-6", className)}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}
