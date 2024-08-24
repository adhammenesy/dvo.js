const { EmbedBuilder } = require('discord.js');

 class Embeder {
  constructor() {
    this.embed = new EmbedBuilder();
  }

  title(value) {
    this.embed.setTitle(value);
    return this;
  }

  description(value) {
    this.embed.setDescription(value);
    return this;
  }

  url(value) {
    if (value) this.embed.setURL(value);
    return this;
  }

  image(url) {
    if (url) this.embed.setImage(url);
    return this;
  }

  thumbnail(url) {
    if (url) this.embed.setThumbnail(url);
    return this;
  }

  footer(text, iconURL) {
    if (text) {
      this.embed.setFooter({ text, iconURL: iconURL || undefined });
    }
    return this;
  }

  author(name, iconURL, url) {
    if (name) {
      this.embed.setAuthor({ name, url: url || undefined, iconURL: iconURL || undefined });
    }
    return this;
  }

  color(color) {
    this.embed.setColor(color);
    return this;
  }

  addField(name, value, inline = false) {
    if (name && value) {
      this.embed.addFields({ name, value, inline });
    }
    return this;
  }

  timestamp(timestamp) {
    if (timestamp) {
      this.embed.setTimestamp(timestamp);
    } else {
      this.embed.setTimestamp(); // يستخدم الطابع الزمني الحالي إذا لم يتم توفيره
    }
    return this;
  }

  build() {
    return this.embed;
  }
}

module.exports = { Embeder } 