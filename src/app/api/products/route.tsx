import { cookies, headers } from "next/headers";

export async function GET(request: Request) {
    const data=[{
        id: 1,
        name: 'Product 1',
        price: 100
    },{
        id: 2,
        name: 'Product 2',
        price: 200  }]

      const cookieList = await cookies();
      const tokencookie = cookieList.get('authToken');
      console.log("token cookie", tokencookie);
  
    return Response.json({ data })
  }
  export async function POST(request: Request) {
      const prod = await request.json();
      const data = [{
          id: 1,
          name: 'Product 1',
          price: 100
      }, {
          id: 2,
          name: 'Product 2',
          price: 200
      }];
      data.push(prod);
      
      const header=await headers();
      const headerlist=header.get('Authorization');
      console.log("header list", headerlist);
      return new Response(JSON.stringify({ data }), {
          headers: { 'Content-Type': 'application/json' }
      });
  }
  export async function PUT() {
    return Response.json({ message: 'PUT method' })
  }
  export async function DELETE() {
    return Response.json({ message: 'DELETE method' })
  }
  export async function PATCH() {
    return Response.json({ message: 'PATCH method' })
  }