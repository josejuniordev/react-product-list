export const delay = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

export const onlyNumbers = (e, limit) => {
  let { value } = e.target;

  value = value.replace(/[a-zA-Z*+-.?!´`~''""/\\]/, "");
  if (limit) {
    const regLimit = new RegExp('([0-9]{' + limit + '})(.*)');
    value = value.replace(regLimit, "$1");
  }

  e.target.value = value;
};

export const clearCharacters = (e) => {
  let { value } = e.target;

  value = value.replace(/[.\-!?_() ]/g, '');

  e.target.value = value;
};
