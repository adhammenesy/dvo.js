const fs = require('fs/promises'); // Correctly import fs/promises
const path = require('path'); // Correctly import path

async function handleDirectory(dirPath, client, prefix, bot) {
    try {
        // Read files and directories in the specified path
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);

            if (entry.isDirectory()) {
                // If the entry is a directory, process it recursively
                await handleDirectory(fullPath, client, prefix, bot);
            } else if (entry.isFile() && entry.name.endsWith('.js')) {
                // If the entry is a file ending with .js, import it
                const filePath = path.resolve(dirPath, entry.name);
                const fileUri = `file://${filePath}`;
                
                // Dynamically import the file
                const { default: commandModule } = await import(fileUri);

                if (commandModule && typeof commandModule === 'object') {
                    const { name, execute } = commandModule;

                    // Check if name and execute are present
                    if (name && typeof execute === 'function') {
                        // Extract and log execute code
                        const executeCode = execute.toString();
                        const codeBody = executeCode.substring(executeCode.indexOf('{') + 1, executeCode.lastIndexOf('}')).trim();
                        
                        // Log command name and execute code
                      
                        // Add message handler for the command
                        client.on('messageCreate', async (message) => {
                            if (message.content.startsWith(prefix + name)) {
                                await execute(message, bot);
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
}

async function commandHandle(dirPath, client, prefix,bot) {
    await handleDirectory(dirPath, client, prefix,bot);
}

module.exports = { commandHandle };
