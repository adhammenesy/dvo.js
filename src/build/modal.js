// const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

// /**
//  * @typedef {'Short' | 'Paragraph'} TextInputStyleType
//  */

// /**
//  * @typedef {Object} TextInputOptions
//  * @property {string} customId - Text Input CustomID
//  * @property {string} label - Text Input Label
//  * @property {TextInputStyleType} style - Text Input Style
//  * @property {string} [placeholder] - Text Input Placeholder
//  * @property {boolean} [required] - Is Text Input Required?
//  * @property {number} [minLength] - Minimum Length of Text Input
//  * @property {number} [maxLength] - Maximum Length of Text Input
//  * @property {string} [value] - Default Value of Text Input
//  */

// /**
//  * @typedef {Object} ModalOptions
//  * @property {string} customId - Modal CustomID
//  * @property {string} title - Modal Title
//  * @property {TextInputOptions[]} components - Array of Text Input Options
//  */

// class ModalCreator {
//   /**
//    * @param {ModalOptions} options - Modal Options
//    */
//   constructor(options) {
//     this.options = options;
//     this.validateOptions();
//   }

//   /**
//    * @param {TextInputStyleType} style - Text Input Style
//    * @returns {TextInputStyle} - Text Input Style
//    */
//   getStyle(style) {
//     switch (style) {
//       case 'Short':
//         return TextInputStyle.Short;
//       case 'Paragraph':
//         return TextInputStyle.Paragraph;
//       default:
//         throw new Error('Invalid text input style');
//     }
//   }

//   validateOptions() {
//     if (!this.options.customId) {
//       throw new Error('Modal customId must be provided.');
//     }
//     if (!this.options.title) {
//       throw new Error('Modal title must be provided.');
//     }
//     if (!Array.isArray(this.options.components) || this.options.components.length === 0) {
//       throw new Error('Modal components must be a non-empty array.');
//     }
//     this.options.components.forEach(component => {
//       if (!component.customId) {
//         throw new Error('Text input customId must be provided.');
//       }
//       if (!component.label) {
//         throw new Error('Text input label must be provided.');
//       }
//       if (!component.style) {
//         throw new Error('Text input style must be provided.');
//       }
//       if (component.required === undefined) {
//         throw new Error('Text input required field must be provided.');
//       }
//     });
//   }

//   createModal() {
//     const modal = new ModalBuilder()
//       .setCustomId(this.options.customId)
//       .setTitle(this.options.title);

//     this.options.components.forEach(component => {
//       const textInput = new TextInputBuilder()
//         .setCustomId(component.customId)
//         .setLabel(component.label)
//         .setStyle(this.getStyle(component.style));
        

//       if (component.placeholder) textInput.setPlaceholder(component.placeholder);
//       if (component.required !== undefined) textInput.setRequired(component.required);
//       if (component.minLength !== undefined) textInput.setMinLength(component.minLength);
//       if (component.maxLength !== undefined) textInput.setMaxLength(component.maxLength);
//       if (component.value) textInput.setValue(component.value);

//       const actionRow = new ActionRowBuilder().addComponents(textInput);
//       modal.addComponents(actionRow);
//     });

//     return modal;
//   }
// }

// module.exports = { ModalCreator };
