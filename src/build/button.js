const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

/**
 * @typedef {'Link' | 'Danger' | 'Success' | 'Secondary' | 'Primary'} ButtonStyleType
 */

/**
 * @typedef {Object} ButtonOptions
 * @property {string} label - Button Text
 * @property {ButtonStyleType} [style] - Button Style
 * @property {string} [url] - Button Link (if style is "Link")
 * @property {string} [customId] - Button CustomID (if style not "Link")
 * @property {boolean} [disabled] - Disable Button?
 * @property {string} [emoji] - Button Emoji
 */

 class ButtonCreator {
  /**
   * @param {...ButtonOptions} optionsArray - مجموعة خيارات الأزرار
   */
  constructor(...optionsArray) {
    this.optionsArray = optionsArray;
    this.validateOptions();
  }

  /**
   * @param {ButtonStyleType} style - Button Style
   * @returns {ButtonStyle} - Button Style
   */
  getStyle(style) {
    switch (style) {
      case 'Primary':
        return ButtonStyle.Primary;
      case 'Secondary':
        return ButtonStyle.Secondary;
      case 'Success':
        return ButtonStyle.Success;
      case 'Danger':
        return ButtonStyle.Danger;
      case 'Link':
        return ButtonStyle.Link;
      default:
        throw new Error('Invalid button style');
    }
  }

  validateOptions() {
    this.optionsArray.forEach(options => {
      if (options.style === 'Link') {
        if (!options.url) {
          throw new Error('When style is "Link", url must be provided.');
        }
      } else {
        if (!options.customId) {
          throw new Error('When style is not "Link", customId must be provided.');
        }
      }
    });
  }

  /**
   * @param {ButtonOptions} options - Button Options
   * @returns {ButtonBuilder} - Create Button
   */
  createButton(options) {
    const button = new ButtonBuilder()
      .setLabel(options.label)
      .setStyle(this.getStyle(options.style))
      .setDisabled(options.disabled || false);

    if (options.emoji) {
      button.setEmoji(options.emoji);
    }

    if (options.style === 'Link') {
      if (options.url) {
        button.setURL(options.url);
      } else {
        throw new Error('URL must be provided for buttons with style "Link".');
      }
    } else {
      if (options.customId) {
        button.setCustomId(options.customId);
      } else {
        throw new Error('Custom ID must be provided for buttons with non-Link styles.');
      }
    }

    return button;
  }

  createActionRow() {
    const actionRow = new ActionRowBuilder();
    this.optionsArray.forEach(options => {
      const button = this.createButton(options);
      actionRow.addComponents(button);
    });

    return actionRow;
  }
}

module.exports = { ButtonCreator };
