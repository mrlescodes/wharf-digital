import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

export function useLockBodyScroll(isLocked: boolean) {
  useIsomorphicLayoutEffect(() => {
    // Store the original overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      // Apply scroll lock
      document.body.style.overflow = "hidden";
    } else {
      // Restore original style
      document.body.style.overflow = originalStyle;
    }

    // Clean up by restoring original style on component unmount
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}
