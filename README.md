# 概要

- NestJS + gRPC のサンプルです。
- 以下のページを参照  
https://docs.nestjs.com/microservices/grpc
- gRPCについては以下のページを参照  
https://grpc.io/
- gRPCのClientは以下を使用  
https://github.com/uw-labs/bloomrpc

# 使用ライブラリ

- @nestjs/core - 7.0.x
- @nestjs/microservices - 7.0.x
- grpc - 1.24.x

# 動作確認

## 1. サンプルのダウンロード

```bash
git clone git@github.com:yasu-s/nestjs-grpc-sample.git
```

## 2. パッケージインストール  

```bash
cd nestjs-grpc-sample
yarn install
```

## 3. サンプルの起動  

```bash
yarn start
```

# 実行結果

![grpc](https://user-images.githubusercontent.com/2668146/80302962-3041c300-87e8-11ea-86e5-11061a176347.gif)
