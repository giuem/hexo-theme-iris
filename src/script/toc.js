export default function() {
  // only on post page
  if (!document.querySelector(".post")) return;

  const headingTocLinks = document.querySelectorAll(".post-toc a");
  let lastVisibleHeadingTocLink = null;

  const intersectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const href = entry.target.getAttribute("href");
        const headingTocLink = document.querySelector(
          `.post-toc a[href="${href}"]`
        );
        if (!headingTocLink) return;

        if (entry.intersectionRatio > 0) {
          headingTocLink.classList.add("is-visible");
          lastVisibleHeadingTocLink = headingTocLink;
        } else {
          headingTocLink.classList.remove("is-visible");
        }
      });

      // remove all active link
      headingTocLinks.forEach(el => el.classList.remove("active"));

      // find first visible link or last visible link
      const [
        activeHeadingTocLink = lastVisibleHeadingTocLink
      ] = document.querySelectorAll(".is-visible");
      if (activeHeadingTocLink) {
        activeHeadingTocLink.classList.add("active");
      }
    },
    {
      rootMargin: "0px",
      threshold: 1.0
    }
  );

  document
    .querySelectorAll(".post .headerlink")
    .forEach(el => intersectionObserver.observe(el));
}
