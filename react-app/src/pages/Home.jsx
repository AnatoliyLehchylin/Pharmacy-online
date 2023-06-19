import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import CreationHistory from '../components/PageHome/CreationHistory';
import HealthBlog from '../components/PageHome/HealthBlog';
import HowWeWork from '../components/PageHome/HowWeWork/HowWeWork';
import MainSlider from '../components/PageHome/MainSlider';
import OurPartners from '../components/PageHome/OurPartners';
import PromotionSlider from '../components/PageHome/PromotionSlider';
import Testimonials from '../components/PageHome/Testimonials';
import TodayPharmacy from '../components/PageHome/TodayPharmacy';
import { request } from '../tools/request';

const Home = () => {
  const [products, setProducts] = useState([]);

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { result } = await request({
          url: '',
          method: 'GET',
          params: { promotionOfTheMonth: true }
        });

        const { data } = result;

        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {showSkeleton ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <MainSlider products={products} />
          <PromotionSlider products={products} />
        </>
      )}
      <HowWeWork />
      <Testimonials />
      <OurPartners />
      <HealthBlog />
      <CreationHistory />
      <TodayPharmacy />
    </>
  );
};
export default Home;
