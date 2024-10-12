import { useEffect } from 'react';

type RefType = React.RefObject<HTMLElement>;
type HandlerType = (event: MouseEvent | TouchEvent) => void;

const useOutsideClick = (
  ref: RefType,
  handler: HandlerType,
  ignoreSelectors: string[] = [],
) => {
  const listener = (event: MouseEvent | TouchEvent) => {
    const shouldBeIgnored =
      Array.isArray(ignoreSelectors) &&
      ignoreSelectors.some(
        (selector) => !!(event.target as Element)?.closest(selector),
      );

    if (shouldBeIgnored) {
      return;
    }

    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler(event);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, ignoreSelectors]); // Add dependencies
};

export default useOutsideClick;
