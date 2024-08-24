## About
dvo.js is a powerful [Node.js](https://nodejs.org) module that allows you to easily create discord bot.
[Documentation](https://dvojs.vercel.app/)

## Installation

**Node.js 18.12.0 or newer is required.**

```sh
npm install dvo.js
```

## Example usage

Install dvo.js:

Create your own bot in [Discord Developer Portal](https://discord.com/developers/applications)

```js
const { DvoClient } = require('dvo.js');

let client = new DvoClient({
    token: "TOKEN_HERE",// Your discord bot token.
    clientId: "APP_ID_HERE",// Your bot ID.
    intents: ["Guilds", "MessageContent", "GuildMessages", "GuildMembers"],// Your bot intents.
    prefix: "!"// Message command prefix.
});
```

Make ready event

```js
client.event({
    name: "ready",
    async execute() {
         console.log(`logged in ${client.user.tag}`)
    }
});
```

Make slash command bot

```js
client.slashCommand({
    name: "ping",
    description: "Get bot ping",
    async execute(interaction) {
        interaction.reply(`Pong! \`${client.ping}ms\``)
    }
});
```

Make message command bot

```js
client.command({
    name: "ping",
    async execute(message) {
        message.reply(`Pong! \`${client.ping}ms\``)
    }
});
```

## Handler

in index.js

```js
client.slashHandler('./slashCommands', client);
client.commandHandler('./prefixCommand', client);
```

in ./slashCommands/info/ping.js

```js
module.exports = {
    name: "ping",
    description: "Get bot ping",
    async execute(interaction, client) {
        interaction.reply(`Pong! \`${client.ping}ms\``)
    }
}
```

in ./prefixCommands/info/ping.js

```js
module.exports = {
    name: "ping",
    async execute(message, client) {
        message.reply(`Pong! \`${client.ping}ms\``)
    }
}
```


## Ai usage

```js
const { AI } = require('dvo.js');

module.exports = {
    name: "ai",
    description: "Ask ai",
    options: [{
        name: "input",
        description: "the input",
        type: 3,
        required: true
    }],
    async execute(interaction, client) {
  let ai = await Ai({content: interaction.options.getString("input")});
  interaction.reply(ai.choices[0]?.message?.content)
    }
}
```