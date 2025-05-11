FROM node:18-alpine AS build

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/build /app/build

EXPOSE 3000

CMD ["serve", "-s", "build","--single","-l","3000"]
# Command to serve the app 