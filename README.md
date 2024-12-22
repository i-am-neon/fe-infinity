# FE Infinity

[Demo Video](https://youtu.be/-bf9_vbjbSQ)

## Setup

1. Install [Deno](https://deno.com/)
2. Add OPENAI_API_KEY to `.env` file in the `server` directory (see `.env.example` for an example)

## Common Commands

Run the whole flow, including using AI to generate a new game and then write it to a ROM:

```bash
cd server # If in root directory
deno run main
```

Write example data to the `romBuilder` using **no AI** (example data is in `server/testData/test-game-obj.ts`):

```bash
cd server # If in root directory
deno run write-test
```

If the game data has already been written (either with `deno run main` or `deno run write-test`), you can write the ROM using:

```bash
cd romBuilder # If in root directory
chmod +x ./run.sh # Only need to do this once
./run.sh
```

## Credits
The buildfiles part of this system was adapted from [Legends of Avenir](https://github.com/Snakey11/Legends-of-Avenir)
Character portrait options for AI to choose from are by [Kanna](https://github.com/Klokinator/FE-Repo/tree/main/Portrait%20Repository/Spriting%20Community%20OC's%20(Grouped%20by%20Artist)/Kanna)