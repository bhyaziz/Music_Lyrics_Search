FROM node:latest
WORKDIR /Music_Lyrics_Search
ADD . .
RUN npm install
CMD ["node", "index.js"]
