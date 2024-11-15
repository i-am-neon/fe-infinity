export default function getInfoFromTmx(tmx: string): {
  tileset: string;
  width: number;
  height: number;
  mainLayerEncoded: string;
} {
  const tileset = tmx.match(/<tileset.*name="([^"]+)"/)?.[1] ?? "";
  const width = parseInt(tmx.match(/width="(\d+)"/)?.[1] ?? "0");
  const height = parseInt(tmx.match(/height="(\d+)"/)?.[1] ?? "0");

  const mainLayerEncoded =
    tmx
      .match(
        /<layer name="Main"[^>]*>[\s\S]*?<data encoding="base64"[^>]*>([\s\S]*?)<\/data>/
      )?.[1]
      ?.trim() ?? "";

  return { tileset, width, height, mainLayerEncoded };
}

if (import.meta.main) {
  // Knights10 raw tmx
  const tmx = `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="20" height="18" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="3C00CE3E" tilewidth="16" tileheight="16">
  <image source="../../Tilesets/FE8/3C00CE3E.png" width="512" height="512"/>
 </tileset>
 <layer name="Main" width="20" height="18">
  <properties>
   <property name="Main" value=""/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJx1lMFLVFEUxs97jzCLBGtW+QckaRBaqW0NMkQj0H9AR4KUrKi/oBQEEWzZNhujGNFZuosZUqioBqJNW1G0shFXtun7uN/l3l60+HHmnnfOd885994pZGZnxKnUrAHq4AAsghHwVGvv/xTFlRKzj2bWD2qgFTpjsu/w7bPiaUfBA/BIud7/CxxKexs5X2ALsO+lw9pOS68Rxcd6B5G/HtVLvW3ofMXvn7Cvk8AJ7e9j18BDUIk0lhDXnIacFTAMnRuqrwPfTqbOliPdRq4OWq9Djc4o7y50mpkHpi2Q193SPGkrOZ0mxL8EK2ADrMPXhpkNIKYFXIOvnNM9BmqJs76Pe5FOTVojiBmHrYI9cA7rOmxRMWXFf7Bwdi3qZT5xeRPgJjiLmnZ0X+jjrIalMy6NTTCrmZwHF0A3eJa6c+TeQ+AVeGx/nw/vyCp8z1XvD82CuZfw7bv8/M57wRkN8jzBLdVAjYLuXXymrJOxC2BfOv2aw4RyWc99cAdMmZs79fy7uJq5O+XrnOM8wYDyZ8BbsCVN7jEpraK+ez3Wx7d5JQt6t6Pz87Mvap5V5bOmpdzcyJvEvaUe9e17rupceBZP1CP7Ltm/b4O9sce+zNmK3nlvVGNJZ8v3+MLCjL1GbxY02FtPzl4Eo2AvcW9nQ/fud+rqO56G/b0Ga7gcafh17G/H7yOwa+6+UfMbWE7C/j7e15Bfe8t4/vfwzl03N0fet67E6eV7+d/6D92xtrA=
  </data>
 </layer>
 <layer name="Wall" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="0"/>
   <property name="Width" value="2"/>
   <property name="X" value="3"/>
   <property name="Y" value="0"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYEAAYWYGhk9MDKNgFIyCUTAKBgEAAM3eAQs=
  </data>
 </layer>
 <layer name="Left Chest" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="1"/>
   <property name="Width" value="1"/>
   <property name="X" value="1"/>
   <property name="Y" value="1"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYKA+cKKBmaNgFIyCUTDSAABjRwBD
  </data>
 </layer>
 <layer name="Right Chest" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="2"/>
   <property name="Width" value="1"/>
   <property name="X" value="19"/>
   <property name="Y" value="10"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AU0AM4DbQDRsGQAwCXCABD
  </data>
 </layer>
 <layer name="Door" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="2"/>
   <property name="ID" value="3"/>
   <property name="Width" value="2"/>
   <property name="X" value="18"/>
   <property name="Y" value="12"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AUjHSwjpGBQZCZeuZZAs0yo6J5IxUAANEhATk=
  </data>
 </layer>
</map>`;

  const info = getInfoFromTmx(tmx);
  console.log("info", JSON.stringify(info, null, 2));
}

