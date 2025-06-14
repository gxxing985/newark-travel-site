import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold">ExploreWorld 旅行</h1>
        <nav className="space-x-4">
          <a href="#destinations" className="hover:underline">热门目的地</a>
          <a href="#custom" className="hover:underline">定制旅行</a>
          <a href="#contact" className="hover:underline">联系我们</a>
        </nav>
      </header>

      <section className="text-center py-20 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">开启属于你的定制旅行</h2>
        <p className="text-lg mb-6">从自由行到研学游，我们为你量身打造最贴心的出行体验</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded text-lg">立即定制</button>
      </section>

      <section id="custom" className="py-16 px-4 bg-gray-50">
        <h3 className="text-2xl font-semibold mb-8 text-center">定制你的专属行程</h3>
        <form className="max-w-2xl mx-auto grid gap-4">
          <input type="text" placeholder="你的姓名" className="p-3 border rounded" />
          <input type="email" placeholder="联系方式（邮箱/微信）" className="p-3 border rounded" />
          <textarea placeholder="请输入你的旅行需求（如目的地、人数、预算、天数）" rows={5} className="p-3 border rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded text-lg">提交定制申请</button>
        </form>
        <div className="text-center mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
            支付定金 $500（功能即将上线）
          </button>
        </div>
      </section>

      <a
        href="https://wa.me/17155480823"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        💬
      </a>

      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-10">
        © 2025 ExploreWorld 旅行版权所有
      </footer>
    </main>
  )
}
