// Kept in memory so a fresh page load still gets the welcome intro.
export const homeNavigation = { scrollY: null as number | null };

export function rememberHomePosition() {
  homeNavigation.scrollY = window.scrollY;
}
