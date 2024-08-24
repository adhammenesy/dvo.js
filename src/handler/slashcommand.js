const fs = require('fs/promises');
const path = require('path');

async function handleDirectory(dirPath, client, bot) {
    const commands = []; // Array to store all command objects

    try {
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);

            if (entry.isDirectory()) {
                // If it's a directory, process it recursively
                const subCommands = await handleDirectory(fullPath, client);
                commands.push(...subCommands); // Add commands from subdirectories
            } else if (entry.isFile() && entry.name.endsWith('.js')) {
                const filePath = path.resolve(dirPath, entry.name);
                const fileUri = `file://${filePath}`;

                // Dynamically import the file
                const { default: commandModule } = await import(fileUri);

                if (commandModule && typeof commandModule === 'object') {
                    const { name, description, options, execute } = commandModule;

                    if (name && typeof execute === 'function') {
                        // Extract and log execute code
                        const executeCode = execute.toString();
                        const codeBody = executeCode.substring(executeCode.indexOf('{') + 1, executeCode.lastIndexOf('}')).trim();

                        // Create command object and add it to the array
                        const command = {
                            name,
                            description,
                            options: options || []
                        };

                        commands.push(command); // Add command to the array

                        // Add interaction handler for the command
                        client.on('interactionCreate', async (interaction) => {
                            if (interaction.commandName === name) {
                                await execute(interaction, bot);
                                codeBody
                            }
                        });
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error handling commands:', error);
    }

    return commands; // Return the array of commands
}

async function slashHandle(dirPath, client, bot) {
    return await handleDirectory(dirPath, client, bot);
}

module.exports = { slashHandle };
