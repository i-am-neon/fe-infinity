import { assertEquals } from "@std/assert";
import extractValuesFromTmx from "@/map-processing/get-info-from-tmx/extract-values-from-tmx.ts";

Deno.test("extractValuesFromTmx - Knights10", () => {
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

  const { tileset, height, width, mainLayerEncoded } =
    extractValuesFromTmx(tmx);

  assertEquals(tileset, "3C00CE3E");
  assertEquals(height, 18);
  assertEquals(width, 20);
  assertEquals(
    mainLayerEncoded,
    "eJx1lMFLVFEUxs97jzCLBGtW+QckaRBaqW0NMkQj0H9AR4KUrKi/oBQEEWzZNhujGNFZuosZUqioBqJNW1G0shFXtun7uN/l3l60+HHmnnfOd885994pZGZnxKnUrAHq4AAsghHwVGvv/xTFlRKzj2bWD2qgFTpjsu/w7bPiaUfBA/BIud7/CxxKexs5X2ALsO+lw9pOS68Rxcd6B5G/HtVLvW3ofMXvn7Cvk8AJ7e9j18BDUIk0lhDXnIacFTAMnRuqrwPfTqbOliPdRq4OWq9Djc4o7y50mpkHpi2Q193SPGkrOZ0mxL8EK2ADrMPXhpkNIKYFXIOvnNM9BmqJs76Pe5FOTVojiBmHrYI9cA7rOmxRMWXFf7Bwdi3qZT5xeRPgJjiLmnZ0X+jjrIalMy6NTTCrmZwHF0A3eJa6c+TeQ+AVeGx/nw/vyCp8z1XvD82CuZfw7bv8/M57wRkN8jzBLdVAjYLuXXymrJOxC2BfOv2aw4RyWc99cAdMmZs79fy7uJq5O+XrnOM8wYDyZ8BbsCVN7jEpraK+ez3Wx7d5JQt6t6Pz87Mvap5V5bOmpdzcyJvEvaUe9e17rupceBZP1CP7Ltm/b4O9sce+zNmK3nlvVGNJZ8v3+MLCjL1GbxY02FtPzl4Eo2AvcW9nQ/fud+rqO56G/b0Ga7gcafh17G/H7yOwa+6+UfMbWE7C/j7e15Bfe8t4/vfwzl03N0fet67E6eV7+d/6D92xtrA="
  );
});

Deno.test("extractValuesFromTmx - Nobles Evil Doers 1", () => {
  const tmx = `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="17" height="26" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="1800191A" tilewidth="16" tileheight="16">
  <image source="../../Tilesets/FE8/1800191A.png" width="512" height="512"/>
 </tileset>
 <layer name="Main" width="17" height="26">
  <properties>
   <property name="Main" value=""/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJx1VM1qlEEQnPmWgHhzAz5AnsCL37q+gMHkInjzuMFsDhEEXyBRJB71GSIJGFfiJYmedE1y8OD+qAvmau5CxHOqmSqmHXYPRX/dX3dNTffM1I0QWkANDKoQbjq/5WK1i98AHhR5svo3Lf8buBaB9zGEN4T5+zHl7RXr7zH3KuNWfw5/DXYF/ibQAbqMW91uoXeXuV9jipu12AugD/837GfYrSrFa/IdI+8UOInJ7xccFnuI73ngXpXsHdbaus+QcxhCuIvvJeA24gchc4xjyr9AfAQ8BoZAkzym40qV62UPHccF7LVGqn8J3Adeka/J/RuH1U1Csguwj4q9aN192CfWc/qjKusw7f9CsoI43nKWNi/paXJ+7zgXm93zRp67zfTIcXSIuaL3c5xfTa3f4Y8JcfbI0bY+A6vF+VxlvOX2ux2TTvNXuHZ5zmedf3GMqsxhfO0Zdf6+DHg+rGc98qh/6su0uvI+1a5nX2L+7rh5iEt15Qxa7It0t51fci1ylj3uVTMo++X3f4t84nrq6qxvA575Wffd71+6dmLuu+EP8Jdn5oR3e8Od72n6xKH1xaV7pvuuvZ/H3Ef7lsahW18cB+H/+25v1CY5padLjX5OQ3eey/v+qZHfKO1zixrFP+ZZMrvB+ol7fya8sx94/y3+kTHx23vyOibbZ90Rcyx/m2/aL2Cd/8+Kd8FzaP0F5kvDT3JIxxljS4VuWatZdn0xTT+m6Lges87y3bwE1cLcfw==
  </data>
 </layer>
 <layer name="Top Chest" width="17" height="26" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="0"/>
   <property name="Width" value="1"/>
   <property name="X" value="5"/>
   <property name="Y" value="7"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFIwkwDbQDRsEoGAWjgM4AABDYAAM=
  </data>
 </layer>
 <layer name="Bottom Chest" width="17" height="26" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="1"/>
   <property name="Width" value="1"/>
   <property name="X" value="1"/>
   <property name="Y" value="24"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AUjIJRMApoA5gG2gFAAAAH8AAD
  </data>
 </layer>
</map>`;

  const { tileset, height, width, mainLayerEncoded } =
    extractValuesFromTmx(tmx);

  assertEquals(tileset, "1800191A");
  assertEquals(height, 26);
  assertEquals(width, 17);
  assertEquals(
    mainLayerEncoded,
    "eJx1VM1qlEEQnPmWgHhzAz5AnsCL37q+gMHkInjzuMFsDhEEXyBRJB71GSIJGFfiJYmedE1y8OD+qAvmau5CxHOqmSqmHXYPRX/dX3dNTffM1I0QWkANDKoQbjq/5WK1i98AHhR5svo3Lf8buBaB9zGEN4T5+zHl7RXr7zH3KuNWfw5/DXYF/ibQAbqMW91uoXeXuV9jipu12AugD/837GfYrSrFa/IdI+8UOInJ7xccFnuI73ngXpXsHdbaus+QcxhCuIvvJeA24gchc4xjyr9AfAQ8BoZAkzym40qV62UPHccF7LVGqn8J3Adeka/J/RuH1U1Csguwj4q9aN192CfWc/qjKusw7f9CsoI43nKWNi/paXJ+7zgXm93zRp67zfTIcXSIuaL3c5xfTa3f4Y8JcfbI0bY+A6vF+VxlvOX2ux2TTvNXuHZ5zmedf3GMqsxhfO0Zdf6+DHg+rGc98qh/6su0uvI+1a5nX2L+7rh5iEt15Qxa7It0t51fci1ylj3uVTMo++X3f4t84nrq6qxvA575Wffd71+6dmLuu+EP8Jdn5oR3e8Od72n6xKH1xaV7pvuuvZ/H3Ef7lsahW18cB+H/+25v1CY5padLjX5OQ3eey/v+qZHfKO1zixrFP+ZZMrvB+ol7fya8sx94/y3+kTHx23vyOibbZ90Rcyx/m2/aL2Cd/8+Kd8FzaP0F5kvDT3JIxxljS4VuWatZdn0xTT+m6Lges87y3bwE1cLcfw=="
  );
});

