# 镜像文件
FROM centos:latest
# 维修者
MAINTAINER wanghy "2560352426@qq.com"
# 声明变量
# ARG SERVER_NAME=vue-cicd-demo
#  私有镜像源地址
# ARG SERVER_PATH= 192.168.1.201
# 安装nginx所需的依赖库
RUN dnf install -y gcc gcc-c++ make \
    openssl-devel pcre-devel gd-devel \
    iproute net-tools telnet wget curl && \
    dnf clean all && \
    rm -rf /var/cache/yum/*
# 下载nginx源码包
# 下载 官网源码包 wget http://nginx.org/download/nginx-1.15.5.tar.gz 
# 解压tar zxf nginx-1.15.5.tar.gz
# 进入文件夹 cd nginx-1.15.5 
# 配置 ./configure --prefix=/usr/local/nginx // 安装路径
# 编译 make
# 安装 make install
# 删除源码包 rm -rf nginx-1.15.5.tar.gz
# 设置成当前时区  ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# 清楚路径下所有文件 rm -rf /usr/local/nginx/html/*
# 移动dist包到 nginx服务html目录下 mv dist/* /usr/local/nginx/html && \
RUN wget http://nginx.org/download/nginx-1.15.5.tar.gz && \
    tar zxf nginx-1.15.5.tar.gz && \
    cd nginx-1.15.5 && \
    ./configure --prefix=/usr/local/nginx \
    --with-http_ssl_module \
    --with-http_stub_status_module && \
    make -j 4 && make install && \
    cd / && rm -rf nginx-1.15.5* && \
    rm -rf /usr/local/nginx/html/* && \
    echo "ok" >> /usr/local/nginx/html/status.html && \
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

ENV PATH $PATH:/usr/local/nginx/sbin
#COPY nginx.conf /usr/local/nginx/conf/nginx.conf
# COPY dist/* /usr/local/nginx/html
#  mv dist/* /usr/local/nginx/html && \
# 镜像中项目路径
WORKDIR /usr/local/nginx
# 拷贝当前目录代码到镜像 ADD  COPY的区别   ADD： 会自动解压压缩包  copy 不能访问网络资源,只复制；不解压
#ADD 的优点：在执行 <源文件> 为 tar 压缩文件的话，压缩格式为 gzip, bzip2 以及 xz 的情况下，会自动复制并解压到 <目标路径>，源路径可以使用网络资源
#ADD 的缺点：在不解压的前提下，无法复制 tar 压缩文件。会令镜像构建缓存失效，从而可能会令镜像构建变得比较缓慢。具体是否使用，可以根据是否需要自动解压来决定
# 制作镜像TODO
# RUN 
# 暴露端口
EXPOSE 80
# 程序入口
#ENTRYPOINT ["./vue-cicd-demo"]
# 启动nginx 容器
CMD ["nginx", "-g", "daemon off;"]