FROM node:16-alpine AS build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
COPY prisma ./prisma/

# With the --production flag (or when the NODE_ENV is set to "production"), npm will not install modules listed in devDependencies
# With the --prefer-offline, which tells npm to use locally cached package if it's already been downloaded
# With the --no-audit, which tells npm to skip the audit packages vulnerabilities
RUN npm install --production --prefer-offline --no-audit
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

FROM node:16-alpine AS run

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma/
COPY --from=build /app/src ./src

ENV SERVER_PORT=8000
ENV DATABASE_URL="mysql://root:password@host.docker.internal:3306/demo_db"
ENV MONGO_URI="mongodb://root:password@host.docker.internal:27017"
ENV MONGO_DBNAME="demo_db"

CMD [ "node", "src/index.js" ]
