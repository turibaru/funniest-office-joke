# The Funniest Office Joke, Judged Head to Head

[![make.fun · u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/turibaru/funniest-office-joke/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/turibaru/funniest-office-joke/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

One line about office life, for the make.fun bounty
[The Funniest Office Joke, Judged Head to Head](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c).

## The joke

> In my exit interview I said I was leaving for 'new opportunities' — HR wrote down 'the biscuits ran out'.

The setup is a small, familiar office ritual everyone recognises: the exit
interview, where a departing employee offers a polished, meaningless reason
for leaving. The turn is the paperwork — HR hears "new opportunities" and
records something else entirely, a snack shortage, as the official cause.
The punchline lands last, on the gap between what was said and what got
written down: the formal record now claims the biscuits ran out, and nobody
in the chain corrects it.

## How it runs

`main.ts` reads `entry.txt` at runtime and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. It exits non-zero if the entry is empty,
whitespace-only, or longer than 200 characters.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
