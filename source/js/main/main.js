const showFullInfo = project => {
  project.classList.add(`project--full`);
  project
    .querySelector(`.project__info`)
    .classList.remove(`project__info--hide`);
};

const hideFullInfo = project => {
  project.classList.remove(`project--full`);
  project.querySelector(`.project__info`).classList.add(`project__info--hide`);
};

const handleProjectMouseEvent = () => {
  document.querySelectorAll(`.project`).forEach(project => {
    project.addEventListener(`mouseenter`, () => {
      showFullInfo(project);
    });
    project.addEventListener(`mouseleave`, () => {
      hideFullInfo(project);
    });
  });
};

handleProjectMouseEvent();
