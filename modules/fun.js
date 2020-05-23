const axios = require('axios');
let params = {};


const get_gif_by_query = async (bot, data) => {
    const gif_request = data.text.split('gif ')[1].trim();
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${gif_request}`);
    const images_data = response.data.data;
    
    if (images_data.length > 0) {
        const url = images_data[Math.floor(Math.random() * images_data.length)].images.downsized_large.url;
    
        params = {
            'blocks': [
                {
                    'type': 'image',
                    'title': {
                        'type': 'plain_text',
                        'text': gif_request,
                        'emoji': true
                    },
                    'image_url': url,
                    'alt_text': 'geoffrey'
                }
            ]
        }
    
        bot.postMessage(data.channel, '', params);
    } else {
        bot.postMessage(data.channel, `<${data.user}> no gifs found :sob:`, params);
    }
};

module.exports = {
    get_gif_by_query,
};