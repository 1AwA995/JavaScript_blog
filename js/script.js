"use strict";

/* document.getElementById("test-button").addEventListener("click", function () {
  const links = document.querySelectorAll(".titles a");
  console.log("links:", links);
});*/

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log("Link was clicked!");

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */

  clickedElement.classList.add("active");
  console.log("clickedElement:", clickedElement);

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll(".posts article.active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* [IN PROGRESS] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute("href");

  console.log({ articleSelector });

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */
  targetArticle.classList.add("active");
};

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles",
  optTagLinkSelector = ".post-tags a",
  optAuthorSelector = "post-author",
  optArticleTagsSelector = ".post-tags .list",
  optTagsListSelector = ".tags.list";

function generateTitleLinks(customSelector = "") {
  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = "";

  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );

  console.log("customSelector", customSelector);

  let html = "";

  /* for each article */
  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute("id");
    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */

    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      "</span></a></li>";

    console.log({ linkHTML });
    /* insert link into titleList */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll(".titles a");

  console.log("links", links);

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    tagsWrapper.innerHTML = "";
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute("data-tags");
    console.log({ articleTags });
    /* split tags into array */
    const articleTagsArray = articleTags.split(" ");
    console.log("articleTagsArray", articleTagsArray);
    /* START LOOP: for each tag */
    let html = "";
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHtml = '<li><a href="#tag-' + tag + '">' + tag + "</a></li>";
      console.log({ linkHtml });
      /* add generated code to html varisable */
      html = html + linkHtml;
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute("href");
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace("#tag-", "");
  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let tagLink of activeTagLinks) {
    /* remove class active */
    tagLink.classList.remove("active");
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const allTagsLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let tagLink of allTagsLinks) {
    /* add class active */
    tagLink.classList.add("active");
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  const links = document.querySelectorAll(optTagLinkSelector);
  /* START LOOP: for each link */
  for (let link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener("click", tagClickHandler);
    /* END LOOP: for each link */
  }
}

function generateAuthor() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const authorWrapper = article.querySelector(optAuthorSelector);
    /* make html variable with empty string */
    authorWrapper.innerHTML = "";
    /* get tags from data-tags attribute */
    const articleAuthor = article.getAttribute("data-author");

    /* generate HTML of the link */
    const linkHtml =
      '<a href="#author-' + articleAuthor + '">' + articleAuthor + "</a>";

    /* insert HTML of all the links into the tags wrapper */
    authorWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
}

addClickListenersToTags();

function generateArray() {
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = [];

  /* find all articles */

  /* START LOOP: for every article: */

  /* find tags wrapper */

  /* make html variable with empty string */

  /* get tags from data-tags attribute */

  /* split tags into array */

  /* START LOOP: for each tag */

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* [NEW] check if this link is NOT already in allTags */
  if (allTags.indexOf(linkHTML) == -1) {
    /* [NEW] add generated code to allTags array */
    allTags.push(linkHTML);
  }

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);

  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTags.join(" ");
}

generateArray();
