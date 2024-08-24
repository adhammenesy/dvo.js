const fieldNamePredicate = _sapphire_shapeshift.string();
const fieldValuePredicate = _sapphire_shapeshift.string();
const fieldInlinePredicate = _sapphire_shapeshift.union(_sapphire_shapeshift.boolean(), _sapphire_shapeshift.undefined());
const embedFieldPredicate = _sapphire_shapeshift.object({
    name: _sapphire_shapeshift.string(),
    value: _sapphire_shapeshift.string(),
    inline: _sapphire_shapeshift.union(_sapphire_shapeshift.boolean(), _sapphire_shapeshift.undefined())
});
const embedFieldsArrayPredicate = _sapphire_shapeshift.array(embedFieldPredicate);
const fieldLengthPredicate = _sapphire_shapeshift.number();
function validateFieldLength(amountAdding, fields) {
    // validation logic here
}
const authorNamePredicate = _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null());
const imageURLPredicate = _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null(), _sapphire_shapeshift.undefined());
const urlPredicate = _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null(), _sapphire_shapeshift.undefined());
const embedAuthorPredicate = _sapphire_shapeshift.object({
    name: _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null()),
    iconURL: _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null(), _sapphire_shapeshift.undefined()),
    url: _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null(), _sapphire_shapeshift.undefined())
});
const RGBPredicate = _sapphire_shapeshift.number();
const colorPredicate = _sapphire_shapeshift.union(_sapphire_shapeshift.number(), _sapphire_shapeshift.tuple([_sapphire_shapeshift.number(), _sapphire_shapeshift.number(), _sapphire_shapeshift.number()]), _sapphire_shapeshift.null());
const descriptionPredicate = _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null());
const footerTextPredicate = _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null());
const embedFooterPredicate = _sapphire_shapeshift.object({
    text: _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null()),
    iconURL: _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null(), _sapphire_shapeshift.undefined())
});
const timestampPredicate = _sapphire_shapeshift.union(_sapphire_shapeshift.number(), _sapphire_shapeshift.date(), _sapphire_shapeshift.null());
const titlePredicate = _sapphire_shapeshift.union(_sapphire_shapeshift.string(), _sapphire_shapeshift.null());

const Assertions$5_RGBPredicate = RGBPredicate;
const Assertions$5_authorNamePredicate = authorNamePredicate;
const Assertions$5_colorPredicate = colorPredicate;
const Assertions$5_descriptionPredicate = descriptionPredicate;
const Assertions$5_embedAuthorPredicate = embedAuthorPredicate;
const Assertions$5_embedFieldPredicate = embedFieldPredicate;
const Assertions$5_embedFieldsArrayPredicate = embedFieldsArrayPredicate;
const Assertions$5_embedFooterPredicate = embedFooterPredicate;
const Assertions$5_fieldInlinePredicate = fieldInlinePredicate;
const Assertions$5_fieldLengthPredicate = fieldLengthPredicate;
const Assertions$5_fieldNamePredicate = fieldNamePredicate;
const Assertions$5_fieldValuePredicate = fieldValuePredicate;
const Assertions$5_footerTextPredicate = footerTextPredicate;
const Assertions$5_imageURLPredicate = imageURLPredicate;
const Assertions$5_timestampPredicate = timestampPredicate;
const Assertions$5_titlePredicate = titlePredicate;
const Assertions$5_urlPredicate = urlPredicate;
const Assertions$5_validateFieldLength = validateFieldLength;
const Assertions$5 = {
  RGBPredicate: Assertions$5_RGBPredicate,
  authorNamePredicate: Assertions$5_authorNamePredicate,
  colorPredicate: Assertions$5_colorPredicate,
  descriptionPredicate: Assertions$5_descriptionPredicate,
  embedAuthorPredicate: Assertions$5_embedAuthorPredicate,
  embedFieldPredicate: Assertions$5_embedFieldPredicate,
  embedFieldsArrayPredicate: Assertions$5_embedFieldsArrayPredicate,
  embedFooterPredicate: Assertions$5_embedFooterPredicate,
  fieldInlinePredicate: Assertions$5_fieldInlinePredicate,
  fieldLengthPredicate: Assertions$5_fieldLengthPredicate,
  fieldNamePredicate: Assertions$5_fieldNamePredicate,
  fieldValuePredicate: Assertions$5_fieldValuePredicate,
  footerTextPredicate: Assertions$5_footerTextPredicate,
  imageURLPredicate: Assertions$5_imageURLPredicate,
  timestampPredicate: Assertions$5_timestampPredicate,
  titlePredicate: Assertions$5_titlePredicate,
  urlPredicate: Assertions$5_urlPredicate,
  validateFieldLength: Assertions$5_validateFieldLength
};

/**
 * This mixin holds name and description symbols for slash commands.
 */
class SharedNameAndDescription {
    /**
     * The name of this command.
     */
    readonly name;
    /**
     * The name localizations of this command.
     */
    readonly name_localizations;
    /**
     * The description of this command.
     */
    readonly description;
    /**
     * The description localizations of this command.
     */
 * Normalizes data that is a rest parameter or an array into an array with a depth of 1.
 *
 * @typeParam ItemType - The data that must satisfy {@link RestOrArray}.
 * @param arr - The (possibly variadic) data to normalize
 */
function normalizeArray(arr) {
    return Array.isArray(arr) ? arr.flat() : [arr];
}
/**
 * Represents data that may be an array or came from a rest parameter.
 *
/**
 * Normalizes data that is a rest parameter or an array into an array with a depth of 1.
 *
 * @param arr - The (possibly variadic) data to normalize
 */
function normalizeArray(arr) {
    return Array.isArray(arr) ? arr.flat() : [arr];
}
/**
 * Represents data that may be an array or came from a rest parameter.
 *
 * @remarks
 * This type is used throughout builders to ensure both an array and variadic arguments
 * may be used. It is normalized with {@link normalizeArray}.
 */
class RestOrArray {
    constructor(...args) {
        this.data = normalizeArray(args);
    }
}


const customIdValidator = _sapphire_shapeshift.string();
const emojiValidator = _sapphire_shapeshift.object({
    name: _sapphire_shapeshift.string().optional(),
    id: _sapphire_shapeshift.string().optional(),
    animated: _sapphire_shapeshift.boolean().optional()
});
const disabledValidator = _sapphire_shapeshift.boolean();
const buttonLabelValidator = _sapphire_shapeshift.string();
const buttonStyleValidator = _sapphire_shapeshift.nativeEnum(ButtonStyle);
const placeholderValidator$1 = _sapphire_shapeshift.string();
const minMaxValidator = _sapphire_shapeshift.number();
const labelValueDescriptionValidator = _sapphire_shapeshift.string();
const jsonOptionValidator = _sapphire_shapeshift.object({
    label: _sapphire_shapeshift.string(),
    value: _sapphire_shapeshift.string(),
    description: _sapphire_shapeshift.string().optional(),
    emoji: _sapphire_shapeshift.object({
        name: _sapphire_shapeshift.string().optional(),
        id: _sapphire_shapeshift.string().optional(),
        animated: _sapphire_shapeshift.boolean().optional()
    }).optional(),
    default: _sapphire_shapeshift.boolean().optional()
});
const optionValidator = _sapphire_shapeshift.instance(StringSelectMenuOptionBuilder);
const optionsValidator = _sapphire_shapeshift.array(optionValidator);
const optionsLengthValidator = _sapphire_shapeshift.number();
function validateRequiredSelectMenuParameters(options, customId) {
    // validation logic here
}
const defaultValidator = _sapphire_shapeshift.boolean();
function validateRequiredSelectMenuOptionParameters(label, value) {
    // validation logic here
}
const channelTypesValidator = _sapphire_shapeshift.array(_sapphire_shapeshift.nativeEnum(ChannelType));
const urlValidator = _sapphire_shapeshift.string();
function validateRequiredButtonParameters(style, label, emoji, customId, url) {
    // validation logic here
}

const Assertions$4_buttonLabelValidator = buttonLabelValidator;
const Assertions$4_buttonStyleValidator = buttonStyleValidator;
const Assertions$4_channelTypesValidator = channelTypesValidator;
const Assertions$4_customIdValidator = customIdValidator;
const Assertions$4_defaultValidator = defaultValidator;
const Assertions$4_disabledValidator = disabledValidator;
const Assertions$4_emojiValidator = emojiValidator;
const Assertions$4_jsonOptionValidator = jsonOptionValidator;
const Assertions$4_labelValueDescriptionValidator = labelValueDescriptionValidator;
const Assertions$4_minMaxValidator = minMaxValidator;
const Assertions$4_optionValidator = optionValidator;
const Assertions$4_optionsLengthValidator = optionsLengthValidator;
const Assertions$4_optionsValidator = optionsValidator;
const Assertions$4_urlValidator = urlValidator;
const Assertions$4_validateRequiredButtonParameters = validateRequiredButtonParameters;
const Assertions$4_validateRequiredSelectMenuOptionParameters = validateRequiredSelectMenuOptionParameters;
const Assertions$4_validateRequiredSelectMenuParameters = validateRequiredSelectMenuParameters;
const Assertions$4 = {
  buttonLabelValidator: Assertions$4_buttonLabelValidator,
  buttonStyleValidator: Assertions$4_buttonStyleValidator,
  channelTypesValidator: Assertions$4_channelTypesValidator,
  customIdValidator: Assertions$4_customIdValidator,
  defaultValidator: Assertions$4_defaultValidator,
  disabledValidator: Assertions$4_disabledValidator,
  emojiValidator: Assertions$4_emojiValidator,
  jsonOptionValidator: Assertions$4_jsonOptionValidator,
  labelValueDescriptionValidator: Assertions$4_labelValueDescriptionValidator,
  minMaxValidator: Assertions$4_minMaxValidator,
  optionValidator: Assertions$4_optionValidator,
  optionsLengthValidator: Assertions$4_optionsLengthValidator,
  optionsValidator: Assertions$4_optionsValidator,
  placeholderValidator: placeholderValidator$1,
  urlValidator: Assertions$4_urlValidator,
  validateRequiredButtonParameters: Assertions$4_validateRequiredButtonParameters,
  validateRequiredSelectMenuOptionParameters: Assertions$4_validateRequiredSelectMenuOptionParameters,
  validateRequiredSelectMenuParameters: Assertions$4_validateRequiredSelectMenuParameters
};

/**
 * Any action row component data represented as an object.
 */
type AnyAPIActionRowComponent = APIActionRowComponent<APIActionRowComponentTypes> | APIActionRowComponentTypes;
/**
 * The base component builder that contains common symbols for all sorts of components.
 *
 * @typeParam DataType - The type of internal API data that is stored within the component
 */
class ComponentBuilder {
    /**
     * The API data associated with this component.
     */
    data;
    /**
     * Serializes this builder to API-compatible JSON data.
     *
     * @remarks
     * This method runs validations on the data before serializing it.
     * As such, it may throw an error if the data is invalid.
     */
    toJSON() {
        return this.data;
    }
    /**
     * Constructs a new kind of component.
     *
     * @param data - The data to construct a component out of
     */
    constructor(data) {
        this.data = data || {};
    }
}

/**
 * A builder that creates API-compatible JSON data for buttons.
 */
class ButtonBuilder extends ComponentBuilder {
    /**
     * Creates a new button from API data.
     *
     * @param data - The API data to create this button with
     * @example
     * Creating a button from an API data object:
     * ```ts
     * const button = new ButtonBuilder({
     * 	custom_id: 'a cool button',
     * 	style: ButtonStyle.Primary,
     * 	label: 'Click Me',
     * 	emoji: {
     * 		name: 'smile',
     * 		id: '123456789012345678',
     * 	},
     * });
     * ```
     * @example
     * Creating a button using setters and API data:
     * ```ts
     * const button = new ButtonBuilder({
     * 	style: ButtonStyle.Secondary,
     * 	label: 'Click Me',
     * })
     * 	.setEmoji({ name: '🙂' })
     * 	.setCustomId('another cool button');
     * ```
     */
    constructor(data) {
        super(data);
    }
    /**
     * Sets the style of this button.
     *
     * @param style - The style to use
     */
    setStyle(style) {
        this.data.style = style;
        return this;
    }
    /**
     * Sets the URL for this button.
     *
     * @remarks
     * This method is only available to buttons using the `Link` button style.
     * Only three types of URL schemes are currently supported: `https://`, `http://`, and `discord://`.
     * @param url - The URL to use
     */
    setURL(url) {
        this.data.url = url;
        return this;
    }
    /**
     * Sets the custom id for this button.
     *
     * @remarks
     * This method is only applicable to buttons that are not using the `Link` button style.
     * @param customId - The custom id to use
     */
    setCustomId(customId) {
        this.data.custom_id = customId;
        return this;
    }
    /**
     * Sets the emoji to display on this button.
     *
     * @param emoji - The emoji to use
     */
    setEmoji(emoji) {
        this.data.emoji = emoji;
        return this;
    }
    /**
     * Sets whether this button is disabled.
     *
     * @param disabled - Whether to disable this button
     */
    setDisabled(disabled) {
        this.data.disabled = disabled;
        return this;
    }
    /**
     * Sets the label for this button.
     *
     * @param label - The label to use
     */
    setLabel(label) {
        this.data.label = label;
        return this;
    }
    /**
     * {@inheritDoc ComponentBuilder.toJSON}
     */
    toJSON() {
        return this.data;
    }
}

/**
 * The base select menu builder that contains common symbols for select menu builders.
 *
 * @typeParam SelectMenuType - The type of select menu this would be instantiated for.
 */
class BaseSelectMenuBuilder extends ComponentBuilder {
    /**
     * Sets the placeholder for this select menu.
     *
     * @param placeholder - The placeholder to use
     */
    setPlaceholder(placeholder) {
        this.data.placeholder = placeholder;
        return this;
    }
    /**
     * Sets the minimum values that must be selected in the select menu.
     *
     * @param minValues - The minimum values that must be selected
     */
    setMinValues(minValues) {
        this.data.min_values = minValues;
        return this;
    }
    /**
     * Sets the maximum values that must be selected in the select menu.
     *
     * @param maxValues - The maximum values that must be selected
     */
    setMaxValues(maxValues) {
        this.data.max_values = maxValues;
        return this;
    }
    /**
     * Sets the custom id for this select menu.
     *
     * @param customId - The custom id to use
     */
    setCustomId(customId) {
        this.data.custom_id = customId;
        return this;
    }
    /**
     * Sets whether this select menu is disabled.
     *
     * @param disabled - Whether this select menu is disabled
     */
    setDisabled(disabled) {
        this.data.disabled = disabled;
        return this;
    }
    /**
     * {@inheritDoc ComponentBuilder.toJSON}
     */
    toJSON() {
        return this.data;
    }
}

/**
 * A builder that creates API-compatible JSON data for channel select menus.
 */
class ChannelSelectMenuBuilder extends BaseSelectMenuBuilder {
    /**
     * Creates a new select menu from API data.
     *
     * @param data - The API data to create this select menu with
     * @example
     * Creating a select menu from an API data object:
     * ```ts
     * const selectMenu = new ChannelSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * 	placeholder: 'select an option',
     * 	max_values: 2,
     * });
     * ```
     * @example
     * Creating a select menu using setters and API data:
     * ```ts
     * const selectMenu = new ChannelSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * })
     * 	.addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
     * 	.setMinValues(2);
     * ```
     */
    constructor(data) {
        super(data);
    }
    /**
     * Adds channel types to this select menu.
     *
     * @param types - The channel types to use
     */
    addChannelTypes(...types) {
        this.data.channel_types = normalizeArray(types);
        return this;
    }
    /**
     * Sets channel types for this select menu.
     *
     * @param types - The channel types to use
     */
    setChannelTypes(...types) {
        this.data.channel_types = normalizeArray(types);
        return this;
    }
    /**
     * Adds default channels to this auto populated select menu.
     *
     * @param channels - The channels to add
     */
    addDefaultChannels(...channels) {
        this.data.default_channels = normalizeArray(channels);
        return this;
    }
    /**
     * Sets default channels for this auto populated select menu.
     *
     * @param channels - The channels to set
     */
    setDefaultChannels(...channels) {
        this.data.default_channels = normalizeArray(channels);
        return this;
    }
    /**
     * {@inheritDoc BaseSelectMenuBuilder.toJSON}
     */
    toJSON() {
        return this.data;
    }
}

/**
 * A builder that creates API-compatible JSON data for mentionable select menus.
 */
class MentionableSelectMenuBuilder extends BaseSelectMenuBuilder {
    /**
     * Creates a new select menu from API data.
     *
     * @param data - The API data to create this select menu with
     * @example
     * Creating a select menu from an API data object:
     * ```ts
     * const selectMenu = new MentionableSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * 	placeholder: 'select an option',
     * 	max_values: 2,
     * });
     * ```
     * @example
     * Creating a select menu using setters and API data:
     * ```ts
     * const selectMenu = new MentionableSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * })
     * 	.setMinValues(1);
     * ```
     */
    constructor(data) {
        super(data);
    }
    /**
     * Adds default roles to this auto populated select menu.
     *
     * @param roles - The roles to add
     */
    addDefaultRoles(...roles) {
        this.data.default_roles = normalizeArray(roles);
        return this;
    }
    /**
     * Adds default users to this auto populated select menu.
     *
     * @param users - The users to add
     */
    addDefaultUsers(...users) {
        this.data.default_users = normalizeArray(users);
        return this;
    }
    /**
     * Adds default values to this auto populated select menu.
     *
     * @param values - The values to add
     */
    addDefaultValues(...values) {
        this.data.default_values = normalizeArray(values);
        return this;
    }
    /**
     * Sets default values for this auto populated select menu.
     *
     * @param values - The values to set
     */
    setDefaultValues(...values) {
        this.data.default_values = normalizeArray(values);
        return this;
    }
}

/**
 * A builder that creates API-compatible JSON data for role select menus.
 */
class RoleSelectMenuBuilder extends BaseSelectMenuBuilder {
    /**
     * Creates a new select menu from API data.
     *
     * @param data - The API data to create this select menu with
     * @example
     * Creating a select menu from an API data object:
     * ```ts
     * const selectMenu = new RoleSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * 	placeholder: 'select an option',
     * 	max_values: 2,
     * });
     * ```
     * @example
     * Creating a select menu using setters and API data:
     * ```ts
     * const selectMenu = new RoleSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * })
     * 	.setMinValues(1);
     * ```
     */
    constructor(data) {
        super(data);
    }
    /**
     * Adds default roles to this auto populated select menu.
     *
     * @param roles - The roles to add
     */
    addDefaultRoles(...roles) {
        this.data.default_roles = normalizeArray(roles);
        return this;
    }
    /**
     * Sets default roles for this auto populated select menu.
     *
     * @param roles - The roles to set
     */
    setDefaultRoles(...roles) {
        this.data.default_roles = normalizeArray(roles);
        return this;
    }
}

/**
 * A builder that creates API-compatible JSON data for string select menus.
 */
class StringSelectMenuBuilder extends BaseSelectMenuBuilder {
    /**
     * The options within this select menu.
     */
    options;
    /**
     * Creates a new select menu from API data.
     *
     * @param data - The API data to create this select menu with
     * @example
     * Creating a select menu from an API data object:
     * ```ts
     * const selectMenu = new StringSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * 	placeholder: 'select an option',
     * 	max_values: 2,
     * 	options: [
     * 		{ label: 'option 1', value: '1' },
     * 		{ label: 'option 2', value: '2' },
     * 		{ label: 'option 3', value: '3' },
     * 	],
     * });
     * ```
     * @example
     * Creating a select menu using setters and API data:
     * ```ts
     * const selectMenu = new StringSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * })
     * 	.setMinValues(1)
     * 	.addOptions({
     * 		label: 'Catchy',
     * 		value: 'catch',
     * 	});
     * ```
     */
    constructor(data) {
        super(data);
        this.options = data?.options?.map(option => new StringSelectMenuOptionBuilder(option)) || [];
    }
    /**
     * Adds options to this select menu.
     *
     * @param options - The options to add
     */
    addOptions(...options) {
        this.options.push(...normalizeArray(options).map(option => option instanceof StringSelectMenuOptionBuilder ? option : new StringSelectMenuOptionBuilder(option)));
        return this;
    }
    /**
     * Sets the options for this select menu.
     *
     * @param options - The options to set
     */
    setOptions(...options) {
        this.options = normalizeArray(options).map(option => option instanceof StringSelectMenuOptionBuilder ? option : new StringSelectMenuOptionBuilder(option));
        return this;
    setOptions(...options: RestOrArray<APISelectMenuOption | StringSelectMenuOptionBuilder>): this;
    /**
     * Removes, replaces, or inserts options for this select menu.
     *
     * @remarks
     * This method behaves similarly
     * to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice | Array.prototype.splice()}.
     * It's useful for modifying and adjusting the order of existing options.
     * @example
     * Remove the first option:
     * ```ts
     * selectMenu.spliceOptions(0, 1);
     * ```
     * @example
     * Remove the first n option:
     * ```ts
     * const n = 4;
     * selectMenu.spliceOptions(0, n);
     * ```
     * @example
     * Remove the last option:
     * ```ts
     * selectMenu.spliceOptions(-1, 1);
     * ```
     * @param index - The index to start at
     * @param deleteCount - The number of options to remove
     * @param options - The replacing option objects or builders
     */
    spliceOptions(index: number, deleteCount: number, ...options: RestOrArray<APISelectMenuOption | StringSelectMenuOptionBuilder>): this;
    /**
     * {@inheritDoc BaseSelectMenuBuilder.toJSON}
     */
    toJSON(): APIStringSelectComponent;
}

/**
 * A builder that creates API-compatible JSON data for user select menus.
 */
declare class UserSelectMenuBuilder extends BaseSelectMenuBuilder<APIUserSelectComponent> {
    /**
     * Creates a new select menu from API data.
     *
     * @param data - The API data to create this select menu with
     * @example
     * Creating a select menu from an API data object:
     * ```ts
     * const selectMenu = new UserSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * 	placeholder: 'select an option',
     * 	max_values: 2,
     * });
     * ```
     * @example
     * Creating a select menu using setters and API data:
     * ```ts
     * const selectMenu = new UserSelectMenuBuilder({
     * 	custom_id: 'a cool select menu',
     * })
     * 	.setMinValues(1);
     * ```
     */
    constructor(data?: Partial<APIUserSelectComponent>);
    /**
     * Adds default users to this auto populated select menu.
     *
     * @param users - The users to add
     */
    addDefaultUsers(...users: RestOrArray<Snowflake>): this;
    /**
     * Sets default users for this auto populated select menu.
     *
     * @param users - The users to set
     */
    setDefaultUsers(...users: RestOrArray<Snowflake>): this;
}

/**
 * A builder that creates API-compatible JSON data for text inputs.
 */
declare class TextInputBuilder extends ComponentBuilder<APITextInputComponent> implements Equatable<APITextInputComponent | JSONEncodable<APITextInputComponent>> {
    /**
     * Creates a new text input from API data.
     *
     * @param data - The API data to create this text input with
     * @example
     * Creating a text input from an API data object:
     * ```ts
     * const textInput = new TextInputBuilder({
     * 	custom_id: 'a cool text input',
     * 	label: 'Type something',
     * 	style: TextInputStyle.Short,
     * });
     * ```
     * @example
     * Creating a text input using setters and API data:
     * ```ts
     * const textInput = new TextInputBuilder({
     * 	label: 'Type something else',
     * })
     * 	.setCustomId('woah')
     * 	.setStyle(TextInputStyle.Paragraph);
     * ```
     */
    constructor(data?: APITextInputComponent & {
        type?: ComponentType.TextInput;
    });
    /**
     * Sets the custom id for this text input.
     *
     * @param customId - The custom id to use
     */
    setCustomId(customId: string): this;
    /**
     * Sets the label for this text input.
     *
     * @param label - The label to use
     */
    setLabel(label: string): this;
    /**
     * Sets the style for this text input.
     *
     * @param style - The style to use
     */
    setStyle(style: TextInputStyle): this;
    /**
     * Sets the minimum length of text for this text input.
     *
     * @param minLength - The minimum length of text for this text input
     */
    setMinLength(minLength: number): this;
    /**
     * Sets the maximum length of text for this text input.
     *
     * @param maxLength - The maximum length of text for this text input
     */
    setMaxLength(maxLength: number): this;
    /**
     * Sets the placeholder for this text input.
     *
     * @param placeholder - The placeholder to use
     */
    setPlaceholder(placeholder: string): this;
    /**
     * Sets the value for this text input.
     *
     * @param value - The value to use
     */
    setValue(value: string): this;
    /**
     * Sets whether this text input is required.
     *
     * @param required - Whether this text input is required
     */
    setRequired(required?: boolean): this;
    /**
     * {@inheritDoc ComponentBuilder.toJSON}
     */
    toJSON(): APITextInputComponent;
    /**
     * Whether this is equal to another structure.
     */
    equals(other: APITextInputComponent | JSONEncodable<APITextInputComponent>): boolean;
}

/**
 * The builders that may be used for messages.
 */
type MessageComponentBuilder = ActionRowBuilder<MessageActionRowComponentBuilder> | MessageActionRowComponentBuilder;
/**
 * The builders that may be used for modals.
 */
type ModalComponentBuilder = ActionRowBuilder<ModalActionRowComponentBuilder> | ModalActionRowComponentBuilder;
/**
 * The builders that may be used within an action row for messages.
 */
type MessageActionRowComponentBuilder = ButtonBuilder | ChannelSelectMenuBuilder | MentionableSelectMenuBuilder | RoleSelectMenuBuilder | StringSelectMenuBuilder | UserSelectMenuBuilder;
/**
 * The builders that may be used within an action row for modals.
 */
type ModalActionRowComponentBuilder = TextInputBuilder;
/**
 * Any builder.
 */
type AnyComponentBuilder = MessageActionRowComponentBuilder | ModalActionRowComponentBuilder;
/**
 * A builder that creates API-compatible JSON data for action rows.
 *
 * @typeParam ComponentType - The types of components this action row holds
 */
declare class ActionRowBuilder<ComponentType extends AnyComponentBuilder> extends ComponentBuilder<APIActionRowComponent<APIMessageActionRowComponent | APIModalActionRowComponent>> {
    /**
     * The components within this action row.
     */
    readonly components: ComponentType[];
    /**
     * Creates a new action row from API data.
     *
     * @param data - The API data to create this action row with
     * @example
     * Creating an action row from an API data object:
     * ```ts
     * const actionRow = new ActionRowBuilder({
     * 	components: [
     * 		{
     * 			custom_id: "custom id",
     * 			label: "Type something",
     * 			style: TextInputStyle.Short,
     * 			type: ComponentType.TextInput,
     * 		},
     * 	],
     * });
     * ```
     * @example
     * Creating an action row using setters and API data:
     * ```ts
     * const actionRow = new ActionRowBuilder({
     * 	components: [
     * 		{
     * 			custom_id: "custom id",
     * 			label: "Click me",
     * 			style: ButtonStyle.Primary,
     * 			type: ComponentType.Button,
     * 		},
     * 	],
     * })
     * 	.addComponents(button2, button3);
     * ```
     */
    constructor({ components, ...data }?: Partial<APIActionRowComponent<APIActionRowComponentTypes>>);
    /**
     * Adds components to this action row.
     *
     * @param components - The components to add
     */
    addComponents(...components: RestOrArray<ComponentType>): this;
    /**
     * Sets components for this action row.
     *
     * @param components - The components to set
     */
    setComponents(...components: RestOrArray<ComponentType>): this;
    /**
     * {@inheritDoc ComponentBuilder.toJSON}
     */
    toJSON(): APIActionRowComponent<ReturnType<ComponentType['toJSON']>>;
}

/**
 * Components here are mapped to their respective builder.
 */
interface MappedComponentTypes {
    /**
     * The action row component type is associated with an {@link ActionRowBuilder}.
     */
    [ComponentType.ActionRow]: ActionRowBuilder<AnyComponentBuilder>;
    /**
     * The button component type is associated with a {@link ButtonBuilder}.
     */
    [ComponentType.Button]: ButtonBuilder;
    /**
     * The string select component type is associated with a {@link StringSelectMenuBuilder}.
     */
    [ComponentType.StringSelect]: StringSelectMenuBuilder;
    /**
     * The text input component type is associated with a {@link TextInputBuilder}.
     */
    [ComponentType.TextInput]: TextInputBuilder;
    /**
     * The user select component type is associated with a {@link UserSelectMenuBuilder}.
     */
    [ComponentType.UserSelect]: UserSelectMenuBuilder;
    /**
     * The role select component type is associated with a {@link RoleSelectMenuBuilder}.
     */
    [ComponentType.RoleSelect]: RoleSelectMenuBuilder;
    /**
     * The mentionable select component type is associated with a {@link MentionableSelectMenuBuilder}.
     */
    [ComponentType.MentionableSelect]: MentionableSelectMenuBuilder;
    /**
     * The channel select component type is associated with a {@link ChannelSelectMenuBuilder}.
     */
    [ComponentType.ChannelSelect]: ChannelSelectMenuBuilder;
}
/**
 * Factory for creating components from API data.
 *
 * @typeParam ComponentType - The type of component to use
 * @param data - The API data to transform to a component class
 */
declare function createComponentBuilder<ComponentType extends keyof MappedComponentTypes>(data: (APIModalComponent | APIMessageComponent) & {
    type: ComponentType;
}): MappedComponentTypes[ComponentType];
/**
 * Factory for creating components from API data.
 *
 * @typeParam ComponentBuilder - The type of component to use
 * @param data - The API data to transform to a component class
 */
declare function createComponentBuilder<ComponentBuilder extends MessageComponentBuilder | ModalComponentBuilder>(data: ComponentBuilder): ComponentBuilder;

declare const textInputStyleValidator: _sapphire_shapeshift.NativeEnumValidator<typeof TextInputStyle>;
declare const minLengthValidator: _sapphire_shapeshift.NumberValidator<number>;
declare const maxLengthValidator: _sapphire_shapeshift.NumberValidator<number>;
declare const requiredValidator: _sapphire_shapeshift.BooleanValidator<boolean>;
declare const valueValidator: _sapphire_shapeshift.StringValidator<string>;
declare const placeholderValidator: _sapphire_shapeshift.StringValidator<string>;
declare const labelValidator: _sapphire_shapeshift.StringValidator<string>;
declare function validateRequiredParameters$3(customId?: string, style?: TextInputStyle, label?: string): void;

declare const Assertions$3_labelValidator: typeof labelValidator;
declare const Assertions$3_maxLengthValidator: typeof maxLengthValidator;
declare const Assertions$3_minLengthValidator: typeof minLengthValidator;
declare const Assertions$3_placeholderValidator: typeof placeholderValidator;
declare const Assertions$3_requiredValidator: typeof requiredValidator;
declare const Assertions$3_textInputStyleValidator: typeof textInputStyleValidator;
declare const Assertions$3_valueValidator: typeof valueValidator;
declare namespace Assertions$3 {
  export { Assertions$3_labelValidator as labelValidator, Assertions$3_maxLengthValidator as maxLengthValidator, Assertions$3_minLengthValidator as minLengthValidator, Assertions$3_placeholderValidator as placeholderValidator, Assertions$3_requiredValidator as requiredValidator, Assertions$3_textInputStyleValidator as textInputStyleValidator, validateRequiredParameters$3 as validateRequiredParameters, Assertions$3_valueValidator as valueValidator };
}

/**
 * A builder that creates API-compatible JSON data for modals.
 */
declare class ModalBuilder implements JSONEncodable<APIModalInteractionResponseCallbackData> {
    /**
     * The API data associated with this modal.
     */
    readonly data: Partial<APIModalInteractionResponseCallbackData>;
    /**
     * The components within this modal.
     */
    readonly components: ActionRowBuilder<ModalActionRowComponentBuilder>[];
    /**
     * Creates a new modal from API data.
     *
     * @param data - The API data to create this modal with
     */
    constructor({ components, ...data }?: Partial<APIModalInteractionResponseCallbackData>);
    /**
     * Sets the title of this modal.
     *
     * @param title - The title to use
     */
    setTitle(title: string): this;
    /**
     * Sets the custom id of this modal.
     *
     * @param customId - The custom id to use
     */
    setCustomId(customId: string): this;
    /**
     * Adds components to this modal.
     *
     * @param components - The components to add
     */
    addComponents(...components: RestOrArray<ActionRowBuilder<ModalActionRowComponentBuilder> | APIActionRowComponent<APIModalActionRowComponent>>): this;
    /**
     * Sets components for this modal.
     *
     * @param components - The components to set
     */
    setComponents(...components: RestOrArray<ActionRowBuilder<ModalActionRowComponentBuilder>>): this;
    /**
     * {@inheritDoc ComponentBuilder.toJSON}
     */
    toJSON(): APIModalInteractionResponseCallbackData;
}

declare const titleValidator: _sapphire_shapeshift.StringValidator<string>;
declare const componentsValidator: _sapphire_shapeshift.ArrayValidator<[ActionRowBuilder<AnyComponentBuilder>, ...ActionRowBuilder<AnyComponentBuilder>[]], ActionRowBuilder<AnyComponentBuilder>>;
declare function validateRequiredParameters$2(customId?: string, title?: string, components?: ActionRowBuilder<ModalActionRowComponentBuilder>[]): void;

declare const Assertions$2_componentsValidator: typeof componentsValidator;
declare const Assertions$2_titleValidator: typeof titleValidator;
declare namespace Assertions$2 {
  export { Assertions$2_componentsValidator as componentsValidator, Assertions$2_titleValidator as titleValidator, validateRequiredParameters$2 as validateRequiredParameters };
}

/**
 * This mixin holds name and description symbols for slash commands.
 */
declare class SharedNameAndDescription {
    /**
     * The name of this command.
     */
    readonly name: string;
    /**
     * The name localizations of this command.
     */
    readonly name_localizations?: LocalizationMap;
    /**
     * The description of this command.
     */
    readonly description: string;
    /**
     * The description localizations of this command.
     */
    readonly description_localizations?: LocalizationMap;
    /**
     * Sets the name of this command.
     *
     * @param name - The name to use
     */
    setName(name: string): this;
    /**
     * Sets the description of this command.
     *
     * @param description - The description to use
     */
    setDescription(description: string): this;
    /**
     * Sets a name localization for this command.
     *
     * @param locale - The locale to set
     * @param localizedName - The localized name for the given `locale`
     */
    setNameLocalization(locale: LocaleString, localizedName: string | null): this;
    /**
     * Sets the name localizations for this command.
     *
     * @param localizedNames - The object of localized names to set
     */
    setNameLocalizations(localizedNames: LocalizationMap | null): this;
    /**
     * Sets a description localization for this command.
     *
     * @param locale - The locale to set
     * @param localizedDescription - The localized description for the given locale
     */
    setDescriptionLocalization(locale: LocaleString, localizedDescription: string | null): this;
    /**
     * Sets the description localizations for this command.
     *
     * @param localizedDescriptions - The object of localized descriptions to set
     */
    setDescriptionLocalizations(localizedDescriptions: LocalizationMap | null): this;
}

/**
 * This mixin holds symbols that can be shared in slashcommands independent of options or subcommands.
 */
declare class SharedSlashCommand {
    readonly name: string;
    readonly name_localizations?: LocalizationMap;
    readonly description: string;
    readonly description_localizations?: LocalizationMap;
    readonly options: ToAPIApplicationCommandOptions[];
    /**
     * @deprecated Use {@link SharedSlashCommand.setDefaultMemberPermissions} or {@link SharedSlashCommand.setDMPermission} instead.
     */
    readonly default_permission: boolean | undefined;
    readonly default_member_permissions: Permissions | null | undefined;
    readonly dm_permission: boolean | undefined;
    readonly nsfw: boolean | undefined;
    /**
     * Sets whether the command is enabled by default when the application is added to a guild.
     *
     * @remarks
     * If set to `false`, you will have to later `PUT` the permissions for this command.
     * @param value - Whether or not to enable this command by default
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
     * @deprecated Use {@link SharedSlashCommand.setDefaultMemberPermissions} or {@link SharedSlashCommand.setDMPermission} instead.
     */
    setDefaultPermission(value: boolean): this;
    /**
     * Sets the default permissions a member should have in order to run the command.
     *
     * @remarks
     * You can set this to `'0'` to disable the command by default.
     * @param permissions - The permissions bit field to set
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
     */
    setDefaultMemberPermissions(permissions: Permissions | bigint | number | null | undefined): this;
    /**
     * Sets if the command is available in direct messages with the application.
     *
     * @remarks
     * By default, commands are visible. This method is only for global commands.
     * @param enabled - Whether the command should be enabled in direct messages
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
     */
    setDMPermission(enabled: boolean | null | undefined): this;
    /**
     * Sets whether this command is NSFW.
     *
     * @param nsfw - Whether this command is NSFW
     */
    setNSFW(nsfw?: boolean): this;
    /**
     * Serializes this builder to API-compatible JSON data.
     *
     * @remarks
     * This method runs validations on the data before serializing it.
     * As such, it may throw an error if the data is invalid.
     */
    toJSON(): RESTPostAPIChatInputApplicationCommandsJSONBody;
}

/**
 * The base application command option builder that contains common symbols for application command builders.
 */
declare abstract class ApplicationCommandOptionBase extends SharedNameAndDescription {
    /**
     * The type of this option.
     */
    abstract readonly type: ApplicationCommandOptionType;
    /**
     * Whether this option is required.
     *
     * @defaultValue `false`
     */
    readonly required: boolean;
    /**
     * Sets whether this option is required.
     *
     * @param required - Whether this option should be required
     */
    setRequired(required: boolean): this;
    /**
     * Serializes this builder to API-compatible JSON data.
     *
     * @remarks
     * This method runs validations on the data before serializing it.
     * As such, it may throw an error if the data is invalid.
     */
    abstract toJSON(): APIApplicationCommandBasicOption;
    /**
     * This method runs required validators on this builder.
     */
    protected runRequiredValidations(): void;
}

/**
 * A slash command attachment option.
 */
declare class SlashCommandAttachmentOption extends ApplicationCommandOptionBase {
    /**
     * The type of this option.
     */
    readonly type: ApplicationCommandOptionType.Attachment;
    /**
     * {@inheritDoc ApplicationCommandOptionBase.toJSON}
     */
    toJSON(): APIApplicationCommandAttachmentOption;
}

/**
 * A slash command boolean option.
 */
declare class SlashCommandBooleanOption extends ApplicationCommandOptionBase {
    /**
     * The type of this option.
     */
    readonly type: ApplicationCommandOptionType.Boolean;
    /**
     * {@inheritDoc ApplicationCommandOptionBase.toJSON}
     */
    toJSON(): APIApplicationCommandBooleanOption;
}

/**
 * The allowed channel types used for a channel option in a slash command builder.
 *
 * @privateRemarks This can't be dynamic because const enums are erased at runtime.
 * @internal
 */
declare const allowedChannelTypes: readonly [ChannelType.GuildText, ChannelType.GuildVoice, ChannelType.GuildCategory, ChannelType.GuildAnnouncement, ChannelType.AnnouncementThread, ChannelType.PublicThread, ChannelType.PrivateThread, ChannelType.GuildStageVoice, ChannelType.GuildForum, ChannelType.GuildMedia];
/**
 * The type of allowed channel types used for a channel option.
 */
type ApplicationCommandOptionAllowedChannelTypes = (typeof allowedChannelTypes)[number];
/**
 * This mixin holds channel type symbols used for options.
 */
declare class ApplicationCommandOptionChannelTypesMixin {
    /**
     * The channel types of this option.
     */
    readonly channel_types?: ApplicationCommandOptionAllowedChannelTypes[];
    /**
     * Adds channel types to this option.
     *
     * @param channelTypes - The channel types
     */
    addChannelTypes(...channelTypes: RestOrArray<ApplicationCommandOptionAllowedChannelTypes>): this;
}

/**
 * A slash command channel option.
 */
declare class SlashCommandChannelOption extends ApplicationCommandOptionBase {
    /**
     * The type of this option.
     */
    readonly type: ApplicationCommandOptionType.Channel;
    /**
     * {@inheritDoc ApplicationCommandOptionBase.toJSON}
     */
    toJSON(): APIApplicationCommandChannelOption;
}
interface SlashCommandChannelOption extends ApplicationCommandOptionChannelTypesMixin {
}

/**
 * This mixin holds minimum and maximum symbols used for options.
 */
declare abstract class ApplicationCommandNumericOptionMinMaxValueMixin {
    /**
     * The maximum value of this option.
     */
    readonly max_value?: number;
    /**
     * The minimum value of this option.
     */
    readonly min_value?: number;
    /**
     * Sets the maximum number value of this option.
     *
     * @param max - The maximum value this option can be
     */
    abstract setMaxValue(max: number): this;
    /**
     * Sets the minimum number value of this option.
     *
     * @param min - The minimum value this option can be
     */
    abstract setMinValue(min: number): this;
}

/**
 * This mixin holds choices and autocomplete symbols used for options.
 */
declare class ApplicationCommandOptionWithAutocompleteMixin {
    /**
     * Whether this option utilizes autocomplete.
     */
    readonly autocomplete?: boolean;
    /**
     * The type of this option.
     *
     * @privateRemarks Since this is present and this is a mixin, this is needed.
     */
    readonly type: ApplicationCommandOptionType;
    /**
     * Whether this option uses autocomplete.
     *
     * @param autocomplete - Whether this option should use autocomplete
     */
    setAutocomplete(autocomplete: boolean): this;
}

/**
 * This mixin holds choices and autocomplete symbols used for options.
 */
declare class ApplicationCommandOptionWithChoicesMixin<ChoiceType extends number | string> {
    /**
     * The choices of this option.
     */
    readonly choices?: APIApplicationCommandOptionChoice<ChoiceType>[];
    /**
     * The type of this option.
     *
     * @privateRemarks Since this is present and this is a mixin, this is needed.
     */
    readonly type: ApplicationCommandOptionType;
    /**
     * Adds multiple choices to this option.
     *
     * @param choices - The choices to add
     */
    addChoices(...choices: RestOrArray<APIApplicationCommandOptionChoice<ChoiceType>>): this;
    /**
     * Sets multiple choices for this option.
     *
     * @param choices - The choices to set
     */
    setChoices<Input extends APIApplicationCommandOptionChoice<ChoiceType>>(...choices: RestOrArray<Input>): this;
}

/**
 * A slash command integer option.
 */
declare class SlashCommandIntegerOption extends ApplicationCommandOptionBase implements ApplicationCommandNumericOptionMinMaxValueMixin {
    /**
     * The type of this option.
     */
    readonly type: ApplicationCommandOptionType.Integer;
    /**
     * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMaxValue}
     */
    setMaxValue(max: number): this;
    /**
     * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMinValue}
     */
    setMinValue(min: number): this;
    /**
     * {@inheritDoc ApplicationCommandOptionBase.toJSON}
     */
    toJSON(): APIApplicationCommandIntegerOption;
}
interface SlashCommandIntegerOption extends ApplicationCommandNumericOptionMinMaxValueMixin, ApplicationCommandOptionWithChoicesMixin<number>, ApplicationCommandOptionWithAutocompleteMixin {
}

/**
 * A slash command mentionable option.
 */
declare class SlashCommandMentionableOption extends ApplicationCommandOptionBase {
    /**
     * The type of this option.
     */
    readonly type: ApplicationCommandOptionType.Mentionable;
    /**
     * {@inheritDoc ApplicationCommandOptionBase.toJSON}
     */
    toJSON(): APIApplicationCommandMentionableOption;
}

/**
 * A slash command number option.
 */
declare class SlashCommandNumberOption extends ApplicationCommandOptionBase implements ApplicationCommandNumericOptionMinMaxValueMixin {
    /**
     * The type of this option.
     */
    readonly type: ApplicationCommandOptionType.Number;
    /**
     * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMaxValue}
     */
    setMaxValue(max: number): this;
    /**
     * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMinValue}
     */
    setMinValue(min: number): this;
    /**
     * {@inheritDoc ApplicationCommandOptionBase.toJSON}
     */
    toJSON(): APIApplicationCommandNumberOption;
}
interface SlashCommandNumberOption extends ApplicationCommandNumericOptionMinMaxValueMixin, ApplicationCommandOptionWithChoicesMixin<number>, ApplicationCommandOptionWithAutocompleteMixin {
}

/**
 * A slash command role option.
 */
declare class SlashCommandRoleOption extends ApplicationCommandOptionBase {
    /**
     * The type of this option.
     */
    readonly type: ApplicationCommandOptionType.Role;
    /**
     * {@inheritDoc ApplicationCommandOptionBase.toJSON}
     */
    toJSON(): APIApplicationCommandRoleOption;
}

/**
 * A slash command string option.
 */
declare class SlashCommandStringOption extends ApplicationCommandOptionBase {
    /**
     * The type of this option.
     */
    readonly type: ApplicationCommandOptionType.String;
    /**
     * The maximum length of this option.
     */
    readonly max_length?: number;
    /**
     * The minimum length of this option.
     */
    readonly min_length?: number;
    /**
     * Sets the maximum length of this string option.
     *
     * @param max - The maximum length this option can be
     */
    setMaxLength(max: number): this;
    /**
     * Sets the minimum length of this string option.
     *
     * @param min - The minimum length this option can be
     */
    setMinLength(min: number): this;
    /**
     * {@inheritDoc ApplicationCommandOptionBase.toJSON}
     */
    toJSON(): APIApplicationCommandStringOption;
}
interface SlashCommandStringOption extends ApplicationCommandOptionWithChoicesMixin<string>, ApplicationCommandOptionWithAutocompleteMixin {
}

/**
 * A slash command user option.
 */
declare class SlashCommandUserOption extends ApplicationCommandOptionBase {
    /**
     * The type of this option.
     */
    readonly type: ApplicationCommandOptionType.User;
    /**
     * {@inheritDoc ApplicationCommandOptionBase.toJSON}
     */
    toJSON(): APIApplicationCommandUserOption;
}

/**
 * This mixin holds symbols that can be shared in slash command options.
 *
 * @typeParam TypeAfterAddingOptions - The type this class should return after adding an option.
 */
declare class SharedSlashCommandOptions<TypeAfterAddingOptions extends SharedSlashCommandOptions<TypeAfterAddingOptions>> {
    readonly options: ToAPIApplicationCommandOptions[];
    /**
     * Adds a boolean option.
     *
     * @param input - A function that returns an option builder or an already built builder
     */
    addBooleanOption(input: SlashCommandBooleanOption | ((builder: SlashCommandBooleanOption) => SlashCommandBooleanOption)): TypeAfterAddingOptions;
    /**
     * Adds a user option.
     *
     * @param input - A function that returns an option builder or an already built builder
     */
    addUserOption(input: SlashCommandUserOption | ((builder: SlashCommandUserOption) => SlashCommandUserOption)): TypeAfterAddingOptions;
    /**
     * Adds a channel option.
     *
     * @param input - A function that returns an option builder or an already built builder
     */
    addChannelOption(input: SlashCommandChannelOption | ((builder: SlashCommandChannelOption) => SlashCommandChannelOption)): TypeAfterAddingOptions;
    /**
     * Adds a role option.
     *
     * @param input - A function that returns an option builder or an already built builder
     */
    addRoleOption(input: SlashCommandRoleOption | ((builder: SlashCommandRoleOption) => SlashCommandRoleOption)): TypeAfterAddingOptions;
    /**
     * Adds an attachment option.
     *
     * @param input - A function that returns an option builder or an already built builder
     */
    addAttachmentOption(input: SlashCommandAttachmentOption | ((builder: SlashCommandAttachmentOption) => SlashCommandAttachmentOption)): TypeAfterAddingOptions;
    /**
     * Adds a mentionable option.
     *
     * @param input - A function that returns an option builder or an already built builder
     */
    addMentionableOption(input: SlashCommandMentionableOption | ((builder: SlashCommandMentionableOption) => SlashCommandMentionableOption)): TypeAfterAddingOptions;
    /**
     * Adds a string option.
     *
     * @param input - A function that returns an option builder or an already built builder
     */
    addStringOption(input: SlashCommandStringOption | ((builder: SlashCommandStringOption) => SlashCommandStringOption)): TypeAfterAddingOptions;
    /**
     * Adds an integer option.
     *
     * @param input - A function that returns an option builder or an already built builder
     */
    addIntegerOption(input: SlashCommandIntegerOption | ((builder: SlashCommandIntegerOption) => SlashCommandIntegerOption)): TypeAfterAddingOptions;
    /**
     * Adds a number option.
     *
     * @param input - A function that returns an option builder or an already built builder
     */
    addNumberOption(input: SlashCommandNumberOption | ((builder: SlashCommandNumberOption) => SlashCommandNumberOption)): TypeAfterAddingOptions;
    /**
     * Where the actual adding magic happens. ✨
     *
     * @param input - The input. What else?
     * @param Instance - The instance of whatever is being added
     * @internal
     */
    private _sharedAddOptionMethod;
}

/**
 * Represents a folder for subcommands.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups}
 */
declare class SlashCommandSubcommandGroupBuilder implements ToAPIApplicationCommandOptions {
    /**
     * The name of this subcommand group.
     */
    readonly name: string;
    /**
     * The description of this subcommand group.
     */
    readonly description: string;
    /**
     * The subcommands within this subcommand group.
     */
    readonly options: SlashCommandSubcommandBuilder[];
    /**
     * Adds a new subcommand to this group.
     *
     * @param input - A function that returns a subcommand builder or an already built builder
     */
    addSubcommand(input: SlashCommandSubcommandBuilder | ((subcommandGroup: SlashCommandSubcommandBuilder) => SlashCommandSubcommandBuilder)): this;
    /**
     * Serializes this builder to API-compatible JSON data.
     *
     * @remarks
     * This method runs validations on the data before serializing it.
     * As such, it may throw an error if the data is invalid.
     */
    toJSON(): APIApplicationCommandSubcommandGroupOption;
}
interface SlashCommandSubcommandGroupBuilder extends SharedNameAndDescription {
}
/**
 * A builder that creates API-compatible JSON data for slash command subcommands.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups}
 */
declare class SlashCommandSubcommandBuilder implements ToAPIApplicationCommandOptions {
    /**
     * The name of this subcommand.
     */
    readonly name: string;
    /**
     * The description of this subcommand.
     */
    readonly description: string;
    /**
     * The options within this subcommand.
     */
    readonly options: ApplicationCommandOptionBase[];
    /**
     * Serializes this builder to API-compatible JSON data.
     *
     * @remarks
     * This method runs validations on the data before serializing it.
     * As such, it may throw an error if the data is invalid.
     */
    toJSON(): APIApplicationCommandSubcommandOption;
}
interface SlashCommandSubcommandBuilder extends SharedNameAndDescription, SharedSlashCommandOptions<SlashCommandSubcommandBuilder> {
}

/**
 * This mixin holds symbols that can be shared in slash subcommands.
 *
 * @typeParam TypeAfterAddingSubcommands - The type this class should return after adding a subcommand or subcommand group.
 */
declare class SharedSlashCommandSubcommands<TypeAfterAddingSubcommands extends SharedSlashCommandSubcommands<TypeAfterAddingSubcommands>> {
    readonly options: ToAPIApplicationCommandOptions[];
    /**
     * Adds a new subcommand group to this command.
     *
     * @param input - A function that returns a subcommand group builder or an already built builder
     */
    addSubcommandGroup(input: SlashCommandSubcommandGroupBuilder | ((subcommandGroup: SlashCommandSubcommandGroupBuilder) => SlashCommandSubcommandGroupBuilder)): TypeAfterAddingSubcommands;
    /**
     * Adds a new subcommand to this command.
     *
     * @param input - A function that returns a subcommand builder or an already built builder
     */
    addSubcommand(input: SlashCommandSubcommandBuilder | ((subcommandGroup: SlashCommandSubcommandBuilder) => SlashCommandSubcommandBuilder)): TypeAfterAddingSubcommands;
}

/**
 * A builder that creates API-compatible JSON data for slash commands.
 */
declare class SlashCommandBuilder {
    /**
     * The name of this command.
     */
    readonly name: string;
    /**
     * The name localizations of this command.
     */
    readonly name_localizations?: LocalizationMap;
    /**
     * The description of this command.
     */
    readonly description: string;
    /**
     * The description localizations of this command.
     */
    readonly description_localizations?: LocalizationMap;
    /**
     * The options of this command.
     */
    readonly options: ToAPIApplicationCommandOptions[];
    /**
     * Whether this command is enabled by default when the application is added to a guild.
     *
     * @deprecated Use {@link SharedSlashCommand.setDefaultMemberPermissions} or {@link SharedSlashCommand.setDMPermission} instead.
     */
    readonly default_permission: boolean | undefined;
    /**
     * The set of permissions represented as a bit set for the command.
     */
    readonly default_member_permissions: Permissions | null | undefined;
    /**
     * Indicates whether the command is available in direct messages with the application.
     *
     * @remarks
     * By default, commands are visible. This property is only for global commands.
     */
    readonly dm_permission: boolean | undefined;
    /**
     * Whether this command is NSFW.
     */
    readonly nsfw: boolean | undefined;
}
interface SlashCommandBuilder extends SharedNameAndDescription, SharedSlashCommandOptions<SlashCommandOptionsOnlyBuilder>, SharedSlashCommandSubcommands<SlashCommandSubcommandsOnlyBuilder>, SharedSlashCommand {
}
/**
 * An interface specifically for slash command subcommands.
 */
interface SlashCommandSubcommandsOnlyBuilder extends SharedNameAndDescription, SharedSlashCommandSubcommands<SlashCommandSubcommandsOnlyBuilder>, SharedSlashCommand {
}
/**
 * An interface specifically for slash command options.
 */
interface SlashCommandOptionsOnlyBuilder extends SharedNameAndDescription, SharedSlashCommandOptions<SlashCommandOptionsOnlyBuilder>, SharedSlashCommand {
}
/**
 * An interface that ensures the `toJSON()` call will return something
 * that can be serialized into API-compatible data.
 */
interface ToAPIApplicationCommandOptions {
    toJSON(): APIApplicationCommandOption;
}

declare function validateName$1(name: unknown): asserts name is string;
declare function validateDescription(description: unknown): asserts description is string;
declare function validateLocale(locale: unknown): Locale;
declare function validateMaxOptionsLength(options: unknown): asserts options is ToAPIApplicationCommandOptions[];
declare function validateRequiredParameters$1(name: string, description: string, options: ToAPIApplicationCommandOptions[]): void;
declare function validateDefaultPermission$1(value: unknown): asserts value is boolean;
declare function validateRequired(required: unknown): asserts required is boolean;
declare function validateChoicesLength(amountAdding: number, choices?: APIApplicationCommandOptionChoice[]): void;
declare function assertReturnOfBuilder<ReturnType extends ApplicationCommandOptionBase | SlashCommandSubcommandBuilder | SlashCommandSubcommandGroupBuilder>(input: unknown, ExpectedInstanceOf: new () => ReturnType): asserts input is ReturnType;
declare const localizationMapPredicate: _sapphire_shapeshift.UnionValidator<_sapphire_shapeshift.UndefinedToOptional<Partial<Record<"id" | "en-US" | "en-GB" | "bg" | "zh-CN" | "zh-TW" | "hr" | "cs" | "da" | "nl" | "fi" | "fr" | "de" | "el" | "hi" | "hu" | "it" | "ja" | "ko" | "lt" | "no" | "pl" | "pt-BR" | "ro" | "ru" | "es-ES" | "es-419" | "sv-SE" | "th" | "tr" | "uk" | "vi", string | null>>> | null | undefined>;
declare function validateLocalizationMap(value: unknown): asserts value is LocalizationMap;
declare function validateDMPermission$1(value: unknown): asserts value is boolean | null | undefined;
declare function validateDefaultMemberPermissions$1(permissions: unknown): string | null | undefined;
declare function validateNSFW(value: unknown): asserts value is boolean;

declare const Assertions$1_assertReturnOfBuilder: typeof assertReturnOfBuilder;
declare const Assertions$1_localizationMapPredicate: typeof localizationMapPredicate;
declare const Assertions$1_validateChoicesLength: typeof validateChoicesLength;
declare const Assertions$1_validateDescription: typeof validateDescription;
declare const Assertions$1_validateLocale: typeof validateLocale;
declare const Assertions$1_validateLocalizationMap: typeof validateLocalizationMap;
declare const Assertions$1_validateMaxOptionsLength: typeof validateMaxOptionsLength;
declare const Assertions$1_validateNSFW: typeof validateNSFW;
declare const Assertions$1_validateRequired: typeof validateRequired;
declare namespace Assertions$1 {
  export { Assertions$1_assertReturnOfBuilder as assertReturnOfBuilder, Assertions$1_localizationMapPredicate as localizationMapPredicate, Assertions$1_validateChoicesLength as validateChoicesLength, validateDMPermission$1 as validateDMPermission, validateDefaultMemberPermissions$1 as validateDefaultMemberPermissions, validateDefaultPermission$1 as validateDefaultPermission, Assertions$1_validateDescription as validateDescription, Assertions$1_validateLocale as validateLocale, Assertions$1_validateLocalizationMap as validateLocalizationMap, Assertions$1_validateMaxOptionsLength as validateMaxOptionsLength, Assertions$1_validateNSFW as validateNSFW, validateName$1 as validateName, Assertions$1_validateRequired as validateRequired, validateRequiredParameters$1 as validateRequiredParameters };
}

/**
 * The type a context menu command can be.
 */
type ContextMenuCommandType = ApplicationCommandType.Message | ApplicationCommandType.User;
/**
 * A builder that creates API-compatible JSON data for context menu commands.
 */
declare class ContextMenuCommandBuilder {
    /**
     * The name of this command.
     */
    readonly name: string;
    /**
     * The name localizations of this command.
     */
    readonly name_localizations?: LocalizationMap;
    /**
     * The type of this command.
     */
    readonly type: ContextMenuCommandType;
    /**
     * Whether this command is enabled by default when the application is added to a guild.
     *
     * @deprecated Use {@link ContextMenuCommandBuilder.setDefaultMemberPermissions} or {@link ContextMenuCommandBuilder.setDMPermission} instead.
     */
    readonly default_permission: boolean | undefined;
    /**
     * The set of permissions represented as a bit set for the command.
     */
    readonly default_member_permissions: Permissions | null | undefined;
    /**
     * Indicates whether the command is available in direct messages with the application.
     *
     * @remarks
     * By default, commands are visible. This property is only for global commands.
     */
    readonly dm_permission: boolean | undefined;
    /**
     * Sets the name of this command.
     *
     * @param name - The name to use
     */
    setName(name: string): this;
    /**
     * Sets the type of this command.
     *
     * @param type - The type to use
     */
    setType(type: ContextMenuCommandType): this;
    /**
     * Sets whether the command is enabled by default when the application is added to a guild.
     *
     * @remarks
     * If set to `false`, you will have to later `PUT` the permissions for this command.
     * @param value - Whether to enable this command by default
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
     * @deprecated Use {@link ContextMenuCommandBuilder.setDefaultMemberPermissions} or {@link ContextMenuCommandBuilder.setDMPermission} instead.
     */
    setDefaultPermission(value: boolean): this;
    /**
     * Sets the default permissions a member should have in order to run this command.
     *
     * @remarks
     * You can set this to `'0'` to disable the command by default.
     * @param permissions - The permissions bit field to set
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
     */
    setDefaultMemberPermissions(permissions: Permissions | bigint | number | null | undefined): this;
    /**
     * Sets if the command is available in direct messages with the application.
     *
     * @remarks
     * By default, commands are visible. This method is only for global commands.
     * @param enabled - Whether the command should be enabled in direct messages
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
     */
    setDMPermission(enabled: boolean | null | undefined): this;
    /**
     * Sets a name localization for this command.
     *
     * @param locale - The locale to set
     * @param localizedName - The localized name for the given `locale`
     */
    setNameLocalization(locale: LocaleString, localizedName: string | null): this;
    /**
     * Sets the name localizations for this command.
     *
     * @param localizedNames - The object of localized names to set
     */
    setNameLocalizations(localizedNames: LocalizationMap | null): this;
    /**
     * Serializes this builder to API-compatible JSON data.
     *
     * @remarks
     * This method runs validations on the data before serializing it.
     * As such, it may throw an error if the data is invalid.
     */
    toJSON(): RESTPostAPIContextMenuApplicationCommandsJSONBody;
}

declare function validateDefaultPermission(value: unknown): asserts value is boolean;
declare function validateName(name: unknown): asserts name is string;
declare function validateType(type: unknown): asserts type is ContextMenuCommandType;
declare function validateRequiredParameters(name: string, type: number): void;
declare function validateDMPermission(value: unknown): asserts value is boolean | null | undefined;
declare function validateDefaultMemberPermissions(permissions: unknown): string | null | undefined;

declare const Assertions_validateDMPermission: typeof validateDMPermission;
declare const Assertions_validateDefaultMemberPermissions: typeof validateDefaultMemberPermissions;
declare const Assertions_validateDefaultPermission: typeof validateDefaultPermission;
declare const Assertions_validateName: typeof validateName;
declare const Assertions_validateRequiredParameters: typeof validateRequiredParameters;
declare const Assertions_validateType: typeof validateType;
declare namespace Assertions {
  export { Assertions_validateDMPermission as validateDMPermission, Assertions_validateDefaultMemberPermissions as validateDefaultMemberPermissions, Assertions_validateDefaultPermission as validateDefaultPermission, Assertions_validateName as validateName, Assertions_validateRequiredParameters as validateRequiredParameters, Assertions_validateType as validateType };
}

/**
 * Calculates the length of the embed.
 *
 * @param data - The embed data to check
 */
declare function embedLength(data: APIEmbed): number;

/**
 * Enables validators.
 *
 * @returns Whether validation is occurring.
 */
declare function enableValidators(): boolean;
/**
 * Disables validators.
 *
 * @returns Whether validation is occurring.
 */
declare function disableValidators(): boolean;
/**
 * Checks whether validation is occurring.
 */
declare function isValidationEnabled(): boolean;

/**
 * The {@link https://github.com/discordjs/discord.js/blob/main/packages/builders#readme | @discordjs/builders} version
 * that you are currently using.
 *
 * @privateRemarks This needs to explicitly be `string` so it is not typed as a "const string" that gets injected by esbuild.
 */
declare const version: string;

export { ActionRowBuilder, type AnyAPIActionRowComponent, type AnyComponentBuilder, ApplicationCommandNumericOptionMinMaxValueMixin, type ApplicationCommandOptionAllowedChannelTypes, ApplicationCommandOptionBase, ApplicationCommandOptionChannelTypesMixin, ApplicationCommandOptionWithAutocompleteMixin, ApplicationCommandOptionWithChoicesMixin, BaseSelectMenuBuilder, ButtonBuilder, ChannelSelectMenuBuilder, Assertions$4 as ComponentAssertions, ComponentBuilder, Assertions as ContextMenuCommandAssertions, ContextMenuCommandBuilder, type ContextMenuCommandType, Assertions$5 as EmbedAssertions, type EmbedAuthorData, type EmbedAuthorOptions, EmbedBuilder, type EmbedFooterData, type EmbedFooterOptions, type EmbedImageData, type IconData, type MappedComponentTypes, MentionableSelectMenuBuilder, type MessageActionRowComponentBuilder, type MessageComponentBuilder, type ModalActionRowComponentBuilder, Assertions$2 as ModalAssertions, ModalBuilder, type ModalComponentBuilder, type RGBTuple, type RestOrArray, RoleSelectMenuBuilder, StringSelectMenuBuilder as SelectMenuBuilder, StringSelectMenuOptionBuilder as SelectMenuOptionBuilder, SharedNameAndDescription, SharedSlashCommand, SharedSlashCommandOptions, SharedSlashCommandSubcommands, Assertions$1 as SlashCommandAssertions, SlashCommandAttachmentOption, SlashCommandBooleanOption, SlashCommandBuilder, SlashCommandChannelOption, SlashCommandIntegerOption, SlashCommandMentionableOption, SlashCommandNumberOption, type SlashCommandOptionsOnlyBuilder, SlashCommandRoleOption, SlashCommandStringOption, SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder, type SlashCommandSubcommandsOnlyBuilder, SlashCommandUserOption, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, Assertions$3 as TextInputAssertions, TextInputBuilder, type ToAPIApplicationCommandOptions, UserSelectMenuBuilder, createComponentBuilder, disableValidators, embedLength, enableValidators, isValidationEnabled, normalizeArray, version };
