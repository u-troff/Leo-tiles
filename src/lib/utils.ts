export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}
