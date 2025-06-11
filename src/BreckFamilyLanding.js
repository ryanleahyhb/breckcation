
export default function BreckFamilyLanding() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601071967663-cd32349034c8?auto=format&fit=crop&w=1600&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">Breckenridge Family Vacations</h1>
            <p className="text-xl">Making Family Memories Since 2022</p>
          </div>
        </div>
      </div>

      {/* Booking CTA */}
      <div className="text-center mt-8">
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-xl inline-block mb-4">
          🎉 Book Direct & Save at <strong>breckcation.com</strong>
        </div>
        <div>
          <a
            href="https://www.breckcation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Book Now on Breckcation.com
          </a>
        </div>
      </div>

      {/* Listings Section */}
      <div className="max-w-6xl mx-auto mt-10 px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ListingCard title="🎿 Family-Friendly Condo Steps from the Lift" link="https://www.airbnb.com/rooms/1419789038816178989" img="https://source.unsplash.com/featured/?ski,lodge" />
        <ListingCard title="🏔️ Beaver Run Resort Ski-In/Ski-Out Condo" link="https://www.airbnb.com/rooms/697249923654417404" img="https://source.unsplash.com/featured/?mountain,resort" />
        <ListingCard title="❄️ Modern Mountain Studio at Beaver Run" link="https://www.airbnb.com/rooms/742179536247901291" img="https://source.unsplash.com/featured/?snowy,cabin" />
        <ListingCard title="🏞️ Cozy Ski Condo at Beaver Run" link="https://www.airbnb.com/rooms/659370264017942558" img="https://source.unsplash.com/featured/?ski,condo" />
        <ListingCard title="🏡 Slope-Side Studio Retreat at Beaver Run" link="https://www.airbnb.com/rooms/691421463983655286" img="https://source.unsplash.com/featured/?snow,vacation" />
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>📞 <a href="tel:7146514653" className="text-blue-600">714-651-4653</a></p>
        <p>📧 <a href="mailto:ryanleahyhb@yahoo.com" className="text-blue-600">ryanleahyhb@yahoo.com</a></p>
        <p>📸 <a href="https://www.instagram.com/breck_vacations" target="_blank" rel="noopener noreferrer" className="text-blue-600">@breck_vacations</a></p>
      </div>

      {/* QR Code */}
      <div className="mt-10 mb-10 text-center">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.breckcation.com"
          alt="QR code to breckcation.com"
          className="mx-auto"
        />
        <p className="mt-2 text-sm text-gray-600">Scan to visit breckcation.com</p>
      </div>
    </div>
  );
}

function ListingCard({ title, link, img }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </a>
  );
}
