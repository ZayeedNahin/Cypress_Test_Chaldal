FROM cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1 
WORKDIR /cypress_testing 
COPY ./package.json . 
COPY ./cypress.config.js . 
COPY jsconfig.json .   
COPY package-lock.json . 
RUN npm install 
ENTRYPOINT ["npm", "run", "cypress" ]   
CMD [ "" ] 
