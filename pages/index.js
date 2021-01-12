import Layout from "../components/Layout";

export default function Home() {
  return (
        <Layout title="Home">
          <div className="h-screen bg-green-500">
            <h1>Hello dari home</h1>
            <a href="./about" className="bg-yellow-300 py-2 px-5 hover:bg-yellow-100">ke about</a>
          </div>
        </Layout>    
  )
}
