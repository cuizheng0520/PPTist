# 使用 Node 18 作为基础镜像
FROM node:18

# 创建并设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制所有项目文件到工作目录
COPY . .

# 构建项目
RUN npm run build

# 使用 Nginx 作为 web 服务器
# 多阶段构建：使用官方的 Nginx 镜像作为基础镜像
FROM nginx:alpine

# 挂载 Nginx 配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 将构建输出的文件复制到 Nginx 的默认静态文件目录
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]