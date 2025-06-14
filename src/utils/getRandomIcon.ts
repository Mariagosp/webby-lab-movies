import { iconKeys } from "./emojiIcons";

export const getRandomIcon = () =>
  iconKeys[Math.floor(Math.random() * iconKeys.length)];