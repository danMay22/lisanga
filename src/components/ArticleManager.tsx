"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { toast } from "sonner";

const recentArticles = [
  {
    id: 1,
    title: "Welcome Back to School 2024/2025",
    excerpt: "We are excited to welcome all students back for the new academic year...",
    author: "Principal Johnson",
    date: "2025-01-15",
    status: "published"
  },
  {
    id: 2,
    title: "New Science Lab Equipment",
    excerpt: "Our school has invested in state-of-the-art laboratory equipment...",
    author: "Prof. Martin",
    date: "2025-01-10",
    status: "published"
  },
  {
    id: 3,
    title: "Sports Day Preparation",
    excerpt: "Students are preparing for the annual sports day competition...",
    author: "Coach Williams",
    date: "2025-01-08",
    status: "draft"
  }
];

function ArticleManager() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [articles, setArticles] = useState(recentArticles);
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    author: "",
    status: "draft"
  });

  const handleAddArticle = () => {
    if (!articleData.title || !articleData.content) {
      toast.error("Please fill in title and content");
      return;
    }
    
    const newArticle = {
      id: Date.now(),
      title: articleData.title,
      excerpt: articleData.content.substring(0, 100) + "...",
      author: articleData.author || "Admin",
      date: new Date().toISOString().split('T')[0],
      status: articleData.status
    };
    
    setArticles([newArticle, ...articles]);
    toast.success("Article added successfully!");
    setShowAddModal(false);
    setArticleData({ title: "", content: "", author: "", status: "draft" });
  };

  const handleDelete = (id: number) => {
    setArticles(articles.filter(a => a.id !== id));
    toast.success("Article deleted");
  };

  return (
    <div className="bg-white p-6 rounded-md w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Articles & Blogs</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Add Article
          </button>
          <a href="/blog" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            View All
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div key={article.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <span className={`px-2 py-1 text-xs rounded-full ${
                article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {article.status}
              </span>
              <div className="flex gap-1">
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                  <Edit className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(article.id)}
                  className="p-1 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
            
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>By {article.author}</span>
              <span>{article.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Article Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[600px] max-w-[90vw] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Article</h3>
              <button onClick={() => setShowAddModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Article Title *"
                value={articleData.title}
                onChange={(e) => setArticleData({...articleData, title: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              
              <input
                type="text"
                placeholder="Author Name"
                value={articleData.author}
                onChange={(e) => setArticleData({...articleData, author: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              
              <select
                value={articleData.status}
                onChange={(e) => setArticleData({...articleData, status: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              
              <textarea
                placeholder="Article Content *"
                value={articleData.content}
                onChange={(e) => setArticleData({...articleData, content: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md h-40"
              />
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddArticle}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleManager;