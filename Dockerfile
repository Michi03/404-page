FROM node:10
WORKDIR /usr/src/app
RUN mkdir views; mkdir images
COPY views/* ./views/
COPY images/* ./images/
COPY app.js ./
RUN npm install express
EXPOSE 3000
CMD ["node", "app.js"] 
