package main

import (

	"context"
	"fmt"
	"log"
	"net"
	pb "server/pb"
	"database/sql"
	"google.golang.org/grpc"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
	_ "github.com/go-sql-driver/mysql"
)



type server struct{
	*pb.UnimplementedBlogServiceServer
}



func (*server) CreateMethod(ctx context.Context, in *pb.CreateRequest) (*pb.CreateResponse, error) {
	db,err := sql.Open("mysql","docker:docker@tcp(mariadb:3306)/grpc-db")

	if err != nil{
		return nil, status.Errorf(codes.Unavailable, "failed to connect to database: %v", err)
	}

	defer db.Close()

	query := fmt.Sprintf("INSERT INTO blogs (title,details) VALUES ('%s','%s')",in.Title,in.Detail)

	_,err =db.Exec(query)
	 if err != nil{
		return nil, fmt.Errorf("failed to prepare SQL statement: %v", err)
	 }

	 return &pb.CreateResponse{},nil

}

func(*server)LoginMethod(ctx context.Context,in *pb.LoginRequest) (*pb.LoginResponse, error){

	db,err := sql.Open("mysql","docker:docker@tcp(mariadb:3306)/grpc-db")
	if err != nil{
		return nil, status.Errorf(codes.Unavailable, "failed to connect to database: %v", err)
	}

	defer db.Close()


	var user_name string
	var user_pwd string 

	 err = db.QueryRow("SELECT user_name,user_pwd FROM roots WHERE user_name=? AND user_pwd=?", in.Name, in.Pwd).Scan(&user_name, &user_pwd)
	 if err != nil {
		return nil, err
	 }


	 return &pb.LoginResponse{LoginMessage: "jdkfetw3"},nil

}


func (*server) ListBlogs(ctx context.Context, in *pb.ListBlogsRequest) (*pb.ListBlogsResponse, error) {

	db,err := sql.Open("mysql","docker:docker@tcp(mariadb:3306)/grpc-db")
    if err != nil {
        log.Fatalf("failed to connect to database: %v", err)
    }
    defer db.Close()

    rows, err := db.Query("SELECT id, title FROM blogs")
    if err != nil {
        log.Fatalf("failed to execute query: %v", err)
    }
    defer rows.Close()

    var blogs []*pb.Blog
    for rows.Next() {
        var id int64
        var title string
        err := rows.Scan(&id, &title)
        if err != nil {
            log.Fatalf("failed to scan rows: %v", err)
        }
        blog := &pb.Blog{
            Id:    id,
            Title: title,
        }
        blogs = append(blogs, blog)
    }
    if err := rows.Err(); err != nil {
        log.Fatalf("failed to scan rows: %v", err)
    }

    resp := &pb.ListBlogsResponse{
        Blogs: blogs,
    }
    return resp, nil
}

func(*server)DeleteBlog(ctx context.Context, in *pb.DeleteBlogRequest) (*pb.DeleteBlogResponse, error){

	db,err := sql.Open("mysql","docker:docker@tcp(mariadb:3306)/grpc-db")

	if err != nil{
		return nil, status.Errorf(codes.Unavailable, "failed to connect to database: %v", err)
	}

	defer db.Close()

	query := "DELETE FROM blogs WHERE id = ? AND title = ?"
    stmt, err := db.Prepare(query)
    if err != nil {
        return nil, status.Errorf(codes.Internal, "failed to prepare SQL statement: %v", err)
    }
    defer stmt.Close()

    _, err = stmt.Exec(in.Id, in.Title)
    if err != nil {
        return nil, status.Errorf(codes.Internal, "failed to execute SQL statement: %v", err)
    }
	 return &pb.DeleteBlogResponse{},nil
}

func (*server)ReadDetails(ctx context.Context, in *pb.DetailesRequest) (*pb.DetailesResponse, error){

	db,err := sql.Open("mysql","docker:docker@tcp(mariadb:3306)/grpc-db")
	if err != nil{
		return nil, status.Errorf(codes.Unavailable, "failed to connect to database: %v", err)
	}

	defer db.Close()


	var title string
	var details string 

	 err = db.QueryRow("SELECT title,details FROM blogs WHERE id=? ", in.Id).Scan(&title, &details)
	 if err != nil {
		return nil, err
	 }

	 return &pb.DetailesResponse{Title: title , Details: details},nil


}

func main(){
	lis,err := net.Listen("tcp",":50051")
	if err != nil{
		log.Fatalf("failed to listen: %v",err)
	}

	s:=grpc.NewServer()

	pb.RegisterBlogServiceServer(s,&server{})

	fmt.Println("server is running")
	
	if err := s.Serve(lis);err!=nil{
		log.Fatalf("failed to serve")
	}
}

