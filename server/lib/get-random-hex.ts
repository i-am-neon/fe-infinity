export default function getRandomHex(): string {
  const randomNumber = Math.floor(Math.random() * 0xff);
  return `0x${randomNumber.toString(16).toUpperCase().padStart(2, "0")}`;
}

if (import.meta.main) {
  console.log(getRandomHex());
}

