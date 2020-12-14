FROM node:12-alpine
RUN npm install
COPY server.js .
COPY index2.html .
EXPOSE 8080
CMD [ "node", "server.js" ]