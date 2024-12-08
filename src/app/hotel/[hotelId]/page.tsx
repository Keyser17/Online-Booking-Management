"use client";

import React, { FC, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import CommentListing from "@/components/CommentListing";
import FiveStartIconForRate from "@/components/FiveStartIconForRate";
import StartRating from "@/components/StartRating";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonCircle from "@/shared/ButtonCircle";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonClose from "@/shared/ButtonClose";
import Input from "@/shared/Input";
import LikeSaveBtns from "@/components/LikeSaveBtns";

import StayDatesRangeInput from "../../(listing-detail)/listing-stay-detail/StayDatesRangeInput";
import GuestsInput from "../../(listing-detail)/listing-stay-detail/GuestsInput";

import { Amenities_demos, PHOTOS } from "../../(listing-detail)/listing-stay-detail/constant";
import Image from "next/image";
import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getHotelDataById } from "../data";



const HotelPage = ({ params }: { params: { hotelId: string } }) => {
  
  const thisPathname = usePathname();
  const router = useRouter();
  
  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };
  
  const hotel = getHotelDataById(params.hotelId);
  
  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
      {/* 1 */}
      <div className="flex justify-between items-center">
        {/* <Badge name={hotelData.category || "Test" } /> */}
        <Badge name="Wooden house" />
        <LikeSaveBtns />
      </div>

      {/* 2 */}
     {/*  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{hotelData.name}</h2> */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Beach House in Collingwood
        </h2>

      {/* 3 */}
      {/* <div className="flex items-center space-x-4">
      
      <StartRating point={hotelData.rating.value} reviewCount={hotelData.rating.count}/>
        <span>·</span>
        <span>
          <i className="las la-map-marker-alt"></i>
          <span className="ml-1">{hotelData.location}</span>
        </span>
      </div> */}

      <div className="flex items-center space-x-4">
          <StartRating />
          <span>·</span>
          <span>
            <i className="las la-map-marker-alt"></i>
            <span className="ml-1"> Tokyo, Jappan</span>
          </span>
        </div>

      {/* 4 */}
      {/* <div className="flex items-center">
        <Avatar
          hasChecked
          sizeClass="h-10 w-10"
          radius="rounded-full"
          
        />
        <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Hosted by{" "}
          <span className="text-neutral-900 dark:text-neutral-200 font-medium">
          {hotelData.hostName}
          </span>
        </span>
      </div>
       */}
      <div className="flex items-center">
          <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Hosted by{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              Kevin Francis
            </span>
          </span>
        </div>

      {/* 5 */}
      <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

      {/* 6 */}
      {/* <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
        <div className="flex items-center space-x-3">
          <i className="las la-user text-2xl"></i>
          <span className="">
          {hotelData.features.guests}{" "} <span className="hidden sm:inline-block">guests</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <i className="las la-bed text-2xl"></i>
          <span>
          {hotelData.features.beds} <span className="hidden sm:inline-block">beds</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <i className="las la-bath text-2xl"></i>
          <span>
          {hotelData.features.baths}{" "} <span className="hidden sm:inline-block">baths</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <i className="las la-door-open text-2xl"></i>
          <span>
          {hotelData.features.bedrooms}{" "} <span className="hidden sm:inline-block">bedrooms</span>
          </span>
        </div>
      </div>
    </div>
  );
}; */}

<div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              6 <span className="hidden sm:inline-block">guests</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              6 <span className="hidden sm:inline-block">beds</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              3 <span className="hidden sm:inline-block">baths</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              2 <span className="hidden sm:inline-block">bedrooms</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
            $119
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /night
            </span>
          </span>
          <StartRating />
        </div>

        {/* FORM */}
        <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          <StayDatesRangeInput className="flex-1 z-[11]" />
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <GuestsInput className="flex-1" />
        </form>

        {/* SUM */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>$119 x 3 night</span>
            <span>$357</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Service charge</span>
            <span>$0</span>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$199</span>
          </div>
        </div>

        {/* SUBMIT */}
        <ButtonPrimary href={"/checkout" as Route}>Reserve</ButtonPrimary>
      </div>
    );
  };

  return (
    <div className="nc-ListingStayDetailPage">
      {/*  HEADER */}
      <header className="rounded-md sm:rounded-xl">
      <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={hotel.image}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />

            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
                    {/* {hotelData.gallery.general
            .filter((_: any, i: number) => i >= 1 && i < 5) // Garder les images 1 à 4
            .map((item: { src: string; alt: string }, index: number) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? "hidden sm:block" : ""
                }`}
              >
              {/* Conteneur d'image avec ratio */}
             {/*  <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl "
                  src={item.src} // Utilisation de item.src
                  alt={item.alt || "Gallery Image"} // Utilisation de item.alt
                  sizes="400px"
                />  */}


            {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 3 ? "hidden sm:block" : ""
              }`}
            >
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl "
                  src={item || ""}
                  alt=""
                  sizes="400px"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleOpenModalImageGallery}
              />
            </div>
          ))}
          

          <button
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
            onClick={handleOpenModalImageGallery}
          >
            <Squares2X2Icon className="w-5 h-5" />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              Show all photos
            </span>
          </button>
        </div>
      </header>
      
      <main className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
          {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection1()}


        </div>






      {/* SIDEBAR */}
      <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
          <div className="sticky top-28">{renderSidebar()}</div>
        </div>
      </main>
      
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
