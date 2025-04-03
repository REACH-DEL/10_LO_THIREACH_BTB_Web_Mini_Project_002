import { colors } from "../../public/images/colors/colors";

export function randomColor() {
  const randomIndex = Math.floor(Math.random() * 5);
  return colors[randomIndex];
}
