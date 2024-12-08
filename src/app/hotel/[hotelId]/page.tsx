import { getHotelDataById } from "../data";

const HotelPage = ({ params }: { params: { hotelId: string } }) => {
  const hotel = getHotelDataById(params.hotelId);

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <ul>
        {hotel.rooms.map((room) => (
          <li key={room.id}>
            <a href={`/hotel/${hotel.id}/room/${room.id}`}>{room.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelPage;
