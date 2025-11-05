const mineflayer = require('mineflayer');
const express = require('express');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'your.server.ip',  // change to your server IP
    port: 25565,
    username: 'MyBot'
  });

  bot.on('spawn', () => console.log('✅ Bot joined the server!'));
  bot.on('end', () => {
    console.log('❌ Bot disconnected, restarting...');
    setTimeout(startBot, 5000);
  });
}

startBot();

const app = express();
app.get('/', (req, res) => res.send('Bot is alive!'));
app.listen(3000, () => console.log('🌐 Keep-alive server running'));
