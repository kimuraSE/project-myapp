FROM golang:1.19-alpine

WORKDIR /app

COPY . .
RUN go mod download
RUN go build -o main .
EXPOSE 9000
CMD ["./main"]