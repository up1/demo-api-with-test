FROM golang:1.21.3-alpine3.18 as build
WORKDIR /src
COPY . .
RUN go mod tidy
RUN go build -o api main.go

FROM alpine:3.18
WORKDIR /app
COPY --from=build /src/api .
EXPOSE 8080
CMD ["/app/api"]