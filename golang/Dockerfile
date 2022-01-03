FROM golang:latest as builder

WORKDIR /usr/local/go
COPY hello-world.go .

RUN go build hello-world.go && rm hello-world.go


FROM scratch
COPY --from=builder /usr/local/go/hello-world .
CMD ["./hello-world"]