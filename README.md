# VortexG Discord Bot

## Overview

VortexG is a Discord bot integrated with OpenAI that provides sarcastic responses to user queries. This bot is designed to mimic a humorous and reluctant personality, providing answers in a sarcastic tone.

## Features

- **Sarcastic Responses:** The bot responds to user queries with sarcastic remarks.
- **OpenAI Integration:** Uses OpenAI's GPT-3 to generate responses.

## Setup

### Prerequisites

- Node.js (v16 or later)
- npm (or yarn)
- A Discord bot token
- OpenAI API key

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/vortexg-discord-bot.git
    cd vortexg-discord-bot
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` File:**

    Create a `.env` file in the root directory of the project and add the following environment variables:

    ```plaintext
    DISCORD_BOT_TOKEN=put_discord_token_here
    OPEN_AI_ORG=put_openai_org_key_here
    OPEN_AI_KEY=put_openai_api_key_here
    ```

4. **Run the Bot:**

    ```bash
    node index.js
    ```

    The bot will connect to Discord and respond to messages with sarcastic replies.

## Configuration

- **Discord Bot Token:** Obtain your token from the [Discord Developer Portal](https://discord.com/developers/applications).
- **OpenAI API Key:** Obtain your API key from the [OpenAI API](https://platform.openai.com/signup).

## Usage

- Once the bot is running, invite it to your Discord server using the OAuth2 URL provided in the Discord Developer Portal.
- Interact with the bot in your server to receive sarcastic responses.

## Contribution

If you want to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure to follow coding standards and include tests for new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or issues, please reach out to [shubhvora03@gmail.com](mailto:shubhvora03@gmail.com).

Thank you for using VortexG!
