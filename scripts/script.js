/* Create intersection observer for timeline */

let timelineArticles = document.querySelectorAll('.timelineArticle');

let observer = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
    },
    {
        threshold: .9,
    }
);

timelineArticles.forEach(timelineArticle => {
    observer.observe(timelineArticle);
});
  
