/**
 * Each time a song starts, the bot vote up.
 * WARNING: Turntable no longer allows bots that autobop. This script is provided for educational purposes only.
 * For more information, visit http://faq.turntable.fm/customer/portal/articles/258935
 */

var Bot    = require('../index');
var AUTH   = 'auth+live+52f08245c12709c9366c7593e12840de0c30fc6d';
var USERID = '4f42a15ba3f75162ab0040c3';
var ROOMID = '4f44a4370c4cc81989346aad';

var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('newsong', function (data) { bot.vote('up'); });
