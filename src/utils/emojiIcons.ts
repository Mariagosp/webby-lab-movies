
import Camera from "../assets/emojis/camera.svg?react";
import FilmProjector from "../assets/emojis/filmProjector.svg?react";
import Medal from "../assets/emojis/medal.svg?react";
import NightCity from "../assets/emojis/nightCity.svg?react";
import PaperClips from "../assets/emojis/paperClips.svg?react";
import PhoneCamera from "../assets/emojis/phoneCamera.svg?react";
import Rocket from "../assets/emojis/rocket.svg?react";
import Telephone from "../assets/emojis/telephone.svg?react";
import Television from "../assets/emojis/television.svg?react";
import Thought from "../assets/emojis/thought.svg?react";

export const emojiIcons = {
  CAMERA: Camera,
  FILM_PROJECTOR: FilmProjector,
  MEDAL: Medal,
  NIGHT_CITY: NightCity,
  PAPER_CLIPS: PaperClips,
  PHONE_CAMERA: PhoneCamera,
  ROCKET: Rocket,
  TELEPHONE: Telephone,
  TELEVISION: Television,
  THOUGHT: Thought,
};

export type IconKey = keyof typeof emojiIcons;

export const iconKeys = Object.keys(emojiIcons) as IconKey[];