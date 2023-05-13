import { LoremIpsum } from 'lorem-ipsum';

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 6,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
