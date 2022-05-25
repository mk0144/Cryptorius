// variables
const menu_icon = document.getElementById("menu_icon");
const header = document.getElementById("header");
const header_menu = document.getElementById("header_menu");

// sections
const works = document.getElementById("works");
const features = document.getElementById("features");
const timeline = document.getElementById("timeline");
const team = document.getElementById("team");
const apps = document.getElementById("apps");
const faq = document.getElementById("faq");
const contact = document.getElementById("contact");
// \sections

// faq
let faq_tabs = document.getElementsByClassName("faq_tab");
let faq_tab_contents = document.getElementsByClassName("faq_tab_content");
let box_contents = document.getElementsByClassName("box_content");
let faq_boxes = document.getElementsByClassName("faq_box");

faq_tabs[0].classList.add("active");
faq_tab_contents[0].style.display = "block";
// \faq
// \variables

// menu toggle
function menuToggle() {
  header_menu.classList.toggle("header_menu_show");
}
// \menu toggle

// onScroll anim
window.onscroll = function () {
  documentTopVal = window.scrollY;
  let minusVal = 700;
  let worksTopVal = works.offsetTop;
  let featuresTopVal = features.offsetTop;
  let timelineTopVal = timeline.offsetTop;
  let teamTopVal = team.offsetTop;
  let appsTopVal = apps.offsetTop;
  let faqTopVal = faq.offsetTop;
  let contactTopVal = contact.offsetTop;

  headerAnim();

  if (documentTopVal > worksTopVal - minusVal) {
    sectionAnim(works, worksTopVal, "lr_anim");
  }
  if (documentTopVal > featuresTopVal - minusVal) {
    sectionAnim(features, featuresTopVal, "col_anim");700
  }
  if (documentTopVal > timelineTopVal - minusVal) {
    sectionAnim(timeline, timelineTopVal, "bottom_anim");
  }
  if (documentTopVal > teamTopVal - minusVal) {
    sectionAnim(team, teamTopVal, "col_anim");
  }
  if (documentTopVal > appsTopVal - minusVal) {
    sectionAnim(apps, appsTopVal, "lr_anim");
  }
  if (documentTopVal > faqTopVal - minusVal) {
    sectionAnim(faq, faqTopVal, "lr_anim");
  } if (documentTopVal > contactTopVal - minusVal) {
    sectionAnim(contact, contactTopVal, "bottom_anim");
  }
};
// section anim
function sectionAnim(section, sectionTopVal, bottom_anim) {
  section.classList.add("heading_anim");
  if (documentTopVal > sectionTopVal - 400) {
    section.classList.add(bottom_anim);
  }
}
// \section anim

// header anim
function headerAnim() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 2) {
    header.classList.add("header_scroll");
  } else if (
    document.body.scrollTop > 0 ||
    document.documentElement.scrollTop === 0
  ) {
    header.classList.remove("header_scroll");
  }
}
// \header anim
// onScroll anim

// faq
function onTabChange(index) {
  for (i = 0; i < faq_tabs.length; i++) {
    faq_tabs[i].classList.remove("active");
    faq_tab_contents[i].style.display = "none";
  }

  faq_tabs[index].classList.add("active");
  faq_tab_contents[index].style.display = "block";
}

function onFaqTabToggle(index) {
  let item = box_contents[index];
  let box = faq_boxes[index];

  for (i = 0; i < box_contents.length; i++) {
    box_contents[i].style.height = "0";
    faq_boxes[i].classList.remove("box_active");
  }

  if (item.offsetHeight === 0) {
    item.style.height = item.scrollHeight + "px";
    box.classList.add("box_active");
  } else {
    item.style.height = "0px";
    box.classList.remove("box_active");
  }
}
// \faq
