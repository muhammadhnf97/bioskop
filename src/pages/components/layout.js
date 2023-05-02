import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {

  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-between dark:bg-black'>
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </div>
    </>
  )
}