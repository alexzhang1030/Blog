FROM node:14 as builder

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /code

COPY package.json pnpm-lock.yaml /code/

RUN pnpm i --frozen-lockfile

# Bundle app source
COPY . /code/

# build
RUN pnpm docs:build

# step 2: nginx alpine
FROM nginx:mainline
COPY --from=builder /code/docs/.vitepress/dist /usr/share/nginx/html
