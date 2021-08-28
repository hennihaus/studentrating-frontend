# building and testing stage
FROM node:14 as build
WORKDIR /studentrating
COPY . .
RUN chown -R node:node /studentrating
USER node
RUN npm install && npm run build

# deployment stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /studentrating/dist/studentrating .
COPY --from=build /studentrating/nginx/default.conf /etc/nginx/conf.d
RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid
USER nginx
