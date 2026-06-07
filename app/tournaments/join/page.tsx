"use client";

const mockTournaments = [
  { id: 1, name: "Spring Classic", location: "Oakfield Golf Club", date: "2026-06-12" },
  { id: 2, name: "Summer Open", location: "Green Valley", date: "2026-07-03" },
  { id: 3, name: "Weekend Cup", location: "Lakeside Course", date: "2026-07-20" },
];

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl font-bold">Join a Tournament 🏌️</h1>
        <p className="text-gray-500 mt-1">
          Browse available tournaments and join a game.
        </p>

        {/* Search (UI only for now) */}
        <input
          placeholder="Search tournaments..."
          className="mt-4 w-full md:w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* List */}
      <div className="max-w-5xl mx-auto grid gap-4">
        {mockTournaments.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            {/* Info */}
            <div>
              <h2 className="text-lg font-semibold">{t.name}</h2>
              <p className="text-gray-500 text-sm">
                {t.location} • {t.date}
              </p>
            </div>

            {/* Action */}
            <button className="mt-4 md:mt-0 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Join Tournament
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}