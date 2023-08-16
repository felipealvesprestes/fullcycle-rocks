FROM golang:1.21-alpine AS builder

WORKDIR /go/src/app

COPY . .

RUN go build main.go

FROM alpine:latest

COPY --from=builder /go/src/app .

ENTRYPOINT [ "./main" ]
