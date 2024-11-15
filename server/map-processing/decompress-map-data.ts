import pako from "npm:pako";

export default function decompressMapData(encodedData: string): number[] {
  console.log("encodedData :>> ", encodedData);
  // Decode base64 to a Uint8Array
  const binaryString = atob(encodedData);
  const byteArray = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    byteArray[i] = binaryString.charCodeAt(i);
  }

  // Decompress the zlib data using pako
  const decompressedData = pako.inflate(byteArray);

  // Parse the decompressed data as 32-bit integers (4 bytes per GID)
  const gidArray: number[] = [];
  for (let i = 0; i < decompressedData.length; i += 4) {
    const gid =
      decompressedData[i] |
      (decompressedData[i + 1] << 8) |
      (decompressedData[i + 2] << 16) |
      (decompressedData[i + 3] << 24);
    gidArray.push(gid);
  }

  return gidArray;
}

if (import.meta.main) {
  // from Knights10
  const encodedData = `eJx1lMFLVFEUxs97jzCLBGtW+QckaRBaqW0NMkQj0H9AR4KUrKi/oBQEEWzZNhujGNFZuosZUqioBqJNW1G0shFXtun7uN/l3l60+HHmnnfOd885994pZGZnxKnUrAHq4AAsghHwVGvv/xTFlRKzj2bWD2qgFTpjsu/w7bPiaUfBA/BIud7/CxxKexs5X2ALsO+lw9pOS68Rxcd6B5G/HtVLvW3ofMXvn7Cvk8AJ7e9j18BDUIk0lhDXnIacFTAMnRuqrwPfTqbOliPdRq4OWq9Djc4o7y50mpkHpi2Q193SPGkrOZ0mxL8EK2ADrMPXhpkNIKYFXIOvnNM9BmqJs76Pe5FOTVojiBmHrYI9cA7rOmxRMWXFf7Bwdi3qZT5xeRPgJjiLmnZ0X+jjrIalMy6NTTCrmZwHF0A3eJa6c+TeQ+AVeGx/nw/vyCp8z1XvD82CuZfw7bv8/M57wRkN8jzBLdVAjYLuXXymrJOxC2BfOv2aw4RyWc99cAdMmZs79fy7uJq5O+XrnOM8wYDyZ8BbsCVN7jEpraK+ez3Wx7d5JQt6t6Pz87Mvap5V5bOmpdzcyJvEvaUe9e17rupceBZP1CP7Ltm/b4O9sce+zNmK3nlvVGNJZ8v3+MLCjL1GbxY02FtPzl4Eo2AvcW9nQ/fud+rqO56G/b0Ga7gcafh17G/H7yOwa+6+UfMbWE7C/j7e15Bfe8t4/vfwzl03N0fet67E6eV7+d/6D92xtrA=`;
  const gidArray = decompressMapData(encodedData);
  console.log(gidArray);
}

