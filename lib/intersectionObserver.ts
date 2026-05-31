type ObserverCallback = () => void;
const observerMap = new WeakMap<Element, ObserverCallback>();
let sharedObserver: IntersectionObserver | null = null;

export const observeElement = (element: Element, callback: ObserverCallback) => {
  if (typeof window === "undefined") return;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = observerMap.get(entry.target);
            if (cb) { cb(); observerMap.delete(entry.target); }
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  observerMap.set(element, callback);
  sharedObserver.observe(element);
};

export const unobserveElement = (element: Element) => {
  if (sharedObserver) {
    sharedObserver.unobserve(element);
    observerMap.delete(element);
  }
};