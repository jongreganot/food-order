import $ from "jquery";

export function setLinkBehavior() {
  $(".navbar-item").on("click", (event) => {
    let parent = event.target.parentElement;
    let currentActiveLink = parent.querySelector(".active");
    $(currentActiveLink).removeClass("active");

    let self = event.target;
    $(self).addClass("active");
  });
}
