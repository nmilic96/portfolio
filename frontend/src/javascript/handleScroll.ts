export default function handleScroll() {
  const heroSection: HTMLElement | null = document.querySelector("#static-image");
  const body: HTMLElement | null = document.querySelector("body");

  const observer: IntersectionObserver = new IntersectionObserver(
    ([entry]: IntersectionObserverEntry[]) => {
      if (!entry.isIntersecting) {
        body?.classList.add("hero-not-in-view");
      } else {
        body?.classList.remove("hero-not-in-view");
      }
    },
    {
      rootMargin: "-200px 0px 0px 0px",
    }
  );

  if (heroSection) observer.observe(heroSection);
}