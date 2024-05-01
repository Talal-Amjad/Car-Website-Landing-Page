import React from 'react';
import Navbar from '../components/Navbar';
import CarImages from '../components/CarImages';
import VehiclesDescription from '../components/VehicesDescription';
import Heading from '../components/Heading';
import Data from '../components/Data';
import AdditionalInformation from '../components/AdditionalInformation';
import UploadedFiles from '../components/UploadedFiles';
import Web from '../Assests/Images/Global.png'
import Newletter from '../components/Newletter';
import Footer from '../components/Footer';
import Contactus from '../components/Contactus';

export default function LandingPage() {
    const files = [
        { filename: 'Istimara.pdf' },
        { filename: 'Inspection Certificate.pdf' },
        { filename: 'Incurance Information.pdf' },
       
      ];
    
  return (
    <div>
      <Navbar />
      <div className='m-16'>
        <h1 className='text-4xl font-bold'> Audi e-tron 50 Quattro 230 KW 2020</h1>
        <span className='text-base text-gray-400'>Posted in April, 2024</span>
        <div className='flex'>
         <img src={Web} alt="Icon" className="w-6 h-6" />
            <span className='text-gray-600 text-base ml-2'> http://www.konmatafix.com</span>
        </div>
        <div className='mt-4'>
        <span className='text-2xl font-bold text-[#f48448]'> AED 125,000</span>
        </div>

        <div className='mt-9 mb-7 border border-gray-300'>
            <CarImages/>
            <VehiclesDescription/>


            <Heading title="Vehicles Details"/>
            <Data feature1="Make" description1="Toyata" feature2="Model" description2="Camry" />
            <Data feature1="Year" description1="2000" feature2="Plate No" description2="LEK2131" />
            <Data feature1="Chasis No" description1="Ah734Gd" feature2="Sequence No" description2="12455666" />
            <Data feature1="VIN" description1="6" feature2="Pricing Details" description2="View Here" />

            <Heading title="Vehicles Condition"/>
            <Data feature1="ODM (in KMs)" description1="100 Km" feature2="Condition" description2="New" />
            <Data feature1="No of Previous Owner" description1="None" feature2="Service History" description2="None" />
            <Data feature1="Accidental" description1="No" />

            <Heading title="Vehicles Specification"/>
            <Data feature1="Body Type" description1="Coupe" feature2="Engine Type" description2="Petrol" />
            <Data feature1="Transmission" description1="Semi-Auto" feature2="No of Doors" description2="4" />
            <Data feature1="Interior Metarial" description1="Leather" />
           





            <Heading title="Price & Additional Informtion"/>
            <Data feature1="Feature 1" description1="Description 1" feature2="Sequence No" description2="12345668" />
            <AdditionalInformation/>
            
            
            <Heading title="Uploaded Files"/>
            <UploadedFiles files={files}/>  
        </div>
      </div>

     
      <Contactus/>
      <Newletter/>
      <Footer/>
      
    </div>
  );
}
