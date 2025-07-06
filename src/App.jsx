import { useState } from 'react'

function App() {
  const [blague, setBlague] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchBlagueAleatoire = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('https://carambar-blagues-api.onrender.com/api/v1/blagues/random')
      if (!response.ok) throw new Error(`Erreur: ${response.status}`)
      setBlague(await response.json())
    } catch (err) {
      setError('Impossible de récupérer une blague. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 text-center">
          <h1 className="text-5xl font-bold mb-4">🍬 Carambar Blagues 🍬</h1>
          <p className="text-xl opacity-90">
            Découvrez les meilleures blagues de la célèbre confiserie française !
          </p>
        </div>

        <div className="p-8">
          <div className="min-h-[300px] flex items-center justify-center mb-8">
            {!blague && !loading && (
              <p className="text-lg text-gray-600 text-center">
                Cliquez sur le bouton pour découvrir une blague aléatoire !
              </p>
            )}

            {loading && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-lg text-gray-600">Chargement d'une blague...</p>
              </div>
            )}

            {error && (
              <p className="text-lg text-red-600 bg-red-50 p-6 rounded-xl border-2 border-red-200 text-center">
                ❌ {error}
              </p>
            )}

            {blague && !loading && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg w-full max-w-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                    🤔 Question :
                  </h3>
                  <p className="text-lg text-gray-800 bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                    {blague.question}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    😄 Réponse :
                  </h3>
                  <p className="text-lg text-gray-800 bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                    {blague.reponse}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <button 
              onClick={fetchBlagueAleatoire}
              disabled={loading}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-wide"
            >
              {loading ? 'Chargement...' : 'Une blague au hasard !'}
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 text-center border-t">
          <p className="text-gray-600">
            API Backend : 
            <a 
              href="https://carambar-blagues-api.onrender.com/api-docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-orange-500 ml-2 font-medium hover:underline transition-colors"
            >
              Documentation Swagger
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App