export type MapData = {
  width: number;
  height: number;
  tileConfigId: string;
  encodedTiles: string;
  areasOfInterest: Record<string, { x: number; y: number }>;
};

const mapNameToData: Record<string, MapData> = {
  Knights10: {
    width: 20,
    height: 18,
    tileConfigId: "3E",
    encodedTiles:
      "eJx1lMFLVFEUxs97jzCLBGtW+QckaRBaqW0NMkQj0H9AR4KUrKi/oBQEEWzZNhujGNFZuosZUqioBqJNW1G0shFXtun7uN/l3l60+HHmnnfOd885994pZGZnxKnUrAHq4AAsghHwVGvv/xTFlRKzj2bWD2qgFTpjsu/w7bPiaUfBA/BIud7/CxxKexs5X2ALsO+lw9pOS68Rxcd6B5G/HtVLvW3ofMXvn7Cvk8AJ7e9j18BDUIk0lhDXnIacFTAMnRuqrwPfTqbOliPdRq4OWq9Djc4o7y50mpkHpi2Q193SPGkrOZ0mxL8EK2ADrMPXhpkNIKYFXIOvnNM9BmqJs76Pe5FOTVojiBmHrYI9cA7rOmxRMWXFf7Bwdi3qZT5xeRPgJjiLmnZ0X+jjrIalMy6NTTCrmZwHF0A3eJa6c+TeQ+AVeGx/nw/vyCp8z1XvD82CuZfw7bv8/M57wRkN8jzBLdVAjYLuXXymrJOxC2BfOv2aw4RyWc99cAdMmZs79fy7uJq5O+XrnOM8wYDyZ8BbsCVN7jEpraK+ez3Wx7d5JQt6t6Pz87Mvap5V5bOmpdzcyJvEvaUe9e17rupceBZP1CP7Ltm/b4O9sce+zNmK3nlvVGNJZ8v3+MLCjL1GbxY02FtPzl4Eo2AvcW9nQ/fud+rqO56G/b0Ga7gcafh17G/H7yOwa+6+UfMbWE7C/j7e15Bfe8t4/vfwzl03N0fet67E6eV7+d/6D92xtrA=",
    areasOfInterest: {
      "Left Chest": { x: 1, y: 1 },
      "Right Chest": { x: 19, y: 10 },
    },
  },
  Knights12: {
    width: 15,
    height: 17,
    tileConfigId: "03",
    encodedTiles:
      "eJxdk01LlFEUx++dh/BlkYISpG4lFRyl2pS2UsFxVuFHmBF1dCN+hGmMSEL7CukYgq8Lv4JBoBmUfQMXiePGkmjh73D+wzy4+HGfe8495/zPufeZDiE8gWnYhrNMCJuss7As32vYTULYg32o6twa6w4MwyKMQS/+POtbKMl+gu0UvsEb9p9Uq6LvCdlPYSGVz2pc4avBNXzF1hHd15a4/4zvSWz56PsHpi/jWqyPdfgOLfhfQVH2caufuP2K7xWDuGPW5uh1DoLnr3LuVnrKOmv2A+UxLf+VP83H4OtI9P76ONcPA3AhXef4jmKjRhfffxVn+z9QsB7x52Aqaei4SdXqhvPg60t4BDfSNgfzUEp8Lqv4/sVGjceq/0v1fsILbBvq8xA62T+MPs8jxdr5Uem1PD+0Nx1F1bZZXSiHzWsQ/7OUbsvRoxjbP4/+huyN1d/RJNRgRndQS+V5Cn2QjT4Ti2mHXPD3OaT5WR/vo99X+d5dVKX1nd78Z9iCrOxF9fBFd5++i4rek9XZQdsH2M14zg39D/UZWnz6Lupa63HN9h6hNXGNY+rXNOfQPqE3mVd/TaY104g3nVa7IN0FafgNl5rhkv5p+//uAB6ufEQ=",
    areasOfInterest: {
      "Left Chest": { x: 1, y: 1 },
      "Right Chest": { x: 19, y: 10 },
    },
  },
};

export default mapNameToData;

