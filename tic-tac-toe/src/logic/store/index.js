export const saveStorageData = (boardToSave, turnToSave) => {
  localStorage.setItem("board", JSON.stringify(boardToSave));
  localStorage.setItem("turn", turnToSave);
};

export const resetStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
