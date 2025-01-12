# First Day

[![License](https://img.shields.io/badge/license-Apache%202.0-blue)](https://www.apache.org/licenses/LICENSE-2.0.txt)
[![Flutter CI](https://github.com/abianche/firstday/actions/workflows/flutter.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/flutter.yml)
[![Codemagic](https://api.codemagic.io/apps/677bb519946c4ef5be703190/677bb519946c4ef5be70318f/status_badge.svg)](https://codemagic.io/app/677bb519946c4ef5be703190/677bb519946c4ef5be70318f/latest_build)
![Vercel](https://img.shields.io/github/deployments/abianche/firstday/production?style=flat&logo=vercel&label=Vercel)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?&logo=docker&logoColor=white)


An onboarding app and training platform for your employees.

---

### ⚠️ **UNDER INITIAL DEVELOPMENT**

We are actively building the foundation of this project, and it is not yet ready for production use.  

### What does this mean?
- 🔧 Features are incomplete and may change frequently.
- ❗ Breaking changes can occur as we iterate.
- 🐛 Bugs and unexpected behavior should be expected.
- 📚 Any documentation found in this repository may be outdated.

We appreciate your patience as we work toward our first stable release.  
Stay tuned for updates and feel free to follow our progress or submit ideas in the [Issues](https://github.com/abianche/firstday/issues) section.
Please read our [Contributing Guidelines](CONTRIBUTING.md) before getting started.

## Getting Started

This project uses [Flutter](https://flutter.dev/) for the frontend and [Appwrite](https://appwrite.io/) as the backend.
Both frontend and backend are containerized using [Docker](https://www.docker.com/).
The web build is continously deployed on [Vercel](https://vercel.com/). Additionally, builds are also set up in [Codemagic](https://codemagic.io/).

## Setup

### To run the frontend locally

```bash
cd frontend
flutter pub get
flutter run
```

### Full application with Docker

Ensure that the web app is already built with:

```bash
cd frontend
flutter build web --release
```

Start the application:

```bash
./start.sh
```

Stop the application:

```bash
./stop.sh
```