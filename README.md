# Hack Factory

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
