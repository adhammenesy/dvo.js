const Discord = require('discord.js')
const { GatewayIntentBits } = require("discord.js")
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v10')
const { ChannelType } = require('discord.js');
const { joinVoiceChannel, VoiceConnectionStatus, entersState } = require('@discordjs/voice');

const IntentsOptions = {
  Guilds: GatewayIntentBits.Guilds,
  GuildPresences: GatewayIntentBits.GuildPresences,
  GuildMembers: GatewayIntentBits.GuildMembers,
  GuildMessages: GatewayIntentBits.GuildMessages,
  GuildMessageContent: GatewayIntentBits.MessageContent,
  GuildVoiceStates: GatewayIntentBits.GuildVoiceStates,
  GuildInvites: GatewayIntentBits.GuildInvites,
  GuildEmojisAndStickers: GatewayIntentBits.GuildEmojisAndStickers,
  GuildWebhooks: GatewayIntentBits.GuildWebhooks,
  GuildInteractions: GatewayIntentBits.GuildInteractions,
  GuildScheduledEvents: GatewayIntentBits.GuildScheduledEvents,
  GuildAutomodRules: GatewayIntentBits.GuildAutomodRules,
  DirectMessages: GatewayIntentBits.DirectMessages,
  DirectMessageReactions: GatewayIntentBits.DirectMessageReactions,
  DirectMessageTyping: GatewayIntentBits.DirectMessageTyping,
  MessageContent: GatewayIntentBits.MessageContent,
};


let client = new Discord.Client({ intents: [] });


const { commandHandle } = require("../handler/handling.js");
const { slashHandle } = require("../handler/slashcommand.js");

/**
 * @typedef {'interaction' | 'message' | 'ready'} EventType
 */

class DvoClient {
  /**
   * @param {Object} options
   * @param {string} options.clientId - Client ID
   * @param {string} [options.prefix] - Message Command Prefix
   * @param {Array} [options.intents] - Intents
   * @param {string} options.token - Bot Token
   */
  constructor({ clientId, prefix, intents, token }) {
    this.token = token;
    this.id = clientId;
    this.commands = [];
    this.prefix = prefix || null;
    this.intents = intents || [];


    client = new Discord.Client({
      intents: this.intents.map(intent => IntentsOptions[intent] || null).filter(intent => intent !== null) // إزالة القيم غير الصالحة
    });

    client.login(this.token).catch((err) => {
      if (err.message.includes('An invalid token was provided.')) {
        console.log(`"Token Is Invalid"`);
      } else if (err.message.includes('Used disallowed intents')) {
        console.log(`"Used disallowed intents"`);
      } else {
        console.log(err);
      }
    });


    client.on('ready', () => {
      this.user = {
        id: client.user.id,
        bot: client.user.bot,
        system: client.user.system,
        flags: client.user.flags,
        username: client.user.username,
        tag: client.user.username + `#${client.user.discriminator}`,
        discriminator: client.user.discriminator,
        avatar: client.user.avatar,
        avatarURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}`,
        banner: client.user.banner,
        verified: client.user.verified,
        mfaEnabled: client.user.mfaEnabled,
      };

      var _0x502d46 = _0x4066; function _0x4066(_0x5f5d7f, _0x39812e) { var _0x579873 = _0x5798(); return _0x4066 = function (_0x4066b9, _0x15d9f6) { _0x4066b9 = _0x4066b9 - 0xaf; var _0x43a5ff = _0x579873[_0x4066b9]; return _0x43a5ff; }, _0x4066(_0x5f5d7f, _0x39812e); } function _0x5798() { var _0x2a904b = ['ping', '7194HkmOvH', '3278421NyxsOC', '19624cglaxd', '38128gCjfSF', '1232PfYEET', '3305364tqjMej', '909kEQrxg', '52201790hdAgaT', '287222sOpkca', '1330yRJiIn']; _0x5798 = function () { return _0x2a904b; }; return _0x5798(); } (function (_0x33147e, _0x2201f3) { var _0x51460b = _0x4066, _0x46701e = _0x33147e(); while (!![]) { try { var _0x138c14 = -parseInt(_0x51460b(0xaf)) / 0x1 + -parseInt(_0x51460b(0xb2)) / 0x2 * (parseInt(_0x51460b(0xb8)) / 0x3) + -parseInt(_0x51460b(0xb4)) / 0x4 * (parseInt(_0x51460b(0xb0)) / 0x5) + -parseInt(_0x51460b(0xb7)) / 0x6 + parseInt(_0x51460b(0xb6)) / 0x7 * (-parseInt(_0x51460b(0xb5)) / 0x8) + -parseInt(_0x51460b(0xb3)) / 0x9 + parseInt(_0x51460b(0xb9)) / 0xa; if (_0x138c14 === _0x2201f3) break; else _0x46701e['push'](_0x46701e['shift']()); } catch (_0x3776d8) { _0x46701e['push'](_0x46701e['shift']()); } } }(_0x5798, 0xbf6db), this[_0x502d46(0xb1)] = client['ws'][_0x502d46(0xb1)]);
      const rest = new REST({ version: '10' }).setToken(this.token);
      (async () => {
        try {
          console.log('Started refreshing application (/) commands.');

          await rest.put(Routes.applicationCommands(this.id), {
            body: this.commands,
          });

          console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
          console.error(error);
        }
      })();
    });

    client.on('ready', () => {
      setInterval(() => {
        this.user = {
          id: client.user.id,
          bot: client.user.bot,
          system: client.user.system,
          flags: client.user.flags,
          username: client.user.username,
          tag: client.user.username + `#${client.user.discriminator}`,
          discriminator: client.user.discriminator,
          avatar: client.user.avatar,
          avatarURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}`,
          banner: client.user.banner,
          verified: client.user.verified,
          mfaEnabled: client.user.mfaEnabled,
        };
        var _0x502d46 = _0x4066; function _0x4066(_0x5f5d7f, _0x39812e) { var _0x579873 = _0x5798(); return _0x4066 = function (_0x4066b9, _0x15d9f6) { _0x4066b9 = _0x4066b9 - 0xaf; var _0x43a5ff = _0x579873[_0x4066b9]; return _0x43a5ff; }, _0x4066(_0x5f5d7f, _0x39812e); } function _0x5798() { var _0x2a904b = ['ping', '7194HkmOvH', '3278421NyxsOC', '19624cglaxd', '38128gCjfSF', '1232PfYEET', '3305364tqjMej', '909kEQrxg', '52201790hdAgaT', '287222sOpkca', '1330yRJiIn']; _0x5798 = function () { return _0x2a904b; }; return _0x5798(); } (function (_0x33147e, _0x2201f3) { var _0x51460b = _0x4066, _0x46701e = _0x33147e(); while (!![]) { try { var _0x138c14 = -parseInt(_0x51460b(0xaf)) / 0x1 + -parseInt(_0x51460b(0xb2)) / 0x2 * (parseInt(_0x51460b(0xb8)) / 0x3) + -parseInt(_0x51460b(0xb4)) / 0x4 * (parseInt(_0x51460b(0xb0)) / 0x5) + -parseInt(_0x51460b(0xb7)) / 0x6 + parseInt(_0x51460b(0xb6)) / 0x7 * (-parseInt(_0x51460b(0xb5)) / 0x8) + -parseInt(_0x51460b(0xb3)) / 0x9 + parseInt(_0x51460b(0xb9)) / 0xa; if (_0x138c14 === _0x2201f3) break; else _0x46701e['push'](_0x46701e['shift']()); } catch (_0x3776d8) { _0x46701e['push'](_0x46701e['shift']()); } } }(_0x5798, 0xbf6db), this[_0x502d46(0xb1)] = client['ws'][_0x502d46(0xb1)]);
      }, 3000);
    });
  }

  async status(newStatus) {
    if (client.user) {
      client.user.setStatus(newStatus);
    }
  }

  async activity(newActivity, type) {
    if (client.user) {
      client.user.setActivity(newActivity, { type: type });
    }
  }


  /**
   * @param {Object} options
   * @param {string} options.guildId - Guild ID
   * @param {string} options.channelId - Channel ID
   * @param {Function} options.execute - Code
   */

  voice({ guildId, channelId, execute }) {
    client.on('ready', () => {
      const guild = client.guilds.cache.get(guildId);
      if (guild) {
        const channel = guild.channels.cache.get(channelId);
        if (channel && channel.type === ChannelType.GuildVoice) {
          const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator,
          });

          entersState(connection, VoiceConnectionStatus.Ready, 30_000)
            .then(() => execute(connection))
            .catch((error) => {
              if (error.code === 'ABORT_ERR') {
                console.error('Failed to connect to the voice channel: The operation was aborted');
              } else {
                console.error('Failed to connect to the voice channel:', error);
              }
              connection.destroy();
            });
        } else {
          console.error('Channel is not a voice channel or does not exist.');
        }
      } else {
        console.error('Guild does not exist.');
      }
    });
  }


  

  /**
   * @param {Object} options
   * @param {EventType} options.name - Event Name
   * @param {Function} options.execute - Code
   */
  async event({ name, execute }) {
    if (name === 'ready') {
      const executeCode = execute.toString();
      const codeBody = executeCode.substring(executeCode.indexOf('{') + 1, executeCode.lastIndexOf('}')).trim();
      client.once('ready', async () => {
        codeBody;
        await execute();
      });
    } else if (name === 'message') {
      const executeCode = execute.toString();
      const codeBody = executeCode.substring(executeCode.indexOf('{') + 1, executeCode.lastIndexOf('}')).trim();
      client.once('messageCreate', async (message) => {
        codeBody;
        await execute(message);
      });
    } else if (name === 'interaction') {
      const executeCode = execute.toString();
      const codeBody = executeCode.substring(executeCode.indexOf('{') + 1, executeCode.lastIndexOf('}')).trim();
      client.on('interactionCreate', async (interaction) => {
        codeBody;
        await execute(interaction);
      });
    }
  }

  /**
     * @param {Object} options
     * @param {string} options.name - Command Name
     * @param {Function} options.execute - Code
     */
  command({ name, execute }) {
    const executeCode = execute.toString();
    const codeBody = executeCode.substring(executeCode.indexOf('{') + 1, executeCode.lastIndexOf('}')).trim();
    if (this.prefix === null) {
      console.error(chalk.red.bold(`Please put prefix in new Client({prefix: "!"}) or see the docs`));
    } else {
      client.on('messageCreate', async (message) => {
        if (message.content.startsWith(this.prefix + name)) {
          await execute(message);
          codeBody;
        }
      });
    }
  }






  /**
     * @param {Object} options
     * @param {string} options.name - Command Name
     * @param {string} options.description - Command Description
     * @param {Array} [options.options] - Command Options (array)
     * @param {Function} options.execute - Code
     */
  slashCommand({ name, description, options, execute }) {
    try {
      const executeCode = execute.toString();
      const codeBody = executeCode.substring(executeCode.indexOf('{') + 1, executeCode.lastIndexOf('}')).trim();
      let command;
      if (options) {
        command = {
          name: name,
          description: description,
          options,
        };
      } else if (!options) {
        command = {
          name: name,
          description: description,
        };
      }

      this.commands.push(command);
      client.on('interactionCreate', async (interaction) => {
        if (interaction.commandName === name) {
          await execute(interaction);
          codeBody;
        }
      });
    } catch (err) {
      if (err.message.includes("Cannot read properties of undefined (reading 'toString')")) {
        console.log(chalk.red.bold(`"execute required"`), `\n In command ` + chalk.white.bold(name));
      } else {
        console.log(err);
      }
    }
  }
  /**
   * @param {Object} options
   * @param {string} options.customId - Button CustomID
   * @param {Function} options.execute - Code
   */

  async button({ customId, execute }) {
    client.on('interactionCreate', async (interaction) => {
      if (interaction.isButton() && interaction.customId === customId) {
        try {
          await execute(interaction);
        } catch (err) {
          console.error('Error executing button interaction:', err);
        }
      }
    });
  }

  async commandHandler(dirPath, bot) {
    await commandHandle(dirPath, client, this.prefix, bot);
  }

  async slashHandler(dirPath, bot) {
    const command = await slashHandle(dirPath, client, bot);

    const formattedCommands = await Promise.all(
      command.map(async (cmd) => {
        let options = cmd.options || [];

        if (Array.isArray(options)) {
          options = options.map((opt) => {
            return {
              name: opt.name || 'default_name',
              description: opt.description || 'default_description',
              type: opt.type || 1,
              required: opt.required || false,
            };
          });
        } else {
          options = [];
        }

        return {
          name: cmd.name,
          description: cmd.description,
          options: options,
        };
      })
    );

    formattedCommands.forEach((cmd) => {
      this.commands.push(cmd);
    });


  }



}


const { SlashCommandBuilder: DiscordSlashCommandBuilder } = require('@discordjs/builders');

/**
 * @typedef {Object} SlashCommandOptions
 * @property {string} name - The name of the command
 * @property {string} description - The description of the command
 * @property {Array} [options] - The options for the command
 * @property {Function} execute - The function to execute when the command is called
 */

class SlashCommandBuilder {
  /**
   * @param {SlashCommandOptions} [options] - Command options
   */
  constructor(options) {
    this.name = options?.name;
    this.description = options?.description;
    this.options = options?.options || [];
    this.execute = options?.execute;
    this.validateOptions();
  }

  validateOptions() {
    if (!this.name) {
      throw new Error('Command name must be provided.');
    }
    if (!this.description) {
      throw new Error('Command description must be provided.');
    }
    if (typeof this.execute !== 'function') {
      throw new Error('Command execute function must be provided.');
    }
  }

  /**
   * @param {string} name - Command name
   * @returns {SlashCommandBuilder} - SlashCommandBuilder instance
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * @param {string} description - Command description
   * @returns {SlashCommandBuilder} - SlashCommandBuilder instance
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * @param {...any} [options] - Command options
   * @returns {SlashCommandBuilder} - SlashCommandBuilder instance
   */
  setOptions(...options) {
    this.options = options;
    return this;
  }

  /**
   * @param {Function} execute - Command execute function
   * @returns {SlashCommandBuilder} - SlashCommandBuilder instance
   */
  setExecute(execute) {
    this.execute = execute;
    return this;
  }

  build(client) {
    try {
      const command = new DiscordSlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.description);

      if (this.options.length > 0) {
        command.addOptions(this.options);
      }

      client.commands.push(command);
      client.on('interactionCreate', async (interaction) => {
        if (interaction.commandName === this.name) {
          await this.execute(client, interaction);
        }
      });
    } catch (err) {
      if (err.message.includes("Cannot read properties of undefined (reading 'toString')")) {
        console.error(new Error(`"execute required" in command ${this.name}`));
      } else {
        console.log(err);
      }
    }
  }
}

module.exports = { DvoClient };