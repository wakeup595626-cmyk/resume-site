# Zhang Guoshu · Personal Resume & Portfolio

[中文](README.md) | **English**

> **Smart distribution-grid automation · Embedded systems & robotics · Innovation & entrepreneurship**
> Shaoyang University, Electrical Engineering and Automation (Class of 2024) · Class monitor, Power Class 3 (2024 cohort) · Head of Chuangyi Electronics Lab

## Overview

This repository contains the source of my personal resume and portfolio website — a fully static, zero-dependency site built with hand-written HTML, CSS and JavaScript. No framework and no build step: open `index.html` or serve the directory and it works.

The site presents 17+ authenticated honours and engineering credentials: national/provincial innovation-competition awards, utility-model patents and software copyrights filed with CNIPA, two provincial-level innovation-training projects, robotics and smart-car competition results, and academic honours — each with embedded evidence photos and documents.

## Highlights

- **Obsidian-dark glassmorphism design**: a deep-space dark theme with electric-cyan and voltage-green glow accents.
- **Interactive electric-circuit canvas**: a native HTML5 Canvas background where current nodes react to the cursor.
- **Filterable honours matrix**: all 17 honours can be filtered by category — competition tier, robotics, patents & innovation projects, scholarships.
- **Embedded real credentials**: handwritten signature, photos of the Challenge Cup national-award certificate, field test sites and the prototype devices.
- **One-click printable A4 resume**: a print-optimised A4 view covering the full honours list, ready to save as PDF.

## Run

- **Live site**: <https://wakeup595626-cmyk.github.io/resume-site/>
- **Locally**: serve the directory with any static file server, e.g.

  ```bash
  python -m http.server 8080
  ```

  then open <http://localhost:8080>. Any other static server works too — there is nothing to install.

## Project layout

```text
.
├─ index.html   The whole site: structure, styles and interaction (single file)
├─ assets/      Images and other media used by the page
└─ README.md    Project documentation (Chinese)
```

## License

[MIT](LICENSE)
