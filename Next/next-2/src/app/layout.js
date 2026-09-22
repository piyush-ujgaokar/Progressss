import "./globals.css";

export default function RootLayout({ children,team,piyush }) {
  return (
    <html lang="en">
      <body  className="w-screen h-screen flex">
       <div className="w-[50%] bg-green-500  "> {children}</div>
        <div className="w-[50%] bg-red-600 ">
          {team}
          
            <div className="w-[20%] h-[50%] bg-blue-600  ">{piyush}</div>
          
          </div>
        </body>
    </html>
  );
}
