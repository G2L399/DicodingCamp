import { articlesData } from "./articlesData.js";

const renderHomePage = () => {
  const content = document.getElementById("content");
  const articles = articlesData
    .map(
      (article) => `
          <article>
            <header>
                <a href="${article.href}" target="_blank" style="width: fit-content">
                  <h2>${article.title}</h2>
                </a>
            </header>
            <div class="main-content">
                <p>${article.content}</p>
                <aside>
                  <a href="${article.localHref}">
                      <img class="content-image" src="${article.imageSrc}" alt="${article.imageAlt}" />
                  </a>
                </aside>
            </div>
          </article>
  `
    )
    .join("");
  content.innerHTML = `
      ${articles}
  `;
};

renderHomePage();
