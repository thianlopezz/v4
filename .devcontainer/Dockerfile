FROM node:14-alpine

# Arguments for project configuration
ARG PROJECT_NAME=thianlopezz.com
ARG PROJECT_DIR=/home
ARG GIT_USERNAME=thianlopezz
ARG GIT_USEREMAIL=thianlopezz@gmail.com

# Environment variables to make the arguments available at runtime
ENV PROJECT_NAME=$PROJECT_NAME
ENV PROJECT_DIR=$PROJECT_DIR

RUN apk add --no-cache python3 git

WORKDIR $PROJECT_DIR/$PROJECT_NAME
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN git config --global --add safe.directory $PROJECT_DIR/$PROJECT_NAME \
    && git config --global user.email "$GIT_USEREMAIL" \
    && git config --global user.name "$GIT_USERNAME"

CMD ["/bin/sh"]