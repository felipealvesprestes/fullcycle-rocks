FROM golang:1.21.0-bullseye AS builder

WORKDIR /go/src/app

COPY . .

RUN go build main.go

FROM scratch

COPY --from=builder /go/src/app .

ENTRYPOINT [ "./main" ]
