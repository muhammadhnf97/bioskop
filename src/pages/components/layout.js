import Footer from "./Footer";
import Header from "./Header";


export default function Layout({ children }) {
  return (
    <>
    <div className='w-full h-full flex flex-col items-center justify-between border dark:bg-black'>
      <Header />
      <main className="w-full border border-red-500">{children}</main>
      <Footer />
    </div>
    </>
  )
}