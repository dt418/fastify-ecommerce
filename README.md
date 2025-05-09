# fastify-backend

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.12. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Cấu trúc dự án

```bash
ecommerce-api/
├── src/
│   ├── config/           # Cấu hình ứng dụng
│   ├── controllers/      # Xử lý logic nghiệp vụ
│   ├── models/           # Định nghĩa schema DB
│   ├── routes/           # Định nghĩa API routes
│   ├── services/         # Logic nghiệp vụ
│   ├── utils/            # Tiện ích
│   ├── plugins/          # Fastify plugins
│   ├── policies/         # ABAC policies
│   └── server.ts         # Entry point
├── .env                  # Biến môi trường
├── tsconfig.json         # Cấu hình TypeScript
└── package.json
```
