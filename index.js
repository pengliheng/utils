const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const handleTextType = async (e) => {
  const {
    text,
    pauseTime,
    cycle,
    typeFunc,
  } = e;
  for (let i = 0; i < text.length; i += 1) {
    const { content, typeTime } = e.text[i];
    await typeWord({ content, typeTime, typeFunc });
    await sleep(pauseTime);
    if (i === 2 && cycle) {
      i = -1;
    }
  }
};

const typeWord = async ({ content, typeTime, typeFunc }) => {
  for (let i = 0; i < content.split('').length; i += 1) {
    typeLetter({
      content,
      index: i,
      typeFunc,
    });
    await sleep(typeTime);
  }
};

const typeLetter = ({ content, index, typeFunc }) => {
  typeFunc(content.slice(0, index + 1));
};


export { handleTextType };
