function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const queue = [[begin, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [currentWord, step] = queue.shift();

    if (currentWord === target) return step;

    words.forEach((word) => {
      if (!visited.has(word) && canTransWord(currentWord, word)) {
        visited.add(word);
        queue.push([word, step + 1]);
      }
    });
  }
  return 0;
}

function canTransWord(word1, word2) {
  let diffCnt = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCnt += 1;
    }
    if (diffCnt > 1) return false;
  }
  return diffCnt === 1;
}
