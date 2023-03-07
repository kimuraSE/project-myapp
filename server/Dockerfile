FROM golang:1.19-alpine

ENV PATH=$PATH:$GOPATH/bin
ENV GOARCH="amd64"
ENV GOOS="linux"
ENV GO111MODULE=on

WORKDIR /app

COPY . .
RUN go mod download
RUN go build -o main .
EXPOSE 9000
CMD ["./main"]