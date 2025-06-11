export default function BreckFamilyLanding() {
  return (
    <div className="min-h-screen bg-white p-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Breckenridge Family Vacations</h1>
        <p className="text-lg mb-2">Making Family Memories Since 2022</p>

        <div className="mb-6">
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-2xl shadow mb-4">
            🎉 Book Direct & Save at <strong>breckcation.com</strong>
          </div>

          <a
            href="https://www.breckcation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Book Now on Breckcation.com
          </a>
        </div>

        <div className="mb-6">
          <a
            href="https://www.airbnb.com/users/profile/about?context=host"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-lg"
          >
            View All My Airbnb Listings
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <a
            href="https://www.airbnb.com/rooms/697249923654417404"
            target="_blank"
            rel="noopener noreferrer"
            className="border p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            🏔️ Beaver Run Resort Ski-In/Ski-Out Condo
          </a>
          <a
            href="https://www.airbnb.com/rooms/742179536247901291"
            target="_blank"
            rel="noopener noreferrer"
            className="border p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            ❄️ Modern Mountain Studio at Beaver Run (Hot Tub & Views)
          </a>
          <a
            href="https://www.airbnb.com/rooms/659370264017942558"
            target="_blank"
            rel="noopener noreferrer"
            className="border p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            🏞️ Cozy Ski Condo at Beaver Run (Prime Location)
          </a>
          <a
            href="https://www.airbnb.com/rooms/691421463983655286"
            target="_blank"
            rel="noopener noreferrer"
            className="border p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            🏡 Slope-Side Studio Retreat at Beaver Run
          </a>
          <a
            href="https://www.airbnb.com/rooms/1419789038816178989"
            target="_blank"
            rel="noopener noreferrer"
            className="border p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            🎿 Family-Friendly Condo Steps from the Lift
          </a>
        </div>

        <div className="mt-8 text-left">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>📞 <a href="tel:7146514653" className="text-blue-600">714-651-4653</a></p>
          <p>📧 <a href="mailto:ryanleahyhb@yahoo.com" className="text-blue-600">ryanleahyhb@yahoo.com</a></p>
          <p>📸 <a href="https://www.instagram.com/breck_vacations" target="_blank" rel="noopener noreferrer" className="text-blue-600">@breck_vacations</a></p>
        </div>

        <div className="mt-10">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.breckcation.com"
            alt="QR code to breckcation.com"
            className="mx-auto"
          />
          <p className="mt-2 text-sm text-gray-600">Scan to visit breckcation.com</p>
        </div>
      </div>
    </div>
  );
}
