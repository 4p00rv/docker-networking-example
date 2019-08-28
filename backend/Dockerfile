FROM node:10
#COPY ./example/package.json /install/package.json
#WORKDIR /install
COPY example /example
WORKDIR /example
RUN npm install
#RUN mv /install/node_modules .
CMD ["npm", "start"]
