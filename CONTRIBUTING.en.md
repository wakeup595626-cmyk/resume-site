# Contributing

[中文](CONTRIBUTING.md) | **English**

This is a personal resume site — its content is my own curriculum vitae, so content edits are generally not accepted. The following contributions are very welcome:

- Fixes for typos, dead links or rendering problems.
- Improvements to accessibility, print styles or mobile adaptation.
- Corrections of factual errors (please attach a verifiable public source).

## Reporting issues

When opening an Issue, please include: browser and version, reproduction steps, expected vs. actual behaviour, and a screenshot.

## Submitting code

1. Fork this repository and create a branch.
2. Keep the zero-dependency principle: no frameworks, no build step, no third-party packages.
3. Verify your changes locally with `python -m http.server 8080` before opening a PR.

## Local verification

```bash
python -m http.server 8080
```

Open http://localhost:8080 and check the page and its print styles.
