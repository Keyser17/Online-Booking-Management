import { getHotelDataById } from "@/data/hotelsData";
import ListingStayDetailPage from "@/app/(listing-detail)/listing-stay-detail/page";

interface HotelPageProps {
  params: { hotelId: string };
}

const HotelPage = ({ params }: HotelPageProps) => {
  const { hotelId } = params;

  // Récupérer les données de l'hôtel
  const hotelData = getHotelDataById(hotelId);

  if (!hotelData) {
    return <div>Hotel not found</div>; // Gestion des erreurs
  }

  return <ListingStayDetailPage hotelData={hotelData} />;
};

export default HotelPage;
