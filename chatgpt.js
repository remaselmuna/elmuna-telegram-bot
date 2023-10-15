import { ChatGPTAPI } from "chatgpt"
import dotenv from 'dotenv'
dotenv.config();

const api = new ChatGPTAPI({
  apiKey: process.env.CHATGPT_TOKEN,
});

const constructMessage = (sourceMessage) => {
  const message = `"${sourceMessage}", jawab pertanyaan tersebut tidak terlalu panjang dan tidak formal, seperti seorang yang sedang membalas chat, pakai emoticon juga boleh, tapi jangan terlalu banyak.
  Jika anda disuruh perkenalan diri jawab anda adalah El Muna Bot yang dibuat oleh remaja masjid agung Al Munawwar Tulungagung.`
  return message 
}

const sendMessage = async (message, callback) => {
  const res = await api.sendMessage(constructMessage(message))
  callback(res.text)
};

export { sendMessage }
